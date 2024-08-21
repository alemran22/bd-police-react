import "./ImportantLinkRight.css";
import "./RightContentArea.css";
import ImportantLinkRight from "./ImportantLinkRight";
import { importantLinkDataRight } from "../importantLinkData";

const RightContentArea = () => {
  return (
    <div className="total-right">
      <div className="right-content-area-top">
        {importantLinkDataRight.map((item) => (
          <ImportantLinkRight
            key={item.id}
            logo={item.img}
            title={item.title}
          />
        ))}
      </div>
      <div className=""></div>
    </div>
  );
};

export default RightContentArea;
