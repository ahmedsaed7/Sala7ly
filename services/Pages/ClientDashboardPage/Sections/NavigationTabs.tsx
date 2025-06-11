"use client";

import React, { useState, useCallback, memo } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  path: string;
}

interface NavigationTabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

const NAVIGATION_DELAY = 2000; // 2 seconds delay

// Memoized scroll button component
const ScrollButton = memo(({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
  <Button
    onClick={onClick}
    className="p-1.5 rounded-full bg-[#23486A]/80 text-[#F5EEDC] hover:bg-[#EFB036] transform transition-all duration-300 pointer-events-auto"
  >
    {direction === 'left' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
  </Button>
));

ScrollButton.displayName = 'ScrollButton';

// Memoized tab button component
const TabButton = memo(({ 
  tab, 
  isActive, 
  isNavigating, 
  onClick 
}: { 
  tab: Tab; 
  isActive: boolean; 
  isNavigating: boolean; 
  onClick: () => void;
}) => (
  <Button
    onClick={onClick}
    disabled={isNavigating}
    className={`
      flex-shrink-0
      px-2 xs:px-3 sm:px-4 md:px-6 
      py-1.5 xs:py-2 sm:py-2.5 
      text-[10px] xs:text-xs sm:text-sm 
      font-medium 
      rounded-lg 
      transition-all 
      duration-700
      whitespace-nowrap
      min-w-[70px] xs:min-w-[80px] sm:min-w-[100px]
      ${isNavigating ? 'cursor-not-allowed opacity-80' : ''} 
      ${isActive
        ? 'bg-[#EFB036] text-[#F5EEDC] transform scale-105 shadow-lg'
        : 'bg-[#23486A] text-[#F5EEDC] hover:bg-[#EFB036] hover:transform hover:scale-105 hover:shadow-lg'
      }
    `}
  >
    {tab.label}
    {isNavigating && isActive && (
      <span className="ml-1 xs:ml-2 inline-block animate-spin duration-700">⟳</span>
    )}
  </Button>
));

TabButton.displayName = 'TabButton';

// Memoized indicator dot component
const IndicatorDot = memo(({ isActive }: { isActive: boolean }) => (
  <div
    className={`h-1 xs:h-1.5 sm:h-2 transition-all duration-700 ${
      isActive ? 'w-4 xs:w-6 sm:w-8 bg-[#EFB036]' : 'w-1 xs:w-1.5 sm:w-2 bg-[#23486A]'
    } rounded-full`}
  />
));

IndicatorDot.displayName = 'IndicatorDot';

export const NavigationTabs = memo(({ tabs, activeTab, onChange }: NavigationTabsProps) => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [activeTabId, setActiveTabId] = useState(activeTab);

  const handleTabClick = useCallback(async (tab: Tab) => {
    if (isNavigating) return;
    setIsNavigating(true);
    setActiveTabId(tab.id);
    onChange(tab.id);

    try {
      await new Promise(resolve => setTimeout(resolve, NAVIGATION_DELAY));
      await router.push(tab.path);
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setIsNavigating(false);
    }
  }, [isNavigating, onChange, router]);

  return (
    <div className="relative bg-[#3B6790] rounded-xl p-2 xs:p-3 sm:p-4 mb-4 xs:mb-6">
      {isNavigating && (
        <div 
          className="absolute top-0 left-0 w-full h-0.5 xs:h-1 bg-[#EFB036]"
          style={{
            animation: `progress ${NAVIGATION_DELAY}ms ease-in-out`
          }}
        />
      )}

      <div className="relative flex flex-col items-center">
        <div 
          id="tabs-container"
          className="flex gap-1 xs:gap-2 sm:gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-1 xs:px-2 justify-center w-full"
          style={{ 
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={activeTabId === tab.id}
              isNavigating={isNavigating}
              onClick={() => handleTabClick(tab)}
            />
          ))}
        </div>

        <div className="mt-2 xs:mt-3 flex justify-center gap-1.5 xs:gap-2 md:hidden">
          {tabs.map((tab) => (
            <IndicatorDot key={tab.id} isActive={activeTabId === tab.id} />
          ))}
        </div>
      </div>
    </div>
  );
});

NavigationTabs.displayName = 'NavigationTabs';