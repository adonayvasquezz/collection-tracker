import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark" >
        <div className="container ps-5 pe-5 d-flex justify-content-between">
            <Link className="navbar-brand text-warning" to="/">
                Collection Tracker
            </Link>
            
        </div>
    </nav>
  )
}

export default Header