import './App.css'
import { AboutMe } from './components/AboutMe'
import { AppBar } from './components/AppBar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { TopMain } from './components/TopMain'

function App() {

  return (
    <>
      <nav>
        <AppBar />
      </nav>
      <main>
        <section>
          <TopMain />
        </section>
        <section>
          <AboutMe />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Skills />
        </section>
      </main>
      <footer>
        Feito com 💜 por <a>Kauanny Vieira</a>
      </footer>

    </>
  )
}

export default App
