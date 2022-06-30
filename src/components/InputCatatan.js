
import {useEffect, useState} from "react";

const InputCatatan = () => {

    const [catatan, setCatatan] = useState({
        id: '',
        title: '',
        body: '',
        archived: false,
        createdAt: ''
    })

    const onChangeInput = event =>{
        const {name, value} = event.target;
        setCatatan(prevState => ({...prevState, [name]: value}));
    }

    const onBuatCatatan = () => {
        setCatatan(prevState => ({...prevState, ['id']: +new Date(), ['createdAt']: ''+new Date()}));
    }

    useEffect(() => {
        console.log(catatan)
    },[catatan])

    return (
        <div className="note-input">
            <div className="note-input__title">
                input
            </div>
            <div className="note-input__title__char-limit">
                .... nilai
            </div>
            <div className="note-input__body">
                <form>
                    <input onChange={onChangeInput} value={catatan.title} name="title"/>
                    <textarea onChange={onChangeInput} value={catatan.body} name={"body"}></textarea>
                    <button type="button" onClick={onBuatCatatan}>Buat</button>
                </form>
            </div>
        </div>
    )

}

export default InputCatatan