'use strict';

const storeTime = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '];

const seattle = {

  minCust : 23,
  maxCust : 65,
  avgSale : 6.3,
  storeHours : 14,
  storeSales : [],
  allSales : [],

  randomCustomers : function(){
    let customer = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return customer;
  },

  sales : function(){
    let totalSales = [];
    let allSales = 0;

    for (let i = 0; i < this.storeHours; i++) {
      totalSales.push(Math.round(this.randomCustomers() * this.avgSale));
      allSales += totalSales[i];
    }

    totalSales.push(allSales);
    return this.storeSales = totalSales;
  },

  page : function (){

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
    let totalSales = [];
    let allSales = 0;

    for (let i = 0; i < this.storeHours; i++) {
      totalSales.push(Math.round(this.randomCustomers() * this.avgSale));
      allSales += totalSales[i];
    }
    totalSales.push(allSales);
    return this.storeSales = totalSales;
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
    let totalSales = [];
    let allSales = 0;

    for (let i = 0; i < this.storeHours; i++) {
      totalSales.push(Math.round(this.randomCustomers() * this.avgSale));
      allSales += totalSales[i];
    }
    totalSales.push(allSales);
    return this.storeSales = totalSales;
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
    let totalSales = [];
    let allSales = 0;

    for (let i = 0; i < this.storeHours; i++) {
      totalSales.push(Math.round(this.randomCustomers() * this.avgSale));
      allSales += totalSales[i];
    }
    totalSales.push(allSales);
    return this.storeSales = totalSales;
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
    let totalSales = [];
    let allSales = 0;

    for (let i = 0; i < this.storeHours; i++) {
      totalSales.push(Math.round(this.randomCustomers() * this.avgSale));
      allSales += totalSales[i];
    }
    totalSales.push(allSales);
    return this.storeSales = totalSales;
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
