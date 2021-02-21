// const monthlyIncome = document.getElementById('monthly-income');
document.getElementById('enter').addEventListener('click', function(){
    // const monthlyIncome = document.getElementById('monthly-income');
    const month = document.getElementById('monthly-income').value;
    document.getElementById('incomeIs').innerText = month;
    const monthlyExpense =document.getElementById('monthly-expense').value;
    const cost = document.getElementById('cost').value;


    const tableBody = document.getElementById('table-body');
    // tableBody.innerHTML = "";
    const tableRow = document.createElement('tr');
    tableRow.id = 'row';
    tableRow.innerHTML += `
    <th scope="row"></th>
    <td id='data'>${document.getElementById('monthly-expense').value}</td>
    <td>${document.getElementById('cost').value}</td>
    <td><button id="delete" class="btn btn-danger">Delete</button></td>
    `;
    tableBody.appendChild(tableRow);

    document.getElementById('delete').addEventListener('click' , function(){
        const data = document.getElementById('row');
        data.parentNode.removeChild(data);
    })

    document.getElementById('monthly-income').value = "";
    document.getElementById('monthly-expense').value = "";
    document.getElementById('cost').value = "";
    let remain = document.getElementById('remain').innerText;
    remain = month - cost;
    console.log(remain);
    document.getElementById('remain').innerText = remain;

    // const storedItem = localStorage.getItem("storedItem");
    // const item = document.getElementById("row");
    // localStorage.setItem("storedItem", item);
    // document.getElementById("table-body").innerHTML = item;


    // localStorage.getItem("storedItem");
    // document.getElementById("table-body").innerHTML = storedItem;


    // myStorage = window.localStorage;

    // localStorage.setItem(tableBody);

    // const cat = localStorage.getItem('tableBody');


})
