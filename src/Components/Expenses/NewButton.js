import React, { useState } from 'react';
import NewExpense from './NewExpense';

const NewButton = () => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const handleButtonClick = () => {
    setShowExpenseForm(true);
  };

  return (
    <div className="expense-form__show">
      {!showExpenseForm && (
        <button type="submit" onClick={handleButtonClick}>
          Add New Expense
        </button>
      )}

      {showExpenseForm && <NewExpense />}
    </div>
  );
};

export default NewButton;
