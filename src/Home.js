import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Aside from './components/Aside';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

import UserData from './components/UserData/UserData.js';
import UserAgregate from './components/UserData/UserAgregate.js';
import Dashboard from './components/UserData/Dashboard.js';
import ClasseData from './components/ClassesData/ClasseData.js';
import ClasseAgregate from './components/ClassesData/ClasseAgregate.js';
import MembershipData from './components/MembershipData/MembershipData.js';
import MembershipAgregate from './components/MembershipData/MembershipAgregate.js';
import DashboardMemberships from './components/MembershipData/DashboardMemberships.js';
import PaymentsData from './components/PaymentsData/PaymentsData.js';
import PaymentsAgregate from './components/PaymentsData/PaymentsAgregate.js';
import DashboardPayment from './components/PaymentsData/DashboardPayment.js';


export default function Home() {

    const [ setGymName] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('gymName');
        setGymName(name);
    }, [setGymName]);

    return (
        <div>
            <Header />
            <Aside />
            <div className="content-wrapper">
                <br></br> 
                <Routes>
                    <Route path="users" element={<UserData />} />
                    <Route path="user/agregate" element={<UserAgregate />} />
                    <Route path="users/stats" element={<Dashboard />} />
                    <Route path="classes" element={<ClasseData />} />
                    <Route path="classe/agregate" element={<ClasseAgregate />} />
                    <Route path="memberships" element={<MembershipData />} />
                    <Route path="membership/agregate" element={<MembershipAgregate />} />
                    <Route path="membership/stats" element={<DashboardMemberships />} />
                    <Route path="payments" element={<PaymentsData />} />
                    <Route path="payment/agregate" element={<PaymentsAgregate />} />
                    <Route path="payment/stats" element={<DashboardPayment />} />
                    <Route path="*" element={<Content />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};