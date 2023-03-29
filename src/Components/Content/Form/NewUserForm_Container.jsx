import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewUserForm from './NewUserForm';
import { getToken, getPositions } from '../../../Redux/profile_reducer';

let emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;



function NewUserFormContainer(props) {
    useEffect(() => {
        props.getToken();
        props.getPositions();
    }, []);

    return (
        <NewUserForm token={props.token} emailPattern={emailPattern} positions={props.positions}></NewUserForm>
    );

}

let mapStateToProps = (state) => {
    return {
        token: state.profilePage.token,
        positions: state.profilePage.positions

    };
};

let NewUserFormContainerConnected = connect(
    mapStateToProps, { getToken, getPositions })
    (NewUserFormContainer)
export default NewUserFormContainerConnected


