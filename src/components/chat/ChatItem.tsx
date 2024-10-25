import { Avatar, Box, Typography } from '@mui/material';
import React from 'react'


const ChatItem = ({content,role,index }:{
    content:string;
    role:"user" | "assistant";
    index: number;

}) => {
    
//   return role == "assistant" ? (
//   <Box sx={{
//     display: 'flex',
//     p:2,
//     bgcolor: '#004d56',
//     my:2,
//     gap: 2
//     }}>
//         <Avatar sx={{
//             ml:"0",
//             bgcolor:"black",
//             color: "white",
//         }}>
//             {/* {auth?.user?.name[0]}{auth?.user?.name.split(" ")[1][0]} */}
//             <img src="openai.png" alt='openai' width={"30px"}/>
//         </Avatar>
//         <Box>
//             <Typography fontSize={"20px"}>
//                 {content}
//             </Typography>
//         </Box>
//   </Box>
//   ):(<>
//     <Box sx={{
//     display: 'flex',
//     p:2,
//     bgcolor: '#004d56',
//     my:2,
//     gap: 2
//     }}>
//         <Avatar sx={{
//             ml:"0",
//             bgcolor:"black",
//             color: "white",
//         }}>
//             {/* {auth?.user?.name[0]}{auth?.user?.name.split(" ")[1][0]} */}
//             <img src="openai.png" alt='openai' width={"30px"}/>
//         </Avatar>
//         <Box>
//             <Typography fontSize={"20px"}>
//                 {content}
//             </Typography>
//         </Box>
//   </Box>
//   </>)
return (
    <Box key={index}
    sx={{
         display: 'flex', 
         p: 2, my: 2, 
         gap: 2, 
         justifyContent: role === 'user' ? 'flex-end' : 'flex-start' 
         }}>
      {role === 'assistant' && (
        <Avatar sx={{ 
            bgcolor: 'primary.main' 
            }}>
        <img src="openai.png" alt='openai' width={"30px"} />
      </Avatar> 
    )}
      <Box sx={{ 
        bgcolor: role === 'user' ? '#004d56' : '#fff', p: 2, 
        borderRadius: 2 }}>
      <Typography 
      fontSize={"20px"} 
      color={role === 'assistant' ? 'black' : 'white'}>
        {content}
      </Typography>

      </Box>
      {role === 'user' && (
        <Avatar sx={{ 
            bgcolor: 'black', 
            color: 'white' }}>
        </Avatar>
      )}
    </Box>
  );

}

export default ChatItem;