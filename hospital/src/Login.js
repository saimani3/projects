import React,{useState} from 'react';
import img1 from './images/login.webp';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './App.css';
const Login = () => {
  const navigate = useNavigate();
 const [logindata,setData] = useState({
    logoemail:'',
    logopassword:'',
  })
  const {logoemail,logopassword} = logindata;
  const changeHandler = e =>{
    setData({...logindata,[e.target.name]:[e.target.value]});
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(logindata);
    axios.post('http://localhost:5000/login',logindata).then(
  ()=>{
    //alert("login success")
    navigate('/Home');
    setData({...logindata,logoemail:'',logopassword:''})
  }
).catch(err => console.log(err))
 }
  return (
   <div>
   <div className='Appointbac'>
   <form method='POST' onSubmit={submitHandler}>
       <div className='col-md-12'>
         <div className='col-md-6'>
             <img src={img1}/>
         </div>
         <div className='col-md-6'>
         <header><b>L</b>ogin <b>F</b>orm</header><br/>
       <label id='span'>Email :</label><br/>
       <input type="email" placeholder='Enter Email' name="logoemail"  value={logoemail} onChange={changeHandler}/><br/>
         <label id='span'>Password :</label><br/>
      <input type="password" name="logopassword" placeholder='password' value={logopassword} onChange={changeHandler} /><br/>
       
       <button style={{width:"400px",height:"30px",margin:"60px 0px 0px 100px"}}><b>Submit</b></button>
         </div>
       </div>
    </form>
   </div>
   </div>
  );
}

export default Login;