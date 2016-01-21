"use strict";

angular.module("dbDemo", ["ngResource"])
.component('app', {
  template: `
    <ask-question
       on-create='$ctrl.listCtrl.add(question)'
      >
    </ask-question>

    <question-list 
      controller-as="$ctrl.listCtrl"
      >
    </question-list>
  `,
  controller: function() {
  },
})
.component('askQuestion', {
  bindings: {
    onCreate: "&",
  },
  template: `
    <form ng-submit="$ctrl.created()"
          name='$ctrl.form'>
      <label>
        Question:
        <input ng-model="$ctrl.question.text" required>
      </label>
      <input type=submit value='Create'
             ng-disabled='$ctrl.form.$invalid'
             >
    </form>
  `,
  controller: function(Question) {
    var self = this; 

    self.question = new Question;

    self.created = function() {
      self.question.$save()
        .then(function(q) {
          self.onCreate({
            question: q,
          });

          self.question = new Question;
        })
    };
  },
})
.component('questionList', {
  restrict: "E",
  bindings: {
    controllerAs: "=",
  },
  template: `
    <ul>
      <li ng-repeat='q in $ctrl.questions track by q._id'>
        {{ :: q.text }}
        <a ng-click='$ctrl.remove(q)'>x</a>
      </li>
    </ul>
  `,
  controller: function(Question) {
    var self = this; 

    self.controllerAs = self;

    self.questions = Question.query();

    self.add = function(q) {
      self.questions.push(q);
    }

    self.remove = function(q) {
      q.$delete()
        .then(function() {
          self.questions.splice(self.questions.indexOf(q), 1); 
        });
    }

  },
})
.factory("Question", function($resource) {
  return $resource("/api/question/:id", { id: "@_id" }); 
})
