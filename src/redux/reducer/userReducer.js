import { USER_LOGIN, USER_REGISTER, USER_UPDATE } from "../type";

const initialData = {
    message:'',
    success:undefined
};

export const userReducer = (state=initialData , action)=>{

     switch(action.type)
     {
         case USER_LOGIN : {
            if(action.payload.success===true){
                localStorage.setItem('token' ,action.payload.token )
                localStorage.setItem('user' ,JSON.stringify(action.payload.user) )
                setTimeout(() => {
                    window.location.href='/StrayToStay-frontend'
                  }, 2000);
            }
             return{
                 ...state,
                message:action.payload.message,
                success:action.payload.success
             }
         }

         case USER_REGISTER : {
            if(action.payload.success===true){
                localStorage.setItem('token' ,action.payload.token )
                localStorage.setItem('user' ,JSON.stringify(action.payload.user) )
                setTimeout(() => {
                    window.location.href='/StrayToStay-frontend'
                  }, 2000);
            }
             return{
                 ...state,
                 message:action.payload.message,
                 success:action.payload.success
             }
         }

         case USER_UPDATE : {
            if(action.payload.success===true){
                localStorage.setItem('user' ,JSON.stringify(action.payload.user) )
            }
            return{
                ...state,
                message:action.payload.message,
                success:action.payload.success
            }
         }
         
         default:return state
     }

}
