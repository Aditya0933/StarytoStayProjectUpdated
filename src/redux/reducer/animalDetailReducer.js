import { GET_ANIMAL_DETAIL } from "../type";


const initialData = {
    animal:{}
};

export const animalDetailReducer = (state=initialData,action) =>{

    switch(action.type){
        case GET_ANIMAL_DETAIL:{
            return {
                ...state,
                animal:action.payload.animal
            }
        }
        default:return state
    }
}