import {showFormattedDate} from "../utils";


const CardCatatan = ({catatan}) => {
    return (
        <div>
            <div className="note-item">
                <div className="note-item__content">
                    <div className="note-item__title">{catatan.title}</div>
                    <div className="note-item__date">{showFormattedDate(catatan.createdAt)}</div>

                    <div className="note-item__body">
                        {catatan.body}
                    </div>

                    <div className="note-item__action">
                        <button className="note-item__delete-button">Delete</button>
                        <button className="note-item__archive-button">Arsipkan</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardCatatan