import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage'
import LoginTW from './components/LoginTW'
import LandingPage from './components/LandingPage'
import ServiceLandingPage from './components/ServiceLandingPage'
import BlogIndex from './components/BlogIndex'
import BlogIndexC from './components/BlogIndexC'
import Logout from './components/Logout'
import Header from './components/headers/light'
import gapiUtils from './gapi-utils'
import './App.css'
import 'bulma/css/bulma.min.css'

class App extends React.Component {
    state = {
        isSignedIn: null,
        gapiError: null,
    }

    signOut() {
        gapiUtils.signOut()
    }

    async componentDidMount() {
        await gapiUtils.load()
        const onSignedIn = (profile) => {
            this.setState({isSignedIn: !!profile, profile})
        }
        await gapiUtils.initialize(onSignedIn)
            .then(onSignedIn)
            .catch((err) => {
                this.setState({gapiError: err})
            })
    }

    ifUserSignedIn(Component, props) {
        if (this.state.isSignedIn === null) {
            if (this.state.gapiError) {
                return (
                    <div class="container">
                        <p>Couldn't initialize Google Sign-In</p>
                        <p>Error: {this.state.gapiError.error}</p>
                        <p>Details: {this.state.gapiError.details}</p>
                    </div>
                )
            } else {
                return (
                    <div class="container">Checking if you're signed in...</div>
                )
            }

        }
        return this.state.isSignedIn ? <Component {...props} /> : <LoginTW/>
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <ServiceLandingPage />
                        </Route>
                        <Route path="/dashboard" render={() => this.ifUserSignedIn(BlogIndexC, {profile: this.state.profile})}/>
                        <Route path="/logout" render={() => this.ifUserSignedIn(Logout, {profile: this.state.profile})}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App