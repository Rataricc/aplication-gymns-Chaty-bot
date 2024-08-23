import React, { useEffect, useState, useContext } from 'react';
import DataTableFeature from '../../widgets/DataTables/dataTableFeature.js';
//import { render } from '@testing-library/react';
//import { AuthContext } from '../AuthProvider/AuthProvider.js';

export default function ClasseData() {
    const [data, setData] = useState([]);
    const gymId = localStorage.getItem('gymId');
    const endpoint = `http://localhost:4001/api/gymns/${gymId}/classes`; 

    useEffect(() => {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleUpdate = (classeId) => {
        const classe = data.find(classe => classe.id === classeId);
        if (classe) {
            const updatedClasse = {
                ...classe,
                name: prompt('Nuevo nombre:', classe.name),
                description: prompt('Nuevo apellido:', classe.description),
                start_time: prompt('Nuevo email:', classe.start_time),
                end_time: prompt('Nuevo teléfono:', classe.end_time),
            };

            fetch(`http://localhost:4001/api/classe/${classeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedClasse)
            })
            .then(response => response.json())
            .then(updatedClasse => {
                setData(data.map(classe => classe.id === classeId ? updatedClasse : classe));
            })
            .catch(error => console.error('Error updating classe:', error));
        }
    };

    const handleDelete = (classeId) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
            fetch(`http://localhost:4001/api/user/${classeId}`, {
                method: 'DELETE'
            })
            .then(() => {
                setData(data.filter(classe => classe.id !== classeId));
            })
            .catch(error => console.error('Error deleting classe:', error));
        }
    };

    const columns = [
        { title: "ID" },
        { title: "Name" },
        { title: "Description" },
        { title: "Start Time" },
        { title: "End Time" },
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

    console.log("columns", columns);

    const tableData = data.map(item => [
        item.id,
        item.name,
        item.description,
        item.start_time,
        item.end_time
    ]);
    console.log("tableData", tableData);

    const buttons = ["copy", "csv", "excel", "pdf", "print", "colvis"]
    const title = 'Table Classes'; 

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
