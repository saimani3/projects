import React from 'react'
import './App.css';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';
import doc1 from './images/doctor1.png';
import doc2 from './images/doctor2.jpg';
import doc3 from './images/doctor3.png';
import doc4 from './images/doctor4.jpg';
import doc5 from './images/doctor5.jpg';
import doc6 from './images/doctor6.jpg';
import doc7 from './images/doctor7.png';
import doc8 from './images/doctor8.jpg';
// import Abbott from './Appointmentforms/Abbott.js'
const Doctorbook = () => {
  return (
    <div className='back'>
        <section id='about' className="bg-parlex">
        <div className="parlex-back">
            <div className="container  text-center">
				<h2>Cardiologist</h2>
            </div>
        </div>
    </section>
        <div className='container'>
            <div className='col-md-12 doctors'>
                <div className='col-md-4'>
                    <Img src={doc1} alt="d1" id='doctor1'/>
                    <h4>Dr Myles. B. Abbott, M.D.</h4>
                </div>
                <div className='col-md-8'>
                <p style={{marginTop:"70px",fontSize:"15px"}}>Dr Myles is also one of the best-known doctors of Paediatrics in the world. He graduated from the University of Miami, Leonard M Miller School of Medicine, in 1972. He treats the problems of growth and child development and has been in practice for 20-plus years. Dr Myles currently practices at East Bay Pediatric and Medical Group and is affiliated with Alta Bates Summit Medical Center – Berkeley, Children’s Hospital and Research Center Oakland, and UCSF Medical Centre – UCSF Health.</p><br/>
                <Link to="/Abbott"><button style={{margin:"0px 0px 0px 40px"}}>Book Appointment</button></Link>
                </div>

            </div>
            <div className='col-md-12 doctors'>
                <div className='col-md-4'>
                    <Img src={doc2} alt="d1" id='doctor1'/>
                    <h4>Dr Naresh Trehan</h4>
                </div>
                <div className='col-md-8'>
                <p style={{marginTop:"70px",fontSize:"15px"}}>Dr Naresh is a famous Indian Cardiovascular and Cardiothoracic surgeon. He was born on August 12, 1946, in Delhi, India. He obtained a medical degree from King George’s Medical College in Lucknow. Dr Naresh was also the founder, executive director, and Chief Cardiovascular surgeon of Escorts Heart Institute and Research Center (EHIRC), New Delhi, India.</p><br/>
                <Link to="/Naresh"><button style={{margin:"0px 0px 0px 40px"}}>Book Appointment</button></Link>
                </div>

            </div>
            </div>
            <section id='about' className="bg-parlex">
        <div className="parlex-back">
            <div className="container  text-center">
				<h2>Anesthesiologists</h2>
            </div>
        </div>
    </section>
        <div className='container'>
            <div className='col-md-12 doctors'>
                <div className='col-md-4'>
                    <Img src={doc3} alt="d1" id='doctor1'/>
                    <h4>Dr Arthur Reese Abright, M.D.</h4>
                </div>
                <div className='col-md-8'>
                <p style={{marginTop:"70px",fontSize:"15px"}}>Dr Reese is one of the best doctors of Psychiatry. She treats problems of depression and mind-related problems. She is considered the world’s best doctor by many. Dr Reese got her accreditation from The University of Texas Southwestern Medical School. She is also an expert on mood disorders and anxiety. Currently, she is working as a Professor of Psychiatry at Icahn School of Medicine at Mount Sinai. She is also affiliated with Mount Sinai Services Elmhurst Hospital Center and New York Medical College at present.</p><br/>
                <Link to="/Reese"><button style={{margin:"0px 0px 0px 40px"}}>Book Appointment</button></Link>
                </div>

            </div>
            <div className='col-md-12 doctors'>
                <div className='col-md-4'>
                    <Img src={doc4} alt="d1" id='doctor1'/>
                    <h4>Dr Corrie T.M Anderson, M.D.</h4>
                </div>
                <div className='col-md-8'>
                <p style={{marginTop:"70px",fontSize:"15px"}}>Dr Anderson is also one of the best doctors in Pediatric Anesthesiology around the world. He received his A.B. with Honors in Biochemistry from Harvard University and a Doctor of Medicine (M.D) from Stanford University School of Medicine in 1982. He can be truly crowned as the ‘world’s best doctor’. In 2001, Dr Anderson became the director of the program for Pediatric Pain Medicine in the Department of Anesthesiology at Seattle Children’s Hospital.</p><br/>
                <Link to="/Anderson"><button style={{margin:"0px 0px 0px 40px"}}>Book Appointment</button></Link>
                </div>

            </div>
            </div>
            <section id='about' className="bg-parlex">
        <div className="parlex-back">
            <div className="container  text-center">
				<h2>Dermatologists</h2>
            </div>
        </div>
    </section>
        <div className='container'>
            <div className='col-md-12 doctors'>
                <div className='col-md-4'>
                    <Img src={doc5} alt="d1" id='doctor1'/>
                    <h4>Dr Mark. F. Aaron, M.D.</h4>
                </div>
                <div className='col-md-8'>
                <p style={{marginTop:"70px",fontSize:"15px"}}>Dr Aaron is one of the best doctors in cardiologists. His specialisation is Cardiovascular Disease. The term Cardiology is related to the heart and its problems. He is a world-famous doctor known for curing various heart diseases. Dr Aaron got his accreditation from the Duke University School of Medicine in 1992. Currently, he is affiliated with River Park Hospital, Saint Thomas West Hospital, and Henry County Medical Center and has been practising for more than 20 years.</p><br/>
                <Link to="/Aaron"><button style={{margin:"0px 0px 0px 40px"}}>Book Appointment</button></Link>
                </div>

            </div>
            <div className='col-md-12 doctors'>
                <div className='col-md-4'>
                    <Img src={doc6} alt="d1" id='doctor1'/>
                    <h4> Dr Mona. M. Abaza, M.D.</h4>
                </div>
                <div className='col-md-8'>
                <p style={{marginTop:"70px",fontSize:"15px"}}>Dr. Abaza is a specialised doctor in ENT Otolaryngology, Adenoidectomy, Esophagoscopy, Nasal airway surgery, and Tracheostomy. She is a world-famous ENT Doctor and treats problems of the ear, head, nose, throat, and neck. Dr Abaza graduated from the Medical College of Pennsylvania in 1991. She has expertise in voice disorders and voice-related disorders. She is affiliated with Children’s Hospital Colorado at Memorial Hospital Central and the University of Colorado Hospital.</p><br/>
                <Link to="/Abaza"><button style={{margin:"0px 0px 0px 40px"}}>Book Appointment</button></Link>
                </div>

            </div>
            </div>
            <section id='about' className="bg-parlex">
        <div className="parlex-back">
            <div className="container  text-center">
				<h2>Endocrinologists</h2>
            </div>
        </div>
    </section>
        <div className='container'>
            <div className='col-md-12 doctors'>
                <div className='col-md-4'>
                    <Img src={doc7} alt="d1" id='doctor1'/>
                    <h4>Dr. Fouad. M. Abbas, M.D.</h4>
                </div>
                <div className='col-md-8'>
                <p style={{marginTop:"70px",fontSize:"15px"}}>Dr. Fouad is a gynecologist and obstetrician located in Baltimore, Maryland. With the experience of more than 20 years, he is also known as the world's best oncologist (someone who studies cancer). Dr. Fouad is Obstetricians/gynecologist (OB-GYNs) who's an expert in the woman's reproductive tract, pregnancy, and childbirth. He took his graduation degree from the University of Maryland School of Medicine medical school in 1986. He got many certifications from the American Board of Obstetrics and Gynecology, did his medical internship, residency, and fellowship from The Johns Hopkins Hospital.</p><br/>
                <Link to="/Abbas"><button style={{margin:"0px 0px 0px 40px"}}>Book Appointment</button></Link>
                </div>

            </div>
            <div className='col-md-12 doctors'>
                <div className='col-md-4'>
                    <Img src={doc8} alt="d1" id='doctor1'/>
                    <h4>Dr. Khalid Abbed, M.D.</h4>
                </div>
                <div className='col-md-8'>
                <p style={{marginTop:"70px",fontSize:"15px"}}>A neuro doctor is someone who treats a patient with brain or nervous system disorders. Dr. Khalid Abbed is a very famous Neuro and spine surgeon, he is also considered as one of the best neurosurgeons in the world. Dr. Abbed is allied with Montefiore New Rochelle Hospital, Yale-New Haven Hospital, William W Backus Hospital, and White Plains Hospital and is based in Westport, Connecticut. He got his medical degree from the University Of Illinois College Of Medicine, which is based in Chicago and has experience of 12-20 years.</p><br/>
                <Link to="/Khalid"><button style={{margin:"0px 0px 0px 40px"}}>Book Appointment</button></Link>
                </div>

            </div>
            </div>
    </div>
  )
}

export default Doctorbook