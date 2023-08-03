import { useState } from 'react'
import './App.css'
import GeneralForm from './components/GeneralForm'
import Report from './components/Report'
import EducationForm from './components/EducationForm'
import { initialGeneral, initialEducations } from './components/data'

function App() {
  const [ general, setGeneral ] = useState(initialGeneral);
  const [ educations, setEducations ] = useState(initialEducations);
  
  const schoolChange = (e, id) => {
    console.log(e.target)
    e.preventDefault();
    setEducations(educations.map(education => {
      return (education.id === id)?
        {...education, school: e.target.value}: education
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
          schoolChange={schoolChange}/>
      </div>
      <div className='report'>
        <Report general={general} 
                educations={educations}/>
      </div>
    </div>
  )
}

export default App
