import deleteImg from '/delete.png';
import './components.css'

export default function DeleteBtn({handleDelete, education}) {
    return (
        <button type="button" className='deleteBtn'
            onClick={(e) => handleDelete(education.id)}>
            <img src={deleteImg} alt="Delete button" />
        </button>
    )
}