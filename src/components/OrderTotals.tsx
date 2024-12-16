import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
  notify: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
  notify,
}: OrderTotalProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const total = useMemo(() => subtotalAmount + tipAmount, [tip, order]);
  const handleButtonClick = () => {
    placeOrder();
    notify();
  };
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina</h2>

        <p>
          Subtotal a pagar:{""}{" "}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>{" "}
        </p>
        <p>
          Propina: {""}{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>{" "}
        </p>
        <p>
          Total a Pagar: {""}{" "}
          <span className="font-bold">{formatCurrency(total)}</span>{" "}
        </p>
      </div>

      <button
        onClick={handleButtonClick}
        disabled={total === 0}
        className="w-full bg-black rounded-lg p-2 text-white font-bold text-xl uppercase disabled:opacity-10"
      >
        Guardar Orden
      </button>
    </>
  );
}
