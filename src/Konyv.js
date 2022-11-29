import './Konyv.css'


function Konyv(props) {

    function kosarFeldolgoz(){
        /* console.log(props.konyvAdat.id); */
        props.kosarFeldolgoz(props.konyvAdat)
    }

    return(
        <div className="Konyv">
        <img src={props.konyvAdat.eleresiut} alt="" />
        <h3>Cím: {props.konyvAdat.cim}</h3>
        <h4>Szerző: {props.konyvAdat.szerzo}</h4>
        <p>Ára: {props.konyvAdat.ar}</p>
        <button onClick={kosarFeldolgoz}>Kosárba</button>
        </div>
    );
}

export default Konyv;