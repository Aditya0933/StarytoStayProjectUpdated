import { LOADING } from "../type";

const initialData = {
    loading : false
};

export const loadingReducer=(state=initialData , action)=>{

    switch(action.type)
    {
          case LOADING : {
              return{
                  ...state,
                  loading : action.payload
              }
          }

          default : return state
    }

}