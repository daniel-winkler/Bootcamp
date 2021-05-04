import logo from "../images/logo.jpg";

export default function Footer() {
    return (
        <div className="footer">
            <p>BROUGHT TO YOU BY</p>
            <p>
                <a href="https://www.themoviedb.org/" target="blank">
                    <img src={logo} height={"180"} alt={"TMDb Logo"}/>
                </a>
            </p>
        </div>
    )
}
