/**
 * @desc Authentication service to sign up a new user
 * .. this service logs a user in as well and sends the user 
 */


angular.module('authServiceModule', [])
  .factory('authService', ['$http', 'options', function ($http, options) {
    return {
      signUpUser: function(newUser, cb) {
        $http.post(options.API_URL + 'users/signup', newUser)
          .success(function(doc) {
            cb(doc);
          })
          .error(function(err) {
            cb(err)
          })
      },

      LogUserIn: function (user, cb) {
        $http.post(options.API_URL + 'users/authenticate', user)
          .success(function(doc) {
            cb(doc);
          })
          .error(function(err) {
            cb(err);
          })
      },

      authview: {
        current: 'login'
      }
    };
  }]);
