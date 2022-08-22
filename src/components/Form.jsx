import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Form = ({ getAllUser, updateInfo, setUpdateInfo, handleCloseForm }) => {
  
  
  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);

  const resetForm = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
  };

  const createUser = (data) => {
    const URL = "https://users-crud1.herokuapp.com/users/";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUser();
      })
      .catch((err) => console.log(err));
    
  }

  const updateUser = data => {
    const URL= `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
    axios.patch(URL,data)
    .then(res=>{
      console.log(res.data)
      getAllUser()
    })
    .catch(err=>console.log(err))
  }

  const { register, reset, handleSubmit } = useForm();

  const submit = (data) => {
    if(updateInfo){

      updateUser(data)
      setUpdateInfo()
    } else {
    createUser(data)
    }
    reset(resetForm)
    handleCloseForm()
  }

  return (
   
      <div>
      <h2 className="form_title">
        {
      updateInfo ? "UpdateUser" : "Create New User"
       }
       </h2>
      
      <form onSubmit={handleSubmit(submit)} className="form">
      <button onClick={handleCloseForm} className='form__equis'>x</button>
        <label htmlFor="first_name">Nombre</label>
        <input {...register("first_name")} type="first_name" id="first_name" />
        <label htmlFor="last_name">Apellido</label>
        <input {...register("last_name")} type="last_name" id="last_name" />
        <label htmlFor="email">Correo</label>
        <input {...register("email")} type="email" id="email" />
        <label htmlFor="password">Contraseña</label>
        <input {...register("password")} type="password" id="password" />
        <label htmlFor="birthday">Cumpleaños</label>
        <input {...register("birthday")} type="date" id="birthday" />
        <button className="btn btn-create">
        {
          updateInfo ? "UpdateUser" : <i className="bx bx-user-plus"></i>
       }
          
        </button>
      </form>
      </div>
  );
};

export default Form;
