import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, text }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const createMarkup = () => {
    return { __html: text };
  };

  return (
    <>
      {isModalOpen && (
        <div className='flex items-center justify-center z-50'>
          <div className='bg-background p-8 rounded-lg shadow-lg max-w-6xl w-full max-h-6xl'>
            <div className='bg-background bg-opacity-50 flex justify-center items-center h-screen w-screen '>
              <div
                className='text-white overflow-y-auto'
                dangerouslySetInnerHTML={createMarkup()}
              />
              <button
                className='close'
                onClick={closeModal}
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
