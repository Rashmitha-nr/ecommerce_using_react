
import Header from './Header'
import Banner from './Banner'
import Components from './Components'
import Wcomponents from './Wcomponents'
import Kcomponents from './Kcomponents'
import Footer from './Footer'
import {Men} from './object.js';
import {Women} from './wObject.js';
import {Kids}  from './Kobject.js'
import {useState} from 'react';

const Main=()=>{
    const [men,setMen]=useState(Men)
    const[women,setWomen]=useState(Women)
    const[kids,setKids]=useState(Kids)
    return(
        <div>
            <Header/>
            <Banner/>
            <Components gents={men}/>
            <Wcomponents wwear={women}/>
            <Kcomponents wear={kids}/>
            <Footer/>
            </div>
            )
    }
export default Main;