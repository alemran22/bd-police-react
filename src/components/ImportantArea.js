import "./ImportantArea.css";
import ImportantLinkItem from "./ImportantLinkItem";
import {importantLinkDataLeft} from '../importantLinkData';
const ImportantArea = () => {
  return (
    <div className="important-area">
      {/* links */}
      <div className="important-link-items">
        {
          importantLinkDataLeft.map(item => <ImportantLinkItem key={item.id}
            logo={item.img}
            title={item.title}
          />)
        }
        
      </div>

      {/* notice board */}
      <div className="notice-board">Notice Board</div>
    </div>
  );
};

export default ImportantArea;
