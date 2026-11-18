import React, { useEffect, useState } from 'react';

const Frutas = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/frutas.json') // Ruta al archivo JSON
            .then(response => {
                if (!response.ok) {
                    throw new Error('La respuesta de la red tuvo errores');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error al obtener el JSON :', error));
    }, []);

    return (
        <div>
            <h1>Datos del JSON - Usando Fetch</h1>
            {data ? (
                <div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '16px' }}>
                        {data && data.map((item) => (
                            <li
                                key={item.name}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    border: '1px solid #ccc',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    backgroundColor: '#fff'
                                }}
                            >
                                <img
                                    src={item.imagen}
                                    alt={item.name}
                                    style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
                                />
                                <div>
                                    <h3 style={{ margin: '0 0 4px 0' }}>{item.name}</h3>
                                    <p style={{ margin: 0, color: '#555' }}>
                                        <strong>Color:</strong> {item.color} |
                                        <strong> Precio:</strong> ${item.precio} |
                                        <strong> Origen:</strong> {item.origen}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            ) : (
                <p>Cargando...</p>
            )}

        </div>
    );
};

export default Frutas;
