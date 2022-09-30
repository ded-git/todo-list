import { store } from "../store";
import { createStore } from "redux";

function addingItemReducer(state = store, action: any) {
    switch (action.type) {
        case 'ADD-ITEM':
            return {
                ...state,
                storageNotes: [...state.storageNotes, action.payload]
            }
        case 'REMOVE-ITEM':
            return {
                ...state,
                storageNotes: state.storageNotes.filter(el => el.id !== action.itemId)
            };
        case "EDIT-ITEM":
            return {
                ...state,
                storageNotes: state.storageNotes.map(el => el.id === action.itemId ? { ...el, isEdit: !el.isEdit } : el)
            }
        case "ARCHIVE/UNARCHIVE-ITEM":
            return ({
                ...state,
                storageNotes: state.storageNotes.map(el => el.id === action.itemId ? { ...el, isArchived: !el.isArchived } : el)
            })
        case "SAVE-TITLE":
            return ({
                ...state,
                editInputs: { ...state.editInputs, editTitle: action.value }
            });
        case "SAVE-SELECT":
            return ({
                ...state,
                editInputs: { ...state.editInputs, editSelector: action.value }
            });
        case "SAVE-CONTENT":
            return ({
                ...state,
                editInputs: { ...state.editInputs, editContent: action.value }
            });
        case "SAVE-ITEM":
            return {
                ...state,
                storageNotes: state.storageNotes.map(el =>
                    el.id === action.itemId
                        ? {
                            ...el,
                            isEdit: !el.isEdit,
                            title: action.editTitle ? action.editTitle : el.title,
                            category: action.editSelector ? action.editSelector : el.category,
                            content: action.editContent ? action.editContent : el.content,
                            dates: action.editContent.match(/\d{1,2}\.\d{1,2}\.\d{4}/g) || [],
                        }
                        : el)
            }
        case "TOGGLE-CREATE":
            return ({
                ...state,
                buttonCreate: {
                    ...state.buttonCreate,
                    active: !state.buttonCreate.active
                },
            })
        default:
            return state;
    }
}

export const myStore = createStore(addingItemReducer);