import React, { useEffect, useState } from 'react';

export default function Content() {
    const [gymName, setGymName] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('gymName');
        setGymName(name);
    }, []);

    return (
        <div className='content'>
            <div className='jumbotron text-center'>
                <h1 className='display-4'>¡Bienvenido, {gymName}!</h1>
                <p className='lead'>Seleccione una sección para comenzar</p>
            </div>

            <hr className='my-4' />

            <div className='row'>
                <div className='col-md-4'>
                    <h3 className='text-primary'>Gestión de Usuarios</h3>
                    <ul className='list-group'>
                        <li className='list-group-item'>Ver todos los usuarios registrados.</li>
                        <li className='list-group-item'>Agregar nuevos usuarios.</li>
                        <li className='list-group-item'>Actualizar información de los usuarios.</li>
                        <li className='list-group-item'>Eliminar usuarios.</li>
                        <li className='list-group-item'>Ver estadísticas y asistencias de cada usuario.</li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h3 className='text-success'>Gestión del Comercio</h3>
                    <ul className='list-group'>
                        <li className='list-group-item'>Ver estadísticas del negocio.</li>
                        <li className='list-group-item'>Ingresos totales de la semana.</li>
                        <li className='list-group-item'>Ingresos totales del mes.</li>
                        <li className='list-group-item'>Ingresos totales del año.</li>
                        <li className='list-group-item'>Análisis de métricas positivas o negativas.</li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h3 className='text-warning'>Integraciones</h3>
                    <ul className='list-group'>
                        <li className='list-group-item'>Integración con Mercado Pago.</li>
                        <li className='list-group-item'>Integración con servicios de AFIP y facturación electrónica.</li>
                        <li className='list-group-item'>Métodos de pago vía blockchain (criptomonedas).</li>
                        <li className='list-group-item'><strong>y más...</strong></li>
                    </ul>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col-md-6'>
                    <h3 className='text-info'>Gestión de Miembros y Pagos</h3>
                    <ul className='list-group'>
                        <li className='list-group-item'>Gestión de miembros pagos.</li>
                        <li className='list-group-item'>Gestión de pagos realizados.</li>
                    </ul>
                </div>
            </div>
            <br /><br />
        </div>
    );
};