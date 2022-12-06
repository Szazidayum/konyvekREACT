function KonyvAdmin(props) {
  function torol() {
    console.log("torol");
    props.torol(props.konyvAdat.id);
  }

  return (
    <tr>
      <td>{props.konyvAdat.cim}</td>
      <td>{props.konyvAdat.szerzo}</td>
      <td>{props.konyvAdat.ar}</td>
      <td>{props.konyvAdat.db}</td>
      <td>
        <button>hozzáad</button>
      </td>
      <td>
        <button className="torol" onClick={() => torol()}>
          törlés
        </button>
      </td>
    </tr>
  );
}
export default KonyvAdmin;
