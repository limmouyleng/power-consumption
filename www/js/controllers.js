angular.module('app.controllers', [])

.controller('HomeCtrl', function($scope, PowerServices, $ionicPopup, IonicClosePopupService) {
  var vm = $scope;
  vm.consumtionElements = PowerServices.all();
  vm.calculate = function (data) {
    var sum = 0;
    var powerTotal = 0;
    for(var i = 0; i<data.length ; i++){
      var element = data[i];
      if(element.consumption)
        powerTotal = powerTotal + element.consumption;
      element.total = (element.numbers * element.consumption * element.time) / 1000;
      if(element.total)
        sum = sum + element.total;
    }
    vm.oneDayConsumption = sum;
    vm.powerTotal = powerTotal;
    vm.oneMonthConsumption = 30 * sum
    result();
  }

  vm.popupSetting = setting;

  var popupSetting;

  function setting() {
    popupSetting = $ionicPopup.show({
      templateUrl: 'templates/setting.html',
      scope: vm,
      title: 'ការកំណត់'
    });

    IonicClosePopupService.register(popupSetting);
  }

  vm.closePopupSetting = function () {
    popupSetting.close();
  }

  var popupResult;

  function result() {
    popupResult = $ionicPopup.show({
      templateUrl: 'templates/popup-result.html',
      scope: vm,
      title: 'លទ្ធផល'
    });

    IonicClosePopupService.register(popupResult);
  }
})

.controller('ExtraElementsCtrl', function($scope, PowerServices, $state) {
  var vm = $scope;

  vm.addMore = function(data){
    PowerServices.add(data);
    $state.go('home');
  }
})

.controller('CustomElementsCtrl', function($scope, PowerServices, $state) {
  var vm = $scope;
  vm.customElements = PowerServices.getConsumerElements();
  vm.saveActiveElements = function (elements) {
    var valid = validate(elements);
    if(valid){
      PowerServices.saveActiveElements(elements);
      $state.go('home');
    }else{
      alert('សូមជ្រេីសរេីសឧបករណ៍អគ្គីសនីយា៉ងតិចមួយ។')
    }
  }

  function validate(elements) {
    var b = false;
    for(var i = 0 ; i< elements.length ; i++){
      var element = elements[i];
      if(element.active){
        b = true;
        break;
      }
    }
    return b;
  }
})
