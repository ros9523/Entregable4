import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState();
  const [updateInfo, setUpdateInfo] = useState();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const getAllUser = () => {
    const URL = "https://users-crud1.herokuapp.com/users/";
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="App">
      <div className="App__Elements">
        <h1>CRUD USERS</h1>
        <button className="btn btn-create" onClick={handleOpenForm}>
          {" "}
          Create New User
        </button>
      </div>
      <div className={isFormOpen ? "form__container" : "form-none"}>
        <Form
          getAllUser={getAllUser}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          handleCloseForm={handleCloseForm}
        />
      </div>
      <div className="card-container">
        {users?.map((user) => (
          <Users
            key={user.id}
            user={user}
            getAllUser={getAllUser}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
