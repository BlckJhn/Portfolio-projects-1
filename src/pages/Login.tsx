// Import necessary components and hooks
import { Box, Typography, Button } from '@mui/material';
import CustomisedInput from '../components/shared/CustomisedInput';
import { AiOutlineLogin } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

// Define the Login component
const Login = () => {
  // Get the auth context
  const auth = useAuth();

  // Define the handleSubmit function for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Get the form data
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      // Show a loading toast
      toast.loading('Signing In', { id: 'login' });

      // Call the login function from the auth context
      await auth?.login(email, password);

      // Show a success toast
      toast.success('Signing In Successfully', { id: 'login' });

      // Redirect to dashboard after successful login
    } catch (error) {
      // Log any errors
      console.log(error);

      // Show an error toast
      toast.error('Unable to Sign In', { id: 'login' });
    }
  };

  // Return the JSX for the Login component
  return (
    // Container box with full width and height
    <Box 
    width={"100%"} 
    height={"100%"} 
    display="flex" 
    flex={1}>
{/* // Box for the image (only visible on medium and large screens) */}
      <Box 
      padding={8} 
      mt={8} 
      display={{ 
        md: "flex", 
        sm: "none",
         xs: "none" }}>
        <img src="rockstar.png" alt="robot1" style={{ width: "400px" }} />
      </Box>
{/* // Box for the login form */}
      <Box
       display={"flex"} 
       flex={{ xs: 1, md: 0.5 }} 
       justifyContent={"center"} 
       alignItems={"center"} 
       padding={2} ml={"auto"}
        mt={16}>
        <form 
        onSubmit={(handleSubmit)} 
        style={{ 
          margin: 'auto', 
          padding: '30px',
           boxShadow: '10px 10px 10px #000', borderRadius: '10px', 
           border: 'none' }}>
          {/* // Box for the form content */}
          <Box
           sx={{ 
            display: 'flex', 
            justifyContent: 'center',
             flexDirection: 'column' }}>
            {/* // Login header */}
            <Typography 
            variant='h4' 
            textAlign="center" 
            padding={2} 
            fontWeight={600}>Login</Typography>

            {/* // Email input field */}
            <CustomisedInput 
            type='email' 
            name='email' 
            label='Email' />

            {/* // Password input field */}
            <CustomisedInput
             type='password'
             name='password' 
             label='Password' />

            {/* // Login button */}
            <Button 
            type='submit' 
            sx={{ 
              px: 2, 
              py: 1,
               mt: 2, 
               width: "400px",
                borderRadius: 2, 
                bgcolor: '#00fffc', 
                ":hover": { bgcolor: 'white', 
                color: 'black' } }} 
                endIcon={<AiOutlineLogin size={24} color="red" />}>Login</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

// Export the Login component
export default Login;


