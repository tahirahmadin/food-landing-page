import React from 'react';
import { Pizza } from 'lucide-react';
import { MenuItem } from '../../types';

interface PizzaOptionsProps {
  pizzas: MenuItem[];
  onSelect: (pizza: MenuItem) => void;
}

export const PizzaOptions: React.FC<PizzaOptionsProps> = ({ pizzas, onSelect }) => {
  return (
    <div className="space-y-2">
      {pizzas.map((pizza, index) => (
        <button
          key={index}
          className="w-full flex items-center justify-between p-1.5 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          onClick={() => onSelect(pizza)}
        >
          <div className="flex items-center gap-2">
            <Pizza className="w-4 h-4 text-yellow-400" />
            <span className="text-white text-xs">{pizza.name}</span>
          </div>
          <span className="text-green-400 text-xs">${pizza.price}</span>
        </button>
      ))}
    </div>
  );
};