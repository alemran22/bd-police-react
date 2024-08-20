import ServiceCard from "./ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <div className="more-button-container">
        <a href="#" className="more-button">
          More
        </a>
      </div>
      <div className="service-card-container">
        <ServiceCard />
      </div>
    </section>
  );
};

export default Services;
