import { v4 as uuid } from 'uuid'

export const initialGeneral = {
    fullName: 'Yi-Chun Chen',
    email: 'elsiechen915@gmail.com',
    phone: '+1 860 334 9876',
    address: 'Central, SC, USA'
  };

export  const initialEducations = [
    { 
      id: uuid(),
      school: 'The Odin Project',
      degree: 'Web Developer in JavaScript',
      field: 'Front-End',
      startDate: new Date(2022,2,1).toISOString().slice(0, 10),
      endDate: new Date().toISOString().slice(0, 10),
      location: 'Online'
    },
    {
      id: uuid(),
      school: 'National Chenchi University',
      degree: 'Bachelor',
      field: 'Economics',
      startDate: new Date(2006,8,1).toISOString().slice(0, 10),
      endDate: new Date(2010,6,30).toISOString().slice(0, 10),
      location: 'TAIPEI CITY, TAIWAN'
    }
  ]