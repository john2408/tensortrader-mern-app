import './Sidemenu.css';
import {Link} from 'react-router-dom';

const Sidemenu = () => {

    return (
        <div className="sidemenu">
            <div className="sidemenu__logo">
            <Link to = '/'><img className = "navbar__imgtitle" src = "Tensor_Logo.png" alt="Tensor_Logo"></img></Link>
                
            </div>

            
            <ul className= "navbar__links">
                <li>
                    <Link to="/" className="cart__link">
                    <i className='fa-solid fa-house'></i>
                    <span>
                        Home
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="cart__link">
                    <i className='fa-solid fa-chart-pie'></i>
                    <span>
                        Performance
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="cart__link">
                    <i className='fa-solid fa-chart-line'></i>
                    <span>
                        Backtesting 
                    </span>
                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default Sidemenu;