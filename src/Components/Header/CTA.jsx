import React from 'react'
import  BoluPortfolio from '../../Assets/BoluPortfolio.docx'


const CTA = () => {
  return (
    <div className="CTA">
        <a href={BoluPortfolio} download className='btn' >Download Portfolio</a> 
        <a href="#contact" className='btn btn-primary' >Let's Talk</a> 
    
    </div>
  )
}

export default CTA