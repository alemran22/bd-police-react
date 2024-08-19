const ImportantLinkItem = ({ logo, title }) => {
  return (
    <div className="important-links">
      <a href="" className="item">
        <div className="img-container">
          <img src={logo} alt="" />
        </div>
        <p>{title}</p>
      </a>
    </div>
  );
};
export default ImportantLinkItem;
