const express = require('express');
var app = express();
const data = require('./registerdb');
const data2 = require('./patientdb');
const router = express.Router();
const alert = require('alert');
//const popup = require('popups');
app.use(express.json());
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/hospitaldata");
//register data
app.post('/register',async (req,res) =>{
	const {name,email,phonenumber,dateofbirth,gender,password,confirmpassword} = req.body;
	//console.log(name,email,phonenumber,dateofbirth,gender,password,confirmpassword);
	try{
		const newData = new data({
			name :name.toString(),
			email:email.toString(),
			phonenumber:phonenumber.toString(),
			dateofbirth:dateofbirth.toString(),
			gender:gender.toString(),
			password:password.toString(),
			confirmpassword:confirmpassword.toString()
		});
		const userExist = await data.findOne({email:email.toString()});
		if(userExist){
			 alert("Email already Exist");
		}
		else{
		const val=await newData.save();
		res.json(val);
		// return res.json(await data.find());
	}
	}
	catch(err){
		console.log(err.message);
	}
})
//appointment data
app.post('/appointmentdata',async(req,res) => {
	const {patientname,patientemail,patientnumber,date,time,address,doctorname,pincode} = req.body;
	//console.log(patientname,patientemail,patientnumber,date,time,address,city,pincode);
	try{
		const newValue = new data2({
			patientname :patientname.toString(),
			patientemail:patientemail.toString(),
			patientnumber:patientnumber.toString(),
			date:date.toString(),
			time:time.toString(),
			address:address.toString(),
			doctorname:doctorname.toString(),
			pincode:pincode.toString(),
		});
		const val2=await newValue.save();
		res.json(val2);
	}
		catch(err){
			console.log(err.message);
		}
})
//userlogin
app.post('/login',async(req,res)=>{
	const {logoemail,logopassword} = req.body;
	//console.log(logoemail,logopassword);
	try{
			const already = await data.findOne({email:logoemail.toString(),password:logopassword.toString()});
			if(already){
				console.log("success");
		   }
		   else{
		   console.log("Email and password is incorrect")
		}
		  }
		  catch(err){
			console.log(err.message);
		}
})

//Adminlogin
app.post('/admin',async(req,res)=>{
	const {logoemail,logopassword} = req.body;
	const email="sai";
	const password="123";
	try{
	  if(logoemail == email & logopassword == password){
		  console.log("success");
	 }
	 else{
	 console.log("Email and password is incorrect")
  }
	}
	catch(err){
	  console.log(err.message);
  }
  })

app.use(router);
var server=app.listen(5000,function(){
	var host =server.address().address;
	var port = server.address().port;
	console.log(host,port)
})
//app.listen(5000,console.log("server running on port 5000"));