angular.module('appModule').service('Employees', EmployeesService);

function EmployeesService($http) {
  let page = 1;
  const getEmployees = () => {
    const employeesUrl = `https://fe-task.getsandbox.com/employees?page=${page}`;

    return $http.get(employeesUrl);
  };

  const loadMoreEmployees = () => {
    page++;
    return getEmployees();
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}
