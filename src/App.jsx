import './App.css'
import Navbar from './components/Navbar'
import CustomRoutes from './routes'

function App() {

  return (
    <>
      <div className='sticky top-0 w-full'>
        <Navbar />
      </div>
      <CustomRoutes />
    </>
  )
}

export default App
