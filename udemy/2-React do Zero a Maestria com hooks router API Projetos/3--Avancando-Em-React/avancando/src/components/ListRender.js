import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(['Higor', 'Laura', 'Lucas'])

    const [users, setUsers] = useState ([
      { id: 1, name: 'Higor', age: 25 },
      { id: 2, name: 'Laura', age: 21 },
      { id: 3, name: 'Lucas', age: 34 },
    ])

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4)

      setUsers((prevUsers) => {

        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
          {users.map ((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>

        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender