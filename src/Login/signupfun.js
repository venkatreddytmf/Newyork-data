import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpf=()=>{
    const baseUrl="http://localhost:8080/api/v1/All_Student"; // Assuming your users are stored at this endpoint
    const navigate = useNavigate();


    const [enteredUserName,setenteredUserName]=useState('');
    const [enteredPassword,setenteredPassword]=useState('');
    const [enteredId,setenteredId] =useState('');
    const [enteredrole,setenteredrole] =useState('');

    const UserNameHandler=(event)=>{
        setenteredUserName(event.target.value);
    }
    const PasswordHandler=(event)=>{
        setenteredPassword(event.target.value);
    }
const IDHandler=(event) =>{
    setenteredId(event.target.value);
}
    const designationHandler=(event) =>{
        setenteredrole(event.target.value);
    }

    const formActionhandler=(event)=>{
        event.preventDefault();
        console.log(enteredUserName);
        console.log(enteredPassword);
        axios.post(baseUrl,{
            username:enteredUserName,
            password:enteredPassword,
            employeeid:enteredId,
            role:enteredrole
        }).then((response)=>{
            alert("successfully Registered "+enteredUserName);
            navigate("/");//if login successfully it will navigate to login form
            console.log(response)
        }).catch(error=>{
            alert("error===>"+error)
        })
    }
    return(
        <div class="container">
            <h1 className="login">Register here </h1>
            <div className="col-md-6 col-lg-6 col-sm-8 col-12    " style={{backgroundColor:"bisque"}}>
            <form class="mx-auto py-5 "
            onSubmit={formActionhandler}>
  <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" 
       value={enteredUserName} onChange={UserNameHandler}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
      value={enteredPassword} onChange={PasswordHandler} />
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="EMP001" 
       value={enteredId} onChange={IDHandler}/>
      <label for="floatingInput">Employee ID</label>
    </div>

    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="Project-Manager" 
       value={enteredrole} onChange={designationHandler}/>
      <label for="floatingInput">Employee Designation</label>
    </div>
    
  <button type="submit" class="btn btn-primary">Sign up</button>
  
</form>
        </div>
        </div>
    )
}

export default SignUpf;