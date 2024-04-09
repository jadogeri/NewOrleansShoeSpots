
import { error } from "../actionTypes/errorTypes";


const tryLocalSignin = (dispatch) => {
    return  async () => {
      console.log('from try local sign in');

        const dataString = localStorage.getItem('token');
        console.log("(13) AuthContext : data as string format................ " + JSON.stringify(dataString));
        
        if(dataString)
         dispatch({ type: 'TRY_LOCAL_SIGN_IN', payload: JSON.stringify(dataString) })    
    }
}
const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_error_messade' })
    }
}

const replacePassword = (dispatch) => {
    return async ({ username }) => {
        try {
            const response = await authApi.post('signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'SIGN_UP', payload: response.data.token });
          

        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign up" })
        }

    }
}

const clearAuthStorage = (dispatch) =>{
    return async (token) => {      
        try {      
                         
            console.log('before dispatch token  ===  ' + token);    

            dispatch({ type: 'CLEAR_AUTH_STORAGE', payload: token});           
         
        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign in" })
           
        }
    }

}
// const signin = (dispatch) => {
//     let response = {}
//     return async (username,password) => {      
//         try {               
//             console.log('before dispatch ===  ' + JSON.stringify({username,password}));    
//             response = await proxyApi.post("/login",{username,password});
//             const {data} = response;

//             if(data?.code == 200){
//                 console.log("valid token in auth actions");
//                 dispatch({ type: 'SIGN_IN', payload: {data : data}});      
//             }
              
//         } catch (err) {
//             console.log("error invalid === " + e);
            
//             dispatch({ type: 'INVALID_USERNAME_OR_PASSWORD',
//                        payload : { data : {code : "500",errorMessage : "Unable to login, please check username and password"} } });  
//         } finally{
//             return response
//         }      
//     }
// }
const signin = (dispatch) => {
    return async (data) => {      
        console.log("print data with error to dispatch ===",JSON.stringify(data))
        try {     
            if(data.code == 200){ 
            /**
             * TODO
             * save all data for now in local storage,
             * in the future , I am saving only username, expiration date,  token
             */
                localStorage.setItem("token",JSON.stringify(data));      
        //update state with dispatch       
            /**
             * TODO
             * save user data now in local storage till mongodb server is fixed,
             * in the future , I will save all data to mongo db
             */
           
                dispatch({ type: 'SIGN_IN', payload: {data : data}});  
            }else{

                dispatch({ type: 'INVALID_USERNAME_OR_PASSWORD',
                payload : { data : {code : data.code,errorMessage : "Unable to login, please check username and password"} } });
                alert("Error in login wron username or password ");
                //return 1/0
            }
                        
        } catch (err) {
            console.log("error invalid === " + e);          
        } 
    }
}

const signout = (dispatch) => {
    return async () => {
        try {      
            //get username and token from local storage
            const storage = localStorage.getItem("token");
            //deserialize and parse string
            const data = JSON.parse(localStorage.getItem("token"));
            const {username, token} = data;
            const response = await flaskApi.post('/logout', {username, token});
            console.log("AuthContext.js response object of logout == ",JSON.stringify(response));
            localStorage.removeItem('token');     
            dispatch({ type: 'SIGN_OUT'});                   

        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign in" })
        }
    }
}

const changeJur = (dispatch) => {
    return async (jur ) => {      
        try {      
            dispatch({ type: 'CHANGE_JUR', payload: {jur}});           
            console.log('changing jurisdiction ===  ' + jur);    
         
        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign in" })
           
        }
    }
}

const changeTaxYear = (dispatch) => {
    return async (taxyear) => {      
        try {      
            dispatch({ type: 'CHANGE_TAX_YEAR', payload: {taxyear}});           
            console.log('changing tax year ===  ' + taxyear);    
         
        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign in" })
           
        }
    }
}

/**
 * @description Get Notification Email For Forgotten Password
 * @route   GET /api/opao/forgot_password
 * @access public
 */

const forgot_password = asyncHandler(async function(req, res){
    // try{    
    //     const username = req.body.username;        
    //     console.log("username === " + username);

    //     const response = await flasKApi.get('/forgot_password',{username : username});
    //     if(response){
    //         res.status(200).send(response);
    //     }   
    // }catch(e){
    //     console.log(e);
    //     res.status(404);
    //     throw new Error(`Error trying to login`);
    // }    


    try{

        console.log("line ....................114 flask api")
    const username = req.body.username;
    
    console.log("username === " + username,);

    const response = await flaskApi.get('/forgot_password',{username : username});
    if(response){
        const {data} = response;
        console.log(JSON.stringify(data))
        //console.log("RESPONSE \n",response)
       // let responseJSON = response.json();
        res.status(200).send(data);
    }   
}catch(e){
    console.log(e);
    res.status(404);
    throw new Error(`Error trying to login`);
}
});


/**
 * @description Login specific user session
 * @route   POST /api/opao/login
 * @access private
 */

const reset_password = asyncHandler(async function(req, res){
    try{    
        const username = req.body.username;
        const password = req.body.password;
        
        console.log("username === " + username,"  password ===  " + password);

        const response = await flaskApi.post('/reset_password',{username : username,password : password, token : null});
        if(response){
            res.status(200).send(response.data);
        }   
    }catch(e){
        console.log(e);
        res.status(404);
        throw new Error(`Error trying to login`);
    }    
});

/**
 * @description Get user data from mongoDB
 * @route   GET /api/get_user_data
 * @access public
 */

const get_user_data = (dispatch) =>{

    return async (token) => {   
    try{       
        console.log("token === " + token);

        const response = await flaskApi.get('/get_user_data',{token : token});
        if(response){
            const {data} = response;
            console.log(JSON.stringify(data))
            //console.log("RESPONSE \n",response)
        // let responseJSON = response.json();
        }   
    }catch(e){
        console.log(e);
        res.status(404);
        throw new Error(`Error trying to login`);
    }
}};

/**
 * @description Set user data
 * @route   POST /api/set_user_data
 * @access private
 */

const set_user_data = (dispatch) =>{

    return async (data) => {      

    try{               
        console.log("user data to be set in mongodb == ",JSON.stringify(data));

        const response = await flaskApi.post('/set_user_data',{...data});
        if(response){
            const {data} = response;
            console.log(JSON.stringify(data));
        }   
    }catch(e){
        console.log(e);
      
    }    
}
}

export {tryLocalSignin, clearAuthStorage, signin, signout, clearErrorMessage, replacePassword,
        changeJur, changeTaxYear, set_user_data, get_user_data};