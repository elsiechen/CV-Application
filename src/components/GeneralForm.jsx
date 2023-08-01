import './components.css'

export default function GeneralForm(
    {
        general, 
        nameChange, 
        emailChange,
        phoneChange,
        addressChange
    }
) {
    return (
        <div className="form">
            <h3>General Information</h3>
            <form>
                <div className="field">
                    <label htmlFor='fullName'>Full Name</label>
                    <input value={general.fullName}
                            onChange={nameChange}
                            id='fullName'/>
                </div>
                <div className="field">
                    <label htmlFor='emal'>Email</label>
                    <input value={general.email}
                            onChange={emailChange}
                            id='email'/>
                </div>
                <div className="field">
                    <label htmlFor='phone'>Phone Number</label>
                    <input value={general.phone}
                            onChange={phoneChange}
                            id='phone'/>
                </div>
                <div className="field">
                    <label htmlFor='address'>Address</label>
                    <input value={general.address}
                            onChange={addressChange}
                            id='address'/>
                </div>
            </form>
        </div>
        
    )
}