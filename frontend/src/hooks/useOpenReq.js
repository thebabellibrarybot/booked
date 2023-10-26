import axios from 'axios';

// Function to make a GET request with an ID parameter
async function getDataById(url, id) {
    // Construct the URL with the ID parameter
    const reqUrl = `${url}/${id}`; // Replace with your API endpoint
  
    try {
      const response = await axios.get(reqUrl);
  
      if (response.status !== 200) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
  
      return response.data; // Return the data from the successful response
    } catch (error) {
      throw error; // Rethrow the error for the caller to handle
    }
  };

  export { getDataById };