import ServiceCard from "./ServiceCard/ServiceCard";
import "./Services.css";
import "./ServiceCard/ServiceCard.css";
import servicesList from "../../servicesData";
const Services = () => {
  return (
    <section className="services">
      <div className="more-button-container">
        <a href="#" className="more-button">
          More
        </a>
      </div>
      <div className="service-card-container">
        {servicesList.map((service) => (
          <ServiceCard
            key={service.id}
            img={service.img}
            title={service.title}
            list={service.list}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
