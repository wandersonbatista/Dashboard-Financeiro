// src/app/page.tsx

import React from 'react';
import StatCard from '@/components/StatCard';
import SalesChart from '@/components/SalesChart'; 
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';

// 1. Definir o tipo dos dados que receberemos da API com TypeScript
interface CoinData {
  id: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

// 2. Criar uma função para buscar os dados
async function getCryptoData(): Promise<CoinData[]> {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=4&page=1&sparkline=false');
    if (!res.ok) {
      throw new Error('Falha ao buscar dados da API');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return []; // Retorna um array vazio em caso de erro
  }
}

// 3. Transformar a página em um componente assíncrono e usar os dados
export default async function DashboardPage() {
  const cryptoData = await getCryptoData();

  // Mapear os dados para os cards (ou usar placeholders se a API falhar)
  const bitcoin = cryptoData.find(c => c.id === 'bitcoin') || { current_price: 0, price_change_percentage_24h: 0 };
  const ethereum = cryptoData.find(c => c.id === 'ethereum') || { current_price: 0, price_change_percentage_24h: 0 };
  const tether = cryptoData.find(c => c.id === 'tether') || { current_price: 0, price_change_percentage_24h: 0 };
  const bnb = cryptoData.find(c => c.id === 'binancecoin') || { current_price: 0, price_change_percentage_24h: 0 };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard Financeiro</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Bitcoin (BTC)" 
            value={`R$ ${bitcoin.current_price.toLocaleString('pt-BR')}`}
            icon={<DollarSign className="w-8 h-8 text-orange-500" />} 
            change={`${bitcoin.price_change_percentage_24h.toFixed(2)}% nas 24h`}
          />
          <StatCard 
            title="Ethereum (ETH)" 
            value={`R$ ${ethereum.current_price.toLocaleString('pt-BR')}`}
            icon={<DollarSign className="w-8 h-8 text-gray-400" />} 
            change={`${ethereum.price_change_percentage_24h.toFixed(2)}% nas 24h`}
          />
          <StatCard 
            title="Tether (USDT)" 
            value={`R$ ${tether.current_price.toLocaleString('pt-BR')}`}
            icon={<DollarSign className="w-8 h-8 text-green-500" />} 
            change={`${tether.price_change_percentage_24h.toFixed(2)}% nas 24h`}
          />
           <StatCard 
            title="BNB" 
            value={`R$ ${bnb.current_price.toLocaleString('pt-BR')}`}
            icon={<DollarSign className="w-8 h-8 text-yellow-500" />} 
            change={`${bnb.price_change_percentage_24h.toFixed(2)}% nas 24h`}
          />
        </div>

        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Visão Geral de Vendas</h2>
            <SalesChart /> 
          </div>
        </div>
      </div>
    </main>
  );
}