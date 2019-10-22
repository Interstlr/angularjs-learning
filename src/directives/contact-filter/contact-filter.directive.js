appModule
  .directive('contactFilter', function() {
    return {
      restrict: 'EA',
      templateUrl: 'contact-filter.template.html',
      scope: {
        input: '=',
      },
    };
  });