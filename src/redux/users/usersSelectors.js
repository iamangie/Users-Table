export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getUsers = (state) => {
  return state.usersPage.users;
};

export const getUsersPerPage = (state) => {
  return state.usersPage.usersPerPage;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
