import axios from 'axios';
import { IUser } from '../Store/types';
import { LOGIN_USER } from './ActionTypes';

interface UserLogin{
    username: string,
    password: string
}

export const loginUser = (user:UserLogin) => async (dispatch:any) => {
    let loggedIn: IUser;

    try{
        const res = await axios.post('http://ec2-54-177-228-183.us-west-1.compute.amazonaws.com:8080/user/login', user);
        console.log(res.data)

        loggedIn = {
            id: res.data.id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            email: res.data.email,
            username: res.data.username,
            password: res.data.password,
            dateofbirth:res.data.dateofbirth,
            addresslineone:res.data.addresslineone,
            addresslinetwo:res.data.addresslinetwo,
            zipcode:res.data.zipcode,
            city:res.data.city,
            phoneno:res.data.phoneno,
            profilepic:res.data.profilepic,
            relationshipstatus:res.data.relationshipstatus,
            userRole:res.data.userRole,
            gender: res.data.gender,
        }

        return dispatch({
            type: LOGIN_USER,
            payload: loggedIn
        });
    } catch(e){
        console.log(e);

        loggedIn = {
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
            
        }

        return dispatch({
            type: LOGIN_USER,
            payload: loggedIn
        });
    }
}