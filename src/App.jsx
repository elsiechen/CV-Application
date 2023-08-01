import { useState } from 'react'
import './App.css'
import GeneralForm from './components/GeneralForm'
import Report from './components/Report'

function App() {
  const [ general, setGeneral ] = useState(
    {
      fullName: 'Yi-Chun Chen',
      email: 'elsiechen915@gmail.com',
      phone: '+1 860 334 9876',
      address: 'Central, SC, USA'
    })
  
  return (
    <div className='container'>
      <div className='forms'>
        <GeneralForm general={general} 
          nameChange={(e) => setGeneral({...general, fullName: e.target.value})}
          emailChange={(e) => setGeneral({...general, email: e.target.value})}
          phoneChange={(e) => setGeneral({...general, phone: e.target.value})}
          addressChange={(e) => setGeneral({...general, address: e.target.value})}/>
      </div>
      <div className='report'>
        <Report general={general}/>
      </div>
    </div>
  )
}

export default App
