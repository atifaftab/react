import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalOpen, setModalOpen] = useState(false);

  function deleteHandler() {
    setModalOpen(true);
    console.log(props.text);
  }
  function closeModalHandler() {
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalOpen && <Backdrop onBgClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
