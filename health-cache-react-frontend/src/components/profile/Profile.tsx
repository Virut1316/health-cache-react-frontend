import React from 'react';
import {User} from "../../redux/actions";
import {StoreState} from "../../redux/reducers";
import {connect} from "react-redux";

interface ProfileProps{
    userLogin: User;
}

const _Profile:React.FC<ProfileProps> = (props) => {
    return (
        <div>User Profile/Updating Form Here!!</div>
    );
}


const mapStateToProps = ({userLogin}: StoreState): { userLogin: User } => {
    return {userLogin}
}


export const Profile = connect(
    mapStateToProps,
    {}
)(_Profile)

