// any type of actions related to projects - delete, add, update,etc

export const createProject = project => {
  // dispatch action to reducer
  // pausing dispatch
  return (dispatch, getState) => {
    //   make async call to database
    // add project to database async...
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
