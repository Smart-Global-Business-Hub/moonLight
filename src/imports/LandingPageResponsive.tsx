import { useState } from "react";
import imgVector3 from "figma:asset/13a40369d16d8e80d9dd23f7c405f47e20bf6a25.png";
import imgA from "figma:asset/0fbbe7920df326155dd4738fa36182d6af5a3bda.png";
import imgA1 from "figma:asset/01309999b3155a48c2a33db8b06d771d306407f3.png";
import imgA2 from "figma:asset/8b968ec65d2525c2ff1482b5e6208c63afdd3ed9.png";
import imgA3 from "figma:asset/455f73463755b825cdfe0535ff98f364716668e0.png";
import imgVector4 from "figma:asset/b302cde32e6f96ec5c012115c319795e5d88e1c5.png";
import imgVector5 from "figma:asset/f6e3d3d21eeccfd9c6f3b3390f21423b92a1384b.png";
import imgVector6 from "figma:asset/c04d61b250a84e4ec8ab007ff9803caa8bed4ff6.png";

type LandingPageProps = {
  onScheduleConsultation?: () => void;
};

function CheckIcon() {
  return (
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2Z"
        fill="#FE67C5"
        fillOpacity="0.4"
      />
      <path
        d="M10.58 15.58C10.38 15.58 10.19 15.5 10.05 15.36L7.22 12.53C6.93 12.24 6.93 11.76 7.22 11.47C7.51 11.18 7.99 11.18 8.28 11.47L10.58 13.77L15.72 8.63C16.01 8.34 16.49 8.34 16.78 8.63C17.07 8.92 17.07 9.4 16.78 9.69L11.11 15.36C10.97 15.5 10.78 15.58 10.58 15.58Z"
        fill="#FE67C5"
      />
    </svg>
  );
}

function GradientButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative group flex items-center justify-center px-6 py-4 rounded-xl cursor-pointer overflow-hidden transition-all duration-200 ${className}`}
    >
      <span
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "linear-gradient(126deg, #FE67C5 12%, #983E76 127%)",
        }}
      />
      <span
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(270deg, #690242 -35%, #700346 109%)",
        }}
      />
      <span className="relative z-10 flex items-center gap-2 font-medium text-base text-white tracking-wide">
        {children}
      </span>
    </button>
  );
}

function OutlineButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center px-6 py-4 rounded-xl border-2 border-[#983E76] bg-transparent text-[#983E76] font-medium text-base tracking-wide transition-all duration-200 hover:bg-gradient-to-r hover:from-[#FE67C5] hover:to-[#983E76] hover:text-white hover:border-transparent cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-block bg-[#e6d9ff] text-[#684b9f] px-4 py-2 rounded-md text-sm font-medium">
      {text}
    </span>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full rounded-lg border border-gray-200 shadow-sm bg-white overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        onClick={onToggle}
      >
        <span className="text-base text-gray-700 font-normal pr-4">{question}</span>
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="#393E41"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="border-t border-gray-200 px-5 py-4">
          <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function LandingPageResponsive({ onScheduleConsultation }: LandingPageProps) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const contactPhone = "+971 50 123 4567";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openContactPopup = () => setContactOpen(true);
  const closeContactPopup = () => setContactOpen(false);

  return (
    <div className="bg-white w-full overflow-x-hidden">
      {contactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          role="dialog"
          aria-modal="true"
          onClick={closeContactPopup}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium text-gray-900">
                Get in Touch with Our Professionals
              </h3>
              <button
                type="button"
                onClick={closeContactPopup}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">Have questions or need assistance? Our experienced team is ready to help.

                Call us at:</p>
              <a
                href={`tel:${contactPhone.replace(/\s/g, "")}`}
                className="mt-1 inline-block text-base font-semibold text-[#983E76]"
              >
                {contactPhone}
              </a>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={closeContactPopup}
                className="px-4 py-2 rounded-lg bg-[#983E76] text-white font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="bg-[#ffeef9] rounded-b-[40px] lg:rounded-[40px] mx-0 lg:mx-6 xl:mx-12 mt-0 lg:mt-12 pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-light text-gray-800 leading-tight mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Maintain Your Mental Health with Compassionate Care
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 font-light mb-8 max-w-xl mx-auto lg:mx-0">
                Take charge of your mental well-being with personalized, confidential, and judgment-free support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <GradientButton onClick={onScheduleConsultation}>
                  Schedule a Consultation
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h12M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </GradientButton>
                <OutlineButton onClick={openContactPopup}>
                  Speak with a Professional
                </OutlineButton>
              </div>
            </div>
            {/* Right Image */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-[4/3]">

              <img
                  src="/src/assets/Group.png"
                  alt="Privacy illustration"
                  className="w-full h-full object-contain -ml-40 -mt-17"
              />

              <img
                  src={imgVector3}
                  alt="Mental health support illustration"
                  className=" h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="conditions" className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Support for Individuals at Every Stage
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 font-light max-w-4xl mx-auto mb-4">
              We serve individuals facing a wide range of emotional, behavioral, and mental health challenges. Whether you're navigating stress, anxiety, depression, or life transitions, our team is here to help you feel supported and understood.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 font-light max-w-4xl mx-auto">
              You don't need to have everything figured out—we'll walk alongside you every step of the way.
            </p>
          </div>

          <div className="bg-[rgba(239,230,235,0.44)] rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Conditions We Support
                </h3>
                <div className="space-y-3 mb-6">
                  {[
                    "Anxiety and stress management",
                    "Depression and mood disorders",
                    "Trauma and emotional distress",
                    "Life transitions and adjustment challenges",
                    "Behavioral and emotional concerns",
                    "Ongoing mental wellness support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-base text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-base text-gray-700 mb-6">
                  If you're unsure where to begin, we're here to guide you.
                </p>
                <GradientButton onClick={openContactPopup}>
                  Speak with a Professional
                </GradientButton>
              </div>

              {/* Right Images Grid */}
              <div className="flex-1 w-full">
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img src={imgA} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img src={imgA1} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-tl-2xl rounded-bl-2xl rounded-tr-[60px] overflow-hidden">
                    <img src={imgA2} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="rounded-tl-3xl rounded-bl-2xl rounded-br-[40px] overflow-hidden aspect-[3/1.5]">
                  <img src={imgA3} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="our-approach" className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Image */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-[4/3]">

              <img
                  src="/src/assets/Group.png"
                  alt="Privacy illustration"
                  className="w-full h-90 object-contain -ml-45 -mt-10"
              />

              <img
                  src={imgVector4}
                  alt="Mental health support illustration"
                  className=" h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

            </div>

            {/* Right Content */}
            <div className="flex-1 order-1 lg:order-2">
              <SectionBadge text="Our Approach" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mt-4 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Care That Is Personal, Compassionate, and Effective
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 font-light mb-6">
                At Moonlight Behavioral Center, we believe mental health care should be:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { bold: "Client-centered:", text: "Your experiences and goals guide your care" },
                  { bold: "Collaborative:", text: "We work with you, not at you" },
                  { bold: "Confidential:", text: "Your privacy is always respected" },
                  { bold: "Strength-based:", text: "We focus on resilience, not just symptoms" },
                ].map((item) => (
                  <div key={item.bold} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-base text-gray-700">
                      <strong className="font-semibold">{item.bold}</strong> {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-base text-gray-600">
                Our approach combines evidence-based practices with empathy, respect, and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f0e8ff] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-light text-center lg:text-left max-w-3xl">
              When you're ready, feel free to call us and schedule an appointment. Support is just a phone call away.
            </p>
            <GradientButton onClick={openContactPopup} className="flex-shrink-0">
              Schedule Now
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-12 lg:mb-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our services are designed with your mental well-being in mind.
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Counseling & Therapy",
                description: "Our counseling services provide a safe and supportive space to explore thoughts, emotions, and behaviors. Sessions are tailored to your unique needs and may focus on developing coping strategies, improving emotional regulation, and fostering personal growth.",
              },
              {
                title: "Mental Health Consulting",
                description: "Our mental health consulting services provide education, guidance, and access to essential resources. These services are designed to help individuals better understand their mental health and explore options for care and support.",
              },
              {
                title: "Referral & Care Coordination",
                description: "When additional or specialized care is required, we offer referral services to trusted mental health professionals. Our goal is to ensure you receive seamless, continuous support—no matter where your journey leads.",
              },
            ].map((service, index) => (
              <div key={service.title}>
                {index > 0 && <div className="border-t border-gray-300 mb-8" />}
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 group cursor-pointer">
                  <h3 className="text-xl lg:text-2xl text-gray-900 font-light lg:w-64 flex-shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600 font-light flex-1">
                    {service.description}
                  </p>
                  <div className="hidden lg:block flex-shrink-0">
                    <svg className="w-24 h-10 text-gray-900 group-hover:text-[#FE67C5] transition-colors" viewBox="0 0 102 40" fill="none">
                      <path
                        d="M101.227 21.2268C101.904 20.5493 101.904 19.4507 101.227 18.7732L90.1854 7.73171C89.5078 7.05415 88.4093 7.05415 87.7317 7.7317C87.0541 8.40926 87.0541 9.50781 87.7317 10.1854L97.5463 20L87.7317 29.8146C87.0541 30.4922 87.0541 31.5908 87.7317 32.2683C88.4093 32.9459 89.5078 32.9459 90.1854 32.2683L101.227 21.2268ZM16 20L16 21.735L100 21.735L100 20L100 18.265L16 18.265L16 20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-300" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1">
              <SectionBadge text="What Sets Us Apart" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mt-4 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Why Choose Moonlight Behavioral Center
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 font-light mb-6">
                We are committed to creating a space where you feel safe, respected, and empowered.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Licensed, experienced mental health professionals",
                  "Compassionate, non-judgmental environment",
                  "Personalized treatment plans",
                  "Confidential and ethical care",
                  "Community-focused support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-base text-gray-600">
                We are committed to creating a space where you feel safe, respected, and empowered.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-[4/3]">

              <img
                  src="/src/assets/Group.png"
                  alt="Privacy illustration"
                  className="w-full h-90 object-contain -ml-45 -mt-10"
              />

              <img
                  src={imgVector5}
                  alt="Mental health support illustration"
                  className=" h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

            </div>
          </div>
        </div>
      </section>

      {/* Client Experience Section */}

      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f0e8ff] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-light text-center lg:text-left max-w-3xl">
              Feel free to call us to schedule an appointment.
            </p>
            <GradientButton onClick={openContactPopup} className="flex-shrink-0">
              Schedule Now
            </GradientButton>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Image */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-[4/3]">

              <img
                  src="/src/assets/Group.png"
                  alt="Privacy illustration"
                  className="w-full h-90 object-contain -ml-45 -mt-10"
              />

              <img
                  src={imgVector6}
                  alt="Mental health support illustration"
                  className=" h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

            </div>

            {/* Right Content */}
            <div className="flex-1 order-1 lg:order-2">
              <SectionBadge text="Client Experience" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mt-4 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What You Can Expect
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 font-light mb-6">
                From your first contact with us, you can expect:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "A welcoming and respectful intake process",
                  "Clear communication and transparency",
                  "A calm, supportive atmosphere",
                  "Ongoing encouragement and guidance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-base text-gray-600">
                Your comfort and trust are at the center of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#e6dafc] rounded-2xl p-6 sm:p-8 lg:p-12">

            <div className="flex flex-col lg:flex-row items-center gap-8">

              {/* Text – 70% */}
              <div className="w-full lg:w-[100%]">
                <h2
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-800 mb-4 lg:mb-6"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Your Privacy Is Our Priority
                </h2>

                <p className="text-base lg:text-lg text-gray-700 font-light max-w-4xl">
                  We understand that seeking mental health support is a deeply personal decision.
                  All services are provided in a confidential and judgment-free environment,
                  in accordance with professional and ethical standards.
                </p>
              </div>

              {/* Image – 30% */}
              <div className="w-full lg:w-[30%] flex justify-center lg:justify-end">
                <img
                    src="/src/assets/Group1.png"
                    alt="Privacy illustration"
                    className="max-w-full h-auto"
                />
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 text-center mb-12 lg:mb-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
            FAQ Section
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-4">
              <FAQItem
                question="Do I need a referral to get started?"
                answer="No, you do not need a referral. You can book an appointment directly with our mental health professionals. We welcome self-referrals and are here to support you whenever you're ready."
                isOpen={openFaq === "referral"}
                onToggle={() => setOpenFaq(openFaq === "referral" ? null : "referral")}
              />
              <FAQItem
                question="How do I know which service is right for me?"
                answer="Our team will help assess your needs and guide you toward the most appropriate support."
                isOpen={openFaq === "service"}
                onToggle={() => setOpenFaq(openFaq === "service" ? null : "service")}
              />
            </div>
            <div className="space-y-4">
              <FAQItem
                question="Are services confidential?"
                answer="Yes. All services are confidential. Your personal information and session details are protected and will never be shared without your consent, except where required by law."
                isOpen={openFaq === "confidential"}
                onToggle={() => setOpenFaq(openFaq === "confidential" ? null : "confidential")}
              />
              <FAQItem
                question="What happens in the first consultation?"
                answer="Each session typically lasts 45–60 minutes. This gives you enough time to talk openly with your therapist, explore concerns, and work toward your goals at a comfortable pace."
                isOpen={openFaq === "first"}
                onToggle={() => setOpenFaq(openFaq === "first" ? null : "first")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fff1fa] rounded-2xl p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-800 mb-4 lg:mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Your Mental Health Matters
            </h2>
            <p className="text-base lg:text-lg text-gray-700 font-light max-w-3xl mb-8">
              Taking the first step can feel difficult—but you don't have to do it alone. Support, understanding, and compassionate care are within reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton onClick={onScheduleConsultation}>
                Schedule a Consultation
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h12M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </GradientButton>
              <OutlineButton onClick={openContactPopup}>
                Speak with a Professional
              </OutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 lg:mt-24" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(116deg, #FE67C5 12%, #983E76 127%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Logo & Tagline */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 relative">
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
                <div className="flex flex-col text-white">
                  <span className="font-bold text-base tracking-[3px]" style={{ fontFamily: 'Poppins, sans-serif' }}>MOONLIGHT</span>
                  <span className="text-xs tracking-[1.5px] opacity-70" style={{ fontFamily: 'Poppins, sans-serif' }}>BEHAVIORAL CENTER</span>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Compassionate care. Confidential support.<br />
                Lasting wellness.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-base mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                {["Conditions", "Our Approach", "Services", "Why Choose Us", "FAQ"].map((link) => (
                  <button
                    key={link}
                    type="button"
                    onClick={() => scrollToSection(link.toLowerCase().replace(/ /g, "-"))}
                    className="text-white/80 text-sm text-left hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-white font-semibold text-base mb-4">Contact Us</h4>
              <div className="flex flex-col gap-3 text-white/80 text-sm">
                <a href="mailto:info@moonlightbc.com" className="hover:text-white transition-colors">info@moonlightbc.com</a>
                <a href="tel:+16146551015" className="hover:text-white transition-colors">+1 614-655-1015</a>
                <span>(380)215-3812</span>
                <span>4889 Sinclair Rd Suite 112,<br />Columbus, OH 43229</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">
              © Moonlight Behavioral Center. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Social Icons */}
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 7.5V12.5L13 10L8 7.5Z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 8V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 5.5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 14V10.5C10 9.5 10.5 8.5 12 8.5C13.5 8.5 14 9.5 14 10.5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 15C4.5 15.5 6 15.5 7.5 15C9 14.5 10 13.5 11 12C8 12 6 10 6 7C6.5 7.5 7.5 8 8.5 8C6.5 6.5 6 4 7.5 2C9.5 4.5 12 6 15 6.5C15 4.5 16.5 3 18 3C18.5 4 18 5 17.5 5.5C18 5.5 18.5 5.5 19 5C18.5 6 18 6.5 17 7C17 12 13.5 17 7 17C5.5 17 4 16.5 3 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
