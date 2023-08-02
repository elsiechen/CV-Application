import './components.css'

export default function EducationForm(
    {
        educations,
        schoolChange 
    }
) {
    return (
        <div className="form">
            <h3>Education</h3>
            {educations.map(education => (
                <form key={education.school}>
                    <div className="field">
                        <label htmlFor='school'>School</label>
                        <input value={education.school}
                                onChange={schoolChange}
                                id='school'/>
                    </div>
                    <div className="field">
                        <label htmlFor='degree'>Degree</label>
                        <input value={education.degree}
                                // onChange={degreeChange}
                                id='degree'/>
                    </div>
                    {(educations.indexOf(education) !== educations.length-1)?<hr/> : ''}
                </form>
                
            ))}
        </div>
    )
}