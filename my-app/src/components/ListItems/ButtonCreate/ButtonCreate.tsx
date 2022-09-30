import React from "react";


const ButtonCreate = ({ click, buttonCreate }:{click: any, buttonCreate: any}) => {
    return (
        <button onClick={() => click()}>
            {buttonCreate.active ? buttonCreate.noVal : buttonCreate.yesVal}
        </button>
    )
}

export default ButtonCreate;
