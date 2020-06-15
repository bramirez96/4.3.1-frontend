import React, { useState, useEffect } from "react";
import { logout, getUsers } from "../utils";
import { useHistory } from "react-router-dom";

const Users = props => {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const { push } = useHistory();

  const handleLogout = e => {
    e.preventDefault();
    logout()
      .then(() => {
        push("/");
      })
      .catch(err => {
        setError(err.message);
      });
  };
  useEffect(() => {
    getUsers()
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);
  return (
    <div className="Users">
      <h2>Users</h2>
      <div>
        <button onClick={handleLogout}>Log Out</button>
        {error && <span>{error}</span>}
      </div>
      <ul>
        {users.map(x => {
          return (
            <li>
              {x.id}: {x.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
