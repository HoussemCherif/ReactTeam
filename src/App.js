import React, { Component } from 'react';
//import logo from './logo.jpeg';
import './App.css';
import Profil from './Profil'

class App extends React.Component {
  render() {
    return (
        <div>
        <center>
        <h1>Heyyy Cest Notre Equipe Choc </h1>
        </center>
    <Profil image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Angelina_Jolie_Global_Summit_2014.jpg/290px-Angelina_Jolie_Global_Summit_2014.jpg'
        
        nom ='angelina jolie'
        
        profession = 'actor'/> 
     <Profil image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/B%C3%A9ji_Ca%C3%AFd_Essebsi_2015-05-20.jpg/220px-B%C3%A9ji_Ca%C3%AFd_Essebsi_2015-05-20.jpg'
        
        nom ='bajbouj'
        
        profession = 'president'/> 
        
        
        <Profil image = 'http://i-exc.ccm2.net/iex/1280/2062425379/746509.jpg'
        
        nom ='Albert Camus'
        
        profession = 'Ma3ndou may3mel'/> 
     
</div>
        
    );
  }
}
export default App;
