import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      I am home from micro 1 <Link to="/1/alternate">See me change</Link>
    </div>
  );
};

export default Home;
