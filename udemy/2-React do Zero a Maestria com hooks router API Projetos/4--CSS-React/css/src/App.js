//CSS
import './App.css';


//components
import MyComponent from './components/MyComponent';
import Title from './components/Title';


//hooks
import {useState} from 'react';


function App() {

  const n = 15
  const [name] = useState ('Higor')

  const redTitle = true

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS Components */}
      <MyComponent/>
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: 'blue', padding: '25px', borderTop: '2px solid red'}}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>
      <h2 style={name === 'Higor' ? ({color: 'blue'}) : null }>CSS dinâmico</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title/>
    </div>
  );
}

export default App;
