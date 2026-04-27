"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Tx = {
  id: number;
  type: "Deposit" | "Withdraw" | "Transfer";
  amount: number;
  status: "Success" | "Pending" | "Failed";
  from: string;
  to: string;
};

export default function Payments() {
  const [balance, setBalance] = useState(5000);

  const [transactions] = useState<Tx[]>([
    {
      id: 1,
      type: "Deposit",
      amount: 2000,
      status: "Success",
      from: "Investor",
      to: "Wallet",
    },
    {
      id: 2,
      type: "Transfer",
      amount: 1000,
      status: "Pending",
      from: "Investor",
      to: "Entrepreneur",
    },
    {
      id: 3,
      type: "Withdraw",
      amount: 500,
      status: "Success",
      from: "Wallet",
      to: "Bank",
    },
  ]);

  const handle = (type: string) => {
    if (type === "Deposit") setBalance((p) => p + 500);
    if (type === "Withdraw") setBalance((p) => (p > 0 ? p - 300 : 0));
    if (type === "Transfer") setBalance((p) => (p > 0 ? p - 200 : 0));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-6xl space-y-6"
      >

        {/* TOP CARDS */}
        <div className="grid grid-cols-3 gap-4">

          {/* BALANCE CARD */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-6 shadow-lg">
            <p className="text-sm opacity-80">Wallet Balance</p>
            <h1 className="text-3xl font-bold mt-2">${balance}</h1>
          </div>

          {/* INCOME */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <p className="text-gray-500 text-sm">Total Income</p>
            <h1 className="text-2xl font-bold text-green-600 mt-2">
              + $12,400
            </h1>
          </div>

          {/* EXPENSE */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <p className="text-gray-500 text-sm">Total Expense</p>
            <h1 className="text-2xl font-bold text-red-500 mt-2">
              - $4,200
            </h1>
          </div>

        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-3 gap-4">

          <button
            onClick={() => handle("Deposit")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow"
          >
            Deposit
          </button>

          <button
            onClick={() => handle("Withdraw")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl shadow"
          >
            Withdraw
          </button>

          <button
            onClick={() => handle("Transfer")}
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl shadow"
          >
            Transfer
          </button>

        </div>

        {/* TRANSACTIONS */}
        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-lg font-semibold mb-4">
            Transaction History
          </h2>

          <div className="space-y-3">

            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex justify-between items-center p-4 rounded-xl border hover:shadow transition"
              >

                {/* LEFT */}
                <div>
                  <p className="font-medium">{tx.type}</p>
                  <p className="text-xs text-gray-500">
                    {tx.from} → {tx.to}
                  </p>
                </div>

                {/* MIDDLE */}
                <div className="font-bold">
                  ${tx.amount}
                </div>

                {/* STATUS */}
                <div
                  className={`text-xs px-3 py-1 rounded-full text-white ${
                    tx.status === "Success"
                      ? "bg-green-500"
                      : tx.status === "Pending"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {tx.status}
                </div>

              </div>
            ))}

          </div>
        </div>

      </motion.div>
    </div>
  );
}