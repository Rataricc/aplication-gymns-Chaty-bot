import React, { useEffect, useState } from 'react';
import DataTableFeature from '../../widgets/DataTables/dataTableFeature.js';

export default function UserData() {
    const [data, setData] = useState([]);
    const gymId = localStorage.getItem('gymId');
    const endpoint = `http://localhost:4001/api/gymns/${gymId}/users`; 

    useEffect(() => {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching users:', error));
    }, [endpoint]);

    // Ver esta funcion de actualizar, tiene que llamar al formulario de actualizar. 
    // Funciona pero llama a un alert para poder actualizar.
    const handleUpdate = (userId) => {
        const user = data.find(user => user.id === userId);
        if (user) {
            const updatedUser = {
                ...user,
                name: prompt('Nuevo nombre:', user.name),
                last_name: prompt('Nuevo apellido:', user.last_name),
                email: prompt('Nuevo email:', user.email),
                phone: prompt('Nuevo teléfono:', user.phone),
                birthdate: prompt('Nueva fecha de nacimiento:', user.birthdate)
            };

            fetch(`http://localhost:4001/api/user/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            })
            .then(response => response.json())
            .then(updatedUser => {
                setData(data.map(user => user.id === userId ? updatedUser : user));
            })
            .catch(error => console.error('Error updating user:', error));
        }
    };

    // Ver esta funcion a detalle tambien, funciona pero llama a un alert por defecto.
    // tiene que ser uno mas lindo y detallado.
    const handleDelete = (userId) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
            fetch(`http://localhost:4001/api/user/${userId}`, {
                method: 'DELETE'
            })
            .then(() => {
                setData(data.filter(user => user.id !== userId));
            })
            .catch(error => console.error('Error deleting user:', error));
        }
    };

    const columns = [
        { title: "ID" },
        { title: "Name" },
        { title: "Last Name" },
        { title: "Phone" },
        { title: "Email" },
        { title: "Birthdate" },
        { 
            title: "Actions", 
            render: (data, type, row) => {
                return `
                    <button class="btn btn-primary btn-update" data-id="${row[0]}">Actualizar</button>
                    <button class="btn btn-danger btn-delete" data-id="${row[0]}">Eliminar</button>
                `;
            } 
        }
    ];

    const tableData = data.map(item => [
        item.id,
        item.name,
        item.last_name,
        item.phone,
        item.email,
        item.birthdate
    ]);

    const title = 'Table Users';
    const buttons = ["copy", "csv", "excel", "pdf", "print", "colvis"];

    return (
        <DataTableFeature 
            data={tableData} 
            columns={columns} 
            title={title} 
            buttons={buttons} 
            onUpdate={handleUpdate} 
            onDelete={handleDelete}
        />
    );
}; 