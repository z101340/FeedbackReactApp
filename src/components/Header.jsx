import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  const headerStyles ={
      backgroundColor: props.bgColor,
      color: props.textColor
  }

  return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'black',
    textColor: 'pink'
}

Header.prototype = {
    text: PropTypes.string
}

export default Header