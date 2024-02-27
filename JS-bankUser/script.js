function BankUser(accountNumber, firstName, lastName, balance, accountType) {
    this.accountNumber = accountNumber; // 'this' refers to the new object being created
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
    this.accountType = accountType;
    this.transactions = [];

    this.deposit = function(amount) {
        this.balance += amount;
        this.transactions.push(`Deposit: +${amount}`);
        return `Deposited ${amount} into account. New balance: ${this.balance}`;
    };

    this.withdraw = function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.transactions.push(`Withdrawal: -${amount}`);
            return `Withdrawn ${amount} from account. New balance: ${this.balance}`;
        } else {
            return 'Insufficient funds';
        }
    };

    this.getBalance = function() {
        return `Current balance: ${this.balance}`;
    };

    this.getTransactions = function() {
        return this.transactions;
    };
}

// Creating a new instance of BankUser
const bankUser1 = new BankUser('1234567890', 'Alice', 'Smith', 5000, 'Savings');

// Example usage:
console.log(bankUser1.getBalance()); // Output: Current balance: 5000
console.log(bankUser1.deposit(1000)); // Output: Deposited 1000 into account. New balance: 6000
console.log(bankUser1.withdraw(2000)); // Output: Withdrawn 2000 from account. New balance: 4000
console.log(bankUser1.getBalance()); // Output: Current balance: 4000
console.log(bankUser1.getTransactions()); // Output: ['Deposit: +1000', 'Withdrawal: -2000']


const bankUser2 = new BankUser('9876543210', 'Lak', 'Smith', 1000000, 'Savings');
console.log(bankUser2.getBalance());