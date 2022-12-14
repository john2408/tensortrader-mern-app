import "./Footer.css";

const Footer = () => {


  return (
    <div className="footer">
        <div className = "footer__upper">

            <div className="footer__element" 
                onClick={(e) => window.open('https://www.facebook.com/DesayunosorpresaBugaTiendaMartinas/')}>
                <img className = "footer__img" 
                                    src = "Facebook_Logo.png" 
                                    alt="Facebook Logo">
                 </img>
            </div>
            <div className="footer__element" 
                onClick={(e) => window.open("https://instagram.com/store.martinas?igshid=YmMyMTA2M2Y=")}>
                <img className = "footer__img" 
                                    src = "Instagram_icon.png" 
                                    alt="Instagram Logo">
                </img>
            </div>

        </div>
        <div className = "footer__lower">
            Copyright 2022. Todos los derechos reservados. 
            By: <p className = 'footer__creator' onClick={(e) => window.open("https://de.linkedin.com/in/john-torres-data-science")}> @jtorres</p>
        </div>
    
    
    </div>
  )
}

export default Footer