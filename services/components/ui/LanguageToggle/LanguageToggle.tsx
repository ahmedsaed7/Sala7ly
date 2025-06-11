import { useState } from "react";
import { Button } from "../Button/Button";

interface LanguageToggleProps {
  isMobile?: boolean;
}

type Language = {
  code: string;
  name: string;
  flag: string;
};

export default function LanguageToggle({ isMobile = false }: LanguageToggleProps) {
  const languages: Language[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ];

  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    setIsOpen(false);
    // You would typically handle language change in your app context/state here
  };

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 bg-[#F5EEDC] text-[#23486A] hover:text-[#EFB036] border-2 border-[#4C7B8B] rounded-md transition-colors duration-200 ${
          isMobile ? "p-2" : "px-3 py-2"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {isMobile ? (
          <span className="text-xl">{currentLanguage.flag}</span>
        ) : (
          <>
            <span className="text-xl">{currentLanguage.flag}</span>
            {/* <span className="font-medium">{currentLanguage.code.toUpperCase()}</span> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-4 h-4 ${isOpen ? "text-[#EFB036]" : "text-[#3B6790]"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          </>
        )}
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-[#F5EEDC] rounded-lg shadow-lg z-50 border-2 border-[#4C7B8B] overflow-hidden">
          <ul className="py-1">
            {languages.map((language) => (
              <li key={language.code} className="px-2">
                <Button
                  onClick={() => handleLanguageChange(language)}
                  className={`w-full text-left px-4 py-3 my-1 flex items-center space-x-3 rounded-md transition-colors duration-200 ${
                    currentLanguage.code === language.code
                      ? "bg-[#3B6790] text-[#F5EEDC]"
                      : "hover:bg-[#4C7B8B] hover:bg-opacity-20 text-[#23486A]"
                  }`}
                >
                  <span className="text-xl">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                  {currentLanguage.code === language.code && (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-auto" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  )}
                </Button>
              </li>
            ))}
          </ul>
          <div className="px-2 py-2 bg-[#23486A] border-t border-[#4C7B8B]">
            <Button 
              onClick={() => setIsOpen(false)}
              className="w-full py-2 text-center text-[#F5EEDC] bg-[#EFB036] hover:bg-[#d99b26] font-medium transition-colors duration-200 rounded-md"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}