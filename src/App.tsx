import "./App.css";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();
  const notify = () =>
    toast.success("Orden Guardada", {
      position: "top-right",
    });
  return (
    <>
      <header className=" bg-sky-500 ">
        <h1 className="text-4xl text-center p-3 font-extrabold uppercase text-white">
          Calculadora de Propinas
        </h1>
      </header>
      {/* <button onClick={notify}>Notify !</button> */}
      <ToastContainer />
      <main className="text-white  h-full w-full pt-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="grid grid-cols-2   max-w-7xl mx-auto spy-20 ">
          <div className="p-5">
            <h2 className="text-4xl font-black">Menú</h2>
            <div className="space-y-3 mt-10">
              {menuItems.map((item) => (
                <MenuItem addItem={addItem} key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 ">
            {order.length > 0 ? (
              <>
                <OrderContents order={order} removeItem={removeItem} />
                <TipPercentageForm setTip={setTip} tip={tip} />
                <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                  notify={notify}
                />
              </>
            ) : (
              <p className="text-center">La orden esta vacia</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
