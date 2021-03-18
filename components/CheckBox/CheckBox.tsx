import styles from "./CheckBox.module.scss";

export function CheckBox() {
  return (
    <>
      <div>
        <input type="checkbox" id="checkbox1" className={styles.input} />
        <label htmlFor="checkbox1" className={styles.label}>
          チェックボックス1
        </label>
      </div>
    </>
  );
}
