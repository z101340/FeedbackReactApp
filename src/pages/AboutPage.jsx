import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card> 
        <div className='about'>
            <h1>About this page</h1>

            <p>
                <Link to='/'> back </Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage