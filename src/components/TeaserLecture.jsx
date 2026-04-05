import { Link } from "react-router-dom";
/*Visar titel, bild, introduktion och en länk till en lektion baserat på den data som skickas in via props.*/
function TeaserLecture({ data }) {
  return (
    <div
      className="d-flex flex-column align-items-center p-3 rounded"
      style={{ backgroundColor: data.bgcolor }}
    >
      <div className="d-flex flex-column flex-sm-row flex-lg-column justify-content-center align-items-center">
        <div className="d-flex flex-column">
          <p className="text-center text-uppercase fw-bold fs-4">
            {data.title}
          </p>
          <img src={data.image.url} alt={data.image.alt} />
        </div>

        <p className="text-center fs-5">{data.introduction}</p>
      </div>
      <Link className="fs-5" to={data.link}>
        Läs mer...
      </Link>
    </div>
  );
}

export default TeaserLecture;
