import { useContext } from "react";
import ReservationForm from "../components/ReservationForm/ReservationForm";
import ReservationChoiseContext from "../components/Contexts/ReservationChoiseContext";

export default function ReservationFormPage() {
  const { cardIndex } = useContext(ReservationChoiseContext);
  return (
    <div>
      <ReservationForm cardIndex={cardIndex} />
    </div>
  );
}
