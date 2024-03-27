import { ADD_INJURED_ANIMAL, DELETE_INJURED_ANIMAL, GET_ALL_INJURED_ANIMAL, UPDATE_INJURED_ANIMAL } from "../type";


const initialData = {
    animals:[],
    success:true,
    message:""
};

export const injuredAnimalReducer = (state=initialData , action)=>{

     switch(action.type)
     {
        case ADD_INJURED_ANIMAL : {
            if(action.payload.success===true){
                return{
                    ...state,
                    animals:[ action.payload.animal,...state.animals],
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

        case GET_ALL_INJURED_ANIMAL : {
            if(action.payload.success===true){
                return{
                    ...state,
                    animals:action.payload.animals,
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

        case DELETE_INJURED_ANIMAL: {
            if(action.payload.success===true){
                return{
                    ...state,
                    animals: state.animals.filter(animal=>{return(animal._id !== action.payload.animal._id)}),
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

        case UPDATE_INJURED_ANIMAL: {
            if(action.payload.success===true){
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
            else{
                return{
                    ...state,
                    success:action.payload.success,
                    message:action.payload.message
                }
            }
        }
         default:return state
     }

}
