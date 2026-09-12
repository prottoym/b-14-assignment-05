
import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import Nav from './components/Nav';
import type { Icard } from './types/CardType';
import Tech from './components/Tech';

const cardFetch = async(): Promise<Icard[]>=>{
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}



function App() {
  const cardPromise = cardFetch();

  return (
    <>

    <Nav></Nav>

    <Banner></Banner>

    {/* <Suspense fallback={<h2>Loding......</h2>}>
      <Card cardPromise = {cardPromise}></Card>
    </Suspense> */}
    <Tech></Tech>
    


    <Footer></Footer>

    </>
  )
}

export default App
