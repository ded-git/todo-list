import React from "react";
import ListHeader from './ListHeaders/ListHeaders';
import ListItemContainer from "./ListItems/ListItemContainer";
export type typeListProp = {
    typeList: string;
}
const List = ({typeList}: typeListProp) => {
    return(
        <div className={typeList}>
            <ListHeader typeList={typeList} />
            <ListItemContainer typeList={typeList} />
        </div>
    )
}

export default List;