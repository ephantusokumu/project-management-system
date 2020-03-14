import ProjectSummary from "../../components/projects/ProjectSummary";

export const createProject = (project) =>{
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        ///make async call to db

        const firestore = getFirestore();
        firestore.collection('projects').add({
          ...project,
          authorFirstName: 'Ephantusizo',
          authorLastName: 'Okumbe',
          authorId: 65656,
          createdAt: new Date()
        }).then(() =>{
          dispatch({type:'CREATE_PROJECT', project});
        }).catch((err) =>{
          dispatch({type: 'CREATE_PROJECT_ERR', err});
        })
    }
};