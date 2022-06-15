'use strict';

const saleTime = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
const storeHours = 14;
const listedStores = [];

function StoreCreator (location, minCust, maxCust, avgSale){ //creates store objects 

  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.storeSales = [];
  this.total = [];

  this.randomCustomers = function(){ //returns a random # of customers based upon min/max properties
    let customer = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return customer;
  };

  this.sales = function(){ //multiplies # of customers * average sale amount and appends them to an array along with total sales made
    let hourlySales = [];
    let totalSales = 0;

    for (let i = 0; i < storeHours; i++) {
      hourlySales.push(Math.round(this.randomCustomers() * this.avgSale));
      totalSales += hourlySales[i];
    }

    this.total.push(totalSales);
    return this.storeSales = hourlySales;
  };
  listedStores.push(this);
}

let seattle = new StoreCreator('Seattle', 23, 65, 6.3);
seattle.sales();
console.log(seattle.storeSales);
console.log(seattle.total);

let tokyo = new StoreCreator('Tokyo', 3, 24, 1.2);
tokyo.sales();

let dubai = new StoreCreator('Dubai', 11, 38, 3.7);
dubai.sales();

let paris = new StoreCreator('Paris', 20, 38, 2.3);
paris.sales();

let lima = new StoreCreator('Lima', 2, 16, 4.6);
lima.sales();

console.log(listedStores);
console.log(listedStores[0].storeSales[0]);

function render(store){
  let tableEl = document.getElementById('salesTable');
  let tableRowEl = document.createElement('tr');
  let locationEl = document.createElement('td');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(locationEl);
  locationEl.textContent = store.location;

  for (let i = 0; i < store.storeSales.length; i++){
    let saleEl = document.createElement('td');
    tableRowEl.appendChild(saleEl);
    saleEl.textContent = store.storeSales[i];
  }

  let finalEl = document.createElement('td');
  tableRowEl.appendChild(finalEl);
  finalEl.textContent = store.total;
}

function header(){
  let tableEl = document.getElementById('salesTable');
  let tableRowEl = document.createElement('tr');
  let blankEl = document.createElement('th');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(blankEl);

  for (let i = 0; i < storeHours; i++){
    let hourEl = document.createElement('th');
    tableRowEl.appendChild(hourEl);
    hourEl.textContent = saleTime[i];
  }

  let finalEl = document.createElement('th');
  tableRowEl.appendChild(finalEl);
  finalEl.textContent = 'Daily Location Total';
}

function footer(){
  let hourlyTotals = 0;
  let finalTotals = 0;

  let tableEl = document.getElementById('salesTable');
  let tableRowEl = document.createElement('tr');
  let firstEl = document.createElement('th');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(firstEl);
  firstEl.textContent = 'Totals';

  for (let n = 0; n < storeHours; n++){
    for (let i = 0; i < listedStores.length; i++){
      hourlyTotals += parseInt(listedStores[i].storeSales[n]);
    }

    let hourEl = document.createElement('th');
    tableRowEl.appendChild(hourEl);
    hourEl.textContent = hourlyTotals;
    hourlyTotals = 0;
  }

  for (let i = 0; i < listedStores.length; i++){
    finalTotals += parseInt(listedStores[i].total);
  }

  let finalEl = document.createElement('th');
  tableRowEl.appendChild(finalEl);
  finalEl.textContent = finalTotals;
}

header();

render(seattle);
render(tokyo);
render(dubai);
render(paris);
render(lima);

footer();
