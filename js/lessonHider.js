angular.module("directivePractice").directive("lessonHider", function(){

    return {
        restrict: "E",
        templateUrl: "./lessonHider.html",
        link: function(scope, element, attributes){

                scope.getSchedule.then(function(response){
                    scope.schedule = response.data
                

                scope.schedule.forEach(function( scheduleDay ) {
                    if (scheduleDay.lesson === scope.lesson) {
                      scope.lessonDay = scheduleDay.weekday;  
                      element.css('text-decoration', 'line-through');
                      return;
                    }
                });
            });

        },
        scope: {
            lesson: "=",
            dayAlert: "&"
        },
        controller: function($scope, lessonService){
            $scope.getSchedule = lessonService.getSchedule();


        },

    }


})