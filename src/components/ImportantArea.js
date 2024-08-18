import "./ImportantArea.css";
import ImportantLinkItem from "./ImportantLinkItem";
const ImportantArea = () => {
  return (
    <div className="important-area">
      {/* links */}
      <ImportantLinkItem
        logo={
          "https://www.police.gov.bd/storage/upload/announcement/WfQLLDptPSdlOI8kNu4BnUoV4uXZSAX7prmWByC8.png"
        }
        title={"Online Police Clearance"}
      />
      <ImportantLinkItem
        logo={
          "https://www.police.gov.bd/storage/upload/announcement/tKm76RLPfdM4sj2z4GRRhtyfAKktsmgXGhiE7FFM.png"
        }
        title={"BD Police Helpline"}
      />
      <ImportantLinkItem
        logo={
          "https://www.police.gov.bd/storage/upload/announcement/T7CDr3HFARPHrnk9FeO5ceXeaa1blW3a00KsTGBz.png"
        }
        title={"Expatriate Cell"}
      />
      <ImportantLinkItem
        logo={
          "https://www.police.gov.bd/storage/upload/announcement/fOQH3PEvuFC69VHqe3ySxauebrDFiR4ZXv7h7itC.png"
        }
        title={"Opinion or Complaint "}
      />
      <ImportantLinkItem
        logo={
          "https://www.police.gov.bd/storage/upload/announcement/pSIACGowrQenbQABMsfpl9rHrYyBUcMoaMsWOLKg.png"
        }
        title={"Hotline Number"}
      />
      <ImportantLinkItem
        logo={
          "https://www.police.gov.bd/storage/upload/announcement/bURQrA0cBzIbT44WusDCAHV56wEKwqfAPpOcJjPn.png"
        }
        title={"PIMS"}
      />
      <ImportantLinkItem
        logo={
          "https://www.police.gov.bd/storage/upload/announcement/cSIdRQWCQgZJCxORAYaaBpuU2Y601S4cSgtirJ9N.png"
        }
        title={"BPWN Annual Training"}
      />
      <ImportantLinkItem
        logo={
          "https://www.police.gov.bd/storage/upload/announcement/qlck9RMnvTW7ibW37f1u4CUxW0nyNX3qyfxcqtgJ.png"
        }
        title={"Achievment & Success"}
      />
      

      {/* notice board */}
      <div className="notice-board"></div>
    </div>
  );
};

export default ImportantArea;
