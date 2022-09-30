import React from "react";
import { typeListProp } from "../List";

const ListHeader = ({ typeList }: typeListProp) => {
    return (
        <div className="header">
            {typeList === "list"
                && <>
                    <p>Name</p>
                    <p>Create</p>
                    <p>Category</p>
                    <p>Content</p>
                    <p>Dates</p>
                    <div className="icon-btn-wrapper">
                        <img className="icon icon-black" src="/icons/archive.png" alt="icon" />
                        <img className="icon icon-black" src="/icons/delete.png" alt="icon" />
                    </div>
                </>
            }
            {typeList === "category"
                && <>
                    <p>Note Category</p>
                    <p></p>
                    <p>Active</p>
                    <p style={{ "paddingRight": "100px" }}>Archived</p>
                    <p></p>
                    <p></p>
                </>
            }
            {typeList === "archive"
                && <p>Archive</p>
            }
        </div>
    )
}

export default ListHeader;