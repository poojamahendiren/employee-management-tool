import React from "react";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import './header.css'
import nova from '../../assets/NOVA.PNG';
import { useNavigate} from "react-router-dom";
export default function Header() {
const navigate = useNavigate();


    function handleEmployeeList(){
        navigate("/")
      }
    
      function handleAddEmployees(){
        navigate("/employees/add")
      }    

    return(
        <div className="header" >
            <Avatar
                    alt="nova"
                    src={nova}
                    sx={{ minWidth: 66, minHeight: 66 ,float:"left"}}
                />        
            <Button style={{paddingTop:"20px",paddingLeft:"20px",color:"white"}} onClick={handleEmployeeList}>Employees</Button> 
            <Button style={{paddingTop:"20px",paddingLeft:"20px",color:"white"}} onClick={handleAddEmployees}>CreateEmployees</Button> 
        </div>
    )
}

















{/* <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-yellow" >
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                    </div>
                </nav>
        </div> */}