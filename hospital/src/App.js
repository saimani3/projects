import React from 'react'
import Register from './Register';
import Login from './Login';
import Admin from './Admin';
import Headerlog from './Headerlog';
import { Route, Routes } from 'react-router';
import Doctorbook from './Doctorbook';
import Payment from './Payment';
// import Appointment from './Appointment';
import Abbott from './Appointmentforms/Abbott';
import Aaron from './Appointmentforms/Aaron';
import Abaza from './Appointmentforms/Abaza';
import Abbas from './Appointmentforms/Abbas';
import Anderson from './Appointmentforms/Anderson';
import Khalid from './Appointmentforms/Khalid';
import Naresh from './Appointmentforms/Naresh';
import Reese from './Appointmentforms/Reese';
import Scrolling from './Scrolling';
import Home from './Home';  
//import Contacts from './Contacts';
const App = () => {
  return (
    <div>
    <Routes>
      {/* <Route path='/' element={<Page />} /> */}
      <Route path='/Register' element={<Register />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Admin' element={<Admin />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/' element={<Headerlog />} />
      <Route path='/Payment' element={<Payment />} />
      <Route path='/Doctorbook' element={<Doctorbook/>} />
      {/* <Route path='/Appointment' element={<Appointment />} /> */}
      <Route path='/Abbott' element={<Abbott/>}/>
      <Route path='/Aaron' element={<Aaron/>}/>
      <Route path='/Abaza' element={<Abaza/>}/>
      <Route path='/Abbas' element={<Abbas/>}/>
      <Route path='/Anderson' element={<Anderson/>}/>
      <Route path='/Khalid' element={<Khalid/>}/>
      <Route path='/Naresh' element={<Naresh/>}/>
      <Route path='/Reese' element={<Reese/>}/>
      <Route path='/Scrolling' element={<Scrolling />} />
      </Routes>
      </div>
  )
}

export default App;