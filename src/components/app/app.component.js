// import appTemplate from './app.template.html';

export default function appComponent() {
  return {
    controller: AppComponentController,
    template: import('./app.template.html'),
  };
}

function AppComponentController($scope, phoneContactService) {
  $scope.hello = 'Hello Component';
  return;
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