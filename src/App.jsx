import { useState } from 'react'
import './App.css'
import GeneralForm from './components/GeneralForm'
import Report from './components/Report'
import EducationForm from './components/EducationForm'
import { initialGeneral, initialEducations } from './components/data'
import { v4 as uuid } from 'uuid'

function App() {
  const [ general, setGeneral ] = useState(initialGeneral);
  const [ educations, setEducations ] = useState(initialEducations);
  
  const handleDelete = (id) => {
    const newEducations = educations.filter(education => {
      return education.id !== id;
    })
    setEducations(newEducations);
  }

  const handleNewEduForm = () => {
    const newEudcation = {
      id: uuid(),
      school: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      location: ''
    };
    setEducations([...educations, newEudcation]);
  }

  const handleChange = (e, id) => {
    e.preventDefault();
    setEducations(educations.map(education => {
      const key = e.target.id;
      let updatedObject;
      switch (key) {
        case 'school':
          updatedObject =  {...education, school: e.target.value};
          break;
        case 'degree':
          updatedObject =  {...education, degree: e.target.value};
          break;  
        case 'field':
            updatedObject =  {...education, field: e.target.value};
            break; 
        case 'startDate':
            updatedObject =  {...education, startDate: e.target.value};
            break; 
        case 'endDate':
            updatedObject =  {...education, endDate: e.target.value};
            break;
        case 'location':
            updatedObject =  {...education, location: e.target.value};
            break;
      }
      return (education.id === id)? updatedObject : education
    }))
  }

  return (
    <div className='container'>
      <div className='forms'>
        <GeneralForm general={general} 
          nameChange={(e) => setGeneral({...general, fullName: e.target.value})}
          emailChange={(e) => setGeneral({...general, email: e.target.value})}
          phoneChange={(e) => setGeneral({...general, phone: e.target.value})}
          addressChange={(e) => setGeneral({...general, address: e.target.value})}/>
        <EducationForm educations={educations} 
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleNewEduForm={handleNewEduForm}/>
      </div>
      <div className='report'>
        <Report general={general} 
                educations={educations}/>
      </div>
    </div>
  )
}

export default App
