import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import "./Style/residentCard.css";

const ResidentCard = ({ location }) => {
  const [residents, getResidents] = useFetch();
  useEffect(() => {
    getResidents(location);
  }, []);
  console.log(residents);

  return (
    <article className="residentcard">
      <figure className="residentcard_img">
        <img src={residents?.image} alt="character_image" />

        <figcaption className="residentcard_status">
          <div className={`residentcard_circle  ${residents?.status}`}></div>
          <span>{residents?.status}</span>
        </figcaption>
      </figure>
      <h2 className="residentcard_name">{residents?.name}</h2>
      <hr className="residentcard_separator" />
      <ul className="residentcard_list">
        <li className="residentcard_item">
          <span>Specie: </span>
          <span>{residents?.species}</span>
        </li>
        <li className="residentcard_item">
          <span>Origin: </span>
          <span>{residents?.origin.name}</span>
        </li>
        <li className="residentcard_item">
          <span>Episodes where appear: </span>
          <span>{residents?.episode.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default ResidentCard;
