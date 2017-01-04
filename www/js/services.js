angular.module('app.services', [])

.factory('PowerServices', function() {
  var consumerElements = [{
    id: 1,
    name: "ម៉ាសីុនត្រជាក់កំលាំង​ ១ សេះ (គិតជា វា៉ត់ W)",
    consumption: 745,
    active: true
  }, {
    id: 2,
    name: "ម៉ាសីុនបោកគក់ (គិតជា វា៉ត់ W)",
    consumption: 850,
    active: false
  },{
    id: 3,
    name: "ទូរទស្សន៍ LCD (គិតជា វា៉ត់ W)",
    consumption: 150,
    active: false
  },{
    id: 4,
    name: "ទូរទឹកកក​ (អាស្រ័យលេីទំហំ) (គិតជា វា៉ត់ W)",
    consumption: 1200,
    active: false
  },{
    id: 5,
    name: "ឆ្នាំងអ៊ុតសំលៀកបំពាក់ (គិតជា វា៉ត់ W)",
    consumption: 1000,
    active: false
  },{
    id: 6,
    name: "ឆ្នាំងដាំបាយអគ្គីសនី (គិតជា វា៉ត់ W)",
    consumption: 730,
    active: false
  },{
    id: 7,
    name: "ឆ្នាំង/កំសៀវដាំទឹកអគ្គីសនី (គិតជា វា៉ត់ W)",
    consumption: 850,
    active: false
  }, {
    id: 8,
    name: "ឧបករណ៍ងូតទឹកក្តៅ (គិតជា វា៉ត់ W)",
    consumption: 1000,
    active: false
  }, {
    id: 9,
    name: "កង្ហារ (គិតជា វា៉ត់ W)",
    consumption: 75,
    active: false
  }, {
    id: 10,
    name: "អំពូលមែ៉ត ០.៦​ ម៉ែត្រ (គិតជា វា៉ត់ W)",
    consumption: 40,
    active: false
  },{
    id: 11,
    name: "អំពូលមែ៉ត ១.២ ម៉ែត្រ (គិតជា វា៉ត់ W)",
    consumption: 80,
    active: false
  },{
    id: 12,
    name: "កំព្យូទ័រលេីតុ​ Destop (គិតជា វា៉ត់ W)",
    consumption: 300,
    active: false
  },{
    id: 13,
    name: "កំព្យូទ័រយួរដៃ Laptop (គិតជា វា៉ត់ W)",
    consumption: 65,
    active: false
  }];

  function storeActiveElements(activeElements) {
    window.localStorage.setItem("activeElements", JSON.stringify(activeElements));
  }

  function getActiveElements() {
    return JSON.parse(window.localStorage.getItem("activeElements"));
  }

  function storeExtraConsumptionElements(extraElements) {
    window.localStorage.setItem("extraElements", JSON.stringify(extraElements));
  }

  function getExtraConsumptionElements(){
    return JSON.parse(window.localStorage.getItem("extraElements"));
  }

  function all() {
    var activeElements = getActiveElements();
    if(!activeElements)
      activeElements = consumerElements;
    var otherElements = getExtraConsumptionElements();
    var result = [];
    for(var i = 0 ; i< activeElements.length ; i++){
      var element = activeElements[i];
      if(element.active)
        result.push(element)
    }
    if(otherElements)
      result = result.concat(otherElements);
    return result;
  }

  function add(data) {
    var elements = getExtraConsumptionElements();
    if(elements)
      elements.push(data);
    else {
      elements = [data];
    }
    storeExtraConsumptionElements(elements);
  }

  function saveActiveElements(elements) {
    storeActiveElements(elements);
  }

  function getConsumerElements() {
    var activeElements = getActiveElements();
    if(!activeElements)
      activeElements = consumerElements;
    return activeElements;
  }

  return{
    all:all,
    add: add,
    getConsumerElements: getConsumerElements,
    saveActiveElements: saveActiveElements
  }
});
