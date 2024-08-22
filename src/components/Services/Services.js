import ServiceCard from "./ServiceCard/ServiceCard";
import "./Services.css";
import "./ServiceCard/ServiceCard.css";
import servicesList from "../../servicesData";
import serviceVideoData from "../../serviceVideoData";

const Services = () => {
  return (
    <section className="services">
      {/* more-button */}
      <div className="more-button-container">
        <a href="#" className="more-button">
          More
        </a>
      </div>
      {/* service-card-container */}
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
      {/* video Gallery*/}

      <div className="video-section">
        <h4 className="title">বাংলাদেশ পুলিশ ভিডিও</h4>
        <div className="video-container">
          {serviceVideoData.map((videoId) => (
            <div key={videoId} className="video-content">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="সকল ঈদ-উৎসব-পার্বণে বাংলাদেশ পুলিশ আছে আপনাদের পাশে। সেবাই আমাদের উৎসব, সেবাই আমাদের আনন্দ।"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
