'use strict';

const storeTime = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '];

const seattle = {

  minCust : 23,
  maxCust : 65,
  avgSale : 6.3,
  storeHours : 14,
  storeSales : [],

  randomCustomers : function(){ //returns a random # of customers based upon min/max properties
    let customer = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return customer;
  },

  sales : function(){ //multiplies # of customers * average sale amount and appends them to an array along with total sales made
    let hourlySales = [];
    let totalSales = 0;

    for (let i = 0; i < this.storeHours; i++) {
      hourlySales.push(Math.round(this.randomCustomers() * this.avgSale));
      totalSales += hourlySales[i];
    }

    hourlySales.push(totalSales);
    return this.storeSales = hourlySales;
  },

  page : function (){ //creates a list element on the sales.html page for each entry in the storeSales array and prints the data to that list element

    let ulSeattle = document.getElementById('seattle');

    for (let i = 0; i < seattle.storeSales.length; i++){
      let seattleList = document.createElement('li');
      seattleList.textContent = `${storeTime[i]} ${seattle.storeSales[i]} cookies`;
      ulSeattle.appendChild(seattleList);
    }
  },
};

seattle.sales();
seattle.page();

//-----------------------------------//

const tokyo = {

  minCust : 3,
  maxCust : 24,
  avgSale : 1.2,
  storeHours : 14,
  storeSales : [],

  randomCustomers : function(){
    let customer = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return customer;
  },

  sales : function(){
    let hourlySales = [];
    let totalSales = 0;

    for (let i = 0; i < this.storeHours; i++) {
      hourlySales.push(Math.round(this.randomCustomers() * this.avgSale));
      totalSales += hourlySales[i];
    }
    hourlySales.push(totalSales);
    return this.storeSales = hourlySales;
  },

  page : function(){

    let ulTokyo = document.getElementById('tokyo');

    for (let i = 0; i < tokyo.storeSales.length; i++){
      let tokyoList = document.createElement('li');
      tokyoList.textContent = `${storeTime[i]} ${tokyo.storeSales[i]} cookies`;
      ulTokyo.appendChild(tokyoList);
    }
  },
};

tokyo.sales();
tokyo.page();

//-----------------------------------//

const dubai = {

  minCust : 11,
  maxCust : 38,
  avgSale : 3.7,
  storeHours : 14,
  storeSales : [],

  randomCustomers : function(){
    let customer = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return customer;
  },

  sales : function(){
    let hourlySales = [];
    let totalSales = 0;

    for (let i = 0; i < this.storeHours; i++) {
      hourlySales.push(Math.round(this.randomCustomers() * this.avgSale));
      totalSales += hourlySales[i];
    }
    hourlySales.push(totalSales);
    return this.storeSales = hourlySales;
  },

  page : function(){
    let ulDubai = document.getElementById('dubai');

    for (let i = 0; i < dubai.storeSales.length; i++){
      let dubaiList = document.createElement('li');
      dubaiList.textContent = `${storeTime[i]} ${dubai.storeSales[i]} cookies`;
      ulDubai.appendChild(dubaiList);
    }
  },
};

dubai.sales();
dubai.page();

//-----------------------------------//

const paris = {

  minCust : 20,
  maxCust : 38,
  avgSale : 2.3,
  storeHours : 14,
  storeSales : [],

  randomCustomers : function(){
    let customer = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return customer;
  },

  sales : function(){
    let hourlySales = [];
    let totalSales = 0;

    for (let i = 0; i < this.storeHours; i++) {
      hourlySales.push(Math.round(this.randomCustomers() * this.avgSale));
      totalSales += hourlySales[i];
    }
    hourlySales.push(totalSales);
    return this.storeSales = hourlySales;
  },

  page : function(){
    let ulParis = document.getElementById('paris');

    for (let i = 0; i < paris.storeSales.length; i++){
      let parisList = document.createElement('li');
      parisList.textContent = `${storeTime[i]} ${paris.storeSales[i]} cookies`;
      ulParis.appendChild(parisList);
    }
  },
};

paris.sales();
paris.page();

//-----------------------------------//

const lima = {

  minCust : 2,
  maxCust : 16,
  avgSale : 4.6,
  storeHours : 14,
  storeSales : [],

  randomCustomers : function(){
    let customer = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return customer;
  },

  sales : function(){
    let hourlySales = [];
    let totalSales = 0;

    for (let i = 0; i < this.storeHours; i++) {
      hourlySales.push(Math.round(this.randomCustomers() * this.avgSale));
      totalSales += hourlySales[i];
    }
    hourlySales.push(totalSales);
    return this.storeSales = hourlySales;
  },

  page : function(){
    let ulLima = document.getElementById('lima');

    for (let i = 0; i < lima.storeSales.length; i++){
      let limaList = document.createElement('li');
      limaList.textContent = `${storeTime[i]} ${lima.storeSales[i]} cookies`;
      ulLima.appendChild(limaList);
    }
  },
};

lima.sales();
lima.page();
