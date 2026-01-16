import React, { useState } from "react";

type HeaderProps = {
    onScheduleConsultation?: () => void;
};

export default function Header({ onScheduleConsultation }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-3 sm:top-4 lg:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] max-w-[1128px] bg-white rounded-xl lg:rounded-2xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/moonlight-logo.png"
                            alt="Moonlight Behavioral Center"
                            className="h-7 sm:h-8 lg:h-9 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        <NavLink text="Conditions" onClick={() => scrollToSection("conditions")} />
                        <NavLink text="Our Approach" onClick={() => scrollToSection("our-approach")} />
                        <NavLink text="Services" onClick={() => scrollToSection("services")} />
                        <NavLink text="Why Choose Us" onClick={() => scrollToSection("why-choose-us")} />
                        <NavLink text="FAQ" onClick={() => scrollToSection("faq")} />
                    </nav>

                    <div className="flex items-center gap-3">
                        {/* CTA Button */}
                        <button
                            type="button"
                            onClick={onScheduleConsultation}
                            className="relative overflow-hidden flex items-center justify-center h-10 lg:h-11 px-4 lg:px-5 rounded-lg font-medium leading-none text-sm text-white tracking-wide group"
                        >
                            <span
                                className="absolute inset-0 transition-opacity duration-300"
                                style={{
                                    background: "linear-gradient(129deg, #FE67C5 12%, #983E76 127%)",
                                }}
                            />
                            <span
                                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{
                                    background: "linear-gradient(270deg, #690242 -35%, #700346 109%)",
                                }}
                            />
                            <span className="relative z-10 hidden sm:inline">Schedule a Consultation</span>
                            <span className="relative z-10 sm:hidden">Book Now</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <nav className="absolute top-20 left-3 right-3 bg-white rounded-xl shadow-xl p-6 flex flex-col gap-4">
                        <MobileNavLink text="Conditions" onClick={() => scrollToSection("conditions")} />
                        <MobileNavLink text="Our Approach" onClick={() => scrollToSection("our-approach")} />
                        <MobileNavLink text="Services" onClick={() => scrollToSection("services")} />
                        <MobileNavLink text="Why Choose Us" onClick={() => scrollToSection("why-choose-us")} />
                        <MobileNavLink text="FAQ" onClick={() => scrollToSection("faq")} />
                    </nav>
                </div>
            )}
        </>
    );
}

type NavLinkProps = {
    text: string;
    hasDropdown?: boolean;
    onClick?: () => void;
};

function NavLink({ text, onClick }: NavLinkProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="group flex items-center gap-1 cursor-pointer"
        >
            <span className="relative">
                <span className="block font-normal text-sm text-gray-900 tracking-tight transition-opacity duration-200 group-hover:opacity-0">
                    {text}
                </span>
                <span
                    className="absolute inset-0 font-normal text-sm tracking-tight opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-clip-text text-transparent"
                    style={{
                        backgroundImage: "linear-gradient(129deg, #FE67C5 12%, #983E76 127%)",
                    }}
                >
                    {text}
                </span>
            </span>
        </button>
    );
}

function MobileNavLink({ text, onClick }: { text: string; onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-left py-3 px-4 text-base text-gray-800 font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
            {text}
        </button>
    );
}
