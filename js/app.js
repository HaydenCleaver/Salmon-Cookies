'use strict';

const saleTime = ['6:00am ', '7:00am ', '8:00am ', '9:00am ', '10:00am ', '11:00am ', '12:00pm ', '1:00pm ', '2:00pm ', '3:00pm ', '4:00pm ', '5:00pm ', '6:00pm ', '7:00pm '];
const storeHours = 14;
const listedStores = [];

function StoreCreator(location, minCust, maxCust, avgSale) { //creates store objects 

  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.storeSales = [];
  this.total = [];

  this.randomCustomers = function () { //returns a random # of customers based upon min/max properties
    let customer = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return customer;
  };

  this.sales = function () { //multiplies # of customers * average sale amount and appends them to an array along with total sales made
    let hourlySales = [];
    let totalSales = 0;

    for (let i = 0; i < storeHours; i++) {
      hourlySales.push(Math.round(this.randomCustomers() * this.avgSale));
      totalSales += hourlySales[i];
    }

    this.total.push(totalSales);
    return this.storeSales = hourlySales;
  };

  listedStores.push(this); //appends objects created into listedStore array, which is used in footer() function for calculating totals
  this.randomCustomers();
  this.sales();
  render(this);
}

header();

let seattle = new StoreCreator('Seattle', 23, 65, 6.3);
let tokyo = new StoreCreator('Tokyo', 3, 24, 1.2);
let dubai = new StoreCreator('Dubai', 11, 38, 3.7);
let paris = new StoreCreator('Paris', 20, 38, 2.3);
let lima = new StoreCreator('Lima', 2, 16, 4.6);

let newStoreEl = document.getElementById('newStore-Form');

newStoreEl.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event.target.store.value);
  console.log(event.target.minCust.value);
  console.log(event.target.maxCust.value);
  console.log(event.target.avgSale.value);

  let location = event.target.store.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgSales = parseInt(event.target.avgSale.value);

  new StoreCreator(location, minCust, maxCust, avgSales);
  remFooter();
  footer();
});

function render(store) { //creates hourly sale entries in html table for any store entered as argument
  let tableEl = document.getElementById('salesTable');
  let tableRowEl = document.createElement('tr');
  let locationEl = document.createElement('td');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(locationEl);
  locationEl.textContent = store.location;

  for (let i = 0; i < listedStores[0].storeSales.length; i++) {
    let saleEl = document.createElement('td');
    tableRowEl.appendChild(saleEl);
    saleEl.textContent = store.storeSales[i];
  }

  let finalEl = document.createElement('td');
  tableRowEl.appendChild(finalEl);
  finalEl.textContent = store.total;
}

function header() {
  let tableEl = document.getElementById('salesTable');
  let tableRowEl = document.createElement('tr');
  let blankEl = document.createElement('th');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(blankEl);

  for (let i = 0; i < storeHours; i++) {
    let hourEl = document.createElement('th');
    tableRowEl.appendChild(hourEl);
    hourEl.textContent = saleTime[i];
  }

  let finalEl = document.createElement('th');
  tableRowEl.appendChild(finalEl);
  finalEl.textContent = 'Daily Location Total';
}

function footer() {
  let hourlyTotals = 0;
  let finalTotals = 0;

  let tableEl = document.getElementById('salesTable');
  let tableRowEl = document.createElement('tr');
  tableRowEl.setAttribute('id', 'total-row');
  let firstEl = document.createElement('th');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(firstEl);
  firstEl.textContent = 'Totals';

  for (let n = 0; n < storeHours; n++) {
    for (let i = 0; i < listedStores.length; i++) {
      hourlyTotals += parseInt(listedStores[i].storeSales[n]);
    }

    let hourEl = document.createElement('th');
    tableRowEl.appendChild(hourEl);
    hourEl.textContent = hourlyTotals;
    hourlyTotals = 0;
  }

  for (let i = 0; i < listedStores.length; i++) {
    finalTotals += parseInt(listedStores[i].total);
  }

  let finalEl = document.createElement('th');
  tableRowEl.appendChild(finalEl);
  finalEl.textContent = finalTotals;
}

function remFooter(){
  let tableRowEl = document.getElementById('total-row');
  tableRowEl.remove('tr');
}

footer();
