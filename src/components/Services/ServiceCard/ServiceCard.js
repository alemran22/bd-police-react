import "./ServiceCard.css";
import { BiSolidRightArrow } from "react-icons/bi";

const ServiceCard = ({ title, img, list }) => {
  return (
    <div className="">
      <div className="service-card">
        <h3 className="card-title">{title}</h3>
        <div className="service-card-content">
          <div className="left">
            <img src={img} />
          </div>
          <div className="right">
            {/* service 1 */}
            {list.map((item) => (
              <div className="link-container">
                <BiSolidRightArrow />
                <a href="#" className="">
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
