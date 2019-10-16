import React, { Component } from 'react';
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    injectStripe,
    StripeProvider,
    Elements,
} from 'react-stripe-elements';
import Button from 'react-bootstrap/Button'
const createOptions = () => {
    return {
        style: {
            base: {
                color: '#424770',
                fontWeight: 600,
                fontFamily: 'Quicksand, Open Sans, Segoe UI, sans-serif',
                fontSize: '16px',
                fontSmoothing: 'antialiased',

                ':focus': {
                    color: '#424770',
                },

                '::placeholder': {
                    color: '#9BACC8',
                },

                ':focus::placeholder': {
                    color: '#CFD7DF',
                },
            },
            invalid: {
                color: '#c23d4b',
                ':focus': {
                    color: '#FA755A',
                },
                '::placeholder': {
                    color: '#FFCCA5',
                },
            },
        }
    };
};
class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = { complete: false, errorMessage: '', };
        this.submit = this.submit.bind(this);
    }


    handleChange = ({ error }) => {
        if (error) {
            this.setState({ errorMessage: error.message });
        }
    };

    async submit(ev) {
        let { token } = await this.props.stripe.createToken({ name: "Name" });
        let response = await fetch("/charge", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: token.id
        });

        if (response.ok) this.setState({ complete: true });
    }


    render() {
        if (this.state.complete) return <h1>Purchase Complete</h1>;
        return (

            <form>
                <div className="split-form">
                    <label>
                        Card number
            <CardNumberElement className="form-control"
                            {...createOptions() }
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Expiration date
            <CardExpiryElement className="form-control"
                            {...createOptions() }
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div className="split-form">
                    <label>
                        CVC
            <CardCVCElement className="form-control" {...createOptions() } onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Postal code
            <input
                            name="name"
                            type="text"
                            placeholder="94115"
                            className="form-control"
                            required
                        />
                    </label>
                </div>
                <div className="error" role="alert">
                    {this.state.errorMessage}
                </div>

                <Button variant="primary" onClick={this.submit}>Pay</Button>
            </form>

        );
    }
}

const CardForm = injectStripe(CheckoutForm);

class Payment extends Component {
    render() {
        return (
            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                <div className="example">
                    <h1>Pay using Credit, Visa or Master Cards</h1>
                    <Elements>
                        <CardForm />
                    </Elements>
                </div>
            </StripeProvider>
        );
    }
}
export default Payment;