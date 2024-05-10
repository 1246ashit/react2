import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>
                Have a project in mine?
                <br className='sm:block hidden' />
                Let's build something together.
            </p>
            <Link to="/react2/Contact" className='btn'>
                Contact
            </Link>
        </section>
    )
}

export default CTA