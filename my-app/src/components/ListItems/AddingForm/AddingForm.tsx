import React from 'react';
import { useRef } from 'react';

const AddingForm = ({ click, imgCategories }: {click: any, imgCategories: any}) => {
    console.log(imgCategories, 'cont')

    const title:any = useRef();
    const select:any = useRef();
    const content:any = useRef();

    function addItem(event: any) {
        event.preventDefault();
        try {
            if (title.current.value === ''
                || select.current.value === ''
                || content.current.value === '') {
                throw new Error();
            }
            click(
                title.current.value,
                select.current.value,
                content.current.value
            )
        }
        catch (err) {
            alert("fill all inputs")
        }

        title.current.value = '';
        select.current.value = '';
        content.current.value = '';
    }
    return (

        <form action="#" className="form " onSubmit={(event) => addItem(event)}>
            <input
                ref={title}
                type="text"
                placeholder="title..."
            />
            <label htmlFor="">
                <select
                    ref={select}
                    name="category"
                >
                    {Object.keys(imgCategories).map((el, id) =>
                            <option key={id + "option"} value={el}>{el}</option>)
                        }
                </select>
            </label>
            <textarea
                ref={content}
                name="content"
                cols={30}
                rows={5}
                placeholder="type your note..."
            >
            </textarea>
            <button type="submit">add</button>
        </form >

    )
}

export default AddingForm;