import {useState} from 'react'

const ManageData = () => {

  let someData = 10

  const [number, setNumber] = useState(25)

  console.log(number)

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Variável</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(75)}>Mudar Variável 2</button>
      </div>
    </div>
  )
}

export default ManageData