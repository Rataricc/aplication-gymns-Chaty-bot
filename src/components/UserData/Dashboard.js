import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
    const [data, setData] = useState({
        daily: [],
        monthly: [],
        yearly: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4001/api/users/stats");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const formatDataForChart = (data, unit, label) => {
        return {
            labels: data.map((item) => item[unit]),
            datasets: [
                {
                    label: `Usuarios registrados por ${label}`,
                    data: data.map((item) => item.count),
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
            ],
        };
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Usuarios Registrados</h2>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Por Día</h3>
                            <Bar data={formatDataForChart(data.daily, "day", "día")} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Por Mes</h3>
                            <Bar data={formatDataForChart(data.monthly, "month", "mes")} />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Por Año</h3>
                            <Bar data={formatDataForChart(data.yearly, "year", "año")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;