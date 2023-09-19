import React, { useState } from "react";
import { Item } from "../../interfaces/Items";

interface editModalProps {
  item: Item;
  onSave: (newItem: Item) => void;
  onClose: () => void;
}

const EditModal: React.FC<editModalProps> = ({ item, onSave, onClose }) => {
  const [newItem, setNewItem] = useState<Item>(item);

  const handleUpdatePackage = async (itemId: number | undefined) => {
    onSave(newItem);
    onClose();

    try {
      const response = await fetch(`http://127.0.0.1:3000/packages/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          package: {
            reference_number: newItem.reference_number,
            location_name: newItem.location_name,
            destination_name: newItem.destination_name,
            distance: newItem.distance,
            date: newItem.date,
            timeslot: newItem.timeslot,
          },
        }),
      });

      if (!response.ok) {
        console.log(response);
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        <div className="w-full">
          <div className="m-4 my-10 max-w-[400px] mx-auto">
            <div>
              <h2 className="text-2xl font-bold leading-7 text-center text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Edit package
              </h2>
            </div>
            <div className="mt-4 mb-8">
              <form
                className="space-y-6"
                onSubmit={() => handleUpdatePackage(item.id)}
              >
                <div className="mt-2">
                  <input
                    id="location_name"
                    name="location_name"
                    type="text"
                    placeholder={item.location_name}
                    value={newItem.location_name}
                    onChange={(e) =>
                      setNewItem({
                        ...newItem,
                        location_name: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="mt-2">
                  <input
                    id="destination_name"
                    name="destination_name"
                    type="text"
                    placeholder={item.destination_name}
                    value={newItem.destination_name}
                    onChange={(e) =>
                      setNewItem({
                        ...newItem,
                        destination_name: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="mt-2">
                  <input
                    id="distance"
                    name="distance"
                    type="number"
                    placeholder={item.distance}
                    value={newItem.distance}
                    onChange={(e) =>
                      setNewItem({
                        ...newItem,
                        distance: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="mt-2">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    placeholder={item.date}
                    value={newItem.date}
                    onChange={(e) =>
                      setNewItem({
                        ...newItem,
                        date: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="mt-2">
                  <input
                    id="timeslot"
                    name="timeslot"
                    type="time"
                    placeholder="Timeslot"
                    value={newItem.timeslot}
                    onChange={(e) =>
                      setNewItem({
                        ...newItem,
                        timeslot: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="mt-2">
                  <input
                    id="reference_number"
                    name="reference_number"
                    type="number"
                    placeholder={item.reference_number}
                    value={newItem.reference_number}
                    onChange={(e) =>
                      setNewItem({
                        ...newItem,
                        reference_number: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    className="p-3 bg-black rounded-full text-white w-full font-semibold"
                  >
                    Add Item
                  </button>
                  <button
                    onClick={onClose}
                    className="p-3 bg-white border rounded-full w-full font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <div className="space-y-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
