import React from 'react' 
import gapiUtils from '../gapi-utils'

export default (props) => {
    
    return (
        <button type="button" onClick={ gapiUtils.signOut }>
            Logout
        </button>
    )

} 