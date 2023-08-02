import { useState } from "react"

const ConditionalRender = () => {
  
    const [x] = useState (false)
  
    const [name, setName] = useState ('Laura')

    return (
    <div>
        <h1>Isso será exibido</h1>
        {x && <p>Se o x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}
        <h1>If ternário</h1>
        {name === 'Higor' ? (
            <div>
                <p>O nome é Higor</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
        <button onClick={() => setName('Higor')}>Clique aqui!</button>
    </div>
  )
}

export default ConditionalRender