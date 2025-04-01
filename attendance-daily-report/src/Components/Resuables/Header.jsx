import React from 'react'

const Header = ({header,subheader}) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h3 className="text-start" style={{color: '#578FCA'}}>{header}</h3>
                <p className='text-start' style={{color: '#578FCA'}}>{subheader}</p>
            </div>
        </div>
    </div>
  )
}

export default Header
