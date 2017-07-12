
import admin from './admin'

let adminModule = angular.module('app.admin', [])
    .component('admin', admin)
    .config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {

        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'js/components/admin/admin.html',
                isAdmin : true
            })
    }])
    .name

export default adminModule
