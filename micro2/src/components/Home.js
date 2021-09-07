import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      I am home from micro 2 <Link to="/2/alternate">See me change</Link>
    </div>
  );
};

export default Home;
