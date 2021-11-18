import internal from "stream";

export interface IUser{
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    username: string,
    password: string,
    dateofbirth:Date,
    addresslineone:string,
    addresslinetwo:string,
    zipcode:number,
    city:String,
    phoneno:string,
    profilepic:string,
    relationshipstatus:object,
    userRole:object,
    gender: object,
}

export type AppState = {
    user: IUser;
}