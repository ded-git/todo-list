import React from 'react';
import { connect } from 'react-redux';
import { addItemList } from '../../../redux/actions';
import AddingForm from './AddingForm';


const AddingFormContainer = ({ onAddItem ,imgCategories}: {onAddItem: any ,imgCategories: any}) => {
    return(
        <AddingForm  imgCategories={imgCategories} click={onAddItem}/>
    )
}

export default connect(
    (state: any) => ({
        imgCategories: state.imgCatgSrc,
    }),
    dispatch => ({
        onAddItem: (title: string, select: string, content: string) =>
            dispatch(addItemList(title, select, content)),
    })
)(AddingFormContainer);