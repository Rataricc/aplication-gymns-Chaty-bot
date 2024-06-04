import React, { useEffect, useState } from 'react'; 

export default function UserData() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4001/api/users') // Cambia la URL si es necesario
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Usuarios del Bot</h3>
            </div>
            <div className="card-body">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.full_name}</td>
                                <td>{user.age}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}; 