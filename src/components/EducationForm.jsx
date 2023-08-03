import './components.css'

export default function EducationForm(
    {
        educations,
        handleChange 
    }
) { 
    return (
        <div className="form">
            <h3>Education</h3>
            {educations.map(education => (
                <form key={education.id}>
                    <div className="field">
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
                    </div>
                    {(educations.indexOf(education) !== educations.length-1)?<hr/> : ''}
                </form>
                
            ))}
        </div>
    )
}