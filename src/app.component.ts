export default class AppComponent implements angular.IComponentOptions  {
  public bindings: any;
  public controller: any;
  public templateUrl: string;

  constructor() {
    this.bindings = {
      dataBinding: '<',
      textBinding: '@',
      functionBinding: '&'
    };
  }
}