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
                <a href="#" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Chaty</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={randomImageUrls} className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">{gymName}</a>
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
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>

                                {/* 
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v1</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index2.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v2</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index3.html" className="nav-link active">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v3</p>
                                        </a>
                                    </li>
                                </ul> */}

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
                                    {/* 
                                    <li className="nav-item">
                                        <a href="./index3.html" className="nav-link active">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Update Users</p>
                                        </a>
                                    </li>*/}
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
                            {/* 
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-book" />
                                    <p>
                                        Pages
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/examples/invoice.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Invoice</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/profile.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Profile</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/e-commerce.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>E-commerce</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/projects.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Projects</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/project-add.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Project Add</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/project-edit.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Project Edit</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/project-detail.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Project Detail</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/contacts.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Contacts</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/faq.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>FAQ</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/contact-us.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Contact us</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-plus-square" />
                                    <p>
                                        Extras
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>
                                                Login &amp; Register v1
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/examples/login.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Login v1</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/register.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Register v1</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/forgot-password.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Forgot Password v1</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/recover-password.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Recover Password v1</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>
                                                Login &amp; Register v2
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/examples/login-v2.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Login v2</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/register-v2.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Register v2</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/forgot-password-v2.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Forgot Password v2</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/recover-password-v2.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Recover Password v2</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/lockscreen.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Lockscreen</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Legacy User Menu</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/language-menu.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Language Menu</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/404.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Error 404</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/500.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Error 500</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/pace.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Pace</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/blank.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Blank Page</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="starter.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Starter Page</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-search" />
                                    <p>
                                        Search
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/search/simple.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Simple Search</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/search/enhanced.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Enhanced</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>  */}
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </>
    );
}; 