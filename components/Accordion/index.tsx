import { useState } from "react";
import styles from "./accordion.module.scss";

function Item(props: { visible: boolean }) {
  return (
    <>
      <dt>
        <h2
          className={`${styles.accordion__question} ${
            !props.visible && styles["accordion__question--hide"]
          }`}
        >
          <button
            className={`${styles.accordion__button} ${
              !props.visible && styles["accordion__button--hide"]
            }`}
          >
            question 1
          </button>
        </h2>
      </dt>
      <dd
        className={`${styles.accordion__answer} ${
          !props.visible && styles["accordion__answer--hide"]
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </dd>
    </>
  );
}

export function Accordion() {
  const [visibleItems, setVisibleItems] = useState([]);

  return (
    <>
      <dl className={styles.accordion}>
        <Item visible={false} />
        <Item visible={true} />
      </dl>
    </>
  );
}
