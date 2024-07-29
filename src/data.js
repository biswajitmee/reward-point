// src/data.js

export const fetchData = async () => {
  return [
    {
      customerId: 1,
      name: 'Advik halder',
      transactions: [
        { month: 'January', date: '2024-01-05', amount: 40 },
        { month: 'January', date: '2024-01-15', amount: 50 },
        { month: 'January', date: '2024-01-25', amount: 60 },
        { month: 'February', date: '2024-02-05', amount: 100 },
        { month: 'February', date: '2024-02-15', amount: 110 },
        { month: 'March', date: '2024-03-05', amount: 150 },
        { month: 'March', date: '2024-03-15', amount: 200 },
        { month: 'March', date: '2024-03-15', amount: 250 },
        { month: 'March', date: '2024-03-15', amount: 300 },
      ],
    },
    {
      customerId: 2,
      name: 'Biswajit halder',
      transactions: [
        { month: 'January', date: '2024-01-10', amount: 50 },
        { month: 'January', date: '2024-01-20', amount: 100 },
        { month: 'February', date: '2024-02-10', amount: 110 },
        { month: 'February', date: '2024-02-20', amount: 60 },
        { month: 'March', date: '2024-03-10', amount: 130 },
        { month: 'March', date: '2024-03-20', amount: 170 },
      ],
    },
     
  ];
};


