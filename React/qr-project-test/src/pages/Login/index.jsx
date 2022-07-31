import {
    Box,
    Typography,
    TextField,
    FormControlLabel,
    FormControl,
    Checkbox,
    InputAdornment,
    Button, 
    IconButton,
    CircularProgress,
    Switch
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from "../../images/logo-MC.png"
import logoBlue from "../../images/Logo-MC-blue.png"
import './style.scss'
import useFetch from "../../hooks/useFetch"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { giveThisMan, isEmailValid, isPasswordValid} from '../../authentification/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"

import { setUser } from '../../provider/reducer';
import { theme } from '../../provider/theme';
export function Login(){

    const {isLoading , data , error} = useFetch("https://www.mecallapi.com/api/users")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmail , setErrorEmail] = useState({value : false, type : ""})
    const [errorPassword, setErrorPassword] = useState({value : false, type : ""})
    const [shwPs , setShwPs] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const _theme = useSelector(state => state.theme)
    const MyTheme = _theme === 'dark' ? theme.pallete.dark : theme.pallete.light

    const AuthLogin = () => {
        const _isEmailValid = isEmailValid(email , data);
        const _isPasswordValid = isPasswordValid(password , email, data);
        
        if(password.length === 0 || email.length === 0){
            setErrorEmail({value : true, type : ""});
            setErrorPassword({value : true, type : "don't let empty field!"});
            return;
        }

        if(!_isEmailValid || !_isPasswordValid){
            setErrorEmail({value : true, type : ""})
            setErrorPassword({value : true, type : "This user don't exist!"})   
            return
        }

        setErrorEmail({value : false, type : ""});
        setErrorPassword({value : false, type : ""});
        dispatch(setUser(giveThisMan(email, password, data)))
        navigate('/home')
    }
    return(
        !isLoading ? <div className="login">
            <div className='login-main' style={{
                backgroundColor : MyTheme.bg,
                color : MyTheme.text
            }}>
                <div className="first">
                    <div className="title">Untitled UI</div>
                        <div style={{}}>
                            <FormControl sx={{padding : '40px 0'}}>
                                <div className="welcome">Welcome back</div>
                                <div className="details">Welcome back! please enter your details</div>
                                <div className="field-container">
                                    <Typography sx={{marginBottom : '10px'}} variant="h6">Email</Typography>
                                    <TextField
                                    value={email}
                                    error={errorEmail.value}
                                    helperText={errorEmail.type}
                                    onChange={e=>setEmail(e.target.value)}
                                    fullWidth placeholder="Email"
                                    InputProps={{sx : {color : MyTheme.text , borderColor : MyTheme.text}}}
                                    />
                                </div>
                                <div className="field-container">
                                    <Typography sx={{marginBottom : '10px'}} variant="h6">Password</Typography>
                                    <TextField
                                    value={password}
                                    error={errorPassword.value}
                                    type={shwPs ? 'text' : 'password'}
                                    helperText={errorPassword.type}
                                    onChange={e=>setPassword(e.target.value)}
                                    fullWidth placeholder='Password'
                                    InputProps={{
                                        endAdornment: (<InputAdornment position="start">
                                            <IconButton onClick={()=>setShwPs(!shwPs)}>
                                                {shwPs ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>),
                                        sx : {color : MyTheme.text , borderColor : MyTheme.text}
                                    }}                                    />
                                </div>
                                <div className="forgot-container">
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember for 30 days" />
                                    <Button sx={{
                                        color: MyTheme.button
                                    }}>Forgot my password</Button>
                                </div>
                                <Button
                                onClick={AuthLogin}
                                sx={{
                                    backgroundColor : MyTheme.button,
                                    color : MyTheme.textInv,
                                    fontSize : 18,
                                    '&:hover' : {
                                        backgroundColor : MyTheme.button,
                                        opacity : 0.9
                                    },
                                    padding : 1,
                                    marginBottom : '10px'
                                }} 
                                >Sign in </Button>
                                <Button 
                                sx={{
                                    color : MyTheme.text,
                                    fontSize : 18,
                                    padding : 1,
                                }} startIcon={<DeleteIcon />} variant="outlined">Sign in with google </Button>
                                <div className="no-acc">You don't have an account ? <Button sx={{color: MyTheme.button}}>Sign up</Button></div>
                            </FormControl>
                            </div>
                        <div className="copyright">© Eren Yeager 1453</div>
                </div>
                <div className="second" style={{backgroundColor : MyTheme.mc}}>
                    <Switch value={_theme === 'dark'} onChange={() => {
                        dispatch({type : 'toggle-theme'})
                    }} />
                    <img src={_theme==='dark' ? logoBlue : logo} alt="" />
                </div>

            </div>
        </div> : <Box sx={{height : '100vh', display : 'flex' , justifyContent:'center',alignItems:'center'}}>
            <CircularProgress size={98} />
        </Box>
    )
}