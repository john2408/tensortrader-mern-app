import'./Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = ({click}) => {

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;


    const getCartCount = () => {
        return cartItems.reduce((qty,item) => qty + Number(item.qty), 0)
    };

    return (
    <nav className= "navbar">

        <div className = "navbar__logo">
            <Link to = '/'><img className = "navbar__imgtitle" src = "Tensor_Logo.png" alt="Tensor_Logo"></img></Link>
        </div>

        <div className = 'navbar__title'> Tensor Investment Management </div>

        <div className = "hamburger__menu" onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>

    </nav>
    )
};

export default Navbar;
