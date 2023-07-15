import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './index.css';
const Register = () => {
  const navigate = useNavigate();
 const [user,setData] = useState({
    name:'',
    email:'',
    phonenumber:'',
    dateofbirth:'',
    gender:'',
    password:'',
    confirmpassword:'',
  })
  const {name,email,phonenumber,dateofbirth,gender,password,confirmpassword} = user;
  const changeHandler = e =>{
    setData({...user,[e.target.name]:[e.target.value]});
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    if(!name.toString() || !email.toString() || !phonenumber.toString() || !dateofbirth.toString() || !gender.toString() || !password.toString() || !confirmpassword.toString()){
      alert("Please fill all fields");
    }
    else if(password.toString()!==confirmpassword.toString()){
      alert("Password not matched");
    }
    else{
   // console.log(user);
axios.post('http://localhost:5000/register',user).then(
  ()=>{
    alert('register successfully');
    navigate('/Login');
    setData({...user,name:'',email:'',phonenumber:'',dateofbirth:'',gender:'',password:'',confirmpassword:''})
  }
).catch(err => console.log(err))
 }
}
 return (
    <div>
    <div className='Appointback'>
    <header><b>R</b>egistation <b>F</b>orm</header>
      <form method='POST' onSubmit={submitHandler}>
        <div className='col-md-12'>
          <div className='col-md-6'>
          <label>Name<l>*</l> :</label><br/>
        &nbsp;<input type="text" placeholder='Full Name' name='name' value={name} onChange={changeHandler}/><br/>
        <label>Email<l>*</l> :</label><br/>
        &nbsp;<input type="email" placeholder='Enter Email' name="email" value={email} onChange={changeHandler} /><br/>
        <label>Phone Number<l>*</l> :</label><br/>
        &nbsp;<input type="number" placeholder='Phone Number' name="phonenumber" value={phonenumber} onChange={changeHandler} /><br/>
        <label>Date Of Birth<l>*</l> :</label><br/>
        &nbsp;<input type="date"  name="dateofbirth" value={dateofbirth} onChange={changeHandler}/><br/>
         </div>
          <div className='col-md-6' style={{float:"right"}}>
          <label>Gender<l>*</l> :</label>
        &nbsp;<input type="radio" name="gender" id='time' value="Male" onChange={changeHandler}/>&nbsp;&nbsp;<b>Male</b>
        &nbsp;<input type="radio" name="gender" id='time1' value="Female" onChange={changeHandler}/>&nbsp;&nbsp;<b>Female</b>
        &nbsp;<input type="radio" name="gender" id='time2' value="Others" onChange={changeHandler}/>&nbsp;&nbsp;<b>Others</b><br/>
          <label>Password<l>*</l> :</label><br/>
        &nbsp;<input type="password" name="password" placeholder='password' value={password} onChange={changeHandler} /><br/>
        <label>ConformPassword<l>*</l> :</label><br/>
        &nbsp;<input type="password" name='confirmpassword' placeholder='confirmpassword' value={confirmpassword} onChange={changeHandler} /><br/>
        <button style={{width:"400px",height:"30px",margin:"50px 0px 0px 0px"}}><b>Submit</b></button>
          </div>
        </div>
     </form>
    </div>
    </div>
  )
}

export default Register;