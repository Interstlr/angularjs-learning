const appModule = angular.module('AppModule', []);

const appController = function($scope, phoneContactService) {
  $scope.contacts = phoneContactService.getAll();
  $scope.nameFilter = '';
  $scope.newContactFormData = {};

  $scope.addContact = function(data) {
    const notRequiredFields = ['id'];
    const fieldsToCheck = Object
      .keys(PhoneContact)
      .filter(field => !notRequiredFields.includes(field));

    if (fieldsToCheck.length !== Object.keys(data).length) {
      return;
    }

    phoneContactService.addContact(data);

    $scope.newContactFormData = {};
  }

  $scope.deleteContact = function(id) {
    phoneContactService.deleteContact(id);
  }
}

appModule.controller("AppController", ['$scope', 'phoneContactService', appController]);