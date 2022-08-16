
import './App.css';
import Boton from './componentes/Botones/Boton';
import BotonClear from './componentes/Botones/Boton-Clear';
import Pantalla from './componentes/Pantalla/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs'; // Libreria externa, npm install mathjs
import LogoFreeCodeCamp from './componentes/Logo/Logo-freeCodeCamp';


function App() {

  const [input, setInput] = useState('');

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    let contador = 0
    if (input){// Si la cadena de caracteres tiene algo
      const verInput = input;
      if (input[0] === '*' || (input[0] === '+') || (input[0] === '/') ) {
        alert('Error, la operación inicia con * o / o +')
      }
      for (const iterator of verInput) {
        if (iterator === '*' || (iterator === '-') || (iterator === '+') || (iterator === '/') ) {
          contador +=1;
        }
      }
      if (contador === 1) {
        setInput(evaluate(input));// Evaluan los valores que se encuentran
      } else {
        alert('No se puede realizar la operación');
      } 
    }else{
      alert('Ingrese valores para realizar los cálculos');
    }
  };


  return (
    <div className="App">
      <LogoFreeCodeCamp/>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
