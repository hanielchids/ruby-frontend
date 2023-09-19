import React from "react";
import { Item } from "../../interfaces/Items";
import { formatTime } from "../../utils/Time";

interface showModalProps {
  item: Item;
  onClose: () => void;
}

const ShowModal: React.FC<showModalProps> = ({ item, onClose }) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        <div className="w-full">
          <div className="m-4 my-10 max-w-[400px] mx-auto">
            <div className="my-4">
              <h2 className="text-2xl font-bold leading-7 text-center text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                PACKAGE: {item.reference_number}
              </h2>
            </div>
            <div className="mb-8">
              <p className="text-gray-600">Location: {item.location_name}</p>
              <p className="text-gray-600">
                Destination: {item.destination_name}
              </p>
              <p className="text-gray-600">Date: {item.date}</p>
              <p className="text-gray-600">
                Timeslot:{formatTime(item.timeslot)}
              </p>
              <p className="text-gray-600">
                Reference Number:{item.reference_number}
              </p>
            </div>
            <div className="space-y-4">
              <button className="p-3 bg-black rounded-full text-white w-full font-semibold">
                Edit
              </button>
              <button
                onClick={onClose}
                className="p-3 bg-white border rounded-full w-full font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
