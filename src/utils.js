export const getMonthBgColor = (month) => {
    const colors = {
        January: 'bg-red-200',
        February: 'bg-green-300',
        March: 'bg-blue-300',
    };
    return colors[month] || 'bg-gray-100';
};


export const getUniqueMonths = (transactions) => {
    const months = new Set();
    transactions.forEach(transaction => {
        months.add(transaction.month);
    });
    return Array.from(months);
};
