'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export default function SectionBlock({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  color, 
  bgColor 
}: SectionBlockProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className={`${bgColor} p-3 sm:p-4 rounded-full flex-shrink-0`}>
          <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />
        </div>
        
        <div className="flex-1 w-full">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
        </div>
        
        <Link
          href={href}
          className={`${color} bg-gray-50 hover:bg-gray-100 px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex-shrink-0 text-sm sm:text-base w-full sm:w-auto text-center`}
        >
          Commencer
        </Link>
      </div>
    </motion.div>
  );
}