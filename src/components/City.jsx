import { useParams } from "react-router-dom";
import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  console.log(id);

  // For now, let's use temporary data
  const currentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
  };

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <h1>
        {emoji} {cityName}
      </h1>
      <p>Visited on: {formatDate(date)}</p>
      <p>Notes: {notes}</p>

      <small>City ID from URL: {id}</small>
    </div>
  );
}

export default City;
