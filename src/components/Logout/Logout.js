import React from 'react';
import { Route, Redirect } from 'react-router';
import { post } from '../../api/post';
import TokenComponent from '../../api/TokenComponent';
function Logout() {

    React.useEffect((token) => {
        TokenComponent.removeToken();
        window.location.reload();

    }, []);

    return (
        <div className="Logout">
           <Redirect to="/" />
        </div>
    );
}

export default Logout;
