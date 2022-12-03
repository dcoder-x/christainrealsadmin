import { ReactComponent as LogoDark } from "../assets/images/logos/logodark.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <LogoDark style={{width:'70%',}} />
    </Link>
  );
};

export default Logo;
