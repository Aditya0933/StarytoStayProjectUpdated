import { BASE_URL } from "../baseURL";
import { ADD_INJURED_ANIMAL, DELETE_INJURED_ANIMAL, DELETE_USER_INJURED_ANIMAL, GET_ALL_INJURED_ANIMAL, GET_INJURED_ANIMAL_DETAIL, GET_USER_INJURED_ANIMAL, LOADING, UPDATE_INJURED_ANIMAL, UPDATE_USER_INJURED_ANIMAL } from "../type";



export const addInjuredAnimal = (animal) => {
    return async(dispatch) => {
        dispatch({type:LOADING,payload:true});
      try{
          const data = await fetch(`${BASE_URL}/api/v1/injuredAnimals/addInjuredAnimal`,
          {
              method:"POST",
              headers:{
                  'Authorization': localStorage.getItem("token")
              },
              body: animal
          });
          const animaldata = await data.json();
          dispatch({type:ADD_INJURED_ANIMAL, payload:animaldata});
          dispatch({type:LOADING,payload:false});
      }
      catch(error){
        dispatch({type:LOADING,payload:false});
        console.log('Error while calling addInjuredAnimal API ', error);
      }
      }
  }


  export const getAllInjuredAnimal = () => {
    return async(dispatch) => {
        dispatch({type:LOADING,payload:true});
      try{
          const data = await fetch(`${BASE_URL}/api/v1/injuredAnimals/getAllInjuredAnimals`,
          {
              method:"GET",
              headers:{
                  'Content-Type': "application/json",
                  'Authorization': localStorage.getItem("token"),
              }
          });
          const animaldata = await data.json();
          dispatch({type:GET_ALL_INJURED_ANIMAL, payload:animaldata});
          dispatch({type:LOADING,payload:false});
      }
      catch(error){
        dispatch({type:LOADING,payload:false});
        console.log('Error while calling getAllInjuredAnimal API ', error);
      }
      }
  }



  export const updateInjuredAnimal = (animal) => {
    return async(dispatch) => {
        dispatch({type:LOADING,payload:true});
      try{
          const data = await fetch(`${BASE_URL}/api/v1/injuredAnimals/updateInjuredAnimal/${animal._id}`,
          {
              method:"PUT",
              headers:{
                  'Content-Type': "application/json",
                  'Authorization': localStorage.getItem("token"),
              },
              body: JSON.stringify(animal)
          });
          const animaldata = await data.json();
          dispatch({type:UPDATE_INJURED_ANIMAL, payload:animaldata});
          dispatch({type:UPDATE_USER_INJURED_ANIMAL, payload:animaldata});
          dispatch({type:LOADING,payload:false});
      }
      catch(error){
        dispatch({type:LOADING,payload:false});
        console.log('Error while calling updateInjuredAnimal API ', error);
      }
      }
  }
  

  export const deleteInjuredAnimal = (id,imageUrl) => {
    return async(dispatch) => {
        dispatch({type:LOADING,payload:true});
      try{
          const data = await fetch(`${BASE_URL}/api/v1/injuredAnimals/deleteInjuredAnimal/${id}?imageUrl=${imageUrl}`,
          {
              method:"DELETE",
              headers:{
                  'Content-Type': "application/json",
                  'Authorization': localStorage.getItem("token"),
              }
          });
          const animaldata = await data.json();
          dispatch({type:DELETE_INJURED_ANIMAL, payload:animaldata});
          dispatch({type:DELETE_USER_INJURED_ANIMAL, payload:animaldata});
          dispatch({type:LOADING,payload:false});
      }
      catch(error){
        dispatch({type:LOADING,payload:false});
        console.log('Error while calling deleteInjuredAnimal API ', error);
      }
      }
  }


  export const getUserInjuredAnimal = () => {
    return async(dispatch) => {
        dispatch({type:LOADING,payload:true});
      try{
          const data = await fetch(`${BASE_URL}/api/v1/injuredAnimals/getUserInjuredAnimal`,
          {
              method:"GET",
              headers:{
                  'Content-Type': "application/json",
                  'Authorization': localStorage.getItem("token"),
              }
          });
          const animaldata = await data.json();
          dispatch({type:GET_USER_INJURED_ANIMAL, payload:animaldata});
          dispatch({type:LOADING,payload:false});
      }
      catch(error){
        dispatch({type:LOADING,payload:false});
        console.log('Error while calling getUserInjuredAnimal API ', error);
      }
      }
  }


  export const getInjuredAnimalDetail = (id) => {
    return async(dispatch) => {
        dispatch({type:LOADING,payload:true});
      try{
          const data = await fetch(`${BASE_URL}/api/v1/injuredAnimals/getInjuredAnimalDetail/${id}`,
          {
              method:"GET",
              headers:{
                  'Content-Type': "application/json",
                  'Authorization': localStorage.getItem("token"),
              }
          });
          const animaldata = await data.json();
          dispatch({type:GET_INJURED_ANIMAL_DETAIL, payload:animaldata});
          dispatch({type:LOADING,payload:false});
      }
      catch(error){
        dispatch({type:LOADING,payload:false});
        console.log('Error while calling getInjuredAnimalDetail API ', error);
      }
      }
  }