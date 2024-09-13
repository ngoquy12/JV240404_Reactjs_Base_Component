import { useEffect, useState } from "react";
import "./backtop.css";

export default function BackToTop() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  });

  // Quay về đầu trang khi click
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isShow && (
        <button onClick={handleBackToTop} className="back-top">
          <ion-icon name="arrow-up-outline"></ion-icon>
        </button>
      )}
    </>
  );
}
