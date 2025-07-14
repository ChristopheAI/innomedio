import React, { memo, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { NavigationItem } from '../../types';
import { NAVIGATION_ITEMS } from '../../constants/content';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  scrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = memo(({ isMenuOpen, setIsMenuOpen, scrolled }) => {
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen, setIsMenuOpen]);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  const renderNavItem = (item: NavigationItem, isMobile: boolean = false) => {
    const baseClasses = isMobile
      ? "block px-4 py-4 text-base text-gray-700 hover:bg-gray-100 rounded-md transition-colors min-h-[48px] flex items-center"
      : "text-gray-700 hover:text-orange-600 transition-colors";

    const buttonClasses = item.isButton
      ? isMobile
        ? "block px-4 py-4 bg-orange-600 text-white rounded-md text-center hover:bg-orange-700 transition-colors font-medium min-h-[48px] flex items-center justify-center"
        : "bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors min-h-[48px] flex items-center"
      : baseClasses;

    return (
      <a
        key={item.href}
        href={item.href}
        className={buttonClasses}
        onClick={isMobile ? handleMenuClose : undefined}
        aria-label={`Navigate to ${item.label} section`}
      >
        {item.label}
      </a>
    );
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 min-h-[64px]">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">Christophe</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => renderNavItem(item))}
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden p-3 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-2">
            {NAVIGATION_ITEMS.map((item) => renderNavItem(item, true))}
          </div>
        </div>
      )}
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;