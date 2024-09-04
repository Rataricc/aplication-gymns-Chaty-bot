import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const defaultImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjW6pmo8lMNPil7gwKP7ycEyzUsoeWjzbkQ&s';

export default function Aside() {
    const [gymName, setGymName] = useState('');
    const [gymImage, setGymImage] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('gymName');
        setGymName(name);

        const image = localStorage.getItem('gymImage'); 
        if (image) {
            const formattedImageUrl = image.startsWith('http') ? image : `http://localhost:4001/uploads/${image}`;
            setGymImage(formattedImageUrl);
            console.log("formattedImageUrl: ", formattedImageUrl);
        } else {
            setGymImage(defaultImageUrl);
        }
    }, []);

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link to="#" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">Chaty</span>
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', overflow: 'hidden' }}>
                        <img src={gymImage} className="img-circle elevation-2" alt="Gym Image" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="info">
                        <Link to="#" className="d-block">{gymName}</Link>
                    </div>
                </div>
                {/* SidebarSearch Form */}
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item menu-open">
                            <Link to="#" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Dashboard
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </Link>
                        </li>
                        <li className="nav-header">ITEMS</li>
                        {/* Users Section */}
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon bi bi-people" />
                                <p>
                                    Users
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/content/users" className="nav-link">
                                        <i className="nav-icon bi bi-person-check-fill" />
                                        <p>Users List</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/content/user/agregate' className='nav-link'>
                                        <i className="nav-icon bi bi-person-fill-add" />
                                        <p>User Agregate</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/content/users/stats' className='nav-link'>
                                        <i className="nav-icon bi bi-person-fill-add" />
                                        <p>User Dashboard</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* Classes Section */}
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon bi bi-person-arms-up" />
                                <p>
                                    Classes
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/content/classes" className="nav-link">
                                        <i className="nav-icon bi bi-clipboard2-check-fill" />
                                        <p>Classes List</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="classe/agregate" className="nav-link">
                                        <i className="nav-icon bi bi-clipboard2-plus-fill" />
                                        <p>Classe Agregate</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* Memberships Section */}
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon bi bi-person-check" />
                                <p>
                                    Memberships
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="memberships" className="nav-link">
                                        <i className="nav-icon bi bi-person-check-fill" />
                                        <p>Memberships List</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="membership/agregate" className="nav-link">
                                        <i className="nav-icon bi bi-person-fill-add" />
                                        <p>Memberships Agregate</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/content/membership/stats" className="nav-link">
                                        <i className="nav-icon bi bi-graph-up" />
                                        <p>Memberships Dashboard</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* Payments Section */}
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon bi bi-credit-card-2-front-fill" />
                                <p>
                                    Payments
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="payments" className="nav-link">
                                        <i className="nav-icon bi bi-credit-card-2-front" />
                                        <p>Payments List</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="payment/agregate" className="nav-link">
                                        <i className="nav-icon bi bi-credit-card" />
                                        <p>Payments Agregate</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/content/payment/stats" className="nav-link">
                                        <i className="nav-icon bi bi-graph-up" />
                                        <p>Payments Dashboard</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}; 