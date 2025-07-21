import React from 'react'

const Contact = (props) => {
  return (
    <div className='cat-contacts'>
        <article className="contact-card">
                <img 
                    src={props.img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img 
                        src="src/assets/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="src/assets/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{props.email}</p>
                </div>
            </article>

      
    </div>
  )
}

export default Contact
