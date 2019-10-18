const appModule = angular.module('AppModule', []);

const appController = function($scope) {
  const addressBook = [
    {
      id: '1',
      firstName: 'Alex',
      lastName: 'Frost',
      phoneNumber: {
        value: '33342245555',
        visible: true,
      },
      email: 'alex@gmail.com',
      address: 'Minsk',
    },
    {
      id: '2',
      firstName: 'Anna',
      lastName: 'Test',
      phoneNumber: {
        value: '233446435',
        visible: true,
      },
      email: 'annaa@gmail.com',
      address: 'LA',
    },
    {
      id: '3',
      firstName: 'Daniel',
      lastName: 'Smith',
      phoneNumber: {
        value: '2342345',
        visible: true,
      },
      email: 'daniel@gmail.com',
      address: 'NY',
    },
  ];

  $scope.addressBook = addressBook;
}

appModule.controller("AppController", ['$scope', appController]);