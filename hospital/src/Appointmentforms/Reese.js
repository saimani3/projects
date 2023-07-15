import React,{useState} from 'react'
import './index.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Reese = () => {
  const navigate = useNavigate();
 const [patientdata,setData] = useState({
  patientname:'',
  patientemail:'',
  patientnumber:'',
  date:'',
  time:'',
  address:'',
  pincode:'',
  doctorname:'Dr Arthur Reese Abright, M.D.(Anesthesiologists)'
  })
  const {patientname,patientemail,patientnumber,date,time,address,pincode,doctorname} = patientdata;
  const changeHandler = e =>{
    setData({...patientdata,[e.target.name]:[e.target.value]});
  }
  const submitHandler = async (e) => {
    e.preventDefault();
  //  console.log(patientdata)
   if(!patientname.toString() || !patientemail.toString() || !patientnumber.toString() || !date.toString() || !time.toString() || !address.toString() ||  !pincode.toString() ){
    alert("Please fill all fields");
  }
  else{
    axios.post('http://localhost:5000/appointmentdata',patientdata).then(
      () =>{
        console.log(patientdata)
        alert('register successfully');
        navigate('/Payment');
        //setData({...patientdata,patientname:'',patientemail:'',patientnumber:'',date:'',time:'',address:'',city:'',pincode:''})
  }
).catch(err => console.log(err))
  }
}

  return (
    <div>
    <div className='Appointback'>
      <h1>APPOINTMENT FORM</h1>
      <form onSubmit={submitHandler}>
        <div className='col-md-12'>
          <div className='col-md-6'>
          <label>Patient Name<l>*</l> :</label><br/>
        &nbsp;<input type="text" placeholder='Patient Full Name'  name="patientname" value={patientname} onChange={changeHandler}/><br/>
        <label>Email<l>*</l> :</label><br/>
        &nbsp;<input type="email" placeholder='Enter Email' name="patientemail" value={patientemail} onChange={changeHandler}/><br/>
        <label>Phone Number<l>*</l> :</label><br/>
        &nbsp;<input type="number" placeholder='Phone Number' name="patientnumber" value={patientnumber} onChange={changeHandler}/><br/>
        <label>Data of Appointment<l>*</l>:</label><br/>
        &nbsp;<input type="date"  name="date" value={date} onChange={changeHandler}/><br/>
        </div>
          <div className='col-md-6' style={{float:"right"}}>
          <label>Time of Appointment<l>*</l>:</label>
        &nbsp;<input type="radio" name="time" id='time' value="09:00AM-12:00PM" onChange={changeHandler}/>&nbsp;&nbsp;<b>09:00AM-12:00PM</b>
        &nbsp;<input type="radio" name="time" id='time' value="02:00PM-05:00PM" onChange={changeHandler}/>&nbsp;&nbsp;<b>02:00PM-05:00PM</b><br/>
          <label>Address<l>*</l> :</label><br/>
        &nbsp;<input type="text" name="address" value={address} onChange={changeHandler}/><br/>
        <label>Pincode<l>*</l> :</label><br/>
        &nbsp;<input type="number" name="pincode" value={pincode} onChange={changeHandler}/><br/>
        <label>Doctor Name:</label><br/>
        &nbsp;<input type="text" name="doctorname" value={doctorname} readOnly onChange={changeHandler}/><br/>
        <button style={{width:"400px",height:"30px",margin:"50px 0px 0px 0px"}}><b>Submit</b></button>
          </div>
        </div>
     </form>
    </div>
    </div>
  )
}

export default Reese