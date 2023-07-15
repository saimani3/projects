import React,{useState} from 'react';
import img1 from './images/login.webp';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './App.css';
const Admin = () => {
  const navigate = useNavigate();
 const [admindata,setData] = useState({
    logoemail:'',
    logopassword:'',
  })
  const {logoemail,logopassword} = admindata;
  const changeHandler = e =>{
    setData({...admindata,[e.target.name]:[e.target.value]});
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(logindata);
    axios.post('http://localhost:5000/admin',admindata).then(
  ()=>{
    //alert("login success")
    navigate('/Home');
    setData({...admindata,logoemail:'',logopassword:''})
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
         <header><b>A</b>dmin <b>L</b>ogin</header><br/>
       <label id='span'>username :</label><br/>
       <input type="text" placeholder='Enter username' name="logoemail" value={logoemail} onChange={changeHandler} /><br/>
         <label id='span'>Password :</label><br/>
      <input type="password" name="logopassword" placeholder='password'  value={logopassword} onChange={changeHandler}/><br/>
       
       <button style={{width:"400px",height:"30px",margin:"60px 0px 0px 100px"}}><b>Submit</b></button>
         </div>
       </div>
    </form>
   </div>
   </div>
  );
}

export default Admin;