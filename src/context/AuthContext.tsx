// Import necessary modules and types
import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { checkAuthStatus } from '../helpers/api-communicator';

// Define types for User and UserAuth
type User = { name: string; email: string; };
type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

// Create the authentication context
const AuthContext = createContext<UserAuth | null>(null);

// Define the AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // State variables for user and isLoggedIn
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Effect hook to fetch user data from cookies (not implemented)
  useEffect(() => {
    // FETCH IF USERS COOKIES ARE VALID and skip login
    async function checkStatus() {
        const data=await checkAuthStatus();
        if (data) {
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
          }
    }
    checkStatus(); 
  }, [ 
  ]);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      // Make POST request to login endpoint
      const response = await axios.post('http://localhost:5000/api/v1/users/login', { email, password });
      const data = response.data;
      if (data) {
        // Update user state and set isLoggedIn to true
        setUser({ email: data.email, name: data.name });
        setIsLoggedIn(true);
      }
    } catch (error) {
      // Log error and throw new error
      console.log(error);
      throw new Error("Invalid email or password");
    }
  };

  // SignUp function (not implemented)
  const signUp = async (name: string, email: string, password: string) => {};

  // Logout function (not implemented)
  const logout = async () => {};

  // Create context value object
  const value = {
    user,
    isLoggedIn,
    login,
    signUp,
    logout,
  };

  // Return AuthContext.Provider with value object
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Export useAuth hook
export const useAuth = () => useContext(AuthContext);

