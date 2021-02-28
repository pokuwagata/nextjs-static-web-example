import { useLayoutEffect, useState } from "react";
import styles from "./NoticeDialog.module.scss";

export default function NoticeDialog() {
  const [hasOpened, setHasOpened] = useState(false);
  const onClicked = () => {
    setHasOpened(true);
  };
  const onStopped = () => {
    onClicked();
    window.localStorage.setItem("modal", "true");
  };

  useLayoutEffect(() => {
    setHasOpened(!!window.localStorage.getItem("modal"));
  }, []);

  return (
    <Dialog open={!hasOpened} onClicked={onClicked} onStopped={onStopped} />
  );
}

function useLockBodyScroll() {
  useLayoutEffect(() => {
    window.document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
}

function Dialog(props: {
  open: boolean;
  onClicked: () => void;
  onStopped: () => void;
}) {
  if (!props.open) return null;

  useLockBodyScroll();

  return (
    <>
      <div className={styles.overlay} onClick={props.onClicked}>
        <dialog
          open
          className={styles["alert-dialog"]}
          onClick={(e) => {
            e.stopPropagation();
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
