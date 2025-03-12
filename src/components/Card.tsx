import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <img src="/card-image.jpg" alt="The Bloom Pavilion" className={styles.cardImage} />
      <div className={styles.cardText}>
        <h2>The Bloom Pavilion</h2>
        <p>A stunning and exciting outdoor environment has come up with great adventure.</p>
      </div>
    </div>
  );
};

export default Card;