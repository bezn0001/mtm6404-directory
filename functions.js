// To generate an HTML list of clients
function list(clients) {
    return clients.map((client) => {
        return `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance.toFixed(2)}</strong>
        </li>`
    }).join('');
}

// To sort clients based on a specified property
function order(clients, property) {
    return [...clients].sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
}

// To calculate the total balance of all clients
function total(clients) {
    return clients.reduce((acc, client) => acc + client.balance, 0);
}

// To find and return a client by their index
function info(index) {
    return clients.find(client => client.index === index);
}

// To search for clients whose name includes the query 
function search(query) {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
}
