function Modal({ isVisible, onClose, children }) {
    if (!isVisible) return null;
  
    const handleClose = (e) => {
      if (e.target.id === "wrapper") onClose();
    };
  
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-25
      backdrop-blur-sm flex justify-center items-center z-10 w-full"
        id="wrapper"
        onClick={handleClose}
      >
        <div className=" w-[350px]  sm:w-[550px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1440px] flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className="bg-white rounded ">{children}</div>
        </div>
      </div>
    );
  }
  
  export default Modal;
