import { useState } from "react";
import type { CardProps } from "../../types";
import Modal from "./Modal";

const Card: React.FC<CardProps> = ({ title, short, full }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer bg-[#1E293B] p-6 rounded-2xl border border-gray-700 shadow-lg hover:scale-105 transition"
      >
        <h3 className="text-xl font-semibold text-green-400 mb-3">
          {title}
        </h3>
        <p className="text-gray-300">{short}</p>
      </div>

      {open && (
        <Modal
          title={title}
          content={full}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Card;