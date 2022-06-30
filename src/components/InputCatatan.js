
import {useEffect, useState} from "react";

const InputCatatan = (props) => {

    const [catatan, setCatatan] = useState({
        id: '',
        title: '',
        body: '',
        archived: false,
        createdAt: ''
    })
    const inputConfig = {
        maxTitle: 5
    }

    const [callData, setCallData] = useState(false)

    const onChangeInput = event =>{
        const {name, value} = event.target;
        if(validation(name)) {
            setCatatan(prevState => ({...prevState, [name]: value}));
        }
    }

    const validation = (name) => {
        let isValid = true;
        if(catatan.title.length === inputConfig.maxTitle && name === "title") {
            isValid =  false
        }
        return isValid
    }

    const onBuatCatatan = () => {
        setCatatan(prevState => ({...prevState, ['id']: +new Date(), ['createdAt']: ''+new Date()}));
        setCallData(!callData)
    }

    useEffect(() => {
        if (callData) {
            props.callbackData(prev => [...prev, catatan])
            setCallData(!callData)
        }

        console.log(catatan)
    },[catatan])

    return (
        <div className="note-input">
            <div className="note-input__title">
                Buat Catatan
            </div>
            <div className="note-input__title__char-limit">
                Sisa Karakter : {inputConfig.maxTitle - catatan.title.length}
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