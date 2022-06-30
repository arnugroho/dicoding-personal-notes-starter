import CardCatatan from "./CardCatatan";
import '../styles/style.css'
import {getInitialData, getInitialDataEmpty} from "../utils";
import React from "react";
import InputCatatan from "./InputCatatan";


function App() {
    const [datas, setDatas] = React.useState([])

    React.useEffect(() => {
        setDatas(getInitialData)
    }, [datas])

    if (datas.length > 0) {
        return (

            <body className="note-app__body">

            <InputCatatan/>

            <h2>Catatan Aktif</h2>
            <div className="notes-list">
                {
                    datas.map((data) => (
                        <CardCatatan catatan={data} key={data.id}/>
                    ))
                }
            </div>
            </body>
        )
    } else {
        return (
            <body className="note-app__body">
            <h2>Catatan Aktif</h2>
            <div className="notes-list__empty-message">Catatan TIdak Ada</div>
            </body>
        )
    }
}

export default App