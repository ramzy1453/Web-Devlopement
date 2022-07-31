import "./style.scss"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import {
Card ,
CardHeader ,
CardMedia ,
CardContent ,
CardActions,
Box,
Typography,
CircularProgress,
IconButton,
} from '@mui/material';
// import {
// FavoriteIcon,
// ShareIcon,
// MoreVertIcon
// } from '@mui/icons-material'
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import MoreVertIcon from "@mui/icons-material/MoreVert"

import logoBlue from "../../images/Logo-MC-blue.png"

export function Home() {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    if(!user){
      console.log(JSON.parse(window.localStorage.getItem('user')));
      dispatch({type : 'set-user', payload : {user : JSON.parse(window.localStorage.getItem('user'))}})
    }
  }, [])

  useEffect(() => {
    if(user){
      window.localStorage.setItem('user' , JSON.stringify(user))
    }
  } , [user , dispatch])

  return (
    user ? <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'}}>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<img width={50} src={user.avatar} alt=""/>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={user.fname + ' ' + user.lname}
        subheader={user.username}
      />
      <CardMedia
        component="img"
        height="194"
        image={logoBlue}
        alt="mc"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Micro Club is the first scientific club in Algeria and the best club in the history of the humanity since the creation of Adam peace be uppon him until our now days.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card>
    </Box> : 
      <Box sx={{height : '100vh', display : 'flex' , justifyContent:'center',alignItems:'center'}}>
        <CircularProgress size={98} />
      </Box>
  );
}
