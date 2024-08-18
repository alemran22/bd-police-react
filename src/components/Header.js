import "./Header.css";

function Header() {
  return (
    <div className="header_full">
      <div className="header_main">
        <div className="left">
          <img
            src="https://www.police.gov.bd/storage/upload/logo/en.png"
            alt=""
          />
        </div>
        <div className="right">
          <div className="motto">
            “ দক্ষ পুলিশ, সমৃদ্ধ দেশ,<br /> দুর্নীতিমুক্ত বাংলাদেশ ”
          </div>
          <div className="right_flt">
            <div className="select">
              <select name="" id="" className="select">
                <option value="English" className="">
                  English
                </option>
                <option value="Bangla">Bangla</option>
              </select>
            </div>
            <div className="hotline_img">
              <img
                src="https://www.police.gov.bd/asset/images/999_logo_3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
