'use strict';

const saleTime = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '];
const storeHours = 14;
const listedStores = [];

function StoreCreator (location, minCust, maxCust, avgSale){ //creates store objects 

  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.storeSales = [];

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

    hourlySales.push(totalSales);
    return this.storeSales = hourlySales;
  };
  listedStores.push(this);
}

let seattle = new StoreCreator('Seattle', 23, 65, 6.3);
seattle.sales();
console.log(seattle.storeSales);

let tokyo = new StoreCreator('Tokyo', 3, 24, 1.2);
tokyo.sales();

let dubai = new StoreCreator('Dubai', 11, 38, 3.7);
dubai.sales();

let paris = new StoreCreator('Paris', 20, 38, 2.3);
paris.sales();

let lima = new StoreCreator('Lima', 2, 16, 4.6);
lima.sales();

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
  let hourlyTotals = [];
  let finalTotal = 0;

  let tableEl = document.getElementById('salesTable');
  let tableRowEl = document.createElement('tr');
  let firstEl = document.createElement('th');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(firstEl);
  firstEl.textContent = 'Totals';

  for (let i = 0; i < storeHours; i++){
    hourlyTotals.push(seattle.storeSales[i] + tokyo.storeSales[i] + dubai.storeSales[i] + paris.storeSales[i] + lima.storeSales[i]);
    console.log(hourlyTotals);
    finalTotal += hourlyTotals;
    console.log(finalTotal);
  }

}

header();

render(seattle);
render(tokyo);
render(dubai);
render(paris);
render(lima);

footer();
