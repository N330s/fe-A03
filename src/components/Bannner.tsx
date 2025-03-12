import styles from './banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src="/banner-image.jpg" alt="Event Venue" className={styles.bannerImage} />
      <div className={styles.bannerText}>
        <h1>Where every event finds its venue</h1>
        <p>Finding the perfect venue has never been easier. Whether it’s a wedding, corporate event, or private party, we connect people to the perfect place.</p>
      </div>
    </div>
  );
};

export default Banner;