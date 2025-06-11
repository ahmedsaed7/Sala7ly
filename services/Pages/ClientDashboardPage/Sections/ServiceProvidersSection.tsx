"use client";

import React, { useCallback, memo } from 'react';
import { FaUser, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { CustomImage } from '@/components/ui/Images/Image';
import { Specialty } from '../types';
import Link from '@/components/ui/Link/Link';
import { Pages } from '@/lib/config/constants';

interface ServiceProvidersSectionProps {
  title: string;
  providers: Specialty[];
}

const IconButton = memo(({ href, className, icon: Icon }: { href: string; className: string; icon: React.ElementType }) => (
  <Link
    href={href}
    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${className}`}
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon size={20} />
    </motion.div>
  </Link>
));

IconButton.displayName = 'IconButton';

const ProviderCard = memo(({ provider }: { provider: Specialty }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-[#23486A] rounded-lg p-4"
  >
    <div className="flex items-start justify-between">
      <div className="flex items-center space-x-3">
        <CustomImage
          src={provider.avatar}
          alt={provider.name}
          width={48}
          height={48}
          rounded="full"
          className="border-2 border-[#EFB036]"
        />
        <div>
          <h3 className="text-lg font-medium text-[#F5EEDC]">{provider.name}</h3>
          <p className="text-sm text-[#F5EEDC] opacity-80">{provider.area}</p>
          <p className="text-xs text-[#EFB036]">{provider.role}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <IconButton
          href={Pages.ServiceWorker}
          className="bg-[#4C7B8B] hover:bg-[#3A6775] text-white"
          icon={FaUser}
        />
        <IconButton
          href={Pages.MESSAGE}
          className="bg-[#EFB036] hover:bg-[#F8C14D] text-[#23486A]"
          icon={FaPhone}
        />
      </div>
    </div>
  </motion.div>
));

ProviderCard.displayName = 'ProviderCard';

export const ServiceProvidersSection: React.FC<ServiceProvidersSectionProps> = memo(({
  title,
  providers,
}) => {
  const renderProvider = useCallback((provider: Specialty) => (
    <ProviderCard
      key={provider.name}
      provider={provider}
    />
  ), []);

  return (
    <div className="bg-[#3B6790] rounded-xl p-6">
      <h2 className="text-4xl font-semibold mb-4 text-[#EFB036]">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {providers.map(renderProvider)}
      </div>
    </div>
  );
});

ServiceProvidersSection.displayName = 'ServiceProvidersSection'; 