// hooks
import { useState } from 'react';


// components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';


// Style CSS
import './App.css';




// Imagem
// import Obito from './assets/obito.jpg'



function App() {

  const name = 'Laura'
  const [userName] = useState('Lucas')

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Cinza Chumbo', newCar: true, km: 0},
    {id: 2, brand: 'KIA', color: 'Vermelho', newCar: false, km: 1000},
    {id: 3, brand: 'Renault', color: 'Amarelo', newCar: true, km: 0},
  ]

  function showMessage () {
    console.log('Evento do componente pai!')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
       {/* Imagem em public 
      <div>
        <img src="/tobirama.jpg" alt="Tobirama" />
      </div>
      Imagem em asset 
       <div>
        <img src={Obito} alt="Obito" />
      </div>  */}
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name='Higor' />
      <ShowUserName name={name} />
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand='Fiat' km={90000} color='Branco' newCar={false}/>
      {/* reaproveitando */}
      <CarDetails brand='VW'color='Vermelho' km={0} newCar={true}/>
      <CarDetails brand='Ford'color='Preto' km={50000} newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}/>
      ))}
      {/* fragment */}
      <Fragment propFragment='Teste' />
      {/* children */}
      <Container myValue='testing'>
        <p>E este é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
    
  );
}

export default App;
