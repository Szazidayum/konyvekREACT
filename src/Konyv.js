import './Konyv.css'


function Konyv(props) {

    function kosarba(){
        console.log(props.konyvAdat.id);
        props.kosarKattintasMetodus(props.konyvAdat.id)
    }

    return(
        <div className="Konyv">
        <h3>Cím: {props.konyvAdat.cim}</h3>
        <h4>Szerző: {props.konyvAdat.szerzo}</h4>
        <p>Ára: {props.konyvAdat.ar}</p>
        <button onClick={kosarba}>Kosárba</button>
        </div>
    );
}

export default Konyv;