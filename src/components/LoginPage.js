import React from 'react'

class LoginPage extends React.Component {
    componentDidMount() {
        window.gapi.load('signin2', () => {
            window.gapi.signin2.render('login-button', {
                'scope': 'profile email',
                'width': 240,
                'height': 50,
                'longtitle': true,
                'theme': 'dark'
              })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="login-panel">
                    <h3 className="title is-3">Sign In To Pick</h3>
                    <div id="login-button"></div>
                </div>
            </div>
        )
    }
}
export default LoginPage