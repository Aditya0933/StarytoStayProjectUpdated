import { BASE_URL } from "../baseURL";
import { ADD_ANIMAL, DELETE_ANIMAL, DELETE_USER_ANIMAL, GET_ALL_ANIMAL, GET_ANIMAL_DETAIL, GET_USER_ANIMAL, LOADING, UPDATE_ANIMAL, UPDATE_USER_ANIMAL } from "../type";



export const addAnimal = (animal) => {
    return async(dispatch) => {
        dispatch({type:LOADING,payload:true});
      try{
          const data = await fetch(`${BASE_URL}/api/v1/animals/addAnimal`,
          {
              method:"POST",
              headers:{
                  'Authorization': localStorage.getItem("token")
              },
              body: animal
          });
          const animaldata = await data.json();
          dispatch({type:ADD_ANIMAL, payload:animaldata});
          dispatch({type:LOADING,payload:false});
      }
      catch(error){
        dispatch({type:LOADING,payload:false});
        console.log('Error while calling addAnimal API ', error);
      }
      }
  }


  export const getAllAnimal = (query) => {
    return async(dispatch) => {
        dispatch({type:LOADING,payload:true});
      try{
          const data = await fetch(`${BASE_URL}/api/v1/animals/getAllAnimals`+ '?' + new URLSearchParams(query),
          {
              method:"GET",
              headers:{
                  'Content-Type': "application/json",
                  'Authorization': localStorage.getItem("token"),
              }
          });
          const animaldata = await data.json();
          dispatch({type:GET_ALL_ANIMAL, payload:animaldata});
          dispatch({type:LOADING,payload:false});
      }
      catch(error){
        dispatch({type:LOADING,payload:false});
        console.log('Error while calling getAllAnimal API ', error);
      }
      }
  }



  export const updateAnimal = (animal) => {
    return async(dispatch) => {
        dispatch({type:LOADING,payload:true});
      try{
          const data = await fetch(`${BASE_URL}/api/v1/animals/updateAnimal/${animal._id}`,
          {
              method:"PUT",
              headers:{
                  'Content-Type': "application/json",
                  'Authorization': localStorage.getItem("token"),
              },
              body: JSON.stringify(animal)
          });
          const animaldata = await data.json();
          dispatch({type:UPDATE_ANIMAL, payload:animaldata});
          dispatch({type:UPDATE_USER_ANIMAL, payload:animaldata});
          dispatch({type:LOADING,payload:false});
      }
      catch(error){
        dispatch({type:LOADING,payload:false});
        console.log('Error while calling updateAnimal API ', error);
      }
      }
  }
  

  export const deleteAnimal = (id, imageUrl) => {
    return async(dispatch) => {
        dispatch({type: LOADING, payload: true});
        try {
            const data = await fetch(`${BASE_URL}/api/v1/animals/deleteAnimal/${id}?imageUrl=${imageUrl}`,
                {
                    method: "DELETE",
                    headers: {
                        'Content-Type': "application/json",
                        'Authorization': localStorage.getItem("token"),
                    }
                });
            const animaldata = await data.json();
            dispatch({type: DELETE_ANIMAL, payload: animaldata});
            dispatch({type: DELETE_USER_ANIMAL, payload: animaldata});
            dispatch({type: LOADING, payload: false});
        } catch (error) {
            dispatch({type: LOADING, payload: false});
            console.log('Error while calling deleteAnimal API ', error);
        }
    };
};



  export const getUserAnimal = () => {
    return async(dispatch) => {
        dispatch({type:LOADING,payload:true});
      try{
          const data = await fetch(`${BASE_URL}/api/v1/animals/getUserAnimal`,
          {
              method:"GET",
              headers:{
                  'Content-Type': "application/json",
                  'Authorization': localStorage.getItem("token"),
              }
          });
          const animaldata = await data.json();
          dispatch({type:GET_USER_ANIMAL, payload:animaldata});
          dispatch({type:LOADING,payload:false});
      }
      catch(error){
        dispatch({type:LOADING,payload:false});
        console.log('Error while calling getUserAnimal API ', error);
      }
      }
  }


  export const getAnimalDetail = (id) => {
    return async(dispatch) => {
        dispatch({type:LOADING,payload:true});
      try{
          const data = await fetch(`${BASE_URL}/api/v1/animals/getAnimalDetail/${id}`,
          {
              method:"GET",
              headers:{
                  'Content-Type': "application/json",
                  'Authorization': localStorage.getItem("token"),
              }
          });
          const animaldata = await data.json();
          dispatch({type:GET_ANIMAL_DETAIL, payload:animaldata});
          dispatch({type:LOADING,payload:false});
      }
      catch(error){
        dispatch({type:LOADING,payload:false});
        console.log('Error while calling getUserAnimal API ', error);
      }
      }
  }