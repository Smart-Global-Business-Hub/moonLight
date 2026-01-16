import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b from-[#6B3A5B] to-[#4A2840] text-white">
            {/* Main Footer Content */}
            <div className="max-w-[1280px] mx-auto px-[60px] py-[60px]">
                <div className="flex justify-between items-start">
                    {/* Logo & Tagline */}
                    <div className="flex flex-col gap-[24px] max-w-[300px]">
                        <div className="flex items-center gap-[12px]">
                            {/* Logo Circle */}
                            <div className="relative w-[50px] h-[50px]">
                                <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
                                    <circle cx="25" cy="25" r="24" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                                    <path
                                        d="M15 25C15 19.4772 19.4772 15 25 15C30.5228 15 35 19.4772 35 25C35 30.5228 30.5228 35 25 35"
                                        stroke="rgba(255,255,255,0.6)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-['Poppins:Bold',sans-serif] font-bold text-[16px] tracking-[3px] text-white">
                                    MOONLIGHT
                                </span>
                                <span className="font-['Poppins:Regular',sans-serif] text-[10px] tracking-[1.5px] text-white/70">
                                    BEHAVIORAL CENTER
                                </span>
                            </div>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-white/80">
                            Compassionate care. Confidential support.
                            <br />
                            Lasting wellness.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-[16px]">
                        <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-white">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col gap-[12px]">
                            <FooterLink text="Conditions" />
                            <FooterLink text="Our Approach" />
                            <FooterLink text="Services" />
                            <FooterLink text="Why Choose Us" />
                            <FooterLink text="FAQ" />
                        </nav>
                    </div>

                    {/* Contact Us */}
                    <div className="flex flex-col gap-[16px]">
                        <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-white">
                            Contact Us
                        </h4>
                        <div className="flex flex-col gap-[12px]">
                            <ContactItem text="info@moonlightbc.com" />
                            <ContactItem text="+1 614-855-1015" />
                            <ContactItem text="(380)215-3812" />
                            <div className="font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-white/80">
                                4889 Sinclair Rd Suite 112,
                                <br />
                                Columbus, OH 43229
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-[1280px] mx-auto px-[60px] py-[20px] flex justify-between items-center">
                    <p className="font-['Inter:Regular',sans-serif] text-[13px] text-white/60">
                        © Moonlight Behavioral Center. All rights reserved.
                    </p>
                    <div className="flex items-center gap-[16px]">
                        <SocialIcon icon="instagram" />
                        <SocialIcon icon="youtube" />
                        <SocialIcon icon="linkedin" />
                        <SocialIcon icon="twitter" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

type FooterLinkProps = {
    text: string;
};

function FooterLink({ text }: FooterLinkProps) {
    return (
        <a
            href="#"
            className="font-['Inter:Regular',sans-serif] text-[14px] text-white/80 hover:text-white transition-colors"
        >
            {text}
        </a>
    );
}

type ContactItemProps = {
    text: string;
};

function ContactItem({ text }: ContactItemProps) {
    return (
        <span className="font-['Inter:Regular',sans-serif] text-[14px] text-white/80">
            {text}
        </span>
    );
}

type SocialIconProps = {
    icon: "instagram" | "youtube" | "linkedin" | "twitter";
};

function SocialIcon({ icon }: SocialIconProps) {
    const icons = {
        instagram: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
            </svg>
        ),
        youtube: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 7.5V12.5L13 10L8 7.5Z" fill="currentColor" />
            </svg>
        ),
        linkedin: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 8V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 5.5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 14V10.5C10 9.5 10.5 8.5 12 8.5C13.5 8.5 14 9.5 14 10.5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        twitter: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 15C4.5 15.5 6 15.5 7.5 15C9 14.5 10 13.5 11 12C8 12 6 10 6 7C6.5 7.5 7.5 8 8.5 8C6.5 6.5 6 4 7.5 2C9.5 4.5 12 6 15 6.5C15 4.5 16.5 3 18 3C18.5 4 18 5 17.5 5.5C18 5.5 18.5 5.5 19 5C18.5 6 18 6.5 17 7C17 12 13.5 17 7 17C5.5 17 4 16.5 3 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    };

    return (
        <a href="#" className="text-white/60 hover:text-white transition-colors">
            {icons[icon]}
        </a>
    );
}
