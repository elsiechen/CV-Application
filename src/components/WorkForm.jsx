import { useState } from 'react';
import './components.css'
import  ToggleBtn  from './ToggleBtn'
import DeleteBtn from './DeleteBtn';

export default function WorkForm(
    {
        works,
        handleWorkChange,
        handleWorkDelete,
        handleNewWorkForm
    }
) {
    const keyItems = ['company', 'position', 'location'];
    const keyItems2 = ['startDate', 'endDate'];
    
    const [ isVisible, setIsVisible ] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    } 

    return (
        <div className="form">
            <div className='toggleContainer'>
                <h2 className='sectionTitle'>Work Experience</h2>
                <ToggleBtn isVisible={isVisible} handleToggle={handleToggle}/>
            </div>

            {works.map(work => (
                <>
                    <div className='toggleContainer'>
                        <h3>{work.company}</h3>
                        <DeleteBtn handleDelete={handleWorkDelete} work={work}/>
                    </div>
                    {isVisible && <form key={work.id}>
                    {keyItems.map(keyItem => (
                            <div className="field" key={keyItem}>
                                <label htmlFor={keyItem}>{keyItem}</label>
                                <input value={work[keyItem]}
                                        onChange={(e) => handleWorkChange(e, work.id)}
                                        id={keyItem}/>
                            </div>
                    ))}
                    {keyItems2.map(keyItem => (
                            <div className="field" key={keyItem}>
                                <label htmlFor={keyItem}>{keyItem}</label>
                                <input defaultValue={work[keyItem]}
                                        onChange={(e) => handleWorkChange(e, work.id)}
                                        id={keyItem}
                                        type='date'/>
                            </div>
                        ))}
                    <div className="field" key='description'>
                            <label htmlFor='description'>description</label>
                            <textarea value={work.description}
                                onChange={(e) => handleWorkChange(e, work.id)}
                                id='description'/>
                    </div>
                    {(works.indexOf(work) !== works.length-1)?<hr/> : ''}
                    </form>}
                </>
            ))}
            <button type='button' className='add' onClick={() => {
                handleNewWorkForm();
                setIsVisible(true)}}>+ Work</button>
        </div>
    )
}