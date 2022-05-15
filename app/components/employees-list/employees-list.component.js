var app = angular.module('appModule');
app.component('employeesList', {
  templateUrl: 'components/employees-list/employees-list.html',
  controller: EmployeesListComponent,
  controllerAs: 'EmployeesListComponentVm',
  bindings: {
    employeesList: '<',
    search: '<',
  },
});

app.filter('highlightWord', function ($sce) {
  return function (text, selectedWord) {
    if (selectedWord) {
      const pattern = new RegExp(selectedWord, 'gi');
      return $sce.trustAsHtml(text.replace(pattern, '<span class="highlighted">' + selectedWord + '</span>'));
    }
    return $sce.trustAsHtml(text);
  };
});

function EmployeesListComponent() {}
