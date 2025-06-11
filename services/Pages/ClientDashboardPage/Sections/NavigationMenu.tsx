"use client";

import { Button } from '@/components/ui/Button/Button';
import { NavigationItem } from '@/Pages/ClientDashboardPage/types';

interface NavigationMenuProps {
  items: NavigationItem[];
  onNavItemClick?: (item: NavigationItem) => void;
}

export const NavigationMenu = ({ items, onNavItemClick }: NavigationMenuProps) => (
  <nav className="space-y-2">
    {items.map((item, index) => (
      <Button
        key={index}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
          item.active
            ? 'bg-[#EFB036] text-[#23486A] font-medium'
            : 'bg-transparent hover:bg-[#23486A] text-[#F5EEDC]'
        }`}
        onClick={() => onNavItemClick && onNavItemClick(item)}
      >
        <span className={`${item.active ? 'text-[#23486A]' : 'text-[#F5EEDC]'}`}>
          {item.icon}
        </span>
        <span>{item.label}</span>
      </Button>
    ))}
  </nav>
);
