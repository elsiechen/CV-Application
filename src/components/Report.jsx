import emailImg from '/email.png'
import phoneImg from '/phone.png'
import addressImg from '/address.png'

export default function Report({general}) {
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