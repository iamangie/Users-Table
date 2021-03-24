import React from "react";
import UsersTable from "./UsersTable/UsersTable";
import Paginator from "../shared/Paginator/Paginator";

const Users = ({ users, currentPage, onPageChange }) => {
  return (
    <div>
      <Paginator currentPage={currentPage} onPageChange={onPageChange} />
      <UsersTable users={users} />
    </div>
  );
};

export default Users;
