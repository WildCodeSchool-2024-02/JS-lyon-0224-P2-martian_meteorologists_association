import "./Reservation.css";

export default function Reservation() {
  return (
    <div>
      <h1>choose your shuttle</h1>
      <div className="shipContainer">
        <div className="shipCards">
          <article className="shipChoice">
            <img
              src="src/assets/images/pexels-pixabay-2159.webp"
              alt=""
              width="60px"
            />
            <h4>premium shuttle</h4>
          </article>
          <article className="shipChoice">
            <img
              src="src/assets/images/pexels-pixabay-2159.webp"
              alt=""
              width="60px"
            />
            <h4>pedalo shuttle</h4>
          </article>
          <article className="shipChoice">
            <img
              src="src/assets/images/pexels-pixabay-2159.webp"
              alt=""
              width="60px"
            />
            <h4>medium shuttle</h4>
          </article>
        </div>

        <div className="card">
          <img
            src="src/assets/images/pexels-pixabay-2159.webp"
            alt=""
            width="90px"
          />
          <h2>premium shuttle</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
            inventore. Incidunt adipisci natus numquam dolorum aperiam, sequi
            vero, nihil sunt recusandae vitae nobis? Minus aspernatur cum
            exercitationem quia ea quidem!
          </p>
          <p>price : 500 000 000 $</p>
        </div>
      </div>

      <div className="buttons">
        <button type="button">choose your dates</button>
        <button type="button">validate</button>
      </div>
      <div className="price">
        <p>500 000 000 $</p>
      </div>
    </div>
  );
}
