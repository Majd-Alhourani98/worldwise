import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

import styles from "./CountryList.module.css";
import { useCities } from "../../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((countriesAcc, city) => {
    const existingCountryNames = countriesAcc.map(
      (country) => country.countryName
    );

    if (!existingCountryNames.includes(city.name)) {
      countriesAcc.push({ countryName: city.country, emoji: city.emoji });
    }

    return countriesAcc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.name} />
      ))}
    </ul>
  );
}

export default CountryList;
