import "./ImportantLinkRight.css";
const ImportantLinkRight = ({ title, logo }) => {
  return (
    <div className="important-links-right">
      <a href="" className="item">
        <div className="img-container">
          <img src={logo} alt="" />
        </div>
        <p>{title}</p>
      </a>
    </div>
  );
};
export default ImportantLinkRight;
