import Pedalo from "../components/ReservationPage/Reservation/Pedalo";
import Classic from "../components/ReservationPage/Reservation/Classic";
import Premuim from "../components/ReservationPage/Reservation/Premium";

const ShuttleCards = [
  {
    activTy: "Premium Express",
    image: "src/assets/images/Premium_shuttle.png",
    ship: <Premuim />,
    description:
      "Indulge in six months of travel with the luxury of included spa treatments and room service, ensuring your relaxation and enjoyment throughout.",
    price: "$500 000 000",
  },
  {
    activTy: "Classic",
    image: "src/assets/images/Classic_shuttle.png",
    ship: <Classic />,
    description:
      "Relish in guaranteed comfort and breathtaking views throughout nine months of travel, offering ample time for personal growth and self-discovery.",
    price: "$450 000 000",
  },
  {
    activTy: "Pedalo",
    image: "src/assets/images/Pedalo_shuttle.png",
    ship: <Pedalo />,
    description:
      "Gear up for an epic journey! Pedal your way to Mars and sculpt the perfect legs for your adventure. Please exercise caution and choose wisely, as we cannot assume responsibility for your safety.",
    price: "$300 000 000",
  },
];
export default ShuttleCards;
