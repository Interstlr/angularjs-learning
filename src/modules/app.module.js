import angular from 'angular';
import appComponent from '@/components/app/app.component';

angular
  .module('AppModule', [])
  .component('appRoot', appComponent())
  .name;

export default angular;