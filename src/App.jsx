import { useEffect, useState } from "react";
import "./App.css";
import BaseButton from "./components/base/button/BaseButton";
import BaseModal from "./components/base/modal/BaseModal";
import BackToTop from "./components/base/backToTop/BackToTop";
import Loader from "./components/base/loader/Loader";

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  const confirmDelete = () => {
    console.log("Deleted");

    handleClose();
  };

  const [comments, setComments] = useState([]);
  const [isShowLoading, setIsShowLoading] = useState(false);

  useEffect(() => {
    setIsShowLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setIsShowLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <BaseButton onClick={handleShow} htmlType="button">
        Show
      </BaseButton>

      <BaseModal
        enter
        onCancel={handleClose}
        onConfirm={confirmDelete}
        title={"Xác nhận"}
        open={isShow}
        content={
          " Bạn có chắc chắn muốn xóa người dùng có tên là Nguyễn Văn A không?"
        }
      />

      <BackToTop />
      {isShowLoading && <Loader />}
    </>
  );
}

export default App;
