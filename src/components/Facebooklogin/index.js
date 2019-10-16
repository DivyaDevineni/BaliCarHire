import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
export default class FacebookLogin extends Component {

    componentDidMount() {
        document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
    }

    componentWillUnmount() {
        document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
    }

    /**
     * Init FB object and check Facebook Login status
     */
    initializeFacebookLogin = () => {
        this.FB = window.FB;
        this.checkLoginStatus();
    }

    /**
     * Check login status
     */
    checkLoginStatus = () => {
        this.FB.getLoginStatus(this.facebookLoginHandler);
    }

    /**
     * Check login status and call login api is user is not logged in
     */
    facebookLogin = () => {
        if (!this.FB) return;

        this.FB.getLoginStatus(response => {
            if (response.status === 'connected') {
                this.facebookLoginHandler(response);
                window.open("https://www.facebook.com", '_blank');
            } else {
                this.FB.login(this.facebookLoginHandler, { scope: 'public_profile' });
            }
        }, );
    }

    /**
     * Handle login response
     */
    facebookLoginHandler = response => {
        if (response.status === 'connected') {
            this.FB.api('/me', userData => {
                let result = {
                    ...response,
                    user: userData
                };
                this.props.onLogin(true, result);
            });
        } else {
            this.props.onLogin(false);
        }
    }

    render() {
        let { children } = this.props;
        return (
            <div>
                <FontAwesomeIcon onClick={this.facebookLogin} icon={faFacebookSquare} style={{fontSize: "4rem" }} />
                {children}
            </div>
        );
    }
}
