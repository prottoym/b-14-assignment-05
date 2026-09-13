import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Banner from './components/Banner';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Tech from './components/Tech';

function App() {
  return (
    <>
      <Nav></Nav>

      <Banner></Banner>

      <Tech></Tech>

      <Footer></Footer>

      <ToastContainer position="top-right" autoClose={2500} />
    </>
  )
}

export default App;