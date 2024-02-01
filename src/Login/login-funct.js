import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Loginf = () => {
  const baseUrl = "http://localhost:8080/api/v1/All_Student"; // Assuming your users are stored at this endpoint
  const navigate = useNavigate();

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  
  const submitActionHandler = (event) => {
    event.preventDefault();
    
    
    axios.get(baseUrl)
      .then((response) => {
        // Check if the entered username and password match any user in the response data
         const user = response.data.find((user) =>  user.username === enteredUserName && user.password === enteredPassword);
         
        if (user) {
          alert("Login success "+enteredUserName);
          // Redirect to the desired route after successful login
          navigate("/nav/");
        } else {
          alert('Login failed. Please check your username and password.');
          console.log("error");
        }
        })
      .catch(error => {
        console.log("Error: ", error);
      });
        
  };

  return (
    <div className="container login">
   
    
<main class="form-signin w-100 m-auto">
  <form onSubmit={submitActionHandler}>
    <img class="mb-4" src="\images\form1.jpg" alt="" width="72" height="57" />
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
       value={enteredUserName} onChange={(e) => setEnteredUserName(e.target.value)}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
       value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)}/>
      <label for="floatingPassword">Password</label>
    </div>

   
    <button class="btn btn-primary w-100 py-2" type="submit">Login </button>
    <button className="btn btn-secondary w-100" type="button" onClick = { () => navigate("/go/")}> register</button>
    <p class="mt-5 mb-3 text-body-secondary">&copy; 2022–2023</p>
  </form>
</main>
     
    </div>
  )
}

export default Loginf;