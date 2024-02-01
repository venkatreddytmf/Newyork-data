import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import HeaderPage from './header';
import studentservice from '../services/studentservice';



 

const UpdateStudent  = props =>{
  const navigate = useNavigate();
  const { id } = useParams();
  // const [currentStudentfname, setcurrentfName] = useState([]);
  // const [currentStudentlname, setCurrentlName] = useState('');
  // const [currentcourse, setCurrentcourse] = useState('');


  const [enteredstudentName, setStudentName] = useState('');
    const [enteredstudentlastName, setStudentlastname] = useState('');
    const [enteredstudentcourse, setStudentcourse]= useState('');
    const[enteredStudentPhone, setStudentPhone] = useState('');
    const [enteredstudentStreet, setStudentStreet] =useState('');
    const [enteredstudentCity , setStudentCity] = useState('');
    const [enteredstudentstate,setStudentstate]=useState('');
    
  // we are fectching all the old data

  const getstudents = () => {
    studentservice.getstudentById(id).then((response) => {
        const setCurrentStudentData = response.data;

        setStudentName(setCurrentStudentData.firstname);
        setStudentlastname(setCurrentStudentData.lastname);
        setStudentcourse(setCurrentStudentData.course);
        setStudentPhone(setCurrentStudentData.phonenumber);
        setStudentStreet(setCurrentStudentData.street);
        setStudentCity(setCurrentStudentData.city);
        setStudentstate(setCurrentStudentData.state);

      }).catch(error => {
        alert("Error Ocurred while loading data:" + error);
      });

  }


  // we are fetching all updated data from the form

  const submitActionHandler = (event) => {

    event.preventDefault();
    studentservice.updatestudent(id,{
      firstname:enteredstudentName,
      lastname:enteredstudentlastName,
      course:enteredstudentcourse,
      phonenumber:enteredStudentPhone,
      street:enteredstudentStreet,
      city:enteredstudentCity,
      state:enteredstudentstate,

    })

      .then((response) => {
        alert(id+" with Student details  Updated!");
        navigate("/data/");
      }).catch(error => {
        alert("error===" + error);
      });


  };

  useEffect(() => {
    if (id)
      getstudents(id);
  }, [id]);






// we are going to write add handlers


    return (
        <>
<HeaderPage />
<form onSubmit={submitActionHandler} >
   <img src="\images\form1.jpg" alt="getting image" width={100} height={120} ></img>
    <h1 class="h3 mb-3 fw-normal">Please add details of  Student</h1>

    {/* <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="first name"
      value={currentStudentfname} onChange={StudentnameChangeHandler}></input>
      <label for="floatingInput">First_name</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingPassword" placeholder="last name"
      value={currentStudentlname} onChange={StudentlnameChangeHandler}></input>
      <label for="floatingPassword">Last_name</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingPassword" placeholder="course"
      value={currentcourse} onChange={StudentCourseChangeHandler} ></input>
      <label for="floatingPassword">Course</label>
    </div> */}

    <div><label>Name*</label><input type="text" name="name" required  
            value={enteredstudentName} onChange={(e) => setStudentName(e.target.value)} /></div>
        <div><label>lastName</label><input type="text" name="name" required
        value={enteredstudentlastName} onChange={(e) => setStudentlastname(e.target.value)} /></div>
        <div><label>course</label><input type="text" name="name" required 
        value={enteredstudentcourse} onChange={(e) => setStudentcourse(e.target.value)} /></div>
            <div><label>Phone*</label><input type="text" name="name" required 
            value={enteredStudentPhone} onChange={(e) => setStudentPhone(e.target.value)}/></div>
            <div><label>Street</label><input type="text" name="name" 
            value={enteredstudentStreet} onChange={(e) => setStudentStreet(e.target.value)} /></div>
            <div><label>City</label><input type="text" name="name" required 
            value={enteredstudentCity} onChange={(e) => setStudentCity(e.target.value)}/></div>
            <div><label>Name*</label><input type="text" name="name" required  
            value={enteredstudentstate} onChange={(e) => setStudentstate(e.target.value)} /></div>



   
    <button class="btn btn-primary w-100 py-2" type="submit">Submit</button>
    <p class="mt-5 mb-3 text-body-secondary">&copy; 2022–2023 batch</p>
  </form>

        
        </>
    );
}
export default UpdateStudent;

