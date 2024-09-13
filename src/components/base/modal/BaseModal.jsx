import { useEffect, useRef, useState } from "react";
import BaseButton from "../button/BaseButton";
import "./modal.css";

export default function BaseModal({
  title,
  open,
  content,
  okText,
  cancelText,
  onCancel,
  onConfirm,
  enter,
}) {
  const modalRef = useRef();
  useEffect(() => {
    const closeModal = (e) => {
      if (enter && modalRef.current && !modalRef.current.contains(e.target)) {
        onCancel();
      }
    };

    if (open) {
      window.addEventListener("mousedown", closeModal);
    }

    // Cleanup function -> Chạy trước khi component bị unmount
    return () => {
      removeEventListener("mousedown", closeModal);
    };
  }, [open, onCancel]);

  return (
    <>
      {open ? (
        <div className="overlay">
          <section ref={modalRef} className="base-modal">
            <header className="modal-header">
              <h3 className="title">{title || "Tiêu đề modal"}</h3>
              <div onClick={onCancel} className="icon-close">
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </header>
            <main className="modal-content">{content || "Content modal"}</main>
            <footer className="modal-footer">
              <BaseButton onClick={onCancel} type="secondary">
                {cancelText || "Hủy"}
              </BaseButton>
              <BaseButton onClick={onConfirm} type="primary">
                {okText || "Xác nhận"}
              </BaseButton>
            </footer>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
