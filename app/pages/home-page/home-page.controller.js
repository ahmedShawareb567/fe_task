angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.totalPages = 1;
  homePageVm.currentPage = 1;
  homePageVm.loading = false;
  homePageVm.searchText = '';

  homePageVm.updateSearch = (value) => {
    $location.search('filter', value);

    if (value === '') {
      $location.url('/');
    }

    homePageVm.searchText = value;
  };

  homePageVm.loadMoreEmplyees = () => {
    homePageVm.loading = true;
    Employees.loadMoreEmployees()
      .then((res) => {
        homePageVm.employees = homePageVm.employees.concat(res.data.employees);
        homePageVm.loading = false;
        homePageVm.totalPages = res.data.pages;
        homePageVm.currentPage = res.data.current_page;
      });
  };

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        homePageVm.searchText = $location.$$search.filter;
      });
  }
}
