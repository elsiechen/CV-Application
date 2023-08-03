import './components.css'

export default function EducationForm(
    {
        educations,
        handleChange 
    }
) { 
    const keyItems = ['school', 'degree', 'field', 'location'];
    const keyItems2 = ['startDate', 'endDate'];
    
    return (
        <div className="form">
            <h3>Education</h3>
            {educations.map(education => (
                <form key={education.id}>
                    {/* <div className="field">
                        <label htmlFor='school'>School</label>
                        <input value={education.school}
                                onChange={(e) => handleChange(e, education.id)}
                                id='school'/>
                    </div>
                    <div className="field">
                        <label htmlFor='degree'>Degree</label>
                        <input value={education.degree}
                                onChange={(e) => handleChange(e, education.id)}
                                id='degree'/>
                    </div> */}
                    
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