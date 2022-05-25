import React from 'react'
import Cards from './Cards'

function Articles() {
  return (<>
      <div  style={{ marginInline:'4%'}}>
    <div className='Articles-banner'>
        <h2 >
         Latests Articles
        </h2>
        <h4 >
         All Articles
        </h4>
    </div>
<Cards  />
    </div>
    
    
    
    
    </>
  )
}

export default Articles