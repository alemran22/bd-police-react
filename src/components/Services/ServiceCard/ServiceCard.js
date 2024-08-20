import "./ServiceCard.css";
import { BiSolidRightArrow } from "react-icons/bi";

import servicesList from "../../../servicesData";
const ServiceCard = () => {
  return (
    <div className="">
      {servicesList.map((item) => (
        <div key={item.id} className="service-card">
          <h3 className="card-title">{item.title}</h3>
          <div className="service-card-content">
            <div className="left">
              <img src={item.img} />
            </div>
            <div className="right">
              {/* item 1 */}
              <div className="link-container">
                <BiSolidRightArrow />
                <a href="#" className="">
                  {item.list}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
