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

export const initialWorks = [
  {
    id: uuid(),
    company: 'Taiwan Cooperative Bank',
    position: 'Foreign Exchange Specialist',
    description: 
      `Conducts foreign currency transactions for clients. Build local exchange rates for retail customers based on market fluctuations. Recommends products based on foreign exchange rate.`          
    ,
    startDate: new Date(2012,9,1).toISOString().slice(0, 10),
    endDate: new Date(2015,6,30).toISOString().slice(0, 10),
    location: 'TAIPEI CITY, TAIWAN'
  },
  {
    id: uuid(),
    company: 'Graduate Institute of Communication Engineering, National Taiwan University',
    position: 'Administration Assistant',
    description: 
      `Track expenses and reimbursement claims of projects in Professor Chen's laboratory. Help holding international conference.`
    ,
    startDate: new Date(2010,9,1).toISOString().slice(0, 10),
    endDate: new Date(2012,8,30).toISOString().slice(0, 10),
    location: 'TAIPEI CITY, TAIWAN'
  }
]