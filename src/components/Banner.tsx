import React from 'react';
import { Sparkles } from 'lucide-react';

const Banner = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-8 w-8 mr-2 text-gray-300" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Informações de Requisição
          </h1>
        </div>
        
        <p className="text-center text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Complete o formulário abaixo para enviar sua solicitação. Nosso time irá revisar sua requisição e respondê-la apropriadamente.
        </p>
        
        <div className="mt-6 flex justify-center space-x-4">
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-400 mr-2"></div>
            <span className="text-sm font-medium text-gray-200">Formulário seguro</span>
          </div>
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-400 mr-2"></div>
            <span className="text-sm font-medium text-gray-200">Resposta rápida</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;