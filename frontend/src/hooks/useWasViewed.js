import axios from 'axios';

// these functions will tell an admin how many times their booking page was viewed, how many times each flash card was viewed, and when most people are viewing their content

// Function to increase view count
async function increaseViewCount(windowUrl, itemId) {
    try {
      // Define the PUT request data
      const requestData = {
        url: windowUrl,
        id: itemId,
        currentTime: new Date().toLocaleString(),
      };
  
      // Make the PUT request to the server
      const response = await axios.put(`${serverUrl}/increase-view-count`, requestData);
  
      // Check the response and handle it as needed
      if (response.status === 200) {
        console.log('View count increased successfully.');
      } else {
        console.error('Failed to increase view count:', response.status, response.data);
      }
    } catch (error) {
      console.error('Error while making the request:', error);
    }
  };

// Function to see the view count 
async function getViewCount(windowUrl, itemId) {
    try {
      // Define the GET request data
      const requestData = {
        url: windowUrl,
        id: itemId,
      };
  
      // Make the GET request to the server
      const response = await axios.get(`${serverUrl}/get-view-count`, { params: requestData });
  
      // Check the response and handle it as needed
      if (response.status === 200) {
        console.log('View count:', response.data);
      } else {
        console.error('Failed to get view count:', response.status, response.data);
      }
    } catch (error) {
      console.error('Error while making the request:', error);
    }
  }

  export { increaseViewCount };

