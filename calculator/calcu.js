document.getElementById("btnl").addEventListener("click",
// we are adding a arrow function to the button 
kin =  () => {
    let num1 = document.querySelector(".num1"). value;
    // define the variables which we are using
    let num2 = document.querySelector(".num2").value;
    let result = document.querySelector(".result");
    // we are fectching data of result  to the button.
    let oprator = document.getElementById("selectOp").value;
  // we are adding switch cases to use all the  operatord

    switch (oprator) {
      case "plus":
        // addition operation  likewise
        result.innerHTML = Number(num1) + Number(num2);
        break;
      case "min":
        result.innerHTML = Number(num1) - Number(num2);
        break;
      case "dev":
        result.innerHTML = Number(num1) / Number(num2);
        break;
      case "multi":
        result.innerHTML = Number(num1) * Number(num2);
    }
    
  });