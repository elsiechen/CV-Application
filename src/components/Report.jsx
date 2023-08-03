import './components.css'
import emailImg from '/email.png'
import phoneImg from '/phone.png'
import addressImg from '/address.png'

export default function Report({ general, educations}) {
    return (
        <div className="report-container">
            <div className="head">
                <h1>{general.fullName}</h1>
                <div>
                    <div className='contactDiv'>
                        <img src={emailImg} alt="Email" />
                        <div>{general.email}</div>
                    </div>
                    <div className='contactDiv'>
                        <img src={phoneImg} alt="Phone" />
                        <div>{general.phone}</div>
                    </div>
                    <div className='contactDiv'>
                        <img src={addressImg} alt="Address" />
                        <div>{general.address}</div>
                    </div>
                </div>
            </div>
            <div className="education">
                <div className="header">Education</div>
                {educations.map(education => (
                    <div className="educationItem" key={education.id}>
                        <div className="left">
                            <div>{education.startDate}{'~'}{education.endDate}</div>
                            <div>{education.location}</div>
                        </div>
                        <div className="right">
                            <div><b>{education.school}</b></div>
                            <div>{education.degree}{'/'}{education.field}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="experience">

            </div>
            <div className="skill">

            </div>
            <div className="certificate">

            </div>
        </div>
    )
}