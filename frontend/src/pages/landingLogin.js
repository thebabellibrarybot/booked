import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

const LandingLogin = () => {
  const [accessToken, setAccessToken] = useState('');
  const [clientId, setClientId] = useState('');

  const onSuccess = (response) => {
    setAccessToken(response.accessToken); // should this be credential??
    setClientId(response.clientId);
    console.log(response, response.clientId)


    // Send the access token and client ID to your server using a POST request
    // ^^ this should be a sepereate api call that handles the successful login from google sending access keys to the backend
    fetch('https://your-server-url/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accessToken,
        clientId,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Do something with the response data from your server
      })
      .catch(error => {
        // Handle the error
      });
  };

  const onError = (error) => {
    // Handle the error
  };

  return (
    <div>
      <h1>My React App</h1>
      <GoogleLogin
        clientId="29200798300-tmajo4t5hqrgk71bsshmsvtdf3k07u2v.apps.googleusercontent.com"
        onSuccess={onSuccess}
        onError={onError}
      />
    </div>
  );
};

export default LandingLogin;