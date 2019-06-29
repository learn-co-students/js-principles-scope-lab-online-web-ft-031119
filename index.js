var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'Bjorn';


function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
};

function setBestCustomer() {
  bestCustomer = "not bob";
};

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';

}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}