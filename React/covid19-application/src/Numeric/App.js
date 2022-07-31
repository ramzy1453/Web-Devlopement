import { useEffect, useState } from 'react';
import LoadingPage from '../Loading';
import { Header } from './Component/Banner';
import { Main } from './Component/Main';
import { unready_data } from '../Data/data';
import { Footer } from '../Homepage/footer';

function Info() {
  const [DATA , setDATA] = useState([])
  const [thisCountry, setThisCountry] = useState("World")
  const load_data = () => {
    unready_data().then(data => {
      setDATA(data)
    })
  }
  useEffect(() => {
    load_data()
  }, [])
  return (
    DATA.length === 0 ? (
      <LoadingPage />
    ) : (
      <div className="App">
        <Header DATA={DATA} setThisCountry={setThisCountry}/>
        <Main DATA={DATA} thisCountry={thisCountry}/>
        <Footer />
      </div>
    )
  )
}

export default Info;
