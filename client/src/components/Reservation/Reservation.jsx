import "./Reservation.css";

export default function Reservation() {
  return (
    <div>
      <h1>choose your shuttle</h1>
      <div className="shipContainer">
        <div className="shipCards">
          <article>
            <img src="" alt="" />
            <h3>0</h3>
          </article>
          <article>
            <img src="" alt="" />
            <h3>0</h3>
          </article>
          <article>
            <img src="" alt="" />
            <h3>0</h3>
          </article>
        </div>
        <div className="card">
          <h2>0</h2>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
            inventore. Incidunt adipisci natus numquam dolorum aperiam, sequi
            vero, nihil sunt recusandae vitae nobis? Minus aspernatur cum
            exercitationem quia ea quidem!
          </p>
        </div>
      </div>
      <div className="buttons">
        <button type="button">choose your dates</button>
        <button type="button">validate</button>
      </div>
      <div className="price">
        <h2>price</h2>
        <p>$</p>
      </div>
    </div>
  );
}
