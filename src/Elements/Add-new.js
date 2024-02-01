import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";
import './Add.css';
import HeaderPage from "./header";
import studentservice from "../services/studentservice";




const Createnew = () =>{
    const baseURL = "http://localhost:8080/api/v1/Studentslist";
   
    const navigate = useNavigate();
// we are defining all the variables in the form 

    const [enteredstudentName, setStudentName] = useState('');
    const [enteredstudentlastName, setStudentlastname] = useState('');
    const [enteredstudentcourse, setStudentcourse]= useState('');
    const[enteredStudentPhone, setStudentPhone] = useState('');
    const [enteredstudentStreet, setStudentStreet] =useState('');
    const [enteredstudentCity , setStudentCity] = useState('');
    const [enteredstudentState, setStudentState] = useState('');



    
   

  // we are adding main function which is submit

  const submitActionHandler = (event) => {
   
    event.preventDefault();
    // post
    axios.post(baseURL, {
        firstname:enteredstudentName,
        lastname:enteredstudentlastName,
        course:enteredstudentcourse,
        phonenumber:enteredStudentPhone,
        street:enteredstudentStreet,
        city:enteredstudentCity,
        state:enteredstudentState
        
    })
        .then((response) => {
            alert("student " + enteredstudentName + " added!");
            navigate("/nav/");
        }).catch(error => {
            alert("error===" + error);
        });

 };
// const submitActionHandler = (event) => {
//   event.preventDefault();

//     studentservice.createstudent({firstname:enteredstudentName,
//              lastname:enteredstudentlastName,
//               course:enteredstudentcourse,
//              phonenumber:enteredStudentPhone,
//             street:enteredstudentStreet,
//           city:enteredstudentCity,
//          state:enteredstudentState}).then((response) => {
//          alert("Student  is"+":" +enteredstudentName+ ":"+ enteredstudentcourse +" added!");
//          console.log(response)
//         navigate("/nav");
//   }).catch(error => {
//       alert("error===" + error);
//   });
// };

const cancelHandler = () =>{
//reset the values of input fields
setStudentCity('');
setStudentName('');
navigate("/nav");

}


    return (
        <>

<HeaderPage />

{/*  we are going add a new Student detailin this page */}

{/* 

<form onSubmit={submitActionHandler} >
   <img src="images\form1.jpg" alt="getting" width={100} height={120} ></img>
    <h1 class="h3 mb-3 fw-normal">Please add details of new Student</h1>

    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="first name"
      value={enteredstudentName} onChange={(e) => setStudentName(e.target.value)}></input>
      <label for="floatingInput">First_name</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingPassword" placeholder="last name"
      value={enteredstudentlastName} onChange={(e) =>setStudentlastname(e.target.value)}></input>
      <label for="floatingPassword">Last_name</label>
    </div>
    <div class="form-floating">
    <input type="text" class="form-control" id="floatingPassword" placeholder="last name"
      value={enteredstudentcourse} onChange={(e) => setStudentcourse(e.target.value)}></input>
      {/* <select value={enteredstudentcourse} onChange={studentcourseChangeHandler}>
        <option>Java</option>
        <option>UX_UI</option>
        <option>Graphic desigh</option>
        <option>Digital marketing</option>
        <option>front end</option>
        <option>Aws</option>
        <option>data anlyist</option>
      </select> */}
      {/* <label for="floatingPassword">Course</label>
    </div>

   
    <button class="btn btn-primary w-100 py-2" type="submit">Submit</button>
    <p class="mt-5 mb-3 text-body-secondary">&copy; 2022–2023 batch</p>
  </form> */} 



  {/* new form -web */}


  <form onSubmit={submitActionHandler} >
      <h1>Create a new Student Details</h1>
     
        <legend>
          <h3>Personal Details</h3>
        </legend>
        <div  class="personal-details">
          <div>
            <div><label>Name*</label><input type="text" name="fname" required  
            value={enteredstudentName} onChange={(e) => setStudentName(e.target.value)} /></div>
        <div><label>lastName</label><input type="text" name="lname" required
        value={enteredstudentlastName} onChange={(e) => setStudentlastname(e.target.value)} /></div>
        <div><label>course</label><input type="text" name="cname" required 
        value={enteredstudentcourse} onChange={(e) => setStudentcourse(e.target.value)} /></div>
            <div><label>Phone*</label><input type="text" name="pname" required 
            value={enteredStudentPhone} onChange={(e) => setStudentPhone(e.target.value)}/></div>
            <div><label>Street</label><input type="text" name="sname" 
            value={enteredstudentStreet} onChange={(e) => setStudentStreet(e.target.value)} /></div>
            <div><label>City*</label><input type="text" name="cityname" required 
            value={enteredstudentCity} onChange={(e) => setStudentCity(e.target.value)}/></div>
            <div>
              <label>State*</label>  
              <select 
              value={enteredstudentState} onChange={(e) => setStudentState(e.target.value)}>
                <option value=""></option>
                <option value="Andhra pradesh">Andhra pradesh</option>
                <option value="Telangana">Telangana</option>
                <option value="Tamilnadu">Tamilnadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="goa">goa</option>
              </select>
            </div>
            <div><label>Website</label><input type="text" name="name" /></div>
          </div>
          <div>
            <div>
              <label>Gender*</label>
              <div class="gender">
                <input type="radio" value="none" id="male" name="gender" required/>
                <label for="male" class="radio">Male</label>
                <input type="radio" value="none" id="female" name="gender" required/>
                <label for="female" class="radio">Female</label>
              </div>
            </div>
           
           
            
          </div>
        </div>
     
      
      <button type="submit" href="/">Submit</button>
<button type="cancel" onClick={ cancelHandler} ></button>
    </form>

        </>
    );
}
export default Createnew;


