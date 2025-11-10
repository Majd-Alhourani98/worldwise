import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  console.log(country);
  const { countryName, emoji } = country;
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.name}>{countryName}</span>
    </li>
  );
}

export default CountryItem;
