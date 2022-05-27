import React from 'react'
import Cards from './Cards'
import { Heading } from './Swipper'

function Articles() {
  return (<>
      <div  style={{ marginInline:'4%'}}>
    <div className='Articles-banner'>
        <Heading  style={{  fontWeight: '600',
    color: 'var(--main)',
           letterSpacing: '.8px'    }} >
         Latests Articlesss
        </Heading>
        <h5 >
         All Articles
        </h5>
    </div>
<Cards  />
    </div>
    
    
    
    
    </>
  )
}

export default Articles