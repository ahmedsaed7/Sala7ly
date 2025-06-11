// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import WorkerCard from './Card';
// import test, { describe } from 'node:test';

// describe('WorkerCard Component', () => {
//   const defaultProps = {
//     name: "Christopher Anderson",
//     title: "Professional House Cleaner",
//     rating: 4.7,
//     imageUrl: "/lovable-uploads/645f43a1bbedd756162bda3e8c72448b.jpg",
//     facebook: "https://facebook.com",
//     whatsapp: "1234567890",
//     phone: "+1234567890"

//   };

//   test('renders with default props', () => {
//     render(<WorkerCard />);
// <<<<<<< Tabnine <<<<<<<
//     expect(screen.getByText('Christopher Anderson')).toBeInTheDocument();
// >>>>>>> Tabnine >>>>>>>// {"conversationId":"8aebbdb3-af6f-4469-97b3-4771d804b6bd","source":"instruct"}
//     expect(screen.getByText('Professional House Cleaner')).toBeInTheDocument();
//     expect(screen.getByText('4.7')).toBeInTheDocument();
//   });

//   test('renders with custom props', () => {
//     const customProps = {
//       name: "Jane Smith",
//       title: "Expert Gardener",
//       rating: 4.2,
//       imageUrl: "/custom-image.jpg",
//       facebook: "https://facebook.com/janesmith",
//       whatsapp: "9876543210",
//       phone: "+9876543210"
//     };
    
//     render(<WorkerCard {...customProps} />);
//     expect(screen.getByText('Jane Smith')).toBeInTheDocument();
//     expect(screen.getByText('Expert Gardener')).toBeInTheDocument();
//     expect(screen.getByText('4.2')).toBeInTheDocument();
//   });

//   test('renders correct number of stars based on rating', () => {
//     render(<WorkerCard rating={3.5} />);
//     const stars = screen.getAllByText('★');
//     expect(stars.length).toBe(4); // 3 full stars + 1 half star
//   });

//   test('renders image correctly', () => {
//     render(<WorkerCard {...defaultProps} />);
//     const image = screen.getByAltText('Christopher Anderson');
//     expect(image).toBeInTheDocument();
//     expect(image).toHaveAttribute('src', defaultProps.imageUrl);
//   });

//   test('handles external image URLs correctly', () => {
//     const externalImageProps = {
//       ...defaultProps,
//       imageUrl: 'https://example.com/image.jpg'
//     };
    
//     render(<WorkerCard {...externalImageProps} />);
//     const image = screen.getByAltText('Christopher Anderson');
//     expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
//   });

//   test('handles image loading error', () => {
//     render(<WorkerCard {...defaultProps} />);
//     const image = screen.getByAltText('Christopher Anderson');
    
//     // Simulate an error when loading the image
//     fireEvent.error(image);
    
//     // Check if the fallback image is used
//     expect(image).toHaveAttribute('src', '/images/placeholder.jpg');
//   });

//   test('contains social media links with correct hrefs', () => {
//     render(<WorkerCard {...defaultProps} />);
    
//     const whatsappLink = screen.getByLabelText('WhatsApp Contact');
//     expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/1234567890');
    
//     const facebookLink = screen.getByLabelText('Facebook Profile');
//     expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
    
//     const phoneLink = screen.getByLabelText('Phone Call');
//     expect(phoneLink).toHaveAttribute('href', 'tel:+1234567890');
//   });

//   test('contains a Choose button that navigates to worker details', () => {
//     // Mock window.location.href
//     const originalLocation = window.location;
//     delete window.location;
//     window.location = { href: '' } as Location;
    
//     render(<WorkerCard {...defaultProps} />);
//     const chooseButton = screen.getByText('Choose');
    
//     fireEvent.click(chooseButton);
//     expect(window.location.href).toBe('/worker-details');
    
//     // Restore original location
//     window.location = originalLocation;
//   });

//   test('animations trigger on hover', () => {
//     render(<WorkerCard {...defaultProps} />);
//     const cardContainer = screen.getByText('Christopher Anderson').closest('div');
    
//     // Find the container with the containerStyle (has position: relative)
//     const outerContainer = cardContainer?.parentElement?.parentElement;
    
//     // Test hover state
//     if (outerContainer) {
//       fireEvent.mouseEnter(outerContainer);
//       // Verify the transform style is applied (translateY)
//       expect(outerContainer.style.transform).toBe('translateY(-15px)');
      
//       fireEvent.mouseLeave(outerContainer);
//       expect(outerContainer.style.transform).toBe('translateY(0)');
//     }
//   });
// });

// function expect(arg0: any) {
//     throw new Error('Function not implemented.');
// }


// function expect(arg0: any) {
//     throw new Error('Function not implemented.');
// }


// function expect(arg0: any) {
//     throw new Error('Function not implemented.');
// }








// // "use client";

// // import React, { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { Button } from '../Button/Button';

// // interface WorkerCardProps {
// //   name?: string;
// //   title?: string;
// //   rating?: number;
// //   imageUrl?: string;
// //   phone?: string;
// //   facebook?: string;
// //   whatsapp?: string;
// // }

// // const WorkerCard = ({
// //   name = "Christopher Anderson",
// //   title = "Professional House Cleaner",
// //   rating = 4.7,
// //   imageUrl = "/images/placeholder.jpg",
// //   facebook = "#",
// //   whatsapp = "",
// //   phone = ""
// // }: WorkerCardProps) => {
// //   const [isCardHovered, setIsCardHovered] = useState(false);
// //   const [isWhatsappHovered, setIsWhatsappHovered] = useState(false);
// //   const [isFacebookHovered, setIsFacebookHovered] = useState(false);
// //   const [isPhoneHovered, setIsPhoneHovered] = useState(false);
// //   const [isButtonHovered, setIsButtonHovered] = useState(false);
// //   const [imageError, setImageError] = useState(false);
  
// //   const renderStars = (rating: number) => {
// //     const fullStars = Math.floor(rating);
// //     const hasHalfStar = rating % 1 >= 0.5;
    
// //     return (
// //       <div className="flex items-center justify-center">
// //         {[...Array(5)].map((_, i) => (
// //           <span key={i} className="text-2xl">
// //             {i < fullStars ? (
// //               <span className="text-warning">★</span>
// //             ) : i === fullStars && hasHalfStar ? (
// //               <span className="text-warning">★</span>
// //             ) : (
// //               <span className="text-gray-300">★</span>
// //             )}
// //           </span>
// //         ))}
// //         <span className="ml-2 text-warning">{rating}</span>
// //       </div>
// //     );
// //   };

// //   const handleImageError = () => {
// //     setImageError(true);
// //   };

// //   const getSocialLink = (baseLink: string, prefix: string, value: string) => {
// //     if (!value) return "#";
// //     switch (baseLink) {
// //       case "whatsapp":
// //         return `https://wa.me/${value.replace(/\D/g, '')}`;
// //       case "facebook":
// //         return value.startsWith("http") ? value : `https://facebook.com/${value}`;
// //       case "phone":
// //         return `tel:${value.replace(/\D/g, '')}`;
// //       default:
// //         return "#";
// //     }
// //   };

// //   return (
// //     <div 
// //       className={`
// //         w-full max-w-xs mx-auto transform transition-all duration-300 
// //         ${isCardHovered ? 'scale-105 -translate-y-4' : ''}
// //       `}
// //       onMouseEnter={() => setIsCardHovered(true)}
// //       onMouseLeave={() => setIsCardHovered(false)}
// //     >
// //       <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
// //         {/* Profile Image */}
// //         <div className="relative h-48 w-full overflow-hidden">
// //           <img
// //             src={imageError ? '/images/placeholder.jpg' : imageUrl}
// //             alt={name}
// //             className={`
// //               w-full h-full object-cover transition-transform duration-500
// //               ${isCardHovered ? 'scale-110' : ''}
// //             `}
// //             onError={handleImageError}
// //           />
// //         </div>

// //         {/* Content */}
// //         <div className="p-4 text-center">
// //           <h2 className="text-xl font-bold text-primary mb-2">{name}</h2>
// //           <p className="text-sm text-secondary mb-2">{title}</p>

// //           {/* Star Rating */}
// //           <div className="mb-3">
// //             {renderStars(rating)}
// //           </div>

// //           {/* Social Links */}
// //           <div className="flex justify-center space-x-3 mb-3">
// //             {/* WhatsApp */}
// //             {whatsapp && (
// //               <Link 
// //                 href={getSocialLink("whatsapp", "wa", whatsapp)}
// //                 className={`
// //                   bg-green-500 text-white rounded-full p-2 inline-block 
// //                   transform transition-transform duration-300
// //                   ${isWhatsappHovered ? 'scale-110 -translate-y-2' : ''}
// //                 `}
// //                 onMouseEnter={() => setIsWhatsappHovered(true)}
// //                 onMouseLeave={() => setIsWhatsappHovered(false)}
// //                 aria-label="WhatsApp Contact"
// //               >
// //                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
// //                 </svg>
// //               </Link>
// //             )}
            
// //             {/* Facebook */}
// //             {facebook && (
// //               <Link 
// //                 href={getSocialLink("facebook", "fb", facebook)}
// //                 className={`
// //                   bg-blue-600 text-white rounded-full p-2 inline-block 
// //                   transform transition-transform duration-300
// //                   ${isFacebookHovered ? 'scale-110 -translate-y-2' : ''}
// //                 `}
// //                 onMouseEnter={() => setIsFacebookHovered(true)}
// //                 onMouseLeave={() => setIsFacebookHovered(false)}
// //                 aria-label="Facebook Profile"
// //               >
// //                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
// //                 </svg>
// //               </Link>
// //             )}
            
// //             {/* Phone */}
// //             {phone && (
// //               <Link 
// //                 href={getSocialLink("phone", "tel", phone)}
// //                 className={`
// //                   bg-primary text-white rounded-full p-2 inline-block 
// //                   transform transition-transform duration-300
// //                   ${isPhoneHovered ? 'scale-110 -translate-y-2' : ''}
// //                 `}
// //                 onMouseEnter={() => setIsPhoneHovered(true)}
// //                 onMouseLeave={() => setIsPhoneHovered(false)}
// //                 aria-label="Phone Call"
// //               >
// //                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M20 10.999h2c0-4.5-3.5-8-8-8v2c3.308 0 6 2.692 6 6zm-6-4v-2c-4.5 0-8 3.5-8 8h2c0-3.308 2.692-6 6-6zm-6 7h-3c0 7 5.5 12 12 12v-3c-5 0-9-4-9-9zm13.1 0h-2.1c0 3.9-3.1 7-7 7v2.1c5 0 9.1-4 9.1-9.1z"/>
// //                 </svg>
// //               </Link>
// //             )}
// //           </div>

// //           {/* Choose Button */}
// //           <Button
// //             onClick={() => window.location.href = '/worker-details'}
// //             className={`
// //               w-full py-3 bg-primary text-white rounded-lg
// //               transform transition-transform duration-300
// //               ${isButtonHovered ? '-translate-y-2' : ''}
// //             `}
// //             onMouseEnter={() => setIsButtonHovered(true)}
// //             onMouseLeave={() => setIsButtonHovered(false)}
// //           >
// //             Choose
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default React.memo(WorkerCard);




// // "use client";

// // import React, { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { Button } from '../Button/Button';

// // interface WorkerCardProps {
// //   name?: string;
// //   title?: string;
// //   rating?: number;
// //   imageUrl?: string;
// //   phone?: string;
// //   facebook?: string;
// //   whatsapp?: string;
// // }

// // const WorkerCard = ({
// //   name = "Christopher Anderson",
// //   title = "Professional House Cleaner",
// //   rating = 4.7,
// //   imageUrl = "/images/placeholder.jpg",
// //   facebook = "#",
// //   whatsapp = "",
// //   phone = ""
// // }: WorkerCardProps) => {
// //   const [isCardHovered, setIsCardHovered] = useState(false);
// //   const [gradientPosition, setGradientPosition] = useState(0);
// //   const [isWhatsappHovered, setIsWhatsappHovered] = useState(false);
// //   const [isFacebookHovered, setIsFacebookHovered] = useState(false);
// //   const [isPhoneHovered, setIsPhoneHovered] = useState(false);
// //   const [isButtonHovered, setIsButtonHovered] = useState(false);
// //   const [imageError, setImageError] = useState(false);
  
// //   // Animate gradient border
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setGradientPosition(prev => (prev + 1) % 360);
// //     }, 50);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const renderStars = (rating: number) => {
// //     const fullStars = Math.floor(rating);
// //     const hasHalfStar = rating % 1 >= 0.5;
    
// //     return (
// //       <div className="flex items-center justify-center">
// //         {[...Array(5)].map((_, i) => (
// //           <span key={i} className="text-2xl">
// //             {i < fullStars ? (
// //               <span className="text-warning">★</span>
// //             ) : i === fullStars && hasHalfStar ? (
// //               <span className="text-warning">★</span>
// //             ) : (
// //               <span className="text-gray-300">★</span>
// //             )}
// //           </span>
// //         ))}
// //         <span className="ml-2 text-warning">{rating}</span>
// //       </div>
// //     );
// //   };

// //   const handleImageError = () => {
// //     setImageError(true);
// //   };

// //   const getSocialLink = (baseLink: string, prefix: string, value: string) => {
// //     if (!value) return "#";
// //     switch (baseLink) {
// //       case "whatsapp":
// //         return `https://wa.me/${value.replace(/\D/g, '')}`;
// //       case "facebook":
// //         return value.startsWith("http") ? value : `https://facebook.com/${value}`;
// //       case "phone":
// //         return `tel:${value.replace(/\D/g, '')}`;
// //       default:
// //         return "#";
// //     }
// //   };

// //   return (
// //     <div 
// //       className={`
// //         w-full max-w-xs mx-auto transform transition-all duration-300 
// //         ${isCardHovered ? 'scale-105 -translate-y-4' : ''}
// //       `}
// //       onMouseEnter={() => setIsCardHovered(true)}
// //       onMouseLeave={() => setIsCardHovered(false)}
// //     >
// //       <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
// //         {/* Profile Image */}
// //         <div className="relative h-48 w-full overflow-hidden">
// //           <img
// //             src={imageError ? '/images/placeholder.jpg' : imageUrl}
// //             alt={name}
// //             className={`
// //               w-full h-full object-cover transition-transform duration-500
// //               ${isCardHovered ? 'scale-110' : ''}
// //             `}
// //             onError={handleImageError}
// //           />
// //         </div>

// //         {/* Content */}
// //         <div className="p-4 text-center">
// //           <h2 className="text-xl font-bold text-primary mb-2">{name}</h2>
// //           <p className="text-sm text-secondary mb-2">{title}</p>

// //           {/* Star Rating */}
// //           <div className="mb-3">
// //             {renderStars(rating)}
// //           </div>

// //           {/* Social Links */}
// //           <div className="flex justify-center space-x-3 mb-3">
// //             {/* WhatsApp */}
// //             {whatsapp && (
// //               <Link 
// //                 href={getSocialLink("whatsapp", "wa", whatsapp)}
// //                 className={`
// //                   bg-green-500 text-white rounded-full p-2 inline-block 
// //                   transform transition-transform duration-300
// //                   ${isWhatsappHovered ? 'scale-110 -translate-y-2' : ''}
// //                 `}
// //                 onMouseEnter={() => setIsWhatsappHovered(true)}
// //                 onMouseLeave={() => setIsWhatsappHovered(false)}
// //                 aria-label="WhatsApp Contact"
// //               >
// //                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
// //                 </svg>
// //               </Link>
// //             )}
            
// //             {/* Facebook */}
// //             {facebook && (
// //               <Link 
// //                 href={getSocialLink("facebook", "fb", facebook)}
// //                 className={`
// //                   bg-blue-600 text-white rounded-full p-2 inline-block 
// //                   transform transition-transform duration-300
// //                   ${isFacebookHovered ? 'scale-110 -translate-y-2' : ''}
// //                 `}
// //                 onMouseEnter={() => setIsFacebookHovered(true)}
// //                 onMouseLeave={() => setIsFacebookHovered(false)}
// //                 aria-label="Facebook Profile"
// //               >
// //                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
// //                 </svg>
// //               </Link>
// //             )}
            
// //             {/* Phone */}
// //             {phone && (
// //               <Link 
// //                 href={getSocialLink("phone", "tel", phone)}
// //                 className={`
// //                   bg-primary text-white rounded-full p-2 inline-block 
// //                   transform transition-transform duration-300
// //                   ${isPhoneHovered ? 'scale-110 -translate-y-2' : ''}
// //                 `}
// //                 onMouseEnter={() => setIsPhoneHovered(true)}
// //                 onMouseLeave={() => setIsPhoneHovered(false)}
// //                 aria-label="Phone Call"
// //               >
// //                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M20 10.999h2c0-4.5-3.5-8-8-8v2c3.308 0 6 2.692 6 6zm-6-4v-2c-4.5 0-8 3.5-8 8h2c0-3.308 2.692-6 6-6zm-6 7h-3c0 7 5.5 12 12 12v-3c-5 0-9-4-9-9zm13.1 0h-2.1c0 3.9-3.1 7-7 7v2.1c5 0 9.1-4 9.1-9.1z"/>
// //                 </svg>
// //               </Link>
// //             )}
// //           </div>

// //           {/* Choose Button */}
// //           <Button
// //             onClick={() => window.location.href = '/worker-details'}
// //             className={`
// //               w-full py-3 bg-primary text-white rounded-lg
// //               transform transition-transform duration-300
// //               ${isButtonHovered ? '-translate-y-2' : ''}
// //             `}
// //             onMouseEnter={() => setIsButtonHovered(true)}
// //             onMouseLeave={() => setIsButtonHovered(false)}
// //           >
// //             Choose
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default React.memo(WorkerCard);
