import { faGripLines, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
    const [expand,setExpand] = useState(true);

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="container-fluid">
                    <div className="d-lg-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="navbar-brand">
                                <img className="logoImg" src="https://i.ibb.co/kJCGyts/doctorschaai.png" />
                            </div>
                            <button onClick={()=>setExpand(!expand)} className="navbar-toggler togglerBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                { expand ? <FontAwesomeIcon icon={faGripLines}/> : <FontAwesomeIcon icon={faTimes}/> }
                            </button>
                        </div>
                        <div className="collapse navbar-collapse ms-lg-3" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarItem">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Find Doctors</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Find Medical</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Help</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-center ms-lg-auto mb-2 mb-lg-0 navbarBtnItem">
                                <li className="nav-item ">
                                    <Link className="nav-link logInBtn" aria-current="page" to="/home">LogIn</Link>
                                </li>
                                <li className="nav-item mt-3 mt-lg-0">
                                    <Link className="nav-link signUpBtn rounded-pill" aria-current="page" to="/home">SignUp</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
};

export default NavBar;