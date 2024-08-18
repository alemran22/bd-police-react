import "./Banner.css";
function Banner(){
    return(
        <div className="container">
            <div className="left">
                <img src="https://www.police.gov.bd/storage/upload/poster/lBCgBZQO2pttAyv8Kgy3Lz7XvWKVreSsd02L67In.jpg" alt="" className="" />
            </div>
            <div className="right">
                <img src="https://www.police.gov.bd/storage/upload/file/PSIAgoFSgkTWdSU2RAiia5SsEZRI0IrQ2zcVK63x.png" alt="" className="" />
                <h4 className="igp_name">Md. Mainul Islam, ndc <br />
                Inspector General</h4>
                <a href="#" className="igp_message">Message from IGP</a>
            </div>
        </div>
    );
}
export default Banner;