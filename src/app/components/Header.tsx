import React, { useState } from "react";

export default function Header({ onScheduleConsultation }: { onScheduleConsultation?: () => void }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (section: string) => {
        // Scroll to section if it exists on the page
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu if open
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-3 inset-x-0 mx-auto z-[60] w-[calc(100%-24px)] max-w-[1128px] bg-white rounded-xl lg:rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between px-4 lg:px-8 py-3 lg:py-4">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src="/moonlight-logo.png" alt="Logo" className="h-8 w-auto" />
                    </div>

                    {/* DESKTOP NAV: Force 'flex' at 1024px+ and 'hidden' below that */}
                    <nav className="hidden lg:!flex items-center gap-8">
                        <button onClick={() => handleNavClick('conditions')} className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 transform" style={{ fontFamily: 'Poppins, sans-serif' }}>Conditions</button>
                        <button onClick={() => handleNavClick('our-approach')} className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 transform" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Approach</button>
                        <button onClick={() => handleNavClick('services')} className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 transform" style={{ fontFamily: 'Poppins, sans-serif' }}>Services</button>
                        <button onClick={() => handleNavClick('why-choose-us')} className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 transform" style={{ fontFamily: 'Poppins, sans-serif' }}>Why Choose Us</button>
                        <button onClick={() => handleNavClick('faq')} className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 transform" style={{ fontFamily: 'Poppins, sans-serif' }}>FAQ</button>
                    </nav>

                    {/* BUTTON & TOGGLE CONTAINER */}
                    <div className="flex items-center gap-3">
                        {/* THE BUTTON: No 'hidden' classes here so it never disappears */}
                        <button
                            onClick={onScheduleConsultation}
                            className="h-10 px-4 rounded-lg font-semibold text-sm text-white whitespace-nowrap"
                            style={{ 
                                background: "linear-gradient(129deg, #FE67C5 12%, #983E76 127%)",
                                fontFamily: 'Poppins, sans-serif'
                            }}
                        >
                            <span className="xs:hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>Schedule a Consultation</span>
                            <span className="hidden xs:inline" style={{ fontFamily: 'Poppins, sans-serif' }}>Book</span>
                        </button>

                        {/* MOBILE TOGGLE: Only visible below 1024px */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="flex lg:!hidden items-center justify-center w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 hover:scale-110 transition-all duration-200 transform"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            {mobileMenuOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU OVERLAY */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[55] lg:hidden">
                    <div className="absolute inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
                    <nav className="absolute top-24 inset-x-4 bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
                        <button onClick={() => handleNavClick('conditions')} className="text-left py-2 font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:scale-105 transition-all duration-200 transform rounded-lg px-3 -mx-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Conditions</button>
                        <button onClick={() => handleNavClick('our-approach')} className="text-left py-2 font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:scale-105 transition-all duration-200 transform rounded-lg px-3 -mx-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Approach</button>
                        <button onClick={() => handleNavClick('services')} className="text-left py-2 font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:scale-105 transition-all duration-200 transform rounded-lg px-3 -mx-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Services</button>
                        <button onClick={() => handleNavClick('why-choose-us')} className="text-left py-2 font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:scale-105 transition-all duration-200 transform rounded-lg px-3 -mx-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Why Choose Us</button>
                        <button onClick={() => handleNavClick('faq')} className="text-left py-2 font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:scale-105 transition-all duration-200 transform rounded-lg px-3 -mx-3" style={{ fontFamily: 'Poppins, sans-serif' }}>FAQ</button>
                    </nav>
                </div>
            )}
        </>
    );
}
