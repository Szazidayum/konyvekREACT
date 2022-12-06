function Kosar(props){

    function torol(){
        console.log("töröl");
        props.torol(props.konyvAdat)
    }
    
    return(
        
                <tr>
                    <td>{props.konyvAdat.cim}</td>
                    <td>{props.konyvAdat.szerzo}</td>
                    <td>{props.konyvAdat.ar}</td>
                    <td>{props.konyvAdat.db}</td>
                    <td><button>hozzáad</button></td>
                    <td><button onClick={torol}>törlés</button></td>
                </tr>
    );
}

export default Kosar;