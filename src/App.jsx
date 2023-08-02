import { useState } from 'react'
import './App.css'
import GeneralForm from './components/GeneralForm'
import Report from './components/Report'
import EducationForm from './components/EducationForm'

function App() {
  const initialGeneral = {
    fullName: 'Yi-Chun Chen',
    email: 'elsiechen915@gmail.com',
    phone: '+1 860 334 9876',
    address: 'Central, SC, USA'
  };

  const initialEducations = [
    {
      school: 'The Odin Projectat',
      degree: 'Web Developer in JavaScript',
      field: '',
      startDate: 'March 2022',
      endDate: 'Present',
      location: 'Online'
    },
    {
      school: 'National Chenchi University',
      degree: 'Bachelor',
      field: 'Economics',
      startDate: 'September 2006',
      endDate: 'June 2010',
      location: 'TAIPEI CITY, TAIWAN'
    }
  ]
  const [ general, setGeneral ] = useState(initialGeneral);
  const [ educations, setEducations ] = useState(initialEducations);
  
  return (
    <div className='container'>
      <div className='forms'>
        <GeneralForm general={general} 
          nameChange={(e) => setGeneral({...general, fullName: e.target.value})}
          emailChange={(e) => setGeneral({...general, email: e.target.value})}
          phoneChange={(e) => setGeneral({...general, phone: e.target.value})}
          addressChange={(e) => setGeneral({...general, address: e.target.value})}/>
        <EducationForm educations={educations} />
      </div>
      <div className='report'>
        <Report general={general}/>
      </div>
    </div>
  )
}

export default App
