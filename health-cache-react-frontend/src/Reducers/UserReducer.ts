import { IUser } from "../Store/types";
import { LOGIN_USER } from "../Actions/ActionTypes";

let initialState: IUser = {
            id: -1,
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
            dateofbirth:new Date(),
            addresslineone:'',
            addresslinetwo:'',
            zipcode:-1,
            city:'',
            phoneno:'',
            profilepic:'',
            relationshipstatus:{id:0,type:''},
            userRole:{id:0,type:''},
            gender:{id:0,type:''},
};

type Action = {type: string, payload: IUser};

export const userReducer = (state: IUser = initialState, action:Action) => {

    switch(action.type){
        case LOGIN_USER:
            initialState = action.payload;
            console.log(initialState);
            return {
                ...initialState
            }
            default:
                return state;
    }
}
