import './Header.css'
import logoOumaAgri from '../images/logo.png'
import serre from '../images/Serre.jpeg'

import image1 from '../images/imageBG1.png'
import salade from '../images/salade.png'


function Header() {
 
  return (
 <div id='entête'>
     
    {/* //Menu de navigation */}
    <div id='menuNav' >
     
        <button id="btnMenuNav"> Tableau de bord </button>
        <button id="btnMenuNav"> Changer de Mot de passe</button>
        <button id="btnMenuNav"> Paramètres Plantes</button>
        <button id="btnMenuNav"> Historique</button>
        <span className="material-symbols-outlined" id="btnMenuNav">logout</span>
     
    </div>
    {/* //logo, description et photo serre */}
    <div id='infoNav' >
      <div > <img src={logoOumaAgri} id="imageHeader" alt="Logo Ouma Agri" /></div>   
      <div id="textHeader"> Sur cette application vous pourrez manipuler votre serre automatisée <br/>et  visualiser les informations de cette dernière </div>
      <div><img src={serre} id="imageHeader" alt="serre" /></div>
    </div>
    {/* Valeur à temp réel */}
    <div id='VTR'>
        <img src={image1} id="ImageVTR" alt="" />
       <img src={salade} alt=""id="ImageSaladeVTR"  />
    </div>

</div>
    
  )
}

export default Header;
