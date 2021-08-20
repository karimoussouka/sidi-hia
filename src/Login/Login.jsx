import React, { useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import {useHistory,Redirect} from 'react-router-dom';






function Login(){

   
 
    const history=useHistory();
    

    const [loginInput,setLogin] = useState({
        email:'',
        password:'',
        error_list:[],
    });
    
    const loginSubmit = (e) => {
        e.preventDefault();

        const data ={
            email:loginInput.email,
            password:loginInput.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('api/login',data).then(res => {
            

                if(res.data.status === 200){
                    localStorage.setItem('auth_token',res.data.token);
                    localStorage.setItem('auth_name',res.data.name);
                    // swal("Success",res.data.message,"success");
                    document.location.reload();
                    
                }
                else if(res.data.status === 401){
                   // swal("Warning",res.data.message,"warning");
                }
                else{
                    setLogin({...loginInput,error_list:res.data.validation_errors});
                }
            })
        });
       
    }

    const handleInput =(e) =>{
        e.persist();
        setLogin({...loginInput,[e.target.name]:e.target.value});
    }



    return (
        <div class="l-form">
            <div class="shape1"></div>
            <div class="shape2"></div>
            <div class="form">
                <img src="./View/img/Authentication_Two Color.svg" alt="" class="form__img" />

                <form action="Controller/" class="form__content" method="POST">
                    <h1 class="form__title">Welcome</h1>

                    <div class="form__div form__div-one">

                        <div class="form__icon">
                            <i class='bx bx-user-circle'></i>
                        </div>

                        <div class="form__div-input">
                            <label for="" class="form__label">Username</label>
                            <input type="text" class="form__input" name="username" autocomplete="off" />
                        </div>
                    </div>

                    <div class="form__div">
                        <div class="form__icon">
                            <i class='bx bx-lock' ></i>
                        </div>

                        <div class="form__div-input">
                            <label for="" class="form__label">Password</label>
                            <input type="password" class="form__input" name="pwd" />
                        </div>
                    </div>
                    <a href="View/" class="form__forgot">Forgot Password?</a>

                    <input type="submit" class="form__button" value="Login" />
                </form>
            </div>

        </div>
    )



}

export default Login;


{/*  
        
    import React, { useState } from "react";
import axios from 'axios';
import {useHistory,Redirect} from 'react-router-dom';
import Swal from "sweetalert2";
import '../Assets/css/login.css'





function Login(){
    const history=useHistory();
    const [loginInput,setLogin] = useState({
        email:'',
        password:'',
        error_list:[],
    });
    
    const loginSubmit = (e) => {
        e.preventDefault();

        const data ={
            email:loginInput.email,
            password:loginInput.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('api/login',data).then(res => {
            

                if(res.data.status === 200){
                    localStorage.setItem('auth_token',res.data.token);
                    localStorage.setItem('auth_name',res.data.name);
                    // swal("Success",res.data.message,"success");
                    document.location.reload();
                    
                }
                else if(res.data.status === 401){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                else{
                    setLogin({...loginInput,error_list:res.data.validation_errors});
                }
            })
        });
       
    }

    const handleInput =(e) =>{
        e.persist();
        setLogin({...loginInput,[e.target.name]:e.target.value});
    }

    
const inputs = document.querySelectorAll(".form__input")


function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}


function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}


inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})



    return (
        <div>
            
            <div class="l-form">
                <div className="shape1"></div>
                <div className="shape2"></div>
                <div className="form">
                    <img src="http://localhost:7882/login-system/View/img/Authentication_Two%20Color.svg" alt="" className="form__img" />
                        <form onSubmit={loginSubmit} className="form__content ">
                            <h1 className="form__title">Welcome</h1>
                            <div className="form__div form__div-one">

                                <div className="form__icon">
                                    <i className='bx bx-user-circle'></i>
                                </div>
                            
                                <div className="form__div-input">
                                    <label for="" className="form__label">Username</label>
                                    <input type="text" name="text" value={loginInput.email} onChange={handleInput} className="form__input" />
                                    <span>{loginInput.error_list.email}</span>
                                </div>
                            </div>
                                    
                            <div className="form__div">
                                <div className="form__icon">
                                    <i className='bx bx-lock' ></i>
                                </div>
    
                                <div className="form__div-input">
                                        <label for="" className="form__label">Password</label>
                                        <input type="password" name="password" value={loginInput.password} onChange={handleInput} className="form__input"  />
                                        <span>{loginInput.error_list.password}</span>
                                </div>
                            </div>
                    
                                
                            <input type="submit" className="form__button" value="Login" />
                        </form>
                </div>
            </div>
        </div>
    )



}

export default Login;



*/}