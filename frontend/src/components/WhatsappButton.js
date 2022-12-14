import './WhatsappButton.css';

const WhatsappButton = () => {

  const number = "4917670775899"
  const message = "Bienvenido a nuestra Tiendas Desayúnos sorpresa y detalles Martinas \n es un gusto atendenderte, en momentos responderemos tu mensaje!"
  // Appending the message to the URL by encoding it

  const MartinasMessage = (number, message) => {
    //return `https://web.whatsapp.com/send?phone=${number}&text=${encodeURI(message)}&app_absent=0`
    return `https://wa.me/${number}?text=${encodeURI(message)}`
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let url = MartinasMessage(number, message);
    window.open(url);
  };

  return (
    <div className='whatsappButton' onClick={onSubmit}>
      
          <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' alt='Whatsapp-logo'></img>
      
    </div>
  )
};

export default WhatsappButton;