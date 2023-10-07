import axios from 'axios';
const getAuth = async () => {
  try {
    const { data: tokenData } = await axios.post(
      'https://test.api.amadeus.com/v1/security/oauth2/token',
      {
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_AMADEUS_API_KEY,
        client_secret: process.env.REACT_APP_AMADEUS_API_SECRET,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const accessToken = tokenData.access_token;
    return accessToken;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error fetching access token:', error);
    throw error; // Rethrow the error to be handled higher up the call stack if necessary
  }
};

export default getAuth;
