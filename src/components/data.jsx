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
      school: 'The Odin Projectat',
      degree: 'Web Developer in JavaScript',
      field: '',
      startDate: 'March 2022',
      endDate: 'Present',
      location: 'Online'
    },
    {
      id: uuid(),
      school: 'National Chenchi University',
      degree: 'Bachelor',
      field: 'Economics',
      startDate: 'September 2006',
      endDate: 'June 2010',
      location: 'TAIPEI CITY, TAIWAN'
    }
  ]