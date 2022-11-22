import './App.css';
import Konyv from './Konyv';

const konyveim= [
    {
      id:0,
      cim:"Trónok harca",
      szerzo:"George R. R. Martin",
      ar:3500
    },
    {
      id:1,
      cim:"Kardok vihara",
      szerzo:"George R. R. Martin",
      ar:3500
    },
    {
      id:2,
      cim:"Királyok csatája",
      szerzo:"George R. R. Martin",
      ar:3500
    }
]

function App() {

  function kosarFeldolgoz(adat){
    console.log(adat);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1></header>
        <article className='konyvek'>
          
          {
            konyveim.map((konyv, index)=>{
              return(<Konyv konyvAdat = {konyv} key={index} kosarKattintasMetodus={kosarFeldolgoz} />)
            }
            )
          }
        </article>
        <footer><p>Molnár Szabrina</p></footer>
      
    </div>
  );
}

export default App;
