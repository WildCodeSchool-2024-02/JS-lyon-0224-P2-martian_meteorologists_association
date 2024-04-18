import "./Activies.css";

function Activities() {
  return (
    <>
      <h1>Activities</h1>
      <div className="activitiesContainer">
        <div className="activitiesForm">
          <form>
            <div className="activitiesQuestion">
              <article className="activitieschoice">
                <h4>How do you feel?</h4>
                <select id="feel" name="feel" className="questionForm">
                  <option value="discovery">
                    I want to discover new stuff and go on adventures
                  </option>
                  <option value="relax">I just want to relax</option>
                </select>
              </article>

              <article className="activitieschoice">
                <h4>Are you sporty?</h4>
                <select id="sporty" name="sporty" className="questionForm">
                  <option value="sportYes">Yes</option>
                  <option value="sportNo">No</option>
                </select>
              </article>

              <article className="activitieschoice">
                <h4>Outside or inside?</h4>
                <select
                  id="outsideInside"
                  name="outsideInside"
                  className="questionForm"
                >
                  <option value="outside">Oustide</option>
                  <option value="inside">Inside</option>
                </select>
              </article>
            </div>

            <button type="submit" className="activitiesValidation">
              <p>Validate</p>
            </button>
          </form>
        </div>

        <div className="todoContainer todoContainerVisibility">
          <h2>TO DO</h2>
          <article className="todoArticle">
            <h4>lorem</h4>
            <p>Ipsililum blablablabalbal</p>
          </article>
          <article className="todoArticle">
            <h4>lorem</h4>
            <p>Ipsililum blablablabalbal</p>
          </article>
          <article className="todoArticle">
            <h4>lorem</h4>
            <p>Ipsililum blablablabalbal</p>
          </article>
        </div>
      </div>
    </>
  );
}

export default Activities;
