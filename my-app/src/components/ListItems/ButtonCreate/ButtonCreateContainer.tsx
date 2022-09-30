import React from "react";
import ButtonCreate from "./ButtonCreate";
import { connect } from "react-redux";
import { toggleCreateButton } from "../../../redux/actions";


const ButtonCreateContainer = ({buttonCreate, onButtonCreate}: {buttonCreate: any, onButtonCreate: any}) => {
    return(
        <ButtonCreate click={onButtonCreate} buttonCreate={buttonCreate}/>
    )
}
export default connect(
    (state: any) => ({
        buttonCreate: state.buttonCreate,
    }),
    dispatch => ({
        onButtonCreate: () => dispatch(toggleCreateButton()),
    })
)(ButtonCreateContainer);