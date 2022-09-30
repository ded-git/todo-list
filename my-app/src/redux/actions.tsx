import { myStore } from "./reducers";

export const addItemList = (inputName: string, selectCategory: string, inputContent: string) => {
    const currentDate = Date().split(' ').splice(0, 4);
    return {
        type: "ADD-ITEM",
        payload: {
            id: myStore.getState().storageNotes.length + 1,
            isEdit: false,
            isArchived: false,
            title: inputName,
            created: `${currentDate[1]} ${currentDate[2]}, ${currentDate[3]}`,
            category: selectCategory,
            content: inputContent,
            dates: inputContent.match(/\d{1,2}\.\d{1,2}\.\d{4}/g)
                ? inputContent.match(/\d{1,2}\.\d{1,2}\.\d{4}/g)
                : [],
        }
    }
}

export const removeItemList = (itemId: number) => ({
    type: "REMOVE-ITEM",
    itemId,
})

export const editItemList = (itemId: number) => ({
    type: "EDIT-ITEM",
    itemId,
})

export const archiveOrNotItemList = (itemId: number) => ({
    type: "ARCHIVE/UNARCHIVE-ITEM",
    itemId,
})

export const saveEditItem = (itemId: number, editTitle: string, editSelector: string, editContent: string) => ({
    type: "SAVE-ITEM",
    itemId,
    editTitle,
    editSelector,
    editContent
})

export const saveEditTitle = (value: number) => ({
    type: "SAVE-TITLE",
    value,
})
export const saveEditSelect = (value: number) => ({
    type: "SAVE-SELECT",
    value,
})
export const saveEditContent = (value: number) => ({
    type: "SAVE-CONTENT",
    value,
})

export const toggleCreateButton = () => ({
    type: "TOGGLE-CREATE",
})