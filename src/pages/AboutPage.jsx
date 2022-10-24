import React from 'react'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card> 
        <div className='about'>
            <h1>About this page</h1>

            <p>
                <a href='/'>Back</a>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage