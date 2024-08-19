import "./ImportantLinkRight.css";
import "./RightContentArea.css";
import ImportantLinkRight from "./ImportantLinkRight";
import { importantLinkDataRight } from "../importantLinkData";

const RightContentArea = () => {
  return (
    <div className="right-content-area">
      {
      importantLinkDataRight.map(item => 
        <ImportantLinkRight key={item.id} logo={item.img} title={item.title} />
      )}
    </div>
  );
};

export default RightContentArea;
