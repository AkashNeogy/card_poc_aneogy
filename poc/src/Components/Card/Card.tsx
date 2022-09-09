import "./Card.css";
import image from "./MainImg.jpeg";
import Button from "./../Button/Button";
export function Card() {
  const style = {
    width: "18rem",
  };
  return (
    <>
      <div className="container">
        <div className="row" id="main">
          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title" id="cardTitle">
                GROUNDED IN SCIENCE
              </h5>
              <p className="card-text" id="cardText">
                Our scientific staff ensures our products meet the highest
                standards
              </p>
              <p className="card-text" id="quoteText">
                <blockquote>
                  "These scientifically Proven products is the reason why
                  millions of people successfully reach their health,
                  wellness,and sports nutrition goal"
                  <p> -Martha Grey,C.N.S</p>
                </blockquote>
              </p>
              <p className="card-text" id="author"></p>
            </div>
            <div className="col-4">
              <Button
                type="solid"
                styleType="Success"
                buttonText="learn more"
              ></Button>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="card" style={style}>
              <img
                className="card-img"
                src={image}
                alt="Cardimagecap"
                id="mainImg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
