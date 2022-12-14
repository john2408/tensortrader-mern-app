import './SideDrawer.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideDrawer = ({show, click}) => {


    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;


    const getCartCount = () => {
        return cartItems.reduce((qty,item) => qty + Number(item.qty), 0)
    };

    const sideDrawerClass = ["sidedrawer"]

    if(show){
        sideDrawerClass.push("show");
    }
  

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className = "sidedrawer__links" onClick = {click}>
                <li>
                    <Link to="/" >
                    <i className='fa-solid fa-house'></i>
                    <span>
                        Home
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" >
                    <i className='fa-solid fa-chart-pie'></i>
                    <span>
                        Performance
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" >
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

export default SideDrawer;