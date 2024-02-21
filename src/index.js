import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import myImage from './images/profissional1.jpg';

const App = () => { 

  const textoDoElemento1 = "Profissionais de Saúde"; 
  const nomeProfissional1 = "José da Silva";
  const nomeProfissional2 = "Maria da Silva";
  const nomeProfissional3 = "Jaqueline Mendes"; 

  return( 
      <div style={{margin: 'auto', width: 800, backgroundColor: '#EEE', padding: 20, borderRadius: 15}}> 
        <label className="texto1" htmlFor="titulo" style={{display: 'block', marginBottom: 10, textAlign: 'center', fontWeight: 'bold' }}>{textoDoElemento1}</label>  

        <div style={{margin: 'auto', backgroundColor: '#EEE', paddingInline:20, borderRadius: 15, marginBottom: 2,border: '1px solid grey'}}>

          <div class = "profissionais">
            <div class ="filho-profissionais">
              <img src= {myImage} alt= "Profissional 1" />
              <p>{nomeProfissional1}</p> </div>
              <div class ="filho-profissionais">
              <img src={process.env.PUBLIC_URL+'imagem2.jpg'} alt="Profissional 2" />
              <p>{nomeProfissional2}</p> 
              </div>
              <div class ="filho-profissionais">
              <img src='https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZW5mZXJtZWlyYXxlbnwwfHwwfHx8Mg%3D%3D' alt="Profissional 3" />
              <p>{nomeProfissional3}</p></div>
            </div>
          </div>
        </div>

      
  ) 
} 

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)