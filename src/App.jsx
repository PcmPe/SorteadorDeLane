import './App.css'
import { Footer } from './components/Footer'
import { Result } from './components/Result'
import { TextLabel } from './components/TextLabel'

export function App() {
  return (
    <div>
      <main>
        <section className='sectionMain'>
          <TextLabel placeholder='Jogador 1' />
          <TextLabel placeholder='Jogador 2' />
          <TextLabel placeholder='Jogador 3' />
          <TextLabel placeholder='Jogador 4' />
          <TextLabel placeholder='Jogador 5' />
        </section>

        <button className='botao-sortear'>Sortear</button>

        <section className='sectionMain'>
          <TextLabel placeholder='Jogador 1' />
          <TextLabel placeholder='Jogador 2' />
          <TextLabel placeholder='Jogador 3' />
          <TextLabel placeholder='Jogador 4' />
          <TextLabel placeholder='Jogador 5' />
        </section>

      </main>

      <Result />

      <Footer />
    </div>
  )
}

export default App
