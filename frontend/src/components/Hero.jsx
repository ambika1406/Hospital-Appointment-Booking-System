import React from 'react'

const Hero = ({title, imageUrl}) => {
    return (
        <div className='hero container'>
            <div className="banner">
                <h1>{title}</h1>
                <p>
                    LifeCare Group of Hospitals is a leading multispeciality healthcare provider committed to delivering comprehensive medical care with advanced technology and specialized treatment. With a patient-centric approach, LifeCare offers integrated healthcare solutions across various specialties, ensuring high-quality care under one roof. The hospital is equipped with state-of-the-art infrastructure and a team of esteemed medical professionals dedicated to excellence in healthcare.
                </p>
            </div> 
            <div className="banner">
                <img src={imageUrl} alt="hero" className="animated-image" />
                <span>
                    <img src="/Vector.png" alt="vector" />
                </span>
            </div>
        </div>
    )
}

export default Hero