import { useState } from 'react';
import './App.css';
import Konyv from './Konyv';
import Kosar from './Kosar';
import KosarModell from './modell/KosarModell';


const konyveim= [
    {
      id:0,
      cim:"Trónok harca",
      szerzo:"George R. R. Martin",
      ar:3500,
      eleresiut:"kepek/Tűz_és_jég_dala_1_-_Trónok_harca.jpg",
      db:0
    },
    {
      id:1,
      cim:"Kardok vihara",
      szerzo:"George R. R. Martin",
      ar:3500,
      eleresiut:"kepek/kardok-vihara.jpg",
      db:0
    },
    {
      id:2,
      cim:"Királyok csatája",
      szerzo:"George R. R. Martin",
      ar:3500,
      eleresiut:"kepek/Tűz_és_jég_dala_2_-_Királyok_csatája.jpg",
      db:0
    }
]


function App() {

//let db=0;
const [darab, setDb] = useState(0);
const [ossz, setOssz] = useState(0);
const [kosar, setKosar] = useState([]);
const kmodel = new KosarModell(kosar);


function kosarFeldolgoz(adat){

// console.log(adat);
/* Hány könyv van a kosárban? */
// db++
// console.log(db);
/* A darabszám jelenti a komponens pillanatnyi állapotát.
Amikor ez változik, akkor az oldal egy részének újra kell renderelődnie
state */
setDb(darab+1); //ez változtatja meg a hozzárendelt változó értékét
// plusz befrissíti az oldal vonatkozó részeit is
//kosárba helyezésnél előbb a listához kell adni az itemet, utána kell átállítani a setKosárral a tömböt
setOssz(ossz + adat.ar);
// kosar.push(adat);
// kmodel.adatKosarba(adat);
kmodel.azonos(adat)
setKosar(kmodel.getKosar());
console.log(kosar);

}


  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1></header>
        <section className='kosar'>
          <p>A könyvek száma: {darab}</p>
          <p>A könyvek összértéke: {ossz}</p>
          {/* kosár tartalmának megjelenítése */}
          {/* setossz(kosarModell.getoosszdb()) */}
          <table className="table table-striped">
          <thead>
          <tr>
                    <th>Cím</th>
                    <th>Szerző</th>
                    <th>Ár</th>
                    <th>darabszám</th>
                </tr>
                </thead>
                <tbody>
          {kosar.map((konyv,index)=>{
            return (<Kosar konyvAdat={konyv} key={index} />)
          })}
          </tbody>
          </table>

        </section>
        <article className='konyvek'>
          
          {
            konyveim.map((konyv, index)=>{
              return(<Konyv konyvAdat = {konyv} key={index} kosarFeldolgoz={kosarFeldolgoz} />)
              
            }
            )
          }
        </article>
        <footer><p>Molnár Szabrina</p></footer>
      
    </div>
  );
}

export default App;
