import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: 'Laura', email: 'laura@123.com', bio: 'Eu sou advogada', role: 'admin'}}/>
    </div>
  );
}

export default App;
