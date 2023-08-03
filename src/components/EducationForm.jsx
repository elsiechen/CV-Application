import { useState } from 'react';
import './components.css'
import collapseArrow from '/collapse-arrow.png'
import expandArrow from '/expand-arrow.png'

export default function EducationForm(
    {
        educations,
        handleChange 
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
                <button type="button" className='toggle'
                    onClick={handleToggle}>
                    <img src={isVisible ? collapseArrow : expandArrow} alt="Expand arrow"/>
                </button>
            </div>
            
            {educations.map(education => (
                isVisible && <form key={education.id}>
                    {console.log(education['startDate'])}
                    {console.log(education['endDate'])}
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
                </form>
            ))}
        </div>
    )
}