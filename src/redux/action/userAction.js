import { BASE_URL } from "../baseURL";
import { LOADING, USER_LOGIN, USER_UPDATE } from "../type";


export const loginUser = (user)=>{
    return async (dispatch)=>{
        dispatch({type:LOADING,payload:true})
      try{
          const data = await fetch(`${BASE_URL}/api/v1/users/login`,
          {
              method:"POST",
              headers:{
                  'Content-Type': "application/json"
              },
              body: JSON.stringify(user)
          });
          const userdata = await data.json();
          dispatch({type:USER_LOGIN, payload:userdata})
          dispatch({type: LOADING , payload:false})
      }
      catch(error){
        console.log('Error while calling loginUser API', error);
        dispatch({type: LOADING , payload:false})
      }
    }
  }


  export const userRegister=(user)=>{
    return async (dispatch)=>{
        dispatch({type: LOADING , payload:true})
        try {
            const data = await fetch(`${BASE_URL}/api/v1/users/register`,
            {
                method:"POST",
                body: user
            });
            const userdata = await data.json();
            dispatch({type:USER_LOGIN, payload:userdata})
            dispatch({type: LOADING , payload:false})
            
        } catch (error) {
            console.log(error)
            dispatch({type: LOADING , payload:false})
        }
    }
}


export const userUpdate=(user)=>{
    return async (dispatch)=>{
        dispatch({type: LOADING , payload:true})
        try {
            const data = await fetch(`${BASE_URL}/api/v1/users/update-user`,
            {
                method:"PUT",
                headers:{
                    'Authorization': localStorage.getItem("token")
                },
                body: user
            });
            const userdata = await data.json();
            dispatch({type:USER_UPDATE, payload:userdata})
            dispatch({type: LOADING , payload:false})
            
        } catch (error) {
            console.log(error)
            dispatch({type: LOADING , payload:false})
        }
    }
}

