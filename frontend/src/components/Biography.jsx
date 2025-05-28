import React from 'react'

const Biography = ({ imageUrl }) => {
    return (
        <div className='container biography'>
            <div className="banner">
                <img src={imageUrl} alt="aboutImg" />
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who We Are</h3>
                <p>
                    Life Care Hospital, established in 2001, is a multi-specialty private hospital located in Ahmedabad, India. It offers 24x7 emergency services and a range of medical specialties, including cardiology, ENT, and clinical medicine. The hospital participates in government healthcare initiatives like the Mukhyamantri Amrutam Yojana for low-income families.
                   
                </p>
                <p>With a commitment to excellence, the hospital provides specialized treatments in neurology, orthopedics, nephrology, and critical care. Its state-of-the-art infrastructure ensures high-quality medical services, making it a trusted name in healthcare.</p>
                <p>The hospital is equipped with modern diagnostic facilities, including MRI, CT scans, and pathology labs, ensuring accurate and timely diagnoses. Life Care Hospital also emphasizes preventive healthcare, offering routine check-ups, vaccinations, and wellness programs.</p>
                <p>The hospitals commitment to social responsibility strengthens its reputation as a healthcare leader.</p>
                <p> Its unwavering dedication to excellence ensures a healthier future for the communities it serves.</p>
            </div>
        </div>
    )
}

export default Biography