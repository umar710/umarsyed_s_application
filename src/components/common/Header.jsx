import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[70px] py-3">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
          {/* Mobile Menu Button */}
          <button 
            className="block lg:hidden p-2 self-start" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Which Manuka Button */}
          <div className="flex justify-center items-center w-full lg:w-auto order-1 lg:order-none">
            <div className="border border-[#313131] rounded-[20px] px-2 py-2">
              <span className="text-[10px] sm:text-[11px] md:text-[13px] font-segoe font-normal leading-[14px] sm:leading-[16px] md:leading-[18px] tracking-[1px] uppercase text-primary">
                WHICH MANUKA IS FOR ME?
              </span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto order-3 lg:order-none`}>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
              <button role="menuitem" className="text-[16px] lg:text-[18px] font-segoe font-normal leading-[22px] lg:leading-[24px] text-primary hover:text-blue-600 transition-colors">
                Shop
              </button>
              <button role="menuitem" className="text-[16px] lg:text-[18px] font-segoe font-normal leading-[22px] lg:leading-[24px] text-primary hover:text-blue-600 transition-colors">
                Explore
              </button>
            </div>
          </nav>

          {/* Logo */}
          <div className="flex justify-center items-center w-full lg:w-[26%] order-2 lg:order-none lg:ml-[52px]">
            <img 
              src="/images/img_link.svg" 
              alt="New Zealand Honey Co. Logo" 
              className="w-[160px] h-[76px] sm:w-[180px] sm:h-[86px] md:w-[214px] md:h-[102px] object-contain"
            />
          </div>

          {/* Right Menu Items */}
          <div className={`${menuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto order-4 lg:order-none`}>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[50px] lg:ml-[52px]">
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[22px]">
                <button role="menuitem" className="px-[16px] lg:px-[22px] py-[20px] lg:py-[30px] text-[15px] lg:text-[17px] font-segoe font-normal leading-[20px] lg:leading-[24px] text-primary hover:text-blue-600 transition-colors">
                  About
                </button>
                <button role="menuitem" className="px-[16px] lg:px-[22px] py-[20px] lg:py-[30px] text-[16px] lg:text-[18px] font-segoe font-normal leading-[22px] lg:leading-[24px] text-primary hover:text-blue-600 transition-colors">
                  Rewards
                </button>
                <button role="menuitem" className="px-[16px] lg:px-[22px] py-[20px] lg:py-[30px] text-[16px] lg:text-[18px] font-segoe font-normal leading-[22px] lg:leading-[24px] text-primary hover:text-blue-600 transition-colors">
                  Contact
                </button>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-4 lg:gap-[22px] lg:ml-[22px]">
                <button aria-label="Search">
                  <img 
                    src="/images/img_link_blue_gray_900.svg" 
                    alt="Search" 
                    className="w-[36px] h-[36px] lg:w-[44px] lg:h-[44px]"
                  />
                </button>
                <button aria-label="Account">
                  <img 
                    src="/images/img_details_modal.svg" 
                    alt="Account" 
                    className="w-[36px] h-[36px] lg:w-[44px] lg:h-[44px]"
                  />
                </button>
                <div className="relative">
                  <button aria-label="Shopping Cart">
                    <img 
                      src="/images/img_svg.svg" 
                      alt="Cart" 
                      className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  </button>
                  <div className="absolute -top-1 -right-1 w-[18px] lg:w-[22px] h-[14px] lg:h-[16px] bg-button-accent rounded-[10px] flex items-center justify-center">
                    <span className="text-[10px] lg:text-[12px] font-segoe font-normal leading-[14px] lg:leading-[16px] text-center text-primary">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;