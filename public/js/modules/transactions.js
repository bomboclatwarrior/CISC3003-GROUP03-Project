let transactions = [];

export function loadTransactions() {
    const saved = localStorage.getItem('finomic_transactions');
    transactions = saved ? JSON.parse(saved) : getDefaultTransactions();
    return transactions;
}

function getDefaultTransactions() {
    return [
        { id: '1', type: 'income', amount: 5000, category: 'Salary', description: 'Monthly Salary', date: '2024-04-01', method: 'Bank Transfer' },
        { id: '2', type: 'expense', amount: 1200, category: 'Rent', description: 'Apartment Rent', date: '2024-04-02', method: 'Bank Transfer' },
        { id: '3', type: 'expense', amount: 450, category: 'Groceries', description: 'Weekly Groceries', date: '2024-04-05', method: 'Credit Card' },
    ];
}

export function saveTransactions() {
    localStorage.setItem('finomic_transactions', JSON.stringify(transactions));
}

export function addTransaction(transaction) {
    transaction.id = Date.now().toString();
    transactions.unshift(transaction);
    saveTransactions();
}

export function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    saveTransactions();
}

export function getTransactions() {
    return [...transactions];
}

export const categories = {
    income: ['Salary', 'Freelance', 'Investment', 'Business', 'Other Income'],
    expense: ['Rent', 'Groceries', 'Utilities', 'Entertainment', 'Transport', 'Healthcare', 'Shopping', 'Other']
};