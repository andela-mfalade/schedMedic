/**
 * Schedule service
 * 
 * @description this service is to CRUD schedules as well as fetch a single doctor information
 * @definition: CRUD: 'Create', 'Read', 'Update', 'Delete'
 */

angular.module('scheduleServiceModule', [])
  .factory('scheduleService', ['$http', 'options', function($http, options) {
    return {
      getDoctor: function(param, cb) {
        $http.get(options.API_URL + 'doctors/' + param)
          .success(function(doc) {
            cb(doc);
          })
          .error(function(err) {
            cb(err);
          });  
      },

      createSchedule: function(param, cb) {
        $http.post(options.API_URL + 'schedules', param)
          .success(function(doc) {
            cb(doc);
          })
          .error(function(err) {
            cb(err);
          }); 
      },

      updateSchedule: function(schedId, param ,cb) {
        $http.put(options.API_URL + 'schedules/' + schedId, param)
          .success(function(doc) {
            cb(doc);
          })
          .error(function(err) {
            cb(err);
          })
      },

      deleteSchedule: function(param, cb) {
        $http.delete(options.API_URL + 'schedules/' + param)
          .success(function(doc) {
            cb(doc);
          })
          .error(function(err) {
            cb(err);
          });
      },

      getSchedules: function(cb) {
        $http.get(options.API_URL + 'schedules')
          .success(function(doc) {
            cb(doc);
          })
          .error(function(err) {
            cb(err);
          });
      },

      getPatientSchedules: function(param, cb) {
        $http.get(options.API_URL + 'patient/schedules/' + param)
          .success(function(doc) {
            cb(doc);
          })
          .error(function(err) {
            cb(err);
          })
      },

      getDoctorSchedules: function(param, cb) {
        $http.get(options.API_URL + 'doctors/schedules/' + param)
          .success(function(doc) {
            cb(doc);
          })
          .error(function(err) {
            cb(err);
          })
      }
    };

  }]);