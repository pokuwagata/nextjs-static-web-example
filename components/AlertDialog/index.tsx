import styles from "./AlertDialog.module.scss";

export default function AlertDialog() {
  return (
    <>
      <div className={styles.overlay}>
        <dialog open className={styles["alert-dialog"]}>
          <strong className={styles["alert-dialog__heading"]}>
            Delete Customer
          </strong>
          <p className={styles["alert-dialog__text"]}>
            Are you sure? You can't undo this action afterwards.
          </p>
          <div className={styles["alert-dialog__menu"]}>
            <button
              type="button"
              className={styles["alert-dialog__secondary-button"]}
            >
              Cancel
            </button>
            <button
              type="button"
              className={styles["alert-dialog__primary-button"]}
            >
              Delete
            </button>
          </div>
        </dialog>
      </div>
    </>
  );
}
