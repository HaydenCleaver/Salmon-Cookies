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
  this.total = 0;

  this.customers();
  this.sales();
  listedStores.push(this); //appends objects created into listedStore array, which is used in footer() function for calculating totals
  render(this); //automatically calls table creation function so that objects created from newStoreEl are run right away
}

StoreCreator.prototype.customers = function(){
  let customer = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  return customer;
};

StoreCreator.prototype.sales = function(){
  let hourlySales = [];

  for (let i = 0; i < storeHours; i++) {
    hourlySales.push(Math.round(this.customers() * this.avgSale));
    this.total += hourlySales[i];
  }
  this.storeSales = hourlySales;
};

header();

let seattle = new StoreCreator('Seattle', 23, 65, 6.3);
let tokyo = new StoreCreator('Tokyo', 3, 24, 1.2);
let dubai = new StoreCreator('Dubai', 11, 38, 3.7);
let paris = new StoreCreator('Paris', 20, 38, 2.3);
let lima = new StoreCreator('Lima', 2, 16, 4.6);

let newStoreEl = document.getElementById('newStore-Form');

newStoreEl.addEventListener('submit', function(event){ 
//takes input from html form and runs it through StoreCreator constructor to make an object;
//also removes the footer() row and refreshes it with a new one.

  event.preventDefault();

  let location = event.target.store.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgSales = parseInt(event.target.avgSale.value);

  new StoreCreator(location, minCust, maxCust, avgSales);

  remFooter();
  footer();
});

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

function render(store) { //creates hourly sale entries in html table for any store entered as argument
  let tableEl = document.getElementById('salesTable');
  let tableRowEl = document.createElement('tr');
  let locationEl = document.createElement('td');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(locationEl);
  locationEl.textContent = store.location;

  for (let i = 0; i < store.storeSales.length; i++) {
    let saleEl = document.createElement('td');
    tableRowEl.appendChild(saleEl);
    saleEl.textContent = store.storeSales[i];
  }

  let finalEl = document.createElement('td');
  tableRowEl.appendChild(finalEl);
  finalEl.textContent = store.total;
}

function footer() { //computes and creates a totals row
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

function remFooter(){ //removes row created by footer()
  let tableRowEl = document.getElementById('total-row');
  tableRowEl.remove('tr');
}

footer();
