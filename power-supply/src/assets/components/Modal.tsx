interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1E293B] p-8 rounded-2xl max-w-lg w-full relative">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl text-green-400 mb-4">{title}</h2>
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  );
};

export default Modal;