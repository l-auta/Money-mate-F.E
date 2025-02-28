import { useState } from 'react';

const useDateFilter = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const applyFilter = (transactions) => {
    return transactions.filter((item) => {
      const itemDate = new Date(item.date);
      return (!startDate || itemDate >= startDate) && (!endDate || itemDate <= endDate);
    });
  };

  return { startDate, endDate, setStartDate, setEndDate, applyFilter };
};

export default useDateFilter;
