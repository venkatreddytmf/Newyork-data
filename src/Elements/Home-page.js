import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import HeaderPage from "./header";
import studentservice from "../services/studentservice";



const Studentdata = () =>{
  // we are adding class

  const navigate = useNavigate();   
 const  WEBSITE_API_BASE_URL = "http://localhost:8080/api/v1/Studentlists"; 
  

  const [Student, setStudent] = useState([]);

console.log(Student)

const student = () => {
  // axios.get(baseURL ).then((response) => {
  //   console.log(response.data);
   studentservice.getstudent(WEBSITE_API_BASE_URL)
   .then((response) => {
    setStudent(response.data);
    console.log(response.data);
   
  }).catch(error => {
    alert("Error Ocurred while loading data:" + error);
  });
}

useEffect(() => {
  student();
}, []);



const Remove = (id) => {
  // console.log(id)
  studentservice.deletestudent(id).then((response) => {
    alert("Student record " + id + " deleted!");
    setStudent();
    navigate('/data/')

  }).catch(error => {
    alert("Error Ocurred in removeWebsite:" + error);
  });
}

     return (
        <>

<HeaderPage />
        
{/*  in this area we are detailing all the Student data in the boostrap table  */}

<table class="table table-success table-striped">
<thead>
    <tr>
      <th scope="col">Id_number</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">City</th>
      <th scope="col">alteration</th>
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Java</td>
    </tr> */}

    {
                    Student &&
                    Student.map((candidate, index) => (

                   

                      <tr>
                        <th scope="row">{candidate.id}</th>
                        <td>{candidate.firstname}</td>
                        <td>{candidate.phonenumber}</td>
                        <td>{candidate.city}</td>


                        <td >

                          {/* <Link to={"/edit/" + website.id}>                          </Link> */}
                          <button
                             className="button"onClick={()=> navigate ("/edit/"+candidate.id)}
                          > Edit
                          </button>

                          <button
                             className="button" onClick={() => Remove(candidate.id)}
                          > Delete
                          </button>

                        </td>
                      </tr>

                   
))
} 
</tbody>
</table>
   
        </>
    );
}
export default Studentdata;