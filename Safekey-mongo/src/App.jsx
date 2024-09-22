import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
      <Navbar />
      <Manager />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
