import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark" >
        <div className="container ps-5 pe-5 d-flex justify-content-between">
            <Link className="navbar-brand text-warning" to="/">
                Collection Tracker
            </Link>
            <button className={`btn btn-warning ${styles.addButton}`} type="button">Agregar Colección</button>
        </div>
    </nav>
  )
}

export default Header