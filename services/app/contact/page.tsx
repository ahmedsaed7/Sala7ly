import ContactUs from '@/Pages/ContactPage/contactPage';
import React from 'react';

const ContactPage = () => {
  return (
    <div className=' sm:mt-7 bg-[#bfcad4] min-h-screen mx-auto '>
      <ContactUs/>
    </div>
  );
};

export default React.memo(ContactPage);