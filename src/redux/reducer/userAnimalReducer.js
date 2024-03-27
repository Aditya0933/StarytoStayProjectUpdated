import {  DELETE_USER_ANIMAL, GET_USER_ANIMAL,  UPDATE_USER_ANIMAL } from "../type";


const initialData = {
    animals:[],
    success:true,
    message:""
};

export const userAnimalReducer = (state=initialData,action) =>{

    switch(action.type){
        case GET_USER_ANIMAL : {
            if(action.payload.success===true){
                return{
                    ...state,
                    animals:action.payload.allAnimal,
                }
            }
            else{
                return{
                    ...state,
                    success:action.payload.success,
                    message:action.payload.message
                }
            }
        }

        case DELETE_USER_ANIMAL: {
            if(action.payload.success===true){
                return{
                    ...state,
                    animals: state.animals?.filter(animal=>{return(animal._id !== action.payload.animal._id)}),
                    success:action.payload.success,
                    message:action.payload.message
                }
            }
            else{
                return{
                    ...state,
                    success:action.payload.success,
                    message:action.payload.message
                }
            }
        }

        case UPDATE_USER_ANIMAL: {
            if (action.payload.success === true) {
                const updatedAnimal = action.payload.animal;
                const updatedAnimals = state.animals?.map(animal => {
                    return animal._id === updatedAnimal._id ? updatedAnimal : animal;
                });
                return {
                    ...state,
                    animals: updatedAnimals,
                    success: action.payload.success,
                    message: action.payload.message
                };
            } 
            else {
                return {
                    ...state,
                    success: action.payload.success,
                    message: action.payload.message
                };
            }
        }
        
        
         default:return state
    }
}