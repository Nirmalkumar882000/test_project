import React, { useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Modals() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? handleClose() : handleOpen())}
      >
        Launch Modal
      </motion.button>
      {modalOpen && (
        <>
          <Backdrop onClick={handleClose} />
          <Modal handleClose={handleClose} />
        </>
      )}
    </div>
  );
}

export default Modals;