import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl ">Consumo</h2>
      <div className="space-y-3 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-t py-5 last-of-type:border-b border-gray-200 items-center"
          >
            <div className="">
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad:{item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-600 rounded-full h-8 w-8 font-black text-white"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
