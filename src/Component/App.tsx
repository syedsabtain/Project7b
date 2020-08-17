import React from 'react';
import './App.css';
import './bootstrap.min.css'
import Timer from './Timer';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  fb:{
    fontSize:'40px'
    ,
            marginRight:'6px',
            transition:'font-size 0.5s',
            
            color:'#1877F2',
            '&:hover':{
              fontSize:'50px'
            }
  },
  ins:{  fontSize:'40px',
          marginRight:'6px',
          transition:'font-size 0.5s',
          
          color:'#E1306C',
          '&:hover':{
            
            fontSize:'50px'
          }
},
  link:{  fontSize:'40px',
          marginRight:'6px',
          transition:'font-size 0.5s',
          
          color:'#1666C5',
          "&:hover":{
            fontSize:"50px"
          }
},
  pint:{  fontSize:'40px',
          marginRight:'6px',
          transition:'font-size 0.5s',
          color:'#E60023',
          "&:hover":{
            fontSize:'50px'
          }
},
  twit:{  fontSize:'40px',
          marginRight:'6px',
          transition:'font-size 0.5s',
          color:'#1DA1F2',
         "&:hover":{
           fontSize:'50px'
         }
},
  git:{  fontSize:'40px',
          marginRight:'6px',
          transition:'font-size 0.5s',
          
          color:'black',
          "&:hover":{
            fontSize:'50px'
          }
}
})
function App() {
  const classes = useStyles();
  return (
    <div className="App">
     
    
       
       <Timer></Timer>
       
     <footer className='footer  mt-5  fixed-bottom'>
       <div className='row justify-content-center text-center'>
         <div className='col-md-6'>
           <FacebookIcon className={classes.fb}></FacebookIcon>
           <InstagramIcon className={classes.ins}></InstagramIcon>
           <LinkedInIcon className={classes.link}></LinkedInIcon>
           <PinterestIcon className={classes.pint}></PinterestIcon>
           <TwitterIcon className={classes.twit}></TwitterIcon>
           <a className='aa' href='https://github.com/syedsabtain' target='blank'><GitHubIcon className={classes.git} ></GitHubIcon></a>
         </div>
       </div>
       <div className="footer-copyright  text-center py-3">© 2020 Copyright:
    <span> SyedSabtain</span>
  </div>
     </footer>
    </div>
  );
}

export default App;
