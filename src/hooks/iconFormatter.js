'use client';

import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Database, 
  Bot, 
  Cloud, 
  Shield, 
  BarChart3, 
  Link, 
  Zap, 
  Wrench, 
  Palette 
} from 'lucide-react';

export const iconFormatter = (iconName) => {
  const icons = {
    'Globe': <Globe className="h-5 w-5" />,
    'ShoppingCart': <ShoppingCart className="h-5 w-5" />,
    'Smartphone': <Smartphone className="h-5 w-5" />,
    'Database': <Database className="h-5 w-5" />,
    'Bot': <Bot className="h-5 w-5" />,
    'Cloud': <Cloud className="h-5 w-5" />,
    'Shield': <Shield className="h-5 w-5" />,
    'BarChart3': <BarChart3 className="h-5 w-5" />,
    'Link': <Link className="h-5 w-5" />,
    'Zap': <Zap className="h-5 w-5" />,
    'Wrench': <Wrench className="h-5 w-5" />,
    'Palette': <Palette className="h-5 w-5" />
  };

  return icons[iconName] || <Globe className="h-5 w-5" />;
};
