// src/components/SalesChart.tsx
"use client"; // Gráficos são interativos, então precisam rodar no cliente

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dados de exemplo. Mais tarde, vamos buscar isso de uma API.
const data = [
  { name: 'Jan', Vendas: 4000 },
  { name: 'Fev', Vendas: 3000 },
  { name: 'Mar', Vendas: 5000 },
  { name: 'Abr', Vendas: 4500 },
  { name: 'Mai', Vendas: 6000 },
  { name: 'Jun', Vendas: 5500 },
];

const SalesChart = () => {
  return (
    // ResponsiveContainer faz o gráfico se adaptar ao tamanho do container pai
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        {/* Eixo X (horizontal) mostrando o nome do mês */}
        <XAxis dataKey="name" stroke="#888888" />
        {/* Eixo Y (vertical) */}
        <YAxis stroke="#888888" />
        {/* Tooltip mostra os detalhes quando você passa o mouse sobre uma barra */}
        <Tooltip wrapperClassName="!bg-gray-700 !border-none !rounded-lg" />
        {/* Legenda para identificar a barra */}
        <Legend />
        {/* A barra do gráfico, com a cor que desejamos */}
        <Bar dataKey="Vendas" fill="#8884d8" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;