"use client";

import {useState} from "react";
import LanguageSelection from "./LanguageSelection";
import Navigation from "./Navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="sticky top-0 bg-black">
      <div className="m-auto max-w-6xl flex items-top justify-between px-7 py-3">
        <div>
          Odvjetnicki ured Ivan pavic
        </div>
        <div className="justify-between">
          <div className="hidden md:inline">
            <Navigation orijentation="row"/>
          </div>
          <div className="inline md:hidden">
            <div className="relative h-6">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle mobile navigation"
                aria-expanded={isOpen}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2"/>
                  <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>

              {isOpen && (
                <nav className="fixed inset-x-0 z-50 flex w-full flex-col items-start bg-black px-7 py-4">
                  <Navigation orijentation="col" />
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
      <LanguageSelection/>
    </div>
  )
}

export default Header;
