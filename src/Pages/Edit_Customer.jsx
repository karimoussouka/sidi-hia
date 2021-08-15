import React,{useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import customerList from "../Assets/JsonData/customers-list.json";
import {Link } from 'react-router-dom'
import './style.css'


const Edit_Customer = (props) => {

    const {register , handleSubmit , formState:{errors}} = useForm();

    const [List, setList] = useState([])

    const customer = () => {
        if (props.match.params.cin) {
            const data = customerList.filter(custumer => custumer.cin === props.match.params.cin );
            setList(data);
            console.log('====================================');
            console.log(data);
            console.log('====================================');
        }
    }

    useEffect(() => {
        customer();
        console.log('====================================');
        console.log(List);
        console.log('====================================');
    },[])

     function Submit(data){
         
         console.log(data);
         
     }
    return (
        <div>
            {List.map((item => {
                return(
                    <div>
                    <Link to = "/sidi-hia/customers">
                        <i class='bx bx-arrow-back back'></i>
                    </Link>
                        <div className = "add_cus">
                            <h1 className="titel">{item.name}</h1>
                            <form action="" className="newCustomer" onSubmit = {handleSubmit(Submit)}>
                <div className="Item">
                    <label htmlFor="">CIN :</label>
                    <input type="text" placeholder = {item.cin} required  {...register('cin',{required:true,maxLength:8})}   />
                      {errors.cin && errors.cin.type === "maxLength" && (
                        <span role="alert"> <p style = {{color : "red"}}>Max length 8 caracteres</p></span>
                      )}
                </div>
                <div className="Item">
                    <label htmlFor="">Name :</label>
                    <input type="text" placeholder = {item.name} autoComplete = "off" required {...register('name',{required:true,maxLength:30})}  />
                      {errors.name && errors.name.type === "maxLength" && (
                        <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                      )}
                </div>
                <div className="Item">
                    <label htmlFor="">E-mail :</label>
                    <input type="email" placeholder = {item.email}  {...register('email',{required:true,maxLength:30})} />
                    {errors.email && errors.email.type === "maxLength" && (
                      <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                    )}
                </div>
                <div className="Item">
                    <label htmlFor="">Phone :</label>
                    <input type="text" placeholder = {item.phone} required {...register('phone',{required:true,maxLength:10})} />
                    {errors.phone && errors.phone.type === "maxLength" && (
                      <span role="alert"> <p style = {{color : "red"}}>Max length 10 caracteres</p></span>
                    )}
                </div>
                <div className="Item">
                    <label htmlFor="">Location :</label>
                    <input type="text" placeholder = {item.location} required {...register('location',{required:true,maxLength:30})}  />
                    {errors.location && errors.location.type === "maxLength" && (
                      <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                    )}
                </div>
                <div className="Item">
                    <label htmlFor="">Birthday :</label>
                    <input type="date" required {...register('birthday',{required:true,maxLength:30})}  />
                    {errors.birthday && errors.birthday.type === "maxLength" && (
                      <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                    )}
                </div>
                <div className="Item">
                    <label htmlFor="">Gender :</label>
                    <div className="Gender">
                        <input type="radio" name = "gender" id = "Male"  value = "Male" required {...register('genre',{required:true,maxLength:30})}  />
                        {errors.genre && errors.genre.type === "maxLength" && (
                          <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                        )}
                        <label htmlFor="Male">Male</label>
                        <input type="radio" name = "gender" id = "Female"  value = "Female" required {...register('genre',{required:true,maxLength:30})} />
                        {errors.genre && errors.genre.type === "maxLength" && (
                          <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                        )}
                        <label htmlFor="Female">Female</label>
                    </div>
                </div>
                <button className="btnInsert">Update</button>
            </form>
        </div>
                    </div>


                )
            }))}
        </div>
    );
}

export default Edit_Customer;
