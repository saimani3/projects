import React, { forwardRef } from 'react'
import './App.css';
import doc1 from './images/doctor1.png';
import doc2 from './images/doctor2.jpg';
import doc3 from './images/doctor3.png';
import doc4 from './images/doctor4.jpg';
const Doctors = ({},ref3) => {
  return (
    <div ref={ref3}>
      <section id='about' className="bg-parlex">
        <div className="parlex-back">
            <div className="container  text-center">
				<h2>Doctors</h2>
            </div>
        </div>
    </section>
    <h4>Dr Myles. B. Abbott, M.D.</h4>
      <img src={doc1} alt="doctor1" id='d1'/>
      <p>Dr Myles is also one of the best-known doctors of Paediatrics in the world. He graduated from the University of Miami, Leonard M Miller School of Medicine, in 1972. He treats the problems of growth and child development and has been in practice for 20-plus years. Dr Myles currently practices at East Bay Pediatric and Medical Group and is affiliated with Alta Bates Summit Medical Center – Berkeley, Children’s Hospital and Research Center Oakland, and UCSF Medical Centre – UCSF Health.</p><br/><br/>
      <h4>Dr Naresh Trehan</h4>
      <img src={doc2} alt="doctor2" id='d1'/>
      <p>Dr Naresh is a famous Indian Cardiovascular and Cardiothoracic surgeon. He was born on August 12, 1946, in Delhi, India. He obtained a medical degree from King George’s Medical College in Lucknow. Dr Naresh was also the founder, executive director, and Chief Cardiovascular surgeon of Escorts Heart Institute and Research Center (EHIRC), New Delhi, India. At present, he is serving as the Chairman and Managing Director and Chief Cardiac Surgeon of Medanta TM-The Medicity, one of the largest multi-speciality hospitals in Gurgaon, Haryana. Dr Naresh has received numerous awards, including the Padma Bhushan, Padma Shri, Lal Bahadur Shastri National Award, and Dr B. C. Roy Award.</p><br/><br/>
      <h4>Dr Arthur Reese Abright, M.D.</h4>
      <img src={doc3} alt="doctor3" id='d1'/>
      <p>Dr Reese is one of the best doctors of Psychiatry. She treats problems of depression and mind-related problems. She is considered the world’s best doctor by many. Dr Reese got her accreditation from The University of Texas Southwestern Medical School. She is also an expert on mood disorders and anxiety. Currently, she is working as a Professor of Psychiatry at Icahn School of Medicine at Mount Sinai. She is also affiliated with Mount Sinai Services Elmhurst Hospital Center and New York Medical College at present.</p><br/><br/>
      <h4>Dr Corrie T.M Anderson, M.D.</h4>
      <img src={doc4} alt="doctor4" id='d1'/>
      <p>Dr Anderson is also one of the best doctors in Pediatric Anesthesiology around the world. He received his A.B. with Honors in Biochemistry from Harvard University and a Doctor of Medicine (M.D) from Stanford University School of Medicine in 1982. He can be truly crowned as the ‘world’s best doctor’. In 2001, Dr Anderson became the director of the program for Pediatric Pain Medicine in the Department of Anesthesiology at Seattle Children’s Hospital. He is also a professor of Anesthesiology and Associate Professor of Paediatrics at the University of Washington School of Medicine and has been in practice for more than 20 years.</p><br/><br/>

    </div>
  )
}

export default forwardRef(Doctors);