angular.module('formValidationModule', [])
  .factory('formValidation', [function () {
    return {
      validateForm: function(schedule){
        if(!schedule.doctor_id || !schedule.doctorEmail || !schedule.doc_firstname || !schedule.doc_lastname || !schedule.patient_id || !schedule.patientName || !schedule.startTime || !schedule.endTime || !schedule.SelectedDay || !schedule.message) {
         return false;
        }
        else {
          return true;
        }
      }
    };
  }])