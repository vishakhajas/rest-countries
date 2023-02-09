import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../../App";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  const { dark } = useContext(myContext);

  return (
    <div className={`${dark ? "dark" : ""} card-container`}>
      <div className="top">
        <Link to={`/${country?.name}`}>
          <img
            src={country?.flags?.png || country?.flags?.svg}
            alt={country?.name}
          />
        </Link>
      </div>
      <div className="bottom">
        <h2 className="country-name" title={country?.name}>
          {country?.name.length > 16
            ? country?.name?.substring(0, 16) + "..."
            : country?.name}
        </h2>
        <div className="country-details">
          <p>
            <span>Population</span> : {country?.population.toLocaleString("hi")}
          </p>
          <p>
            <span>Region</span> : {country?.region}
          </p>
          <p>
            <span>Capital</span> : {country?.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
