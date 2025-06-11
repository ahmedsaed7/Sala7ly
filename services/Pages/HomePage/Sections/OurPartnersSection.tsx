import SectionHeading from '@/components/ui/SectionHeading';
import React, { useMemo } from 'react';
import { CustomImage } from '@/components/ui/Images/Image';

// Move data outside component to prevent recreation on each render
const partnersData = [
  { name: "Google", imageURL: "/assets/partners/Google_2015_logo.svg" },
  { name: "Microsoft", imageURL: "/assets/partners/Microsoft_logo.svg" },
  { name: "Amazon", imageURL: "/assets/partners/Amazon_logo.svg" },
  { name: "Tesla", imageURL: "/assets/partners/Tesla_T_symbol.svg" },
  { name: "Spotify", imageURL: "/assets/partners/Spotify_logo_with_text.svg" },
  { name: "PayPal", imageURL: "/assets/partners/PayPal.svg" },
  { name: "Mastercard", imageURL: "/assets/partners/Mastercard-logo.svg" },
] as const;

// Separate PartnerLogo component for better reusability and performance
const PartnerLogo = React.memo(({ name, imageURL }: { name: string; imageURL: string }) => (
  <div className="flex-shrink-0 w-[120px] h-[40px]">
    <CustomImage 
      className="w-full h-full object-contain transition-transform hover:scale-110"
      src={imageURL}
      alt={name}
      width={120}
      height={40}
      unoptimized 
      loading="lazy"
      style={{ width: 'auto', height: 'auto' }}
    />
  </div>
));

PartnerLogo.displayName = 'PartnerLogo';

const OurPartnersSection = () => {
  // Memoize the duplicated partners array to prevent recreation on each render
  const duplicatedPartners = useMemo(() => [...partnersData, ...partnersData], []);

  return (
    <section className="flex flex-col items-center w-full py-16 bg-gray-100" id="Our-Partners">
      <div className="mb-8">
        <SectionHeading title="Our Partners" />
      </div>
      <div className="overflow-hidden w-full max-w-screen-xl">
        <div className="flex gap-12 py-6 animate-scroll items-center">
          {duplicatedPartners.map((partner, index) => (
            <PartnerLogo 
              key={`${partner.name}-${index}`}
              name={partner.name}
              imageURL={partner.imageURL}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(OurPartnersSection);