import React from 'react'

const Contact = (props) => {
    const {img,name,phone, email} = props
  return (
    <div className='cat-contacts'>
        <article className="contact-card">
                <img 
                    src={img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img 
                        src="src/assets/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="src/assets/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
            </article>

      
    </div>
  )
}

export default Contact
