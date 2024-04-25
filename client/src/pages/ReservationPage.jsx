import { useState } from "react";
import Reservation from "../components/ReservationPage/Reservation/Reservation";

export default function ReservationPage() {
  const [cardIndex, setCardIndex] = useState(0);
  return (
    <div>
      <Reservation cardIndex={cardIndex} setCardIndex={setCardIndex} />
    </div>
  );
}
