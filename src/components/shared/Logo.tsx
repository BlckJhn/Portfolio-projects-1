import { Typography } from '@mui/material';

import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div style={{
        display:"flex",
        marginRight:"auto",
        alignItems: "center",
        gap:"8px",
    }}>
       <Link to={"/"}>
        <img 
        src="openai.png" 
        alt="open-ai" 
        width={'30px'} 
        height={'30px'} 
        className='image-inverted'/>  
      </Link>
      <Typography sx={{
            display:{md:"block", sm:"none", xs:"none"},
            mr:"auto",
            fontWeight:"800",
            textShadow: "1px 10px 10px #000",
        }}>
            <span style={{
              fontSize: '25px',
              color:'white',
            }}>WHISPERS</span><span style={{color:'black'}}>-GPT</span>
        </Typography>  
    </div>
  )
}

export default Logo


