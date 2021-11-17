import axios from "axios";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";
import {User} from "./users";

//User Local Backend here till we have AWS RDS setup for team 1 & 2
const urlApi ="" ;

export interface LoginUserAction{
    type: ActionTypes.login;
    payload: User;
}
export interface LogoutUserAction{
    type: ActionTypes.logout;
    payload: User;

}
export interface LoginType{
    username:string;
    password:string;
}

export const loginUser = (user:LoginType) => {
    return async (dispatch: Dispatch) => {
        console.log("In the Action Login !!!"+user)
        const resp = await axios.post<User>(urlApi+"login",user)
        dispatch<LoginUserAction>({
            type: ActionTypes.login,
            payload: resp.data
        })
    }
}
export const logoutUser = () => {
    sessionStorage.clear()
    let user :User = {
        addressLineOne: "",
        addressLineTwo: "",
        city: "",
        dob: "",
        email: "",
        firstName: "",
        gender: "",
        lastName: "",
        password: "",
        phoneNo: "",
        profpic: "",
        relationshipStatus: "",
        role: "",
        user_id: 0,
        username: "",
        zipcode: ""
    }
    return (dispatch: Dispatch) => dispatch<LogoutUserAction>({
        type: ActionTypes.logout,
        payload: user

    })
}