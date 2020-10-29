import React, { createContext, useReducer } from "react";

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "motobike sold", incomeAmount: 3500 },
    { id: 2, incomeText: "Salary", incomeAmount: 10000 },
    { id: 3, incomeText: "Bonus", incomeAmount: 8000 },
  ],
  expenseTransactions: [
    { id: 1, expenseText: "hospital expenses", expenseAmount: 2500 },
    { id: 2, expenseText: "taxes", expenseAmount: 3000 },
    { id: 3, expenseText: "shopping Therapy", expenseAmount: 750 },
  ],
};
export const GlobalContext = createContext(initialState);

export const GlobalContextProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer, inistialState)

    return(
<GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        deleteTransaction,
        addIncome,
        addExpense
      }}
    >
      {children}
    </GlobalContext.Provider>
    )
}