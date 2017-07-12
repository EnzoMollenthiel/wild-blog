/*
Create Angular config in app.config module
*/
export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
    'use strict'
    // Define prefix
    $locationProvider.hashPrefix('!');
    // For each url not found redirection to '/'
    $urlRouterProvider.otherwise('/posts/:error');
    /*
    Define a state with name 'app' this state is abstract and url is empty (root of application)
    template is ui-view it's used to display nested views
    */
    $stateProvider.state('app', {
        url: '',
        abstract: true,
        template: '<navbar /><div class="container"><ui-view></ui-view></div>'
    })
    .state('callback', {
        url: '/auth/callback/:token',
        template: '',
        controller: ['UsersService', '$stateParams', '$state', function(UsersService, $stateParams, $state) {
            if ($stateParams.token) {
                UsersService.setToken($stateParams.token).then((user) => {
                    let toastContent = `Welcome ${user.name} !`
                    Materialize.toast(toastContent, 4000, 'toast-success')
                    $state.go('blog.list')
                })
            } else {
                $state.go('blog.list')
            }
        }]
    })
    
    .state('algo1', {
        url: '/algo1',
        template: '<navbar /><div class="container">{{result}}</div>',
        controller: ['$scope',function($scope) {
            
            $scope.friends = () => {
                var people = ["Ryan", "Jimmy", "123", "4", "Cool Man"];
                 $scope.result = ["Ryan", "Jimmy", "123", "4", "Cool Man"];
                for (let i = 0; i < people.length; i++) {
                    if (people[i].length >= 4) {
                        $scope.result = people[i]
                    }
                }
                return;
            }
            console.log($scope.result)
        }]        
    })
}]
