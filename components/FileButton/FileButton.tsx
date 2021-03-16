import { Children, ReactNode } from "react";
import styles from "./FileButton.module.scss";

export function FileButton({ text }: { text: string }) {
  return (
    <>
      <label htmlFor="upload" className={styles.label}>
        {text}
      </label>
      <input id="upload" type="file" name="upload" className={styles.hidden} />
    </>
  );
}
