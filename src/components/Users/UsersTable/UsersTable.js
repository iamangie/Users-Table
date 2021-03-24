import React from "react";

import style from "./UsersTable.module.scss";

const UsersTable = ({ users }) => {
  return (
    <table className={style.usersTable}>
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Gender</th>
          <th scope="col">User Name</th>
          <th scope="col">Date of registration</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => {
            return (
              <tr key={user.phone}>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.gender}</td>
                <td>{user.login.username}</td>
                <td>{user.registered.date}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default UsersTable;
