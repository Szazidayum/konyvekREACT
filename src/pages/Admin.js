import KonyvAdmin from "../components/admin/KonyvAdmin";
import KonyvModell from "../modell/KonyvModell";
import "./Admin.css";

const konyvek = [
  {
    id: 0,
    cim: "Trónok harca",
    szerzo: "George R. R. Martin",
    ar: 3500,
    eleresiut: "kepek/Tűz_és_jég_dala_1_-_Trónok_harca.jpg",
    db: 0,
  },
  {
    id: 1,
    cim: "Kardok vihara",
    szerzo: "George R. R. Martin",
    ar: 3500,
    eleresiut: "kepek/kardok-vihara.jpg",
    db: 0,
  },
  {
    id: 2,
    cim: "Királyok csatája",
    szerzo: "George R. R. Martin",
    ar: 3500,
    eleresiut: "kepek/Tűz_és_jég_dala_2_-_Királyok_csatája.jpg",
    db: 0,
  },
];

function Admin() {

  function torol(id) {
    console.log(id);
    const kmodel = new KonyvModell();
    kmodel.adatTorol(konyvek, id);
}


  return (
    <div className="Admin">
      <article className="konyvekAdmin">
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
            {konyvek.map((konyv, index) => {
              return <KonyvAdmin konyvAdat={konyv} key={index} torol={torol} />;
            })}
          </tbody>
        </table>
      </article>
    </div>
  );
}

export default Admin;
