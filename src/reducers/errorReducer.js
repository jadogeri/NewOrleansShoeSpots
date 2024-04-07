import initialState from "../data/initialState"

const authReducer = (state, action) => {
    switch (action.type) {
          
        case 'SIGN_IN':
            console.log("new data from ltc === ",JSON.stringify(action.payload.data ));
           let user_storage_data = {};
            /**
             * TODO
             * will replace saving data to localstorage.setItem with set_user_data to mongodb
             * will replace saving data to localstorage.getItem with get_user_data to mongodb
             */
            //get user data as json from local storage
            const storage = localStorage.getItem("user_data");
            // convert user data to object with parse
            const user_data = JSON.parse(storage);
            // get payload data
            const data = action.payload.data
            // update old user data from storage and save it back to local storage
            if(user_data){
                user_storage_data = {...user_data, ...data,errorMessage :  null,isLoading : false, isLoggedIn : true}
            }else{
                user_storage_data = {...initialState, ...data,errorMessage :  null,isLoading : false, isLoggedIn : true}
            }
            localStorage.setItem("user_data",JSON.stringify(user_storage_data));

            //update state using action.payload.data then clear message
            console.log("inside sign in reducer  data === ",JSON.stringify({data}));

            const new_state_data = {...state,...data, errorMessage :  null,isLoading : false, isLoggedIn : true}
            console.log("new state in reducer auth ==== ",JSON.stringify(new_state_data))
            return new_state_data;
        case 'SIGN_OUT':
            return {... state, 
                userName : null, 
                userId : null,
                token : null,
                taxyear :  (new Date().getFullYear()) + 1,
                roles : [],
                errorMessage : '', 
                isLoading :  true,
                expiration : null , 
                jur : 1,
                sub_data : [],  // subset of full data based on jurisdiction 
                full_data : [], // full data of all valid parid and tax year (except invalid parid or tax year)
                error_data : [] // error array due to invalid parid or tax year
            } 
        case 'RETRIEVE_TOKEN':
            return { ...state, token: action.payload.token,userName: action.payload.userName}
        case 'CLEAR_AUTH_STORAGE':
            console.log("initial auth state to reset context === " + JSON.stringify(initialAuthState));
            return {...state, ...initialAuthState}
        case "TRY_LOCAL_SIGN_IN":
            //console.log("try local DATA === "+ action.payload);
            //let newdata = JSON.parse(action.payload)
            return {...state,  isLoading : false}   
        case "INVALID_USERNAME_OR_PASSWORD":
            return {...state, errorMessage : action.payload.data.message}
        case 'CHANGE_JURISDICTION':
            if (action.payload.jur < 1 || action.payload.jur > 7)
                return state
            return { ...state, jur : action.payload.jur};
                
        case 'CLEAR_TOKEN':
            return {...state, token: null, userName: '' }
        case 'CHANGE_JUR':  
        console.log("storage before jur change............"+JSON.parse(localStorage.getItem("token")))  
        console.log("result change jur " +JSON.stringify({...state,...JSON.parse(localStorage.getItem("token")), jur : action.payload.jur}))

            state =  {...state,...JSON.parse(localStorage.getItem("token")), jur : action.payload.jur};
            console.log("new state " +JSON.stringify(state));
            localStorage.setItem("token",JSON.stringify(state));
            console.log("new auth key " +localStorage.getItem("token"));
            return state;
        case  'CHANGE_TAX_YEAR':
            console.log("storage before tax year change............"+JSON.parse(localStorage.getItem("token"))) 
            console.log("new tax year " + action.payload.taxyear);
            console.log("result change tax year " +JSON.stringify({...state,...JSON.parse(localStorage.getItem("token")), taxyear : action.payload.taxyear}))

            state =  {...state,...JSON.parse(localStorage.getItem("token")), taxyear : action.payload.taxyear};
            console.log("new state " +JSON.stringify(state));
            localStorage.setItem("token",JSON.stringify(state));
            console.log("new auth key " +localStorage.getItem("token"));
            return state     

        default: 
         return state;
    }
}


export default authReducer;