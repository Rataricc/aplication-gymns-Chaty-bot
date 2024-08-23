import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function DashboardMemberships() {

    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token'); 
            const options = {
                headers: {
                    'access-token': token
                } 
            }; 

            const response = await fetch('http://localhost:4001/api/memberships', options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }; 
            const data = await response.json();
            
            if (!Array.isArray(data)) {
                throw new Error('Datos no válidos recibidos del servidor');
            }; 
          
            const chartData = {
                labels: data.map(membership => membership.type),
                datasets: [{
                    label: 'Precio de Membresías',
                    data: data.map(membership => membership.price),
                    backgroundColor: 'rgba(153, 102, 255, 0.6)', // Cambié el color de fondo para hacerlo más visible
                    borderColor: 'rgba(75, 192, 192, 1)', // Añadí un borde para mejorar la visualización
                    borderWidth: 2,
                }]
            };
            
            setChartData(chartData);
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center">Gráfico de Membresías</h2>
                    {chartData.labels ? <Bar data={chartData} /> : <p>No hay datos para mostrar</p>}
                </div>
            </div>
        </div>
    ); 
}; 

export default DashboardMemberships;