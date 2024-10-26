import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/data')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Data from MongoDB</h1>
            <ul>
                {data.map((item) => (
                    <li key={item._id}>{item.name}: {item.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
