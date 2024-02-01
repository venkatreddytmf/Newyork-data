import { Link} from "react-router-dom";
import  "./header.css";

const HeaderPage = () =>{
    return (
        <>


   {/*  we are taking nav bar */}

   <main class="form-signin w-100 m-auto">

   <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://www.bing.com/ck/a?!&&p=e66cef10654412c0JmltdHM9MTY5OTU3NDQwMCZpZ3VpZD0xZjg2NzRkNC1iZjcwLTZlNzMtM2U0MS02NzEwYmVjMjZmMDMmaW5zaWQ9NTY2Mg&ptn=3&hsh=3&fclid=1f8674d4-bf70-6e73-3e41-6710bec26f03&u=a1aHR0cHM6Ly93d3cuYmluZy5jb20vYWxpbmsvbGluaz91cmw9aHR0cHMlM2ElMmYlMmZ3d3cuc21hcnQtYWNhZGVteS5pbiUyZmhpbmRpJTJmY29udGFjdC11cyUyZiZzb3VyY2U9c2VycC1sb2NhbCZoPThOMk16QnBkR3VncktNZ1pGJTJmS2pZJTJiM2oyNDg5c04yc2VMJTJmSWRQZTcwMzQlM2QmcD1sd190cCZpZz1COTUxOUZCMEU5Q0M0M0FGOTA5MDRCRjA2QTlGNTY4QSZ5cGlkPVlONDA3MHgyMTM2NDEwNjI4MTQzOTkxOTI5&ntb=1" style={{color: "red"}}>Tech mahindra Smart Academy </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbar2Label" style={{color:"red"}}>Tech mahindra Digital Academy</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">


         
            
            <li class="nav-item">

              <Link class="nav-link active" aria-current="page" to="/data">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/new">Create_new</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cal">Edit</Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li><a class="dropdown-item" to="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex mt-3 mt-lg-0" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <Link class="btn btn-outline-success" to="submit">Search</Link>
          </form>
        </div>
      </div>
    </div>
  </nav>
  </main>
        
        </>
    );

};
export default HeaderPage;