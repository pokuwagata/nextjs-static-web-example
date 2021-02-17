import styles from "./Tab.module.scss";

export function Tab() {
  return (
    <>
      <ul className={styles.tab__items}>
        <li>
          <button
            className={`${styles.tab__item} ${styles["tab__item--active"]}`}
          >
            One
          </button>
        </li>
        <li>
          <button className={`${styles.tab__item}`}>One</button>
        </li>
        <li>
          <button className={`${styles.tab__item}`}>One</button>
        </li>
      </ul>
      <ul className={styles.tab__panels}>
        <li className={`${styles.tab__panel} ${styles["tab__panel--active"]}`}>
          <p>One</p>
        </li>
        <li className={`${styles.tab__panel}`}>
          <p>Two</p>
        </li>
        <li className={`${styles.tab__panel}`}>
          <p>Three</p>
        </li>
      </ul>
    </>
  );
}
