
// Import axios library for making HTTP requests
import axios from "axios";

// Export the loginUser function
export const loginUser = async (email: string, password: string) => {
  try {
    // Make a POST request to the login endpoint with email and password
    const res = await axios.post("http://localhost:5000/api/v1/users/login", { email, password });

    // Check if the response is OK (status code 200-299)
    if (!res.ok) {
      // If not OK, throw an error with a message
      throw new Error("Invalid email or password");
    }

    // Get the response data
    const data = await res.data;

    // Return the response data
    return data;
  } catch (error) {
    // Log any errors that occur during the request
    console.log(error);

    // Re-throw the error to propagate it up the call stack
    throw error;
  }
};


export const checkAuthStatus = async () => {
    try {
      // Make a POST request to the login endpoint with email and password
      const res = await axios.get("http://localhost:5000/api/v1/users/auth-status");
  
      // Check if the response is OK (status code 200-299)
      if (!res.ok) {
        // If not OK, throw an error with a message
        throw new Error("Unable to Authenticate");
      }
  
      // Get the response data
      const data = await res.data;
  
      // Return the response data
      return data;
    } catch (error) {
      // Log any errors that occur during the request
      console.log(error);
  
      // Re-throw the error to propagate it up the call stack
      throw error;
    }
  };
  
  
export const sendChatRequest = async (message:string) => {
 const res =await axios.post("/chat/new",{ message});
 if (res.status !== 200) {
  throw new Error("Unable to Send Chat");
};
const data = await res.data;
return data;
};