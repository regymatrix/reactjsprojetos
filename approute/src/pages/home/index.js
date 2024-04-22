import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="HomeClass">
      <h2>Home</h2>
      <Link to="/login">Fazer Login</Link>
    </div>
  );
}

export default Home;
