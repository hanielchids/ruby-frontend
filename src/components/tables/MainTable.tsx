import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaExternalLinkAlt } from "react-icons/fa";
import ShowModal from "../modals/ShowModal";
import EditModal from "../modals/EditModal";
import AddModal from "../modals/AddModal";
import { Item } from "../../interfaces/Items";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { formatTime } from "../../utils/Time";

const MainTable = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [fetchData, setFetchData] = useState<boolean>(true);
  const authInfo = useSelector((state: RootState) => state.authInfo);

  useEffect(() => {
    const getPackages = async () => {
      if (fetchData) {
        try {
          const response = await fetch(`http://127.0.0.1:3000/packages`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();

          setItems(data);
          setFetchData(false);
        } catch (error: any) {
          alert(`Login failed: ${error.message}`);
        }
      }
    };

    getPackages();
  }, [fetchData]);

  const handleItemClick = (itemId: number | undefined) => {
    if (itemId !== undefined) {
      const selectedItem = items.find((item) => item.id === itemId);
      setSelectedItem(selectedItem || null);
    }
  };

  const handleEditClick = (itemId: number | undefined) => {
    if (itemId !== undefined) {
      const editingItem = items.find((item) => item.id === itemId);
      setEditingItem(editingItem || null);
    }
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setEditingItem(null);
    setIsAddModalOpen(false);
    setFetchData(true);
  };

  const handleSaveEdit = (newItem: Item) => {
    const updatedItems = items.map((item) =>
      item.reference_number === newItem.reference_number ? newItem : item
    );
    setItems(updatedItems);
    setSelectedItem(newItem);
  };

  const handleAddItem = (newItem: Item) => {
    setItems([...items, newItem]);
  };

  const deletePackage = async (itemId: number | undefined) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/packages/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedItems = items.filter((item) => item.id !== itemId);
      setItems(updatedItems);

      alert("package deleted");
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="container px-4 mx-auto">
        <div className="flex justify-end my-2">
          <button
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-blue-600 border-bg-blue-600 hover:border-transparent hover:text-blue-400 hover:bg-white mt-4 lg:mt-0"
            onClick={() => setIsAddModalOpen(true)}
          >
            Add
          </button>
        </div>

        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <button className="flex items-center gap-x-2">
                            <span>Reference Number</span>
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  "
                      >
                        Location
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  "
                      >
                        UserID
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  "
                      >
                        Destination
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  "
                      >
                        Distance
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  "
                      >
                        Timeslot
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <span>{item.reference_number}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {item.date}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 ">
                            <h2 className="text-sm font-normal">
                              {item.location_name}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <div>
                              <h2 className="text-sm font-medium text-gray-800 ">
                                {authInfo.userId}
                              </h2>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {item.destination_name}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {item.distance}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          {formatTime(item.timeslot)}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              className="text-gray-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                              onClick={() => handleItemClick(item.id)}
                            >
                              <FaExternalLinkAlt />
                            </button>

                            <button
                              className="text-green-500 transition-colors duration-200 hover:text-green-500 focus:outline-none"
                              onClick={() => handleEditClick(item.id)}
                            >
                              <FaEdit />
                            </button>

                            <button
                              onClick={() => deletePackage(item.id)}
                              className="text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none"
                            >
                              <FaTrashAlt />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedItem && (
        <ShowModal item={selectedItem} onClose={handleCloseModal} />
      )}

      {editingItem && (
        <EditModal
          item={editingItem}
          onSave={handleSaveEdit}
          onClose={handleCloseModal}
        />
      )}

      {isAddModalOpen && (
        <AddModal onAdd={handleAddItem} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default MainTable;
