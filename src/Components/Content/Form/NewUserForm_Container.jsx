import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewUserForm from './NewUserForm';
import { getToken, getPositions, setSectionName, registerUser, getUserCards } from '../../../Redux/profile_reducer';

let emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;



function NewUserFormContainer({ getToken, getPositions, ...props }) {
    useEffect(() => {
        getToken();
        getPositions();
    }, [getToken, getPositions]);

    return (
        <NewUserForm
            setSectionName={props.setSectionName} token={props.token}
            emailPattern={emailPattern} positions={props.positions}
            registerUser={props.registerUser} getUserCards={props.getUserCards}>
        </NewUserForm>
    );

}

let mapStateToProps = (state) => {
    return {
        token: state.profilePage.token,
        positions: state.profilePage.positions
    };
};

let NewUserFormContainerConnected = connect(
    mapStateToProps, { getToken, getPositions, setSectionName, registerUser, getUserCards })
    (NewUserFormContainer)
export default NewUserFormContainerConnected


