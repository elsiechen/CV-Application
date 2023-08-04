import { useState } from 'react';
import './components.css'
import ToggleBtn from './ToggleBtn';
import deleteImg from '/delete.png'

export default function EducationForm(
    {
        educations,
        handleChange ,
        handleDelete
    }
) { 
    const keyItems = ['school', 'degree', 'field', 'location'];
    const keyItems2 = ['startDate', 'endDate'];
    
    const [ isVisible, setIsVisible ] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    } 

    return (
        <div className="form">
            <div className='toggleContainer'>
                <h3>Education</h3>
                <ToggleBtn isVisible={isVisible} handleToggle={handleToggle}/>
            </div>
            
            {educations.map(education => (
                <>
                <div className='toggleContainer'>
                    <h3>{education.school}</h3>
                    <button type="button" className='deleteBtn'
                         onClick={(e) => handleDelete(education.id)}>
                        <img src={deleteImg} alt="Delete button" />
                    </button>
                </div>
                {isVisible && <form key={education.id}>
                    {keyItems.map(keyItem => (
                        <div className="field" key={keyItem}>
                            <label htmlFor={keyItem}>{keyItem}</label>
                            <input value={education[keyItem]}
                                    onChange={(e) => handleChange(e, education.id)}
                                    id={keyItem}/>
                        </div>
                    ))}
                    {keyItems2.map(keyItem => (
                        <div className="field" key={keyItem}>
                            <label htmlFor={keyItem}>{keyItem}</label>
                            <input defaultValue={education[keyItem]}
                                    onChange={(e) => handleChange(e, education.id)}
                                    id={keyItem}
                                    type='date'/>
                        </div>
                    ))}
                    {(educations.indexOf(education) !== educations.length-1)?<hr/> : ''}
                </form>}
                </>
            ))}
        </div>
    )
}