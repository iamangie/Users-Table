const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const currentPageValue = localStorage.getItem("currentPage")
  ? localStorage.getItem("currentPage")
  : 1;

let initialState = {
  isFetching: true,
  users: [],
  usersPerPage: 10,
  currentPage: currentPageValue,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    default:
      return state;
  }
};

const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

const setUsers = (users) => ({ type: SET_USERS, users });

const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const requestUsers = (currentPage, usersPerPage) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));

    const response = await fetch(
      `https://randomuser.me/api/?page=${currentPage}&results=${usersPerPage}&seed=abc`
    );
    const data = await response.json();
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.results));
    localStorage.setItem("currentPage", currentPage);
  };
};

export default usersReducer;
