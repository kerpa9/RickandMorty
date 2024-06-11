import "./Style/locationCard.css";

const LocationCard = ({ location }) => {
  return (
    <article className="location">
      <h2 className="location_name">{location?.name}</h2>
      <ul className="location_list">
        <li className="location_item">
          <span>Type: </span>
          <span>{location?.type}</span>
        </li>
        <li className="location_item">
          <span>Dimension: </span>
          <span>{location?.dimension}</span>
        </li>
        <li className="location_item">
          <span>Population: </span>
          <span>{location?.residents?.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default LocationCard;
