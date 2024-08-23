import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

export default function DashboardPayment() {
    const [lineChartData, setLineChartData] = useState({});
    const [barChartData, setBarChartData] = useState({});
    const [pieChartData, setPieChartData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            // Gráfico de Líneas: Cantidad de Pagos por Fecha
            const token = localStorage.getItem('token'); 
            const options = {
                headers: {
                    'access-token': token
                } 
            }; 

            const response = await fetch('http://localhost:4001/api/payments', options);

            const data = await response.json();
            console.log("Data Payemnts: ", data); 
            const lineData = {
                labels: data.map(payment => new Date(payment.payment_date).toLocaleDateString()),
                datasets: [{
                    label: 'Cantidad de Pagos',
                    data: data.map(payment => payment.amount),
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                }]
            };
            setLineChartData(lineData);

            // Gráfico de Barras: Cantidad Total de Pagos
            const totalResponse = await fetch('http://localhost:4001/api/payments/total', options);
            const totalResult = await totalResponse.json();
            console.log("Data total: ", totalResult); 
            const barData = {
                labels: ['Total de Pagos'],
                datasets: [{
                    label: 'Monto Total',
                    data: [totalResult.total],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                }]
            };
            setBarChartData(barData);

            // Gráfico de Torta: Miembros que Pagaron vs No Pagaron
            const statusResponse = await fetch('http://localhost:4001/api/payments/members-status', options);
            const statusResult = await statusResponse.json();
            console.log("Data Status: ", statusResult);
            const pieData = {
                labels: ['Miembros que Pagaron', 'Miembros que No Pagaron'],
                datasets: [{
                    data: [statusResult.membersWhoPaid, statusResult.membersWhoDidNoPay],
                    backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
                }]
            };
            setPieChartData(pieData);
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Dashboard de Pagos</h2>
            <div className="row">
                <div className="col-md-12 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Gráfico de Pagos por Fecha</h3>
                            {lineChartData.labels ? <Line data={lineChartData} /> : <p>No hay datos para mostrar</p>}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Total de Pagos</h3>
                            {barChartData.labels ? <Bar data={barChartData} /> : <p>No hay datos para mostrar</p>}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Miembros que Pagaron vs No Pagaron</h3>
                            {pieChartData.labels ? <Pie data={pieChartData} /> : <p>No hay datos para mostrar</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
