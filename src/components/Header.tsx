// src/components/Header.tsx
import React from 'react';
import { Bot } from 'lucide-react'; // Ícone para o logo

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-blue-500" />
            <span className="ml-2 font-bold text-xl text-gray-800 dark:text-white">Dash</span>
          </div>
          {/* Futuramente, você pode adicionar links de navegação ou um botão de perfil aqui */}
        </div>
      </nav>
    </header>
  );
};

export default Header;