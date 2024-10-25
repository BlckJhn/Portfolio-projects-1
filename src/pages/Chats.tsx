import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import React, { useRef,useState} from 'react';
import { red } from '@mui/material/colors';
import ChatItem from '../components/chat/ChatItem';
import { IoMdSend } from 'react-icons/io';
import { sendChatRequest } from '../helpers/api-communicator';

const Chats= () => {
  const [chatMessages,setChatMessages] = useState([
    { role: 'user', content: 'Hi there! can you help?' },
    { role: 'assistant', content: "Hello! I'm here to assist. What do you need?" },
    { role: 'user', content: "I'm having trouble with my backend server. Can you take a look?" },
    { role: 'assistant', content: 'Of course! Let\'s troubleshoot together. What specific issue are you facing?' },
    { role: 'user', content: 'My Express.js server isn\'t connecting properly. I keep getting an ECONNREFUSED error.' },
    { role: 'assistant', content: 'Got it. Let\'s check a few things:\n\n1. Is your backend server running? Try accessing it directly in your browser or using a tool like curl.' },
    { role: 'user', content: 'Yes, the server is up and running.' },
    { role: 'assistant', content: 'Great! Next, ensure your CORS configuration allows requests from your frontend domain. Set appropriate CORS headers in your Express app.' },  
    { role: 'user', content: 'I\'ll double-check the CORS settings. Anything else I should look into?' },  
    { role: 'assistant', content: 'Verify that the API endpoint you\'re trying to access exists in your backend code. Also, check the route handler for that endpoint.' },
     { role: 'user', content: 'Thanks for the guidance! I\'ll review those points and see if I can fix the issue.' },
      { role: 'assistant', content: 'You\'re welcome! Feel free to reach out if you need further assistance. Happy coding! 😊' },
  ]);

 const inputRef=useRef<HTMLInputElement | null>(null);
 //<input ref={inputRef} type="text" /> //1

 const handleSubmit = async () => {
  const content =inputRef.current?.value as string;
  if (!content.trim()) return;
  if (inputRef.current){
    const newMessage = inputRef.current?.value;
    setChatMessages([...chatMessages, { role: 'user', content: newMessage }]);
    inputRef.current.value = '';
  }
  try {
    const chatData = await sendChatRequest(content);
    if (chatData && chatData.response && chatData.chats) {
      setChatMessages([...chatMessages, ...chatData.chats]);
    }   
  } catch (error) {
    console.error(error);
    alert('Error sending chat request. Please try again later.');
  }
}
  return (<Box sx={{ display: 'flex', flex: 1, width: '100%', height:'100%', mt:3, gap: 3, }}>
      <Box sx={{display: {md: 'flex',sm: 'none', xs: 'none'}, flex: 0.2, flexDirection: 'column'}}>
        <Box sx={{ display: 'flex',width: '100%',height:'60vh',bgcolor:"rgb(17,29,39)",borderRadius:5,flexDirection: 'column',mx:3,
        }}>
          <Avatar sx={{mx:"auto",my:"2",mt:4,bgcolor:"white", color: "black",fontWeight:700,
            }}>
              <img src="robot2.png" alt='openai' width={"40px"} height={"40px"} style={{ borderRadius: "50%" }} />
            </Avatar>   
            <Typography sx={{mx:"auto",fontFamily: "work sans-serif",my:4
            }}>You are talking to Ayo,a ChatBot
            </Typography>
            <Typography sx={{mx:"auto",fontFamily: "work sans-serif",my:1,p:2
            }}>You can ask some questions related to knowledge, african history,arts, business advices, education ,etc. But avoid sharing personal information for data security 
            </Typography>
            <Button sx={{ width:"200px", my: "auto", color: "white",fontWeight:"700",borderRadius:3,mx:"auto",bgcolor: red[300],":hover": { bgcolor: red.A400, }
            }}>CLEAR CONVERSATION
            </Button>
        </Box>
      </Box>
      <Box sx={{display:"flex",flex:{ md:0.8,sm:1,xs:1}, flexDirection:"column", px:3, }}>
        <Typography sx={{ mx: "auto", fontSize: "40px", color: "white", mb: 2,fontWeight: "800",textShadow: "1px 10px 10px #000"}}> Model -GPT 3.5 Turbo
        </Typography>
        <Box sx={{ width:"100%", height: "60vh",overflowY: "auto",  display:"flex", overflowX: "hidden",  flexDirection:"column",borderRadius: 3,mx: "auto",scrollBehavior:"smooth",          
        }}>
          {chatMessages.map((chat,index) => (
            <ChatItem key={index} content={chat.content} role={chat.role}/>
          ))}
        </Box>
        <div style={{ width:"100%", padding:"20px", borderRadius:8, backgroundColor: "rgba(17,27,39)", display:"flex", margin:"auto", }}>
      <input ref={inputRef} type="text" style={{ width:"100%", backgroundColor: "transparent", padding:"10px", border:"none",   outline:"none",color:"white",fontSize:"20px"}}
        /> 
        <IconButton onClick={handleSubmit}sx={{ml:"auto", color:"white",}}> <IoMdSend/></IconButton>
        </div>    
      </Box>
    </Box>
  );
};

export default Chats;
 