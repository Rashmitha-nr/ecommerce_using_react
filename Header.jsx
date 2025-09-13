import './App.css';
const Header=()=>{
    return(
        <div className="header">
        <div className="left">
            <img src="myntra.png" height={70} width={70}/>
            </div>
        <div className="center">
        <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            </ul>
            </div>
        <div className="search">
        <input type="text" placeholder="Search.."/>
        <button>Search</button>
        </div>
        <div className="right">
        <div className="sign">
        Sign In / Sign Up
        </div>
        <div className="cart">
        <button>cart</button>
        </div>
        </div>
        </div>
        )
    }
export default Header;