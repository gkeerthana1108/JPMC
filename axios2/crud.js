function getData(){
    axios.get("http://localhost:3000/users")
    .then(res=>{
        displayData(res.data);
        showMessage("Data fetched successfully.");
    })
    .catch(error => showMessage("Error fetching data: " + error));
}

function deleteData(id){
    axios.delete(`http://localhost:3000/users/${id}`)
    .then(res => {
        getData(); 
    })
    .catch(error => console.log(error));
}

function updateData(id, email) {
    axios.patch(`http://localhost:3000/users/${id}`, {
        email: email,
    })
    .then(res => {
        getData(); 
    })
    .catch(error => console.error('Error updating user data:', error));
}

function createData(){
    const name = document.getElementById("name").value;
    const branch = document.getElementById("branch").value;
    const email = document.getElementById("email").value;

    axios.post("http://localhost:3000/users", {
       name: name,
       branch: branch,
       email: email
    })
    .then(res => {
        getData();   
    })
    .catch(error => console.log(error));
}

function displayData(data) {
    const userDataTable = document.createElement("table");
    userDataTable.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Branch</th>
                <th>Email</th>
                <th>Actions</th> <!-- Added Actions column -->
            </tr>
        </thead>
        <tbody id="userDataBody">
        </tbody>
    `;

    const tableBody = userDataTable.querySelector("#userDataBody");

    data.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.branch}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="deleteData(${user.id})">Delete</button>
                <button onclick="updateData(${user.id}, '${user.email}')">Update</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    const userDataDiv = document.getElementById("userData");
    userDataDiv.innerHTML = "";
    userDataDiv.appendChild(userDataTable);
}

function showMessage(message) {
    alert(message);
}
