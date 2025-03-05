body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 400px;
}

select, button {
    margin: 10px 0;
    padding: 8px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

button {
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#progress-container {
    margin-top: 20px;
    width: 100%;
    background-color: #e0e0e0;
    height: 20px;
    border-radius: 4px;
    overflow: hidden;
}

#progress-bar {
    background-color: #28a745;
    height: 100%;
}

#progress-text {
    margin-top: 5px;
}
