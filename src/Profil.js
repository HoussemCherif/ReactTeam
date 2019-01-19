import React from 'react';
//import image from './elon.jpg';
import style from './style.css'

class Profil extends React.Component {
    
    render() {
         return (
    <div className="profil">
<img  className = "img_1" src = {this.props.image} />
<h1>Nom :{this.props.nom}</h1>
<h1>Profession :{this.props.profession}</h1>
             
             
</div>
             
           
  );
    
    }
   
}

export default Profil