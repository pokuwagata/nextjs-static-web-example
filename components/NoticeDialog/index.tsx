import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./NoticeDialog.module.scss";

export default function NoticeDialog() {
  const [stopped, setStopped] = useState(() => {
    return !!window.localStorage.getItem("modal");
  });
  const [open, setOpen] = useState(!stopped);

  useEffect(() => {
    stopped && window.localStorage.setItem("modal", String(stopped));
  }, [stopped]);

  const onClicked = () => {
    setOpen(false);
  };
  const onStopped = () => {
    setStopped(true);
  };

  return open && <Dialog {...{ onClicked, onStopped }} />;
}

function useLockBodyScroll() {
  useLayoutEffect(() => {
    window.document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
}

function Dialog(props: { onClicked: () => void; onStopped: () => void }) {
  useLockBodyScroll();

  return (
    <>
      <div className={styles.overlay} onClick={props.onClicked}>
        <dialog
          open
          className={styles["alert-dialog"]}
          onClick={(e) => {
            e.stopPropagation();
            props.onClicked();
          }}
        >
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
              onClick={props.onStopped}
            >
              2度と表示しない
            </button>
            <button
              type="button"
              className={styles["alert-dialog__primary-button"]}
              onClick={props.onClicked}
            >
              OK
            </button>
          </div>
        </dialog>
      </div>
    </>
  );
}
