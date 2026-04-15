const API_URL = window.location.hostname === 'localhost' 
    ? '/api'  // Proxy do Vite
    : import.meta.env.VITE_MY_MONEY_API_URL;
const API_TOKEN = import.meta.env.VITE_MY_MONEY_API_AUTH;
const API_AUTH = 'Basic ' + API_TOKEN;

async function request(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': API_AUTH,
        ...options.headers
    };

    console.log(`📡 ${options.method || 'GET'} ${url}`);

    try {
        const response = await fetch(url, { ...options, headers });
        const data = await response.json();

        const result = {
            ok: response.ok,
            status: response.status,
            statusText: response.statusText,
            data: data,
            error: !response.ok ? data.error || data.message || `HTTP ${response.status}` : null
        };

        console.log('📦 Response:', result);
        return result;
    } catch (networkError) {
        return {
            ok: false,
            status: 0,
            statusText: 'Network Error',
            data: null,
            error: networkError.message,
            networkError: true
        };
    }
}

// ========== INCOMES ==========

// 2. Get Income List (GET)
export async function getAllIncomes() {
    const result = await request('/income');
    if (result.ok) {
        return { success: true, data: result.data.data, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// 1. Income Entry (POST)
export async function addIncome(incomeData) {
    const requiredFields = ['user', 'description', 'amount', 'date'];
    for (const field of requiredFields) {
        if (!incomeData[field]) {
            return {
                success: false,
                error: `Campo '${field}' é obrigatório para criar uma receita.`,
                validationError: true
            };
        }
    }
    
    const result = await request('/income', {
        method: 'POST',
        body: JSON.stringify(incomeData)
    });
    
    if (result.ok) {
        return { success: true, data: result.data.data, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// 3. Get Income by ID (GET)
export async function getIncomeById(id) {
    const result = await request(`/income/${id}`);
    
    if (result.ok) {
        return { success: true, data: result.data.data, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// 4. Get Income by Month (GET)
export async function getIncomesByMonth(year, month) {
    const result = await request(`/income/${year}/${month}`);
    
    if (result.ok) {
        return { success: true, data: result.data.data, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// 5. Update Income (PUT)
export async function updateIncome(id, incomeData) {
    const requiredFields = ['user', 'description', 'amount', 'date'];
    for (const field of requiredFields) {
        if (!incomeData[field]) {
            return {
                success: false,
                error: `Campo '${field}' é obrigatório para atualizar uma receita.`,
                validationError: true
            };
        }
    }
    
    const result = await request(`/income/${id}`, {
        method: 'PUT',
        body: JSON.stringify(incomeData)
    });
    
    if (result.ok) {
        return { success: true, data: result.data.data, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// 6. Delete Income (DELETE)
export async function deleteIncome(id) {
    const result = await request(`/income/${id}`, { method: 'DELETE' });
    
    if (result.ok) {
        return { success: true, message: result.data.message, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// ========== EXPENSES ==========

// 8. Get Expenses List (GET)
export async function getAllExpenses() {
    const result = await request('/expenses');
    
    if (result.ok) {
        return { success: true, data: result.data.data, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// 7. Expenses Entry (POST)
export async function addExpense(expenseData) {
    const requiredFields = ['user', 'description', 'amount', 'date'];
    for (const field of requiredFields) {
        if (!expenseData[field]) {
            return {
                success: false,
                error: `Campo '${field}' é obrigatório para criar uma despesa.`,
                validationError: true
            };
        }
    }
    
    let endpoint = '/expenses';
    if (expenseData.category) {
        endpoint += `?category=${encodeURIComponent(expenseData.category)}`;
    }
    
    const result = await request(endpoint, {
        method: 'POST',
        body: JSON.stringify(expenseData)
    });
    
    if (result.ok) {
        return { success: true, data: result.data.data, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// 9. Get Expenses by ID (GET)
export async function getExpenseById(id) {
    const result = await request(`/expenses/${id}`);
    
    if (result.ok) {
        return { success: true, data: result.data.data, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// 10. Get Expenses by Month (GET)
export async function getExpensesByMonth(year, month) {
    const result = await request(`/expenses/${year}/${month}`);
    
    if (result.ok) {
        return { success: true, data: result.data.data, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// 11. Update Expenses (PUT)
export async function updateExpense(id, expenseData) {
    const requiredFields = ['user', 'description', 'amount', 'date'];
    for (const field of requiredFields) {
        if (!expenseData[field]) {
            return {
                success: false,
                error: `Campo '${field}' é obrigatório para atualizar uma despesa.`,
                validationError: true
            };
        }
    }
    
    let endpoint = `/expenses/${id}`;
    if (expenseData.category) {
        endpoint += `?category=${encodeURIComponent(expenseData.category)}`;
    }
    
    const result = await request(endpoint, {
        method: 'PUT',
        body: JSON.stringify(expenseData)
    });
    
    if (result.ok) {
        return { success: true, data: result.data.data, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// 12. Delete Expenses (DELETE)
export async function deleteExpense(id) {
    const result = await request(`/expenses/${id}`, { method: 'DELETE' });
    
    if (result.ok) {
        return { success: true, message: result.data.message, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// ========== STATEMENT ==========

// 13. Month Statement (GET)
export async function getMonthlyStatement(year, month, userEmail) {
    const userName = userEmail.split('@')[0];
    const result = await request(`/statement/${year}/${month}?user=${userName}`);
    if (result.ok) {
        return { success: true, data: result.data.data, fullResponse: result };
    }
    return { success: false, error: result.error, status: result.status, fullResponse: result };
}

// public/js/api/mymoney.js
// Adicione estas funções no final do arquivo

// ========== FUNÇÕES FILTRADAS POR USUÁRIO ==========

// Buscar apenas incomes do usuário logado
export async function getUserIncomes(userEmail) {
    const userName = userEmail.split('@')[0]; // Pega só a parte antes do @
    const result = await getAllIncomes();
    
    if (!result.success) {
        return { success: false, error: result.error, data: [] };
    }
    
    const filteredData = result.data.filter(item => item.user === userName);
    return { success: true, data: filteredData, fullResponse: result };
}

// Buscar apenas expenses do usuário logado
export async function getUserExpenses(userEmail) {
    const userName = userEmail.split('@')[0];
    const result = await getAllExpenses();
    
    if (!result.success) {
        return { success: false, error: result.error, data: [] };
    }
    
    const filteredData = result.data.filter(item => item.user === userName);
    return { success: true, data: filteredData, fullResponse: result };
}

// Adicionar income com o email do usuário
export async function addUserIncome(userEmail, incomeData) {
    const userName = userEmail.split('@')[0];
    const incomeWithUser = {
        ...incomeData,
        user: userName
    };
    return await addIncome(incomeWithUser);
}

// Adicionar expense com o email do usuário
export async function addUserExpense(userEmail, expenseData) {
    const userName = userEmail.split('@')[0];
    const expenseWithUser = {
        ...expenseData,
        user: userName
    };
    return await addExpense(expenseWithUser);
}

// Buscar statement do usuário (recalcula baseado nos dados filtrados)
export async function getUserStatement(userEmail, year, month) {
    const incomesResult = await getUserIncomes(userEmail);
    const expensesResult = await getUserExpenses(userEmail);
    
    if (!incomesResult.success || !expensesResult.success) {
        return { 
            success: false, 
            error: 'Failed to fetch user data',
            data: {
                totalIncome: 0,
                totalExpenses: 0,
                monthBalance: 0,
                categoryExpenses: []
            }
        };
    }
    
    // Filtrar por mês/ano
    const monthIncomes = incomesResult.data.filter(item => {
        const date = new Date(item.date);
        return date.getFullYear() === year && date.getMonth() + 1 === month;
    });
    
    const monthExpenses = expensesResult.data.filter(item => {
        const date = new Date(item.date);
        return date.getFullYear() === year && date.getMonth() + 1 === month;
    });
    
    const totalIncome = monthIncomes.reduce((sum, i) => sum + i.amount, 0);
    const totalExpenses = monthExpenses.reduce((sum, e) => sum + e.amount, 0);
    
    // Agrupar despesas por categoria
    const categoryMap = {};
    const categories = ['Alimentação', 'Saúde', 'Moradia', 'Transporte', 'Educação', 'Lazer', 'Imprevistos', 'Outras'];
    categories.forEach(cat => { categoryMap[cat] = 0; });
    
    monthExpenses.forEach(exp => {
        const cat = exp.category || 'Outras';
        if (categoryMap[cat] !== undefined) {
            categoryMap[cat] += exp.amount;
        } else {
            categoryMap['Outras'] += exp.amount;
        }
    });
    
    const categoryExpenses = categories.map(cat => ({
        category: cat,
        total: categoryMap[cat] || 0
    }));
    
    return {
        success: true,
        data: {
            totalIncome,
            totalExpenses,
            monthBalance: totalIncome - totalExpenses,
            categoryExpenses
        }
    };
}