var customerName = 'bob'

const leastFavoriteCustomer = 'x'

var bestCustomer;

function upperCaseCustomerName () {
  customerName =  customerName.toUpperCase()
}

function setBestCustomer () {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer () {
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = 'billy'
}