import { useContext } from "react";
import ReservationChoiseContext from "../components/Contexts/ReservationChoiseContext";
import Reservation from "../components/ReservationPage/Reservation/Reservation";

export default function ReservationPage() {
  const { cardIndex, setCardIndex } = useContext(ReservationChoiseContext);

  return (
    <div>
      <Reservation cardIndex={cardIndex} setCardIndex={setCardIndex} />
    </div>
  );
}
