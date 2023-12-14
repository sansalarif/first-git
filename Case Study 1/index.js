let customers = []; // This array will hold customer objects

function addCustomer(name, accountNumber) {
  let newCustomer = {
    name: name,
    accountNumber: accountNumber,
    balance: 0,
    transactionHistory: []
  };
  customers.push(newCustomer);
}

function findCustomerByAccountNumber(accountNumber) {
  return customers.find(customer => customer.accountNumber === accountNumber);
}

function deposit(accountNumber, amount) {
  let customer = findCustomerByAccountNumber(accountNumber);
  if (customer) {
    customer.balance += amount;
    customer.transactionHistory.push({ date: Date.now(), type: 'deposit', amount: amount });
    console.log(`Deposit of ${amount} to account number ${accountNumber} was successful.`);
  } else {
    console.log(`Customer with account number ${accountNumber} not found.`);
  }
}

function withdraw(accountNumber, amount) {
  let customer = findCustomerByAccountNumber(accountNumber);
  if (customer) {
    if (customer.balance >= amount) {
      customer.balance -= amount;
      customer.transactionHistory.push({ type: 'withdrawal', amount: amount });
      console.log(`Withdrawal of ${amount} from account number ${accountNumber} was successful.`);
    } else {
      console.log(`Insufficient balance for withdrawal from account number ${accountNumber}.`);
    }
  } else {
    console.log(`Customer with account number ${accountNumber} not found.`);
  }
}

addCustomer('John Doe', '123456789');
deposit('123456789', 1000);
withdraw('123456789', 500);

function validateCustomerData(name, accountNumber) {
  if (customers.some(customer => customer.accountNumber === accountNumber)) {
    return false; // Account number is not unique
  }
  // Add more validation as needed
  return true;
}

function editCustomerInfo(accountNumber, newInfo) {
  let customer = findCustomerByAccountNumber(accountNumber);
  if (customer) {
    Object.assign(customer, newInfo);
    return "Customer info updated";
  } else {
    return "Customer not found";
  }
}

function getHighBalanceCustomers(minimumBalance) {
  return customers.filter(customer => customer.balance >= minimumBalance);
}

function calculateTotalBalance() {
  return customers.reduce((total, customer) => total + customer.balance, 0);
}
