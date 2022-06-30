import CardCatatan from "./CardCatatan";
import '../styles/style.css'
import {getInitialData} from "../utils";
import React from "react";
import InputCatatan from "./InputCatatan";


function App() {
    const [datas, setDatas] = React.useState([])
    const [initData, setInitData] = React.useState(true)
    const [message, setMessage] = React.useState('')


    React.useEffect(() => {
        if (initData) {
            setDatas(getInitialData)
            setInitData(!initData)
        }
        if (message !== '') {
            alert(message)
            setMessage('')
        }
    }, [datas])

    const callbackData = (data) => {
        if (data.length < 1) {
            setDatas(datas)
        } else {
            setDatas(data)
        }
    }

    const callbackDeleteData = (id) => {
        const requiredIndex = datas.findIndex(el => {
            return String(el.id) === String(id);
        });
        if (requiredIndex === -1) {
            setMessage('Tidak ada catatan')
        } else {
            datas.splice(requiredIndex, 1)
            setDatas([...datas])
        }
    }

    if (datas.length > 0) {
        return (<div className="note-app__body">
            <InputCatatan callbackData={(d) => {
                callbackData(d)
            }}/>
            <h2>Catatan Aktif</h2>
            <div className="notes-list">
                {datas.map((data) => (<CardCatatan catatan={data} key={data.id} callbackDeleteData={(i) => {
                    callbackDeleteData(i)
                }}/>))}
            </div>
        </div>)
    } else {
        return (<div className="note-app__body">
            <h2>Catatan Aktif</h2>
            <div className="notes-list__empty-message">Catatan TIdak Ada</div>
        </div>)
    }
}

export default App