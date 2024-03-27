import { GET_INJURED_ANIMAL_DETAIL } from "../type";


const initialData = {
    animal:{}
};

export const injuredAnimalDetailReducer = (state=initialData,action) =>{

    switch(action.type){
        case GET_INJURED_ANIMAL_DETAIL:{
            return {
                ...state,
                animal:action.payload.animal
            }
        }
        default:return state
    }
}