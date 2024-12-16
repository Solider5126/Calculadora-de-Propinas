import type { MenuItem } from "../types";
type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      onClick={() => addItem(item)}
      className="border-2 hover:bg-teal-200 text-xl hover:text-black rounded-md border-teal-400 w-full p-3 flex justify-between"
    >
      <p className="">{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};

export default MenuItem;
