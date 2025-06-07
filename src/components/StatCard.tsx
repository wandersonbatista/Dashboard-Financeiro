// src/components/StatCard.tsx

import React from 'react';

// Definindo os tipos das propriedades que o componente receberá com TypeScript
// Isso garante que sempre passaremos os dados corretos
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode; // O ícone será um elemento React
  change: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change }) => {
  return (
    // Card com fundo branco, cantos arredondados e sombra
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{change}</p>
      </div>
    </div>
  );
};

export default StatCard;