// import { EmailAuthProvider_Instance } from "@firebase/auth-types";
// any type of actions related to projects - delete, add, update,etc

export const createProject = project => {
  // dispatch action to reducer
  // pausing dispatch
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Ryan",
        authorLastName: "Pitts",
        authorID: 123,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
    //   make async call to database
    // add project to database async...
  };
};
