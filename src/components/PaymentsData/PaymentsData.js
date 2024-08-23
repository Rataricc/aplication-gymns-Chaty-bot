import React, { useEffect, useState, useContext } from 'react';
import DataTableFeature from '../../widgets/DataTables/dataTableFeature.js';
import { AuthContext } from '../AuthProvider/AuthProvider.js';

export default function PaymentsData() {
    const [data, setData] = useState([]);
    const { gymId } = useContext(AuthContext);

    useEffect(() => {
        if (gymId) { // Verifica que gymId esté disponible
            fetch(`http://localhost:4001/api/gymns/${gymId}/payments`)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error('Error fetching users:', error));
        } else {
            console.error('Gym ID is not available');
        }
    }, [gymId]);

    const columns = [
        { title: "ID" },
        { title: "Amount" },
        { title: "Payment Date" },
        { title: "User Id" },
        { title: "Membership Id" }
    ];

    console.log("columns", columns);

    const tableData = data.map(item => [
        item.id,
        item.amount,
        item.payment_date,
        item.user_id,
        item.membership_id
    ]);
    console.log("tableData", tableData);

    const buttons = ["copy", "csv", "excel", "pdf", "print", "colvis"]
    const title = 'Table Payments';

    return (
        <DataTableFeature data={tableData} columns={columns} title={title} buttons={buttons} />
    );
}; 