import './CartScreen.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


//components
import CartItem from '../components/CartItem';

//Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions';




const CartScreen = () => {



    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () =>{
        return cartItems.reduce((qty, item) => Number(item.qty) + qty,0);
    };

    //const addThousandSeparator = (str) => (
    //   str.toLocaleString('de')
    //);

    const getCartSubtotal = () => {
        return cartItems.reduce((price,item) => (item.price * item.qty) + price,0);
    };


    //const CHARACTER_LIMIT = 100;

    const [motiveEmptyError, setMotiveEmptyError] = useState(false);
    const [nameEmptyError, setNameEmptyError] = useState(false);
  
    const [formData, setFormData] = useState({
      motive: "",
      name: "",
      payment: "Bancolombia", // Define Bancolombia by default
    });
  
    const { motive, name, payment } = formData;

    const onChange = (e) => {
        e.preventDefault();
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    const number = "+4917670775899"
    const message = "Bienvenido a nuestra Tiendas Desayúnos sorpresa y detalles Martinas \n es un gusto atendenderte, en momentos responderemos tu mensaje!"
    
    const MartinasMessage = (number, message, motive, name, payment, cartItems) => {


        let cart_str = ""
        for (let i = 0; i < cartItems.length; i++ )  {
            cart_str += `Producto: ${cartItems[i].title}: Cantidad : ${cartItems[i].qty} \n`;
        }

        let subtotal = getCartSubtotal().toLocaleString('de') 

        let complete_msg = message + 
                            "\n*Motivo*: " + motive + "\n" + 
                            "\n*Nombre*: "+   name +  "\n" +
                            "\n*Medio de pago:* "  + payment +  "\n" + 
                            "\n*Pedido*: " + cart_str +
                            "\n*Subtotal* $" + subtotal;

        console.log(complete_msg)

        //return `https://web.whatsapp.com/send?phone=${number}&text=${encodeURI(complete_msg)}&app_absent=0`
        return `https://wa.me/${number}?text=${encodeURI(complete_msg)}`
      };

    
    const onSubmit = (e) => {
        e.preventDefault();
        if (motive.length < 1) {
            setMotiveEmptyError(true);
          setTimeout(() => setMotiveEmptyError(false), 3000);
        } else if (name.length < 1) {
            setNameEmptyError(true);
          setTimeout(() => setNameEmptyError(false), 3000);
        } else {
       
            e.preventDefault();
            let url = MartinasMessage(number, message, motive, name, payment, cartItems);
            window.open(url);
        }
      };


    return <div className='cartscreen'>

                <div className = "cartscreen__left">

                    <h2> Carrito de Compras </h2>

                    {cartItems.length === 0 ? (
                        <div> El Carrito esta Vacío
                            <Link to="/"> Regresar a la Tienda </Link>  
                        </div>
                    ): (cartItems.map((item) => 
                        (<CartItem 
                            key={item.product}
                            item = {item}
                            qtyChangeHandler = {qtyChangeHandler}
                            removeFromCartHandler = {removeFromCartHandler}
                        />)))
                    }

                </div>
                    
                <div className = "cartscreen__right">
                    <div className="cartscreen__info">
                        <p> Subtotal {getCartCount()} items</p>
                        <p> $ {getCartSubtotal().toLocaleString('de')} </p>
                    </div >
                    <div className = "cartscreen__inputdata">
                        <form className = "cartscreen__inputdata_form" action="">

                            <label for="fname">Motivo:</label>
                            <input type="text" id="motive" name="motive" onChange={onChange} value={motive} ></input>
                            <label for="lname">Nombre: </label>
                            <input type="text" id="name" name="name" onChange={onChange} value={name}></input>
                            
                            <label for="lname">Medio de Pago:</label>
                            
                        <select id='payment'name='payment' value={payment} onChange={onChange} >  
                                <option key="Bancolombia" value="Bancolombia" selected>Bancolombia</option>
                                <option key="Efectivo" value="Efectivo">Efectivo</option>
                                <option key="Nequi" value="Nequi">Nequi</option>
                        </select>

                        </form> 

                        
                    </div>
                    <div>
                        <button onClick={onSubmit}> Enviar Pedido</button>
                    </div>
                </div>


           </div>
};

export default CartScreen;