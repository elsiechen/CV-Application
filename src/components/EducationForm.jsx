import { useState } from 'react';
import './components.css'
import  ToggleBtn  from './ToggleBtn'
import DeleteBtn from './DeleteBtn';

export default function EducationForm(
    {
        educations,
        handleChange,
        handleDelete,
        handleNewEduForm
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
                <h2 className='sectionTitle'>Education</h2>
                <ToggleBtn isVisible={isVisible} handleToggle={handleToggle}/>
            </div>
            
            {educations.map(education => (
                <>
                    <div className='toggleContainer'>
                        <h3>{education.school}</h3>
                        <DeleteBtn handleDelete={handleDelete} item={education}/>
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
            <button type='button' className='add' onClick={() => {
                handleNewEduForm();
                setIsVisible(true)}}>+ Education</button>
        </div>
    )
}