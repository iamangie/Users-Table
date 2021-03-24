import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  getCurrentPage,
  getIsFetching,
  getUsers,
  getUsersPerPage,
} from "../../redux/users/usersSelectors";
import { requestUsers } from "../../redux/users/usersReducer";

import Users from "./Users";
import Preloader from "../shared/Preloader/Preloader";

const UsersContainer = (props) => {
  const { requestUsers, isFetching, users, usersPerPage, currentPage } = props;

  const history = useHistory();

  useEffect(() => {
    requestUsers(currentPage, usersPerPage);
  }, [requestUsers, currentPage, usersPerPage]);

  const onPageChange = (pageNumber) => {
    requestUsers(pageNumber, usersPerPage);
    history.push(`/users/${pageNumber}`);
  };

  return (
    <>
      <div>{isFetching ? <Preloader /> : null}</div>

      {!isFetching && (
        <Users
          users={users}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: getIsFetching(state),
    users: getUsers(state),
    usersPerPage: getUsersPerPage(state),
    currentPage: getCurrentPage(state),
  };
};

export default connect(mapStateToProps, { requestUsers })(UsersContainer);
