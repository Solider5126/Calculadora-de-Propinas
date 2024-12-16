import { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip:number
};

export default function TipPercentageForm({ setTip,tip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>
      <form action="">
        {tipOptions.map((tipOtion) => (
          <div className="flex gap-2" key={tipOtion.id}>
            <label htmlFor={tipOtion.id}>{tipOtion.label}</label>
            <input
              id={tipOtion.id}
              type="radio"
              name="tip"
              value={tipOtion.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOtion.value=== tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
