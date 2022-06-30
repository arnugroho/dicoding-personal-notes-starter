import CardCatatan from "./CardCatatan";
import '../styles/style.css'
import {getInitialData} from "../utils";
import React from "react";
import InputCatatan from "./InputCatatan";


function App() {
    const [datas, setDatas] = React.useState([])
    const [initData, setInitData] = React.useState(true)



    React.useEffect(() => {
        if(initData){
            setDatas(getInitialData)
            setInitData(!initData)
        }
        console.log(datas)
    }, [datas])

    const callbackData = (data) => {
        if (data.length < 1) {
            setDatas(datas)
            console.log("1")
        } else {
            setDatas(data)
            console.log("2")
        }
        console.log(data)
    }

    if (datas.length > 0) {
        return (
            <div className="note-app__body">
                <InputCatatan callbackData={(d)=> {callbackData(d)}}/>
                <h2>Catatan Aktif</h2>
                <div className="notes-list">
                    {
                        datas.map((data) => (
                            <CardCatatan catatan={data} key={data.id}/>
                        ))
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="note-app__body">
                <h2>Catatan Aktif</h2>
                <div className="notes-list__empty-message">Catatan TIdak Ada</div>
            </div>
        )
    }
}

export default App