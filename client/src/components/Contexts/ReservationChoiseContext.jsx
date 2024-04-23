import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const ReservationChoiseContext = createContext();

export function ReservationProvider({ children }) {
  const [cardIndex, setCardIndex] = useState(0);
  const foo = useMemo(() => ({ cardIndex, setCardIndex }), [cardIndex]);

  return (
    <ReservationChoiseContext.Provider value={foo}>
      {children}
    </ReservationChoiseContext.Provider>
  );
}

ReservationProvider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};

export default ReservationChoiseContext;
