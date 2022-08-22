import axios from "axios";
import React from "react";

const Users = ({ user, getAllUser, setUpdateInfo, handleOpenForm}) => {

  const deleteUser = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAllUser();
      })
      .catch(err=>console.log(err));
  }

  const updateUser = () => {
    handleOpenForm()
    setUpdateInfo(user);
  }

  return (
    <div className="card-container__user">
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <hr className="card__hr" />
      <p>
        Correo:<span>{user.email}</span>
      </p>
      <p>
        cumpleaños:<span>{user.birthday}</span>
      </p>

      <div className="card-container-buttons">
      <button className='btn btn-delete' onClick={deleteUser}>
        <i className="bx bxs-trash-alt"></i>
      </button>
      <button className="btn btn-update" onClick={updateUser}>
        <i className="bx bxs-edit-alt"></i>
      </button>
      </div>
    </div>
  );
};

export default Users;
