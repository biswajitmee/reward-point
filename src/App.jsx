import React, { useEffect, useState } from 'react';
import './App.css'

import { fetchData } from './data'
import CalculateRewardPoints from './CalculationReward';
import { getMonthBgColor, getUniqueMonths } from './utils';

const App = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const data = await fetchData();
      setCustomers(data);
    };
    getCustomers();
  }, []);

  const getTotalPoints = (transactions) => {
    return transactions.reduce((acc, transaction) => {
      return acc + CalculateRewardPoints(transaction.amount);
    }, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <p className="text-6xl font-bold mb-4">Customer Reward Points</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customers.map((customer) => {
          const totalPoints = getTotalPoints(customer.transactions);
          const months = getUniqueMonths(customer.transactions);

          return (
            <div key={customer.customerId} className="p-4 border rounded shadow mx-auto">
              <p className="text-4xl font-bold p-2">{customer.name}</p>
              {months.map((month) => {
                const transactions = customer.transactions.filter(
                  (transaction) => transaction.month === month
                );
                if (transactions.length === 0) return null;
                return (
                  <div key={month} className="mt-4">
                    <h3 className="text-lg font-medium bg-red-500 p-2">{month}</h3>
                    <table className={`w-full mt-2 table-auto border-collapse border ${getMonthBgColor(month)}`}>
                      <thead>
                        <tr>
                          <th className="border ">Date</th>
                          <th className="border ">Amount</th>
                          <th className="border ">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((transaction, index) => (
                          <tr key={index}>
                            <td className="border p-2">{transaction.date}</td>
                            <td className="border p-2">${transaction.amount}</td>
                            <td className="border p-2">
                              {CalculateRewardPoints(transaction.amount)} points
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })}
              <div className="mt-4 p-2 font-bold">
                Total Rewards: {totalPoints} points
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
