import React, { useEffect } from 'react'
import Title from '../../components/Title'
import { Divider } from '../Home'
import Categories from './Categories'
import Comments from './Comments'
import Description from './Description'
import Footer from './Footer'
import NavBAR from './NavBAR'
import Product from './Product'
import ProductCard from './ProductCard'
 import Subs from './Subs'

function MedicalProducts() {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "//code.tidio.co/28hdlzzbiorjifs3modcn4nssh8nxll4.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div
    style={{width:'100vw',overflow:'hidden'}}>
        <NavBAR/>
    <Categories/>
<Product/>
<Description/>
<Comments/>
<Divider height={'3rem'}/>
<div
      style={{
        width: "fit-content",
        margin: "auto",
        textAlign: "center",
        borderBottom: "4px solid rgb(31, 164, 124)",
      }}
    >
      <Divider height={"3rem"} />
      <Title Font="21px" mobile={false} color="Black" title="Latest Products" />
     
    </div>
    <Divider height={"2rem"} />
<div className='grid' style={{width:'94vw',margin:'auto',display:'grid'}}>
{
  [...Array(8)].map(()=>(
     <ProductCard  />
  ))
}
</div>
<Divider height={'3rem'}/>
<Divider height={'3rem'}/>
<Subs/>
<Divider height={'3rem'}/>
<Footer/>


    </div>
  )
}

export default MedicalProducts