// How to update object in array state.
// Find the index of the object you want to update in the array.
// Modify the object at that index.
// Update the state with the modified array.

import React, { useState } from "react";
interface Item {
  id: number;
  name: string;
  quantity: number;
}

const UpdateObjectArray: React.FC = () => {
  const data = [
    { id: 1, name: "Apple", quantity: 5 },
    { id: 2, name: "Banana", quantity: 3 },
    { id: 3, name: "Orange", quantity: 2 },
  ];
  const [items, setItems] = useState<Item[]>(data);
  //   handle Update item
  const updateItem = (id: number, updatedItem: Partial<Item>) => {
    // modify the object at that index
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, ...updatedItem };
      }
      return item;
    });
    // update the state with the modified array
    setItems(updatedItems);
  };

  data[0].quantity += 10; // Setting the quantity of Orange to 10

  console.log(data);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button
              onClick={() =>
                updateItem(item.id, { quantity: item.quantity + 1 })
              }
            >
              Increase Quantity
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateObjectArray;
