app = angular.module('beamer', ['beamer.controllers.profile', 'beamer.controllers.signup',
    'beamer.auth', 'beamer.session', 'ngFileUpload', 'ngRoute'
]);

app.run(function($rootScope) {
    $rootScope.$on('routeChanged', function() {
        alert('aay');
    });


});
