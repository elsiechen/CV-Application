import deleteImg from '/delete.png';
import './components.css'

export default function DeleteBtn({handleDelete, item}) {
    return (
        <button type="button" className='deleteBtn'
            onClick={(e) => handleDelete(item['id'])}>
            <img src={deleteImg} alt="Delete button" />
        </button>
    )
}