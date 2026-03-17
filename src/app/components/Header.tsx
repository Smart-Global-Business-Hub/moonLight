import React, { useState } from "react";

export default function Header({ onScheduleConsultation }: { onScheduleConsultation?: () => void }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                        <button className="text-sm font-medium text-gray-600">Conditions</button>
                        <button className="text-sm font-medium text-gray-600">Our Approach</button>
                        <button className="text-sm font-medium text-gray-600">Services</button>
                        <button className="text-sm font-medium text-gray-600">Why Choose Us</button>
                        <button className="text-sm font-medium text-gray-600">FAQ</button>
                    </nav>

                    {/* BUTTON & TOGGLE CONTAINER */}
                    <div className="flex items-center gap-3">
                        {/* THE BUTTON: No 'hidden' classes here so it never disappears */}
                        <button
                            onClick={onScheduleConsultation}
                            className="h-10 px-4 rounded-lg font-semibold text-sm text-white whitespace-nowrap"
                            style={{ background: "linear-gradient(129deg, #FE67C5 12%, #983E76 127%)" }}
                        >
                            <span className="hidden xs:inline">Schedule a Consultation</span>
                            <span className="xs:hidden">Book</span>
                        </button>

                        {/* MOBILE TOGGLE: Only visible below 1024px */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="flex lg:!hidden items-center justify-center w-10 h-10 rounded-lg bg-gray-50"
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
                        <button className="text-left py-2 font-medium">Conditions</button>
                        <button className="text-left py-2 font-medium">Our Approach</button>
                        <button className="text-left py-2 font-medium">Services</button>
                        <button className="text-left py-2 font-medium">Why Choose Us</button>
                        <button className="text-left py-2 font-medium">FAQ</button>
                    </nav>
                </div>
            )}
        </>
    );
}
