/*
Create Angular config in app.config module
*/
export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
    'use strict'
    // Define prefix
    $locationProvider.hashPrefix('!');
    // For each url not found redirection to '/'
    $urlRouterProvider.otherwise('/posts/');
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
        template: '<navbar /><div class="container"><div class="row"><h2>My Friends</h2><div class="col s12 m6"><div class="card blue-grey darken-1" ng-repeat="friend in friends"><div class="card-content white-text"><span class="card-title">{{friend}}</span><p></div></div></div></div>',
        controller: ['$scope',function($scope) {
            
            var init = () => {
                
                for (let i = 0; i < $scope.peoples.length; i++) {
                    if ($scope.peoples[i].length === 4) {
                        $scope.friends.push($scope.peoples[i])
                    }
                }
                return;
            }
            $scope.peoples = ["Ryan", "Jimmy","jojo", "123", "4", "Cool Man"];
            $scope.friends = [];
            init();

            
            console.log($scope)
        }]        
    })
}]
