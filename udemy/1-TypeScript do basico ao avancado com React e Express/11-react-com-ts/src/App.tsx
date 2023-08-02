import React, { createContext } from 'react';


// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';


// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';


// 6 - useState
import State from './components/State';


//10 - utilizando contexto 
import Context from './components/Context';


// 9 - type
type textOrNull = string | null
type fixed = 'Isso' | 'Ou' | 'Aquilo'


// 10 - context
interface IAppContext {
  language: string,
  framework: string,
  projects: number,
}

export const AppContext = createContext<IAppContext | null>(null)


function App() {

  // 1 - variaveis
  const name: string = "Higor"
  const age: number = 25
  const isWorking: boolean = true


  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }


  // 9 - type
  const myText: textOrNull = 'Tem algum texto aqui!'
  let mySecondText: textOrNull = null;

  // mySecondText = 'Opa!!';

  const testandoFixed: fixed = 'Isso';


  // 10 - context
  const contextValue: IAppContext = {
    language: 'Javascript',
    framework: 'Express',
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>

      <div className="App">

        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}

        <h3>{userGreeting(name)}</h3>

        <FirstComponent />

        <SecondComponent name='Segundo' />

        <Destructuring
          category={Category.TS}
          title='Primeiro post'
          content='Algum conteúdo'
          commentsQty={10}
          tags={['ts', 'js']}
        />

        <Destructuring
          category={Category.K}
          title='Segundo post'
          content='Algum conteúdo'
          commentsQty={15}
          tags={['kotlin']}
        />

        <State />

        {myText &&
          <p>Tem texto na variável</p>
        }
        {testandoFixed &&
          <p>Tem texto na variável</p>
        }

        <Context />

      </div>
    </AppContext.Provider>
  );
}

export default App;
