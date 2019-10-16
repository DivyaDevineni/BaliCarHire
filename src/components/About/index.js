import React from 'react';
import Facebook from '../Facebooklogin';
//import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
//const GOOGLE_BUTTON_ID = 'google-sign-in-button';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.onSignIn = this.onSignIn.bind(this);
    }
    componentDidMount() {
        // window.gapi.signin2.render(
        //     'google-sign-in',
        //     {
        //         width: 200,
        //         height: 50,
        //         onsuccess: this.onSignIn,
        //     },
        // );
    }

    // onSuccess(googleUser) {
    //     const profile = googleUser.getBasicProfile();
    //     alert("Gmail: " + profile.getEmail());
    // }

    onSignIn(googleUser) {
        console.log("Signing In!")
        var profile = googleUser.getBasicProfile();
        alert("Gmail: " + profile.getEmail());
    }

    onFacebookLogin = (loginStatus, resultObject) => {
        if (loginStatus === true) {
            this.setState({
                username: resultObject.user.name
            });
            alert('Facebook login success:' + resultObject.user.name);
        } else {
            alert('Facebook login error');
        }
    }

    render() {


        return (
            <div>

                <p>About</p>



                <div style={{
                    backgroundColor: "#4285f5", marginLeft: "70%"
                }}>
                    <h1 style={{ color: "white" }}>Social Media</h1>
                </div>
                <div className="row" style={{
                    marginLeft: "70%"
                }}>
                    <div className="col-md-3">
                        <Facebook onLogin={this.onFacebookLogin} />
                    </div>
                    <div id="google-sign-in" className="g-signin2" data-onsuccess="onSignIn">
                    </div>
                    {/* <FontAwesomeIcon id="google-sign-in" icon={faGooglePlusSquare} style={{ color: "black", fontSize: "4rem" }} /> */}

                </div>


            </div>
        )
    }
}

export default About;