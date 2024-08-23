import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const randomImageUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjW6pmo8lMNPil7gwKP7ycEyzUsoeWjzbkQ&s'
];

export default function Aside() {
    const [gymName, setGymName] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('gymName');
        setGymName(name);
    }, []);

    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <Link to="#" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Chaty</span>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={randomImageUrls} className="img-circle elevation-2" alt="" />
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
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
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
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon bi bi-people" />
                                    <p>
                                        Users
                                        <i className="fas fa-angle-left right" />
                                        <span className="badge badge-info right"></span>
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/content/users" className="nav-link" >
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
                                        <Link to="/content/classes" className="nav-link" >
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
                            <li className="nav-item">
                                <Link to="#" className='nav-link' >
                                    <i className="nav-icon bi bi-person-check" />
                                    <p>
                                        Membership
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/content/memberships" className="nav-link" >
                                            <i className="nav-icon bi bi-card-checklist" />
                                            <p>Membership List</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/content/membership/agregate" className="nav-link">
                                            <i className="nav-icon bi bi-person-fill-add" />
                                            <p>Membership Agregate</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/content/membership/stats' className='nav-link'>
                                            <i className="nav-icon bi bi-person-fill-add" />
                                            <p>Membership Dashboard</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className='nav-link'>
                                    <i className="nav-icon bi bi-currency-dollar" />
                                    <p>
                                        Payments
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/content/payments" className="nav-link" >
                                            <i className="nav-icon bi bi-card-checklist" />
                                            <p>Payments List</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/content/payment/agregate" className="nav-link">
                                            <i className="nav-icon bi bi-cash-coin" />
                                            <p>Payments Agregate</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/content/payment/stats' className='nav-link'>
                                            <i className="nav-icon bi bi-person-fill-add" />
                                            <p>Payments Dashboard</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </>
    );
}; 