
import Footer from './Components/Footer';
import Links from './Components/Link';
import Apresentacao from './Components/Apresentacao';
import React from 'react';
import Cartao from './Components/Card';
import './Components/Card.css';
import './App.css';

function App() {
  return (
    
    <div className='divPai'>
     <Links/>;
     <Apresentacao/>
    
      <div className='cards'>
      <Cartao titulo="PROJETO1" button="DEADPOOL" link="https://site-deadpool.vercel.app/" img="https://thumbs.dreamstime.com/b/linha-de-%C3%ADcone-do-%C3%A1lbum-fotos-isolada-em-fundo-branco-preto-e-plano-fino-no-estilo-contorno-moderno-s%C3%ADmbolo-linear-edit%C3%A1vel-266041615.jpg"/>
      <Cartao titulo="PROJETO2" button="FASTFOOD" link="https://tela-site-lanche.vercel.app/" img="https://thumbs.dreamstime.com/b/linha-de-%C3%ADcone-do-%C3%A1lbum-fotos-isolada-em-fundo-branco-preto-e-plano-fino-no-estilo-contorno-moderno-s%C3%ADmbolo-linear-edit%C3%A1vel-266041615.jpg"/>
      <Cartao titulo="PROJETO3" button="GITHUB" link="https://github.com/fabiohenridev?tab=repositories" img="https://thumbs.dreamstime.com/b/linha-de-%C3%ADcone-do-%C3%A1lbum-fotos-isolada-em-fundo-branco-preto-e-plano-fino-no-estilo-contorno-moderno-s%C3%ADmbolo-linear-edit%C3%A1vel-266041615.jpg"/>
      </div>
      <Footer/>
    </div>
  
  );


}

export default App;
