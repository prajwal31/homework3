(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var FORM_PAYMENT_SELECTOR = '[data-payment-order="form"]';

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  // var FormPaymentHandler = App.FormHandler;
  // var FormPaymentHandler = new FormPaymentHandler(FORM_PAYMENT_SELECTOR);
  // FormPaymentHandler.addSubmitHandler();
  // console.log(FormPaymentHandler);

  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder(data);
    checkList.addRow(data);
  });
  console.log(formHandler);
})(window);
