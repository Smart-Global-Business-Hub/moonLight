import svgPaths from "./svg-bruvcu6kq5";
import clsx from "clsx";
import imgVector2 from "figma:asset/2edc36bd1d9c8c0239cfea032f36e862ab99a698.png";
import imgVector3 from "figma:asset/13a40369d16d8e80d9dd23f7c405f47e20bf6a25.png";
import imgVectorGroup from "figma:asset/Group.svg";
import imgA from "figma:asset/0fbbe7920df326155dd4738fa36182d6af5a3bda.png";
import imgA1 from "figma:asset/01309999b3155a48c2a33db8b06d771d306407f3.png";
import imgA2 from "figma:asset/8b968ec65d2525c2ff1482b5e6208c63afdd3ed9.png";
import imgA3 from "figma:asset/455f73463755b825cdfe0535ff98f364716668e0.png";
import imgVector4 from "figma:asset/b302cde32e6f96ec5c012115c319795e5d88e1c5.png";
import imgVector5 from "figma:asset/f6e3d3d21eeccfd9c6f3b3390f21423b92a1384b.png";
import imgVector6 from "figma:asset/c04d61b250a84e4ec8ab007ff9803caa8bed4ff6.png";
import imgVector8 from "figma:asset/ba6c4bd5884bfbe5075fe2ab93e861820c4427e2.png";
import GroupIcon from "/assets/Group.png";
import {imgVector1, imgGroup, imgVector, imgFrame95628, imgVector7} from "./svg-fpgyc";
import {useLayoutEffect, useRef, useState} from "react";

type LandingPageProps = {
    onScheduleConsultation?: () => void;
};

type Frame95672BackgroundImageProps = {
    additionalClassNames?: string;
};

function Frame95672BackgroundImage({children, additionalClassNames = ""}: React.PropsWithChildren<Frame95672BackgroundImageProps>) {
    return (
        <div className={clsx("relative shrink-0 size-[4px]", additionalClassNames)}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                {children}
            </svg>
        </div>
    );
}

function BackgroundImage7({children}: React.PropsWithChildren<{}>) {
    return (
        <div className="basis-0 grow max-w-[200px] min-h-px min-w-[150px] relative shrink-0">
            <div
                className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] min-w-[inherit] pb-[59.39px] pl-0 pr-[16px] pt-0 relative w-full">{children}</div>
        </div>
    );
}

function BackgroundImage6({children}: React.PropsWithChildren<{}>) {
    return (
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 158 292" className="block size-full">
            <g id="Frame 95628">{children}</g>
        </svg>
    );
}

type BackgroundImage5Props = {
    additionalClassNames?: string;
};

function BackgroundImage5({children, additionalClassNames = ""}: React.PropsWithChildren<BackgroundImage5Props>) {
    return (
        <div className={clsx("relative shrink-0 size-[24px]", additionalClassNames)}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                {children}
            </svg>
        </div>
    );
}

type BackgroundImage4Props = {
    additionalClassNames?: string;
};

function BackgroundImage4({children, additionalClassNames = ""}: React.PropsWithChildren<BackgroundImage4Props>) {
    return (
        <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start pl-0 pr-[16.91px] py-0 relative w-full">
                <div style={{WebkitTextFillColor: "transparent"}}
                     className={clsx("bg-clip-text bg-gradient-to-b flex flex-col from-[22.5%] from-white justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap to-[rgba(255,255,255,0.7)] tracking-[-0.16px]", additionalClassNames)}>
                    <p className="leading-[24px]">{children}</p>
                </div>
            </div>
        </div>
    );
}

function SvgBackgroundImage() {
    return (
        <div className="h-[16px] relative w-[15px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
                <g id="SVG">
                    <path clipRule="evenodd" d={svgPaths.p1655a970} fill="var(--fill-0, black)" fillRule="evenodd"
                          id="Vector"/>
                </g>
            </svg>
        </div>
    );
}

type BackgroundImageAndText6Props = {
    text: string;
    additionalClassNames?: string;
};

function BackgroundImageAndText6({text, additionalClassNames = ""}: BackgroundImageAndText6Props) {
    return (
        <div className={additionalClassNames}>
            <div
                className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.07px]">
                <p className="leading-[18.2px]">{text}</p>
            </div>
        </div>
    );
}

type BackgroundImageAndText5Props = {
    text: string;
    additionalClassNames?: string;
};

function BackgroundImageAndText5({text, additionalClassNames = ""}: BackgroundImageAndText5Props) {
    return <BackgroundImageAndText6 text={text}
                                    additionalClassNames={clsx("content-stretch flex items-center pl-[12px] py-0 relative shrink-0", additionalClassNames)}/>;
}

type BackgroundImageAndText4Props = {
    text: string;
    additionalClassNames?: string;
};

function BackgroundImageAndText4({text, additionalClassNames = ""}: BackgroundImageAndText4Props) {
    return <BackgroundImageAndText6 text={text}
                                    additionalClassNames={clsx("absolute content-stretch flex items-center left-0 pl-[12px] py-0 top-[calc(50%+0.4px)] translate-y-[-50%]", additionalClassNames)}/>;
}

type BackgroundImage3Props = {
    additionalClassNames?: string;
};

function BackgroundImage3({additionalClassNames = ""}: BackgroundImage3Props) {
    return (
        <div className={clsx("h-[5.846px] w-[10.025px]", additionalClassNames)}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0246 5.84598">
                <path clipRule="evenodd" d={svgPaths.p144e5fc0} fill="var(--fill-0, #393E41)" fillRule="evenodd"
                      id="ï"/>
            </svg>
        </div>
    );
}

type BackgroundImageAndText3Props = {
    text: string;
};

function BackgroundImageAndText3({text}: BackgroundImageAndText3Props) {
    return (
        <div className="absolute inset-0 overflow-clip">
            <div
                className="absolute border border-[#dfdfdf] border-solid inset-0 rounded-[5px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04)]"
                data-name="Rectangle 10 Copy"/>
            <BackgroundImage3 additionalClassNames="absolute right-[18.2px] top-[23.13px]"/>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[20px] not-italic text-[#393e41] text-[16px] text-nowrap top-[12px]">{text}</p>
        </div>
    );
}

type BackgroundImageAndText2Props = {
    text: string;
    additionalClassNames?: string;
};

function BackgroundImageAndText2({text, additionalClassNames = ""}: BackgroundImageAndText2Props) {
    return (
        <div className={clsx("content-stretch flex gap-[8px] items-center relative shrink-0", additionalClassNames)}>
            <TickCircleLinear32PxBackgroundImage/>
            <div
                className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#292d34] text-[18px] text-nowrap">
                <p className="leading-[19.25px]">{text}</p>
            </div>
        </div>
    );
}

function BackgroundImage2() {
    return (
        <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.73px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 0.734813">
                    <line id="Line 65" stroke="var(--stroke-0, #B1B1B1)" strokeWidth="0.734813" x2="1200" y1="0.367407"
                          y2="0.367407"/>
                </svg>
            </div>
        </div>
    );
}

function ArrowBackgroundImage() {
    return (
        <div className="relative group h-[40px] w-[102px] shrink-0">
            {/* Black arrow */}
            <svg
                className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
                viewBox="0 0 102 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M101.227 21.2268C101.904 20.5493 101.904 19.4507 101.227 18.7732L90.1854 7.73171C89.5078 7.05415 88.4093 7.05415 87.7317 7.7317C87.0541 8.40926 87.0541 9.50781 87.7317 10.1854L97.5463 20L87.7317 29.8146C87.0541 30.4922 87.0541 31.5908 87.7317 32.2683C88.4093 32.9459 89.5078 32.9459 90.1854 32.2683L101.227 21.2268ZM16 20L16 21.735L100 21.735L100 20L100 18.265L16 18.265L16 20Z"
                    fill="#090909"
                />
            </svg>

            {/* Pink gradient arrow */}
            <svg
                className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                viewBox="0 0 102 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="arrow_gradient" x1="0" y1="0" x2="102" y2="40">
                        <stop stopColor="#FE67C5" />
                        <stop offset="1" stopColor="#983E76" />
                    </linearGradient>
                </defs>

                <path
                    d="M101.227 21.2268C101.904 20.5493 101.904 19.4507 101.227 18.7732L90.1854 7.73171C89.5078 7.05415 88.4093 7.05415 87.7317 7.7317C87.0541 8.40926 87.0541 9.50781 87.7317 10.1854L97.5463 20L87.7317 29.8146C87.0541 30.4922 87.0541 31.5908 87.7317 32.2683C88.4093 32.9459 89.5078 32.9459 90.1854 32.2683L101.227 21.2268ZM16 20L16 21.735L100 21.735L100 20L100 18.265L16 18.265L16 20Z"
                    fill="url(#arrow_gradient)"
                />
            </svg>
        </div>
    );
}



function ButtonBackgroundImage() {
    return (
        <button
            type="button"
            onClick={() => {
                window.open(
                    "https://wa.me/971XXXXXXXXX?text=Hello,%20I%20want%20to%20schedule%20now",
                    "_blank"
                );
            }}
            className="relative group flex items-center justify-center px-[16px] py-[22px]
             rounded-[11px] shrink-0 cursor-pointer overflow-hidden transition-all duration-200"
        >
            <span
                className="absolute inset-0 transition-opacity duration-300 rounded-[11px]"
                style={{
                    background:
                        "linear-gradient(113.701deg, rgb(254, 103, 197) 12.215%, rgb(152, 62, 118) 126.73%)",
                }}
            />

            <span
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[11px]"
                style={{
                    background: "linear-gradient(270deg, #690242 -35.38%, #700346 108.59%)",
                }}
            />

            <span className="relative z-10 font-inter font-medium text-[16px] text-white">
                <TextContainerBackgroundImageAndText text="Schedule Now"/>
            </span>
        </button>
    );
}

type BackgroundImageAndText1Props = {
    text: string;
};

function BackgroundImageAndText1({text}: BackgroundImageAndText1Props) {
    return (
        <div
            className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0">
            <div
                className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[32px] w-[890px]">
                <p className="leading-[56px]" style={{ fontSize:"32px", fontWeight:"300" }}>{text}</p>
            </div>
        </div>
    );
}

type BackgroundImage1Props = {
    text: string;
    text1: string;
};

function BackgroundImage1({text, text1}: BackgroundImage1Props) {
    return (
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <TickCircleLinear32PxBackgroundImage/>
            <div
                className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#292d34] text-[18px] text-nowrap">
                <p className="leading-[19.25px]">{text}</p>
            </div>
            <div
                className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#292d34] text-[18px] text-nowrap">
                <p className="leading-[19.25px]">{text1}</p>
            </div>
        </div>
    );
}

type TextContainerBackgroundImageAndText1Props = {
    text: string;
};

function TextContainerBackgroundImageAndText1({text}: TextContainerBackgroundImageAndText1Props) {
    return (
        <div className="content-stretch flex items-center justify-center px-[9.143px] py-0 relative shrink-0">
            <p className="leading-none not-italic relative shrink-0 text-[#684b9f] text-[16px] text-nowrap tracking-[0.2857px]"
               style={{ fontFamily: 'Poppins, sans-serif' }}>{text}</p>
        </div>
    );
}

type BackgroundImageAndTextProps = {
    text: string;
    additionalClassNames?: string;
};

function BackgroundImageAndText({text, additionalClassNames = ""}: BackgroundImageAndTextProps) {
    return (
        <div className={clsx("content-stretch flex gap-[8px] items-center relative shrink-0", additionalClassNames)}>
            <TickCircleLinear32PxBackgroundImage/>
            <div
                className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
                <p className="leading-[19.25px]">{text}</p>
            </div>
        </div>
    );
}

function TickCircleLinear32PxBackgroundImage() {
    return (
        <BackgroundImage5 additionalClassNames="overflow-clip">
            <g id="TickCircle-Bulk-32px 1">
                <path d={svgPaths.p20077100} fill="var(--fill-0, #FE67C5)" id="Vector" opacity="0.4"/>
                <path d={svgPaths.p1f962140} fill="var(--fill-0, #FE67C5)" id="Vector_2"/>
            </g>
        </BackgroundImage5>
    );
}

type BackgroundImageProps = {
    additionalClassNames?: string;
};

function BackgroundImage({additionalClassNames = ""}: BackgroundImageProps) {
    return (
        <div className={clsx("[grid-area:1_/_1] h-[292px] relative w-[158px]", additionalClassNames)}>
            <BackgroundImage6>
                <circle cx="19" cy="2" fill="var(--fill-0, #C8ACFC)" id="Ellipse 6" r="2"/>
                <circle cx="36" cy="2" fill="var(--fill-0, #C8ACFC)" id="Ellipse 7" r="2"/>
                <circle cx="53" cy="2" fill="var(--fill-0, #C8ACFC)" id="Ellipse 8" r="2"/>
                <circle cx="70" cy="2" fill="var(--fill-0, #C8ACFC)" id="Ellipse 9" r="2"/>
                <circle cx="87" cy="2" fill="var(--fill-0, #C8ACFC)" id="Ellipse 10" r="2"/>
                <circle cx="104" cy="2" fill="var(--fill-0, #C8ACFC)" id="Ellipse 11" r="2"/>
                <circle cx="121" cy="2" fill="var(--fill-0, #C8ACFC)" id="Ellipse 12" r="2"/>
                <circle cx="138" cy="2" fill="var(--fill-0, #C8ACFC)" id="Ellipse 13" r="2"/>
                <circle cx="104" cy="50" fill="var(--fill-0, #C8ACFC)" id="Ellipse 14" r="2"/>
                <circle cx="121" cy="50" fill="var(--fill-0, #C8ACFC)" id="Ellipse 15" r="2"/>
                <circle cx="138" cy="50" fill="var(--fill-0, #C8ACFC)" id="Ellipse 16" r="2"/>
                <circle cx="155" cy="50" fill="var(--fill-0, #C8ACFC)" id="Ellipse 17" r="2"/>
                <circle cx="2" cy="66" fill="var(--fill-0, #C8ACFC)" id="Ellipse 18" r="2"/>
                <circle cx="19" cy="66" fill="var(--fill-0, #C8ACFC)" id="Ellipse 19" r="2"/>
                <circle cx="36" cy="66" fill="var(--fill-0, #C8ACFC)" id="Ellipse 20" r="2"/>
                <circle cx="53" cy="66" fill="var(--fill-0, #C8ACFC)" id="Ellipse 21" r="2"/>
                <circle cx="70" cy="66" fill="var(--fill-0, #C8ACFC)" id="Ellipse 22" r="2"/>
                <circle cx="87" cy="66" fill="var(--fill-0, #C8ACFC)" id="Ellipse 23" r="2"/>
                <circle cx="104" cy="66" fill="var(--fill-0, #C8ACFC)" id="Ellipse 24" r="2"/>
                <circle cx="121" cy="66" fill="var(--fill-0, #C8ACFC)" id="Ellipse 25" r="2"/>
                <circle cx="138" cy="66" fill="var(--fill-0, #C8ACFC)" id="Ellipse 26" r="2"/>
                <circle cx="155" cy="66" fill="var(--fill-0, #C8ACFC)" id="Ellipse 27" r="2"/>
                <circle cx="2" cy="82" fill="var(--fill-0, #C8ACFC)" id="Ellipse 28" r="2"/>
                <circle cx="19" cy="82" fill="var(--fill-0, #C8ACFC)" id="Ellipse 29" r="2"/>
                <circle cx="36" cy="82" fill="var(--fill-0, #C8ACFC)" id="Ellipse 30" r="2"/>
                <circle cx="53" cy="82" fill="var(--fill-0, #C8ACFC)" id="Ellipse 31" r="2"/>
                <circle cx="70" cy="82" fill="var(--fill-0, #C8ACFC)" id="Ellipse 32" r="2"/>
                <circle cx="87" cy="82" fill="var(--fill-0, #C8ACFC)" id="Ellipse 33" r="2"/>
                <circle cx="104" cy="82" fill="var(--fill-0, #C8ACFC)" id="Ellipse 34" r="2"/>
                <circle cx="121" cy="82" fill="var(--fill-0, #C8ACFC)" id="Ellipse 35" r="2"/>
                <circle cx="138" cy="82" fill="var(--fill-0, #C8ACFC)" id="Ellipse 36" r="2"/>
                <circle cx="155" cy="82" fill="var(--fill-0, #C8ACFC)" id="Ellipse 37" r="2"/>
                <circle cx="2" cy="98" fill="var(--fill-0, #C8ACFC)" id="Ellipse 38" r="2"/>
                <circle cx="19" cy="98" fill="var(--fill-0, #C8ACFC)" id="Ellipse 39" r="2"/>
                <circle cx="36" cy="98" fill="var(--fill-0, #C8ACFC)" id="Ellipse 40" r="2"/>
                <circle cx="53" cy="98" fill="var(--fill-0, #C8ACFC)" id="Ellipse 41" r="2"/>
                <circle cx="70" cy="98" fill="var(--fill-0, #C8ACFC)" id="Ellipse 42" r="2"/>
                <circle cx="87" cy="98" fill="var(--fill-0, #C8ACFC)" id="Ellipse 43" r="2"/>
                <circle cx="104" cy="98" fill="var(--fill-0, #C8ACFC)" id="Ellipse 44" r="2"/>
                <circle cx="121" cy="98" fill="var(--fill-0, #C8ACFC)" id="Ellipse 45" r="2"/>
                <circle cx="138" cy="98" fill="var(--fill-0, #C8ACFC)" id="Ellipse 46" r="2"/>
                <circle cx="155" cy="98" fill="var(--fill-0, #C8ACFC)" id="Ellipse 47" r="2"/>
                <circle cx="2" cy="114" fill="var(--fill-0, #C8ACFC)" id="Ellipse 48" r="2"/>
                <circle cx="19" cy="114" fill="var(--fill-0, #C8ACFC)" id="Ellipse 49" r="2"/>
                <circle cx="36" cy="114" fill="var(--fill-0, #C8ACFC)" id="Ellipse 50" r="2"/>
                <circle cx="53" cy="114" fill="var(--fill-0, #C8ACFC)" id="Ellipse 51" r="2"/>
                <circle cx="70" cy="114" fill="var(--fill-0, #C8ACFC)" id="Ellipse 52" r="2"/>
                <circle cx="87" cy="114" fill="var(--fill-0, #C8ACFC)" id="Ellipse 53" r="2"/>
                <circle cx="104" cy="114" fill="var(--fill-0, #C8ACFC)" id="Ellipse 54" r="2"/>
                <circle cx="121" cy="114" fill="var(--fill-0, #C8ACFC)" id="Ellipse 55" r="2"/>
                <circle cx="138" cy="114" fill="var(--fill-0, #C8ACFC)" id="Ellipse 56" r="2"/>
                <circle cx="155" cy="114" fill="var(--fill-0, #C8ACFC)" id="Ellipse 57" r="2"/>
                <circle cx="2" cy="130" fill="var(--fill-0, #C8ACFC)" id="Ellipse 58" r="2"/>
                <circle cx="19" cy="130" fill="var(--fill-0, #C8ACFC)" id="Ellipse 59" r="2"/>
                <circle cx="36" cy="130" fill="var(--fill-0, #C8ACFC)" id="Ellipse 60" r="2"/>
                <circle cx="53" cy="130" fill="var(--fill-0, #C8ACFC)" id="Ellipse 61" r="2"/>
                <circle cx="70" cy="130" fill="var(--fill-0, #C8ACFC)" id="Ellipse 62" r="2"/>
                <circle cx="87" cy="130" fill="var(--fill-0, #C8ACFC)" id="Ellipse 63" r="2"/>
                <circle cx="104" cy="130" fill="var(--fill-0, #C8ACFC)" id="Ellipse 64" r="2"/>
                <circle cx="121" cy="130" fill="var(--fill-0, #C8ACFC)" id="Ellipse 65" r="2"/>
                <circle cx="138" cy="130" fill="var(--fill-0, #C8ACFC)" id="Ellipse 66" r="2"/>
                <circle cx="155" cy="130" fill="var(--fill-0, #C8ACFC)" id="Ellipse 67" r="2"/>
                <circle cx="2" cy="146" fill="var(--fill-0, #C8ACFC)" id="Ellipse 68" r="2"/>
                <circle cx="19" cy="146" fill="var(--fill-0, #C8ACFC)" id="Ellipse 69" r="2"/>
                <circle cx="36" cy="146" fill="var(--fill-0, #C8ACFC)" id="Ellipse 70" r="2"/>
                <circle cx="53" cy="146" fill="var(--fill-0, #C8ACFC)" id="Ellipse 71" r="2"/>
                <circle cx="70" cy="146" fill="var(--fill-0, #C8ACFC)" id="Ellipse 78" r="2"/>
                <circle cx="87" cy="146" fill="var(--fill-0, #C8ACFC)" id="Ellipse 79" r="2"/>
                <circle cx="104" cy="146" fill="var(--fill-0, #C8ACFC)" id="Ellipse 80" r="2"/>
                <circle cx="121" cy="146" fill="var(--fill-0, #C8ACFC)" id="Ellipse 81" r="2"/>
                <circle cx="138" cy="146" fill="var(--fill-0, #C8ACFC)" id="Ellipse 82" r="2"/>
                <circle cx="155" cy="146" fill="var(--fill-0, #C8ACFC)" id="Ellipse 83" r="2"/>
                <circle cx="2" cy="162" fill="var(--fill-0, #C8ACFC)" id="Ellipse 84" r="2"/>
                <circle cx="19" cy="162" fill="var(--fill-0, #C8ACFC)" id="Ellipse 85" r="2"/>
                <circle cx="36" cy="162" fill="var(--fill-0, #C8ACFC)" id="Ellipse 86" r="2"/>
                <circle cx="53" cy="162" fill="var(--fill-0, #C8ACFC)" id="Ellipse 87" r="2"/>
                <circle cx="70" cy="162" fill="var(--fill-0, #C8ACFC)" id="Ellipse 88" r="2"/>
                <circle cx="87" cy="162" fill="var(--fill-0, #C8ACFC)" id="Ellipse 89" r="2"/>
                <circle cx="104" cy="162" fill="var(--fill-0, #C8ACFC)" id="Ellipse 90" r="2"/>
                <circle cx="121" cy="162" fill="var(--fill-0, #C8ACFC)" id="Ellipse 91" r="2"/>
                <circle cx="138" cy="162" fill="var(--fill-0, #C8ACFC)" id="Ellipse 92" r="2"/>
                <circle cx="155" cy="162" fill="var(--fill-0, #C8ACFC)" id="Ellipse 93" r="2"/>
                <circle cx="2" cy="178" fill="var(--fill-0, #C8ACFC)" id="Ellipse 94" r="2"/>
                <circle cx="19" cy="178" fill="var(--fill-0, #C8ACFC)" id="Ellipse 95" r="2"/>
                <circle cx="36" cy="178" fill="var(--fill-0, #C8ACFC)" id="Ellipse 96" r="2"/>
                <circle cx="53" cy="178" fill="var(--fill-0, #C8ACFC)" id="Ellipse 97" r="2"/>
                <circle cx="70" cy="178" fill="var(--fill-0, #C8ACFC)" id="Ellipse 98" r="2"/>
                <circle cx="87" cy="178" fill="var(--fill-0, #C8ACFC)" id="Ellipse 99" r="2"/>
                <circle cx="104" cy="178" fill="var(--fill-0, #C8ACFC)" id="Ellipse 100" r="2"/>
                <circle cx="121" cy="178" fill="var(--fill-0, #C8ACFC)" id="Ellipse 101" r="2"/>
                <circle cx="138" cy="178" fill="var(--fill-0, #C8ACFC)" id="Ellipse 102" r="2"/>
                <circle cx="155" cy="178" fill="var(--fill-0, #C8ACFC)" id="Ellipse 103" r="2"/>
                <circle cx="2" cy="194" fill="var(--fill-0, #C8ACFC)" id="Ellipse 104" r="2"/>
                <circle cx="19" cy="194" fill="var(--fill-0, #C8ACFC)" id="Ellipse 105" r="2"/>
                <circle cx="36" cy="194" fill="var(--fill-0, #C8ACFC)" id="Ellipse 106" r="2"/>
                <circle cx="53" cy="194" fill="var(--fill-0, #C8ACFC)" id="Ellipse 107" r="2"/>
                <circle cx="70" cy="194" fill="var(--fill-0, #C8ACFC)" id="Ellipse 108" r="2"/>
                <circle cx="87" cy="194" fill="var(--fill-0, #C8ACFC)" id="Ellipse 109" r="2"/>
                <circle cx="104" cy="194" fill="var(--fill-0, #C8ACFC)" id="Ellipse 110" r="2"/>
                <circle cx="121" cy="194" fill="var(--fill-0, #C8ACFC)" id="Ellipse 111" r="2"/>
                <circle cx="138" cy="194" fill="var(--fill-0, #C8ACFC)" id="Ellipse 112" r="2"/>
                <circle cx="155" cy="194" fill="var(--fill-0, #C8ACFC)" id="Ellipse 113" r="2"/>
                <circle cx="2" cy="210" fill="var(--fill-0, #C8ACFC)" id="Ellipse 114" r="2"/>
                <circle cx="19" cy="210" fill="var(--fill-0, #C8ACFC)" id="Ellipse 115" r="2"/>
                <circle cx="36" cy="210" fill="var(--fill-0, #C8ACFC)" id="Ellipse 116" r="2"/>
                <circle cx="53" cy="210" fill="var(--fill-0, #C8ACFC)" id="Ellipse 117" r="2"/>
                <circle cx="70" cy="210" fill="var(--fill-0, #C8ACFC)" id="Ellipse 118" r="2"/>
                <circle cx="87" cy="210" fill="var(--fill-0, #C8ACFC)" id="Ellipse 119" r="2"/>
                <circle cx="104" cy="210" fill="var(--fill-0, #C8ACFC)" id="Ellipse 120" r="2"/>
                <circle cx="121" cy="210" fill="var(--fill-0, #C8ACFC)" id="Ellipse 121" r="2"/>
                <circle cx="138" cy="210" fill="var(--fill-0, #C8ACFC)" id="Ellipse 122" r="2"/>
                <circle cx="155" cy="210" fill="var(--fill-0, #C8ACFC)" id="Ellipse 123" r="2"/>
                <circle cx="2" cy="226" fill="var(--fill-0, #C8ACFC)" id="Ellipse 124" r="2"/>
                <circle cx="19" cy="226" fill="var(--fill-0, #C8ACFC)" id="Ellipse 125" r="2"/>
                <circle cx="36" cy="226" fill="var(--fill-0, #C8ACFC)" id="Ellipse 126" r="2"/>
                <circle cx="53" cy="226" fill="var(--fill-0, #C8ACFC)" id="Ellipse 127" r="2"/>
                <circle cx="70" cy="226" fill="var(--fill-0, #C8ACFC)" id="Ellipse 128" r="2"/>
                <circle cx="87" cy="226" fill="var(--fill-0, #C8ACFC)" id="Ellipse 129" r="2"/>
                <circle cx="104" cy="226" fill="var(--fill-0, #C8ACFC)" id="Ellipse 130" r="2"/>
                <circle cx="121" cy="226" fill="var(--fill-0, #C8ACFC)" id="Ellipse 131" r="2"/>
                <circle cx="19" cy="274" fill="var(--fill-0, #C8ACFC)" id="Ellipse 132" r="2"/>
                <circle cx="36" cy="274" fill="var(--fill-0, #C8ACFC)" id="Ellipse 133" r="2"/>
                <circle cx="53" cy="274" fill="var(--fill-0, #C8ACFC)" id="Ellipse 134" r="2"/>
                <circle cx="70" cy="274" fill="var(--fill-0, #C8ACFC)" id="Ellipse 135" r="2"/>
                <circle cx="87" cy="274" fill="var(--fill-0, #C8ACFC)" id="Ellipse 136" r="2"/>
                <circle cx="104" cy="274" fill="var(--fill-0, #C8ACFC)" id="Ellipse 137" r="2"/>
                <circle cx="121" cy="274" fill="var(--fill-0, #C8ACFC)" id="Ellipse 138" r="2"/>
                <circle cx="138" cy="274" fill="var(--fill-0, #C8ACFC)" id="Ellipse 139" r="2"/>
                <circle cx="155" cy="274" fill="var(--fill-0, #C8ACFC)" id="Ellipse 140" r="2"/>
                <circle cx="2" cy="290" fill="var(--fill-0, #C8ACFC)" id="Ellipse 141" r="2"/>
                <circle cx="19" cy="290" fill="var(--fill-0, #C8ACFC)" id="Ellipse 72" r="2"/>
                <circle cx="36" cy="290" fill="var(--fill-0, #C8ACFC)" id="Ellipse 73" r="2"/>
                <circle cx="53" cy="290" fill="var(--fill-0, #C8ACFC)" id="Ellipse 74" r="2"/>
                <circle cx="70" cy="290" fill="var(--fill-0, #C8ACFC)" id="Ellipse 75" r="2"/>
                <circle cx="87" cy="290" fill="var(--fill-0, #C8ACFC)" id="Ellipse 76" r="2"/>
                <circle cx="104" cy="290" fill="var(--fill-0, #C8ACFC)" id="Ellipse 77" r="2"/>
                <circle cx="155" cy="2" fill="var(--fill-0, #C8ACFC)" id="Ellipse 142" r="2"/>
                <circle cx="2" cy="18" fill="var(--fill-0, #C8ACFC)" id="Ellipse 143" r="2"/>
                <circle cx="19" cy="18" fill="var(--fill-0, #C8ACFC)" id="Ellipse 144" r="2"/>
                <circle cx="36" cy="18" fill="var(--fill-0, #C8ACFC)" id="Ellipse 145" r="2"/>
                <circle cx="53" cy="18" fill="var(--fill-0, #C8ACFC)" id="Ellipse 146" r="2"/>
                <circle cx="70" cy="18" fill="var(--fill-0, #C8ACFC)" id="Ellipse 147" r="2"/>
                <circle cx="87" cy="18" fill="var(--fill-0, #C8ACFC)" id="Ellipse 148" r="2"/>
                <circle cx="104" cy="18" fill="var(--fill-0, #C8ACFC)" id="Ellipse 149" r="2"/>
                <circle cx="121" cy="18" fill="var(--fill-0, #C8ACFC)" id="Ellipse 150" r="2"/>
                <circle cx="138" cy="18" fill="var(--fill-0, #C8ACFC)" id="Ellipse 151" r="2"/>
                <circle cx="155" cy="18" fill="var(--fill-0, #C8ACFC)" id="Ellipse 152" r="2"/>
                <circle cx="2" cy="34" fill="var(--fill-0, #C8ACFC)" id="Ellipse 153" r="2"/>
                <circle cx="19" cy="34" fill="var(--fill-0, #C8ACFC)" id="Ellipse 154" r="2"/>
                <circle cx="36" cy="34" fill="var(--fill-0, #C8ACFC)" id="Ellipse 155" r="2"/>
                <circle cx="53" cy="34" fill="var(--fill-0, #C8ACFC)" id="Ellipse 156" r="2"/>
                <circle cx="70" cy="34" fill="var(--fill-0, #C8ACFC)" id="Ellipse 157" r="2"/>
                <circle cx="87" cy="34" fill="var(--fill-0, #C8ACFC)" id="Ellipse 158" r="2"/>
                <circle cx="104" cy="34" fill="var(--fill-0, #C8ACFC)" id="Ellipse 159" r="2"/>
                <circle cx="121" cy="34" fill="var(--fill-0, #C8ACFC)" id="Ellipse 160" r="2"/>
                <circle cx="138" cy="34" fill="var(--fill-0, #C8ACFC)" id="Ellipse 161" r="2"/>
                <circle cx="155" cy="34" fill="var(--fill-0, #C8ACFC)" id="Ellipse 162" r="2"/>
                <circle cx="2" cy="50" fill="var(--fill-0, #C8ACFC)" id="Ellipse 163" r="2"/>
                <circle cx="19" cy="50" fill="var(--fill-0, #C8ACFC)" id="Ellipse 164" r="2"/>
                <circle cx="36" cy="50" fill="var(--fill-0, #C8ACFC)" id="Ellipse 165" r="2"/>
                <circle cx="53" cy="50" fill="var(--fill-0, #C8ACFC)" id="Ellipse 166" r="2"/>
                <circle cx="70" cy="50" fill="var(--fill-0, #C8ACFC)" id="Ellipse 167" r="2"/>
                <circle cx="87" cy="50" fill="var(--fill-0, #C8ACFC)" id="Ellipse 168" r="2"/>
                <circle cx="2" cy="2" fill="var(--fill-0, #C8ACFC)" id="Ellipse 169" r="2"/>
                <circle cx="138" cy="226" fill="var(--fill-0, #C8ACFC)" id="Ellipse 170" r="2"/>
                <circle cx="155" cy="226" fill="var(--fill-0, #C8ACFC)" id="Ellipse 171" r="2"/>
                <circle cx="2" cy="242" fill="var(--fill-0, #C8ACFC)" id="Ellipse 172" r="2"/>
                <circle cx="19" cy="242" fill="var(--fill-0, #C8ACFC)" id="Ellipse 173" r="2"/>
                <circle cx="36" cy="242" fill="var(--fill-0, #C8ACFC)" id="Ellipse 174" r="2"/>
                <circle cx="53" cy="242" fill="var(--fill-0, #C8ACFC)" id="Ellipse 175" r="2"/>
                <circle cx="70" cy="242" fill="var(--fill-0, #C8ACFC)" id="Ellipse 176" r="2"/>
                <circle cx="87" cy="242" fill="var(--fill-0, #C8ACFC)" id="Ellipse 177" r="2"/>
                <circle cx="104" cy="242" fill="var(--fill-0, #C8ACFC)" id="Ellipse 178" r="2"/>
                <circle cx="121" cy="242" fill="var(--fill-0, #C8ACFC)" id="Ellipse 179" r="2"/>
                <circle cx="138" cy="242" fill="var(--fill-0, #C8ACFC)" id="Ellipse 180" r="2"/>
                <circle cx="155" cy="242" fill="var(--fill-0, #C8ACFC)" id="Ellipse 181" r="2"/>
                <circle cx="2" cy="258" fill="var(--fill-0, #C8ACFC)" id="Ellipse 182" r="2"/>
                <circle cx="19" cy="258" fill="var(--fill-0, #C8ACFC)" id="Ellipse 183" r="2"/>
                <circle cx="36" cy="258" fill="var(--fill-0, #C8ACFC)" id="Ellipse 184" r="2"/>
                <circle cx="53" cy="258" fill="var(--fill-0, #C8ACFC)" id="Ellipse 185" r="2"/>
                <circle cx="70" cy="258" fill="var(--fill-0, #C8ACFC)" id="Ellipse 186" r="2"/>
                <circle cx="87" cy="258" fill="var(--fill-0, #C8ACFC)" id="Ellipse 187" r="2"/>
                <circle cx="104" cy="258" fill="var(--fill-0, #C8ACFC)" id="Ellipse 188" r="2"/>
                <circle cx="121" cy="258" fill="var(--fill-0, #C8ACFC)" id="Ellipse 189" r="2"/>
                <circle cx="138" cy="258" fill="var(--fill-0, #C8ACFC)" id="Ellipse 190" r="2"/>
                <circle cx="155" cy="258" fill="var(--fill-0, #C8ACFC)" id="Ellipse 191" r="2"/>
                <circle cx="2" cy="274" fill="var(--fill-0, #C8ACFC)" id="Ellipse 192" r="2"/>
                <circle cx="121" cy="290" fill="var(--fill-0, #C8ACFC)" id="Ellipse 193" r="2"/>
                <circle cx="138" cy="290" fill="var(--fill-0, #C8ACFC)" id="Ellipse 194" r="2"/>
                <circle cx="155" cy="290" fill="var(--fill-0, #C8ACFC)" id="Ellipse 195" r="2"/>
            </BackgroundImage6>
        </div>
    );
}

type TextContainerBackgroundImageAndTextProps = {
    text: string;
};

function TextContainerBackgroundImageAndText({text}: TextContainerBackgroundImageAndTextProps) {
    return (
        <div className="content-stretch flex items-center justify-center px-[16px] py-0 relative shrink-0">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[17px] text-nowrap text-white tracking-[0.5px]">{text}</p>
        </div>
    );
}

type DivFooterNavGroupBackgroundImageAndTextProps = {
    text: string;
};

function DivFooterNavGroupBackgroundImageAndText({text}: DivFooterNavGroupBackgroundImageAndTextProps) {
    return (
        <BackgroundImage7>
            <div
                className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.14px]">
                <p className="leading-[24px]">{text}</p>
            </div>
        </BackgroundImage7>
    );
}

export default function LandingPage({onScheduleConsultation}: LandingPageProps) {
    const pageRef = useRef<HTMLDivElement>(null);
    const layoutRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const [measuredMinHeight, setMeasuredMinHeight] = useState<number | null>(null);
    const [measuredFooterTop, setMeasuredFooterTop] = useState<number | null>(null);
    const [openFaq, setOpenFaq] = useState<string | null>(null);
    const [scale, setScale] = useState(1);
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1368);
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({behavior: "smooth", block: "start"});
    };

    useLayoutEffect(() => {
        const updateScale = () => {
            const designWidth = 1344;
            const next = Math.min(1, window.innerWidth / designWidth);
            setScale(Math.max(0.25, next));
        };

        updateScale();
        window.addEventListener("load", updateScale);
        window.addEventListener("resize", updateScale);

        return () => {
            window.removeEventListener("load", updateScale);
            window.removeEventListener("resize", updateScale);
        };
    }, []);

    useLayoutEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        handleResize(); // Initialize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useLayoutEffect(() => {
        const update = () => {
            const pageEl = pageRef.current;
            const layoutEl = layoutRef.current;
            const footerEl = footerRef.current;

            if (!pageEl || !layoutEl || !footerEl) return;

            const footerGapPx = 80 * scale;

            const pageRect = pageEl.getBoundingClientRect();
            const layoutRect = layoutEl.getBoundingClientRect();
            const footerRect = footerEl.getBoundingClientRect();
            const layoutBottom = layoutRect.bottom - pageRect.top;
            const footerHeight = footerRect.height;

            setMeasuredMinHeight(layoutBottom + footerHeight + footerGapPx);
            // footer is positioned inside the scaled wrapper, so its `top` must be in
            // unscaled (design) px; otherwise it gets scaled twice and appears to rise.
            setMeasuredFooterTop(scale ? (layoutBottom + footerGapPx) / scale : layoutBottom + footerGapPx);
        };

        update();
        window.addEventListener("load", update);
        window.addEventListener("resize", update);

        let ro: ResizeObserver | null = null;
        if (typeof ResizeObserver !== "undefined") {
            ro = new ResizeObserver(() => update());
            if (layoutRef.current) ro.observe(layoutRef.current);
            if (footerRef.current) ro.observe(footerRef.current);
        }

        return () => {
            window.removeEventListener("load", update);
            window.removeEventListener("resize", update);
            ro?.disconnect();
        };
    }, [scale]);

    return (
        <div
            ref={pageRef}
            className="bg-white relative w-full min-h-[6100px] overflow-x-hidden"
            data-name="Landing page"
            style={measuredMinHeight ? {minHeight: `${measuredMinHeight}px`} : undefined}
        >

            <div
                className="relative w-full"
                style={scale !== 1 ? {transform: `scale(${scale})`, transformOrigin: "top center"} : undefined}
            >
            <div className="absolute contents left-1/2 top-[48px] translate-x-[-50%]" data-name="Header">
                <div
                    className="absolute bg-[#ffeef9] h-[789px] left-1/2 rounded-[40px] top-[48px] translate-x-[-50%] w-[1344px]">
                    <div
                        className="[grid-area:1_/_1] content-stretch flex items-center justify-between ml-[60px] relative w-[1280px]"
                    style={{marginTop: "12%"}}>
                        <div
                            className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[607px]"
                            data-name="left side">
                            <div
                                className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                                <div
                                    className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                                    <div
                                        className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full">
                                        <div
                                            className="flex flex-col justify-center relative shrink-0 text-[#333] text-[58px] w-[653px]"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            <p className="leading-[normal]"
                                            style={{fontSize:"56px", fontWeight:"300"}}>Maintain Your Mental Health with
                                                Compassionate Care</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#292d34] text-[18px] w-[557px]">
                                    <p className="leading-[28px]" style={{fontSize:"21px", fontWeight:"300"}}>Take charge of your mental well-being with personalized, confidential, and judgment-free support.</p>
                                </div>
                                <div
                                    className="content-stretch flex items-start relative shrink-0 gap-[16px]"
                                    data-name="button-group">
                                    <button
                                        type="button"
                                        onClick={onScheduleConsultation}
                                        className="relative group flex h-[56px] w-[273px] items-center justify-center
             p-[16px] rounded-[11px] shrink-0 cursor-pointer
             overflow-hidden transition-all duration-200"
                                    >
                                        {/* Default gradient */}
                                        <span
                                            className="absolute inset-0 transition-opacity duration-300"
                                            style={{
                                                background:
                                                    "linear-gradient(126.084deg, rgb(254, 103, 197) 12.215%, rgb(152, 62, 118) 126.73%)",
                                            }}
                                        />

                                        {/* Hover gradient */}
                                        <span
                                            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            style={{
                                                background:
                                                    "linear-gradient(270deg, #690242 -35.38%, #700346 108.59%)",
                                            }}
                                        />

                                        {/* Content */}
                                        <div className="relative z-10 flex items-center">
                                            <TextContainerBackgroundImageAndText text="Schedule a Consultation"/>

                                            <div
                                                className="relative shrink-0 size-[24px]"
                                                style={{ marginLeft: "-15px" }}
                                                data-name="icon / jam-icons / outline & logos / arrow-right"
                                            >
                                                <svg
                                                    className="block size-full"
                                                    fill="none"
                                                    preserveAspectRatio="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        d="M5 12h12"
                                                        stroke="#FFFFFF"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                    />
                                                    <path
                                                        d="M13 6l6 6-6 6"
                                                        stroke="#FFFFFF"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </button>


                                    <button
                                        type="button"
                                        className="flex w-[273px] h-[56px] items-center justify-center rounded-[11px]
             border-[2px] border-[#983E76]
             bg-transparent text-[#983E76] font-medium text-[16px] tracking-[0.5px]
             transition-all duration-200 hover:bg-[linear-gradient(98.15deg,#FE67C5_12.21%,#983E76_126.73%)]
             hover:text-white cursor-pointer"
                                        onClick={() => {
                                            const phone = "971501234567";
                                            const message = encodeURIComponent("Hello! I want to speak with a professional.");
                                            window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                                        }}
                                    >
                                        Speak with a Professional
                                    </button>


                                </div>
                            </div>
                        </div>
                        <div
                            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                            style={{ marginRight:"27px"}}
                            data-name="right side">
                            <BackgroundImage additionalClassNames="ml-[14px] mt-[3px]"/>
                            <div className="[grid-area:1_/_1] h-[506px] ml-0 mt-0 relative w-[599.677px]"
                                 data-name="Vector">
                                <img alt="" className="block max-w-none size-full" height="506" src={imgVector3}
                                     width="599.677"/>
                                <img alt="" className="block max-w-none size-full" height="506" src={imgVectorGroup}
                                     width="599.677"/>

                            </div>
                        </div>
                    </div>
                    <div
                        ref={layoutRef}
                        className="absolute content-stretch flex flex-col gap-[156px] items-center top-[900px] w-[1344px]"
                        data-name="layout">
                        <div
                            id="conditions"
                            style={{scrollMarginTop: 140}}
                            className="content-stretch flex flex-col gap-[44px] items-center relative shrink-0 w-full"
                            data-name="2nd section">
                            <div
                                className="content-stretch flex flex-col gap-[12px] items-end not-italic relative shrink-0 text-center w-[946px]"
                                data-name="title">
                                <div
                                    className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
                                    <p className="leading-[normal] relative shrink-0 text-[#090909] text-[58px] w-[837px]"
                                       style={{ fontFamily: 'Poppins, sans-serif', fontSize:"58px", fontWeight:"300" }}>Support
                                        for Individuals at Every Stage</p>
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[31px] min-w-full relative shrink-0 text-[21px] text-black w-[min-content]"
                                       style={{ fontSize:"21px", fontWeight:"300" }}>We
                                        serve individuals facing a wide range of emotional, behavioral, and mental
                                        health
                                        challenges. Whether you’re navigating stress, anxiety, depression, or life
                                        transitions,
                                        our team is here to help you feel supported and understood.</p>
                                </div>
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[31px] relative shrink-0 text-[21px] text-black w-full"
                                   style={{ fontSize:"21px", fontWeight:"300" }}>You
                                    don’t need to have everything figured out we’ll walk alongside you every step of the
                                    way.</p>
                            </div>
                            <div
                                className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                                data-name="content">
                                <div
                                    className="[grid-area:1_/_1] bg-[rgba(239,230,235,0.44)] h-[614px] ml-0 mt-0 rounded-[17px] w-[1280px]"/>
                                <div
                                    className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1058px] mt-[23px] place-items-start relative">
                                    <div
                                        className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
                                        <BackgroundImage additionalClassNames="ml-0 mt-0"/>
                                    </div>
                                </div>
                                <div
                                    className="[grid-area:1_/_1] content-stretch flex items-center justify-between ml-[60px] mt-[66px] relative w-[1160px]">
                                    <div
                                        className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[493px]">
                                        <div
                                            className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                                            <div
                                                className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                                                <div
                                                    className="leading-[normal] min-w-full not-italic relative shrink-0 text-[#1d1b20] text-[50px] w-[min-content]"
                                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    <p className="mb-0"
                                                       style={{ fontSize:"50px", fontWeight:"300" }}>{`Conditions We `}</p>
                                                    <p>Support</p>
                                                </div>
                                                <div
                                                    className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0"
                                                    style={{ fontSize:"16px", fontWeight:"300" }}>
                                                    <BackgroundImageAndText text="Anxiety and stress management"
                                                                            additionalClassNames="w-full"/>
                                                    <BackgroundImageAndText text="Depression and mood disorders"/>
                                                    <BackgroundImageAndText text="Trauma and emotional distress"/>
                                                    <BackgroundImageAndText
                                                        text="Life transitions and adjustment challenges"/>
                                                    <BackgroundImageAndText text="Behavioral and emotional concerns"/>
                                                    <BackgroundImageAndText text="Ongoing mental wellness support"/>
                                                </div>
                                            </div>
                                            <div
                                                className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
                                                <p className="leading-[19.25px]"
                                                   style={{ fontSize:"16px", fontWeight:"300" }}>If you’re unsure where to begin, we’re
                                                    here to
                                                    guide you.</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const phone = "971501234567"; // WhatsApp number (no +)
                                                const message = encodeURIComponent(
                                                    "Hello! I would like to speak with a professional."
                                                );

                                                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                                            }}
                                            className="relative group flex h-[56px] items-center justify-center
             p-[16px] rounded-[11px] shrink-0 cursor-pointer
             overflow-hidden transition-all duration-200"
                                        >
                                            {/* Default gradient */}
                                            <span
                                                className="absolute inset-0 transition-opacity duration-300"
                                                style={{
                                                    background:
                                                        "linear-gradient(126.084deg, rgb(254, 103, 197) 12.215%, rgb(152, 62, 118) 126.73%)",
                                                }}
                                            />

                                            {/* Hover gradient */}
                                            <span
                                                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                style={{
                                                    background:
                                                        "linear-gradient(270deg, #690242 -35.38%, #700346 108.59%)",
                                                }}
                                            />

                                            {/* Button content */}
                                            <div className="relative z-10 flex items-center">
                                                <TextContainerBackgroundImageAndText text="Speak with a Professional" />
                                            </div>
                                        </button>

                                    </div>
                                    <div
                                        className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[613px]">
                                        <div
                                            className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full">
                                            <div
                                                className="h-[249px] relative rounded-bl-[21px] rounded-br-[21px] rounded-tl-[21px] shrink-0 w-[198px]"
                                                data-name="a">
                                                <div
                                                    className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[21px] rounded-br-[21px] rounded-tl-[21px]">
                                                    <img alt=""
                                                         className="absolute h-full left-[-1.25%] max-w-none top-0 w-[102.5%]"
                                                         src={imgA}/>
                                                </div>
                                            </div>
                                            <div
                                                className="h-[249px] relative rounded-bl-[21px] rounded-br-[21px] rounded-tr-[21px] shrink-0 w-[198px]"
                                                data-name="a">
                                                <div
                                                    className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[21px] rounded-br-[21px] rounded-tr-[21px]">
                                                    <img alt=""
                                                         className="absolute h-full left-[-1.25%] max-w-none top-0 w-[102.5%]"
                                                         src={imgA1}/>
                                                </div>
                                            </div>
                                            <div
                                                className="h-[249px] relative rounded-bl-[21px] rounded-tl-[21px] rounded-tr-[88px] shrink-0 w-[198px]"
                                                data-name="a">
                                                <div
                                                    className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[21px] rounded-tl-[21px] rounded-tr-[88px]">
                                                    <img alt=""
                                                         className="absolute h-full left-[-43.59%] max-w-none top-0 w-[212.22%]"
                                                         src={imgA2}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="h-[193px] relative rounded-bl-[27px] rounded-br-[58px] rounded-tl-[40px] shrink-0 w-full"
                                            data-name="a">
                                            <div
                                                className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[27px] rounded-br-[58px] rounded-tl-[40px]">
                                                <img alt=""
                                                     className="absolute h-[175.25%] left-[-0.07%] max-w-none top-[0.11%] w-[104%]"
                                                     src={imgA3}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            id="our-approach"
                            style={{scrollMarginTop: 140}}
                            className="content-stretch flex gap-[51px] items-center relative shrink-0"
                            data-name="Our Approach">
                            <div
                                className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                                data-name="left side">
                                <BackgroundImage additionalClassNames="ml-[14px] mt-[3px]"/>
                                <div className="[grid-area:1_/_1] h-[506px] ml-0 mt-0 relative w-[599.677px]"
                                     data-name="Vector">
                                    <img alt="" className="block max-w-none size-full" height="506" src={imgVector4}
                                         width="599.677"/>
                                </div>
                            </div>
                            <div
                                className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[607px]"
                                data-name="right side">
                                <div
                                    className="bg-[#e6d9ff] content-stretch flex items-center justify-center px-[13.714px] py-[8px] relative rounded-[6px] shrink-0"
                                    data-name="button">
                                    <TextContainerBackgroundImageAndText1 text="Our Approach"/>
                                </div>
                                <div
                                    className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                                    <div
                                        className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                                        <div
                                            className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full">
                                            <div
                                                className="flex flex-col justify-center relative shrink-0 text-[#333] text-[58px] w-[653px]"
                                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                <p className="leading-[normal]"
                                                   style={{ fontSize:"58px", fontWeight:"300" }}>Care That Is Personal, Compassionate,
                                                    and
                                                    Effective</p>
                                            </div>
                                            <div
                                                className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[64px] justify-center relative shrink-0 text-[#292d34] text-[21px] w-[606px]">
                                                <p className="leading-[35px]"
                                                   style={{ fontSize:"21px", fontWeight:"300" }}>At Moonlight Behavioral Center, we believe
                                                    mental
                                                    health care should be:</p>
                                            </div>
                                        </div>
                                        <div
                                            className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
                                            style={{ fontSize:"18px", fontWeight:"300" }}>
                                            <BackgroundImage1 text="Client-centered:"
                                                              text1="Your experiences and goals guide your care"/>
                                            <BackgroundImage1 text="Collaborative:"
                                                              text1="We work with you, not at you"/>
                                            <BackgroundImage1 text="Confidential:"
                                                              text1="Your privacy is always respected"/>
                                            <BackgroundImage1 text="Strength-based:"
                                                              text1="We focus on resilience, not just symptoms"/>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#292d34] text-[18px] w-[557px]">
                                        <p className="leading-[28px]"
                                           style={{ fontSize:"18px", fontWeight:"300" }}>Our approach combines evidence-based practices
                                            with
                                            empathy, respect, and understanding.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                            data-name="call to action">
                            <div
                                className="[grid-area:1_/_1] bg-[#f0e8ff] h-[160px] ml-0 mt-0 rounded-[21px] w-[1280px]"/>
                            <div
                                className="[grid-area:1_/_1] content-stretch flex gap-[32px] items-center ml-[60px] mt-[24px] relative w-[1155px]"
                                style={{ fontSize:"32px", fontWeight:"300" }}>
                                <BackgroundImageAndText1
                                    text="When you’re ready, feel free to call us and schedule an appointment. Support is just a phone call away."/>
                                <div className="content-stretch flex items-start relative shrink-0" data-name="button">
                                    <ButtonBackgroundImage/>
                                </div>
                            </div>
                        </div>
                        <div
                            id="services"
                            style={{scrollMarginTop: 140}}
                            className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-[1200px]"
                            data-name="services">
                            <div
                                className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                                data-name="heading">
                                <div
                                    className="[grid-area:1_/_1] leading-[85.238px] ml-0 mt-0 not-italic relative text-[66px] text-black text-nowrap"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    <p className="mb-0"
                                       style={{ fontSize:"66px", fontWeight:"300" }}>{`Our services are designed `}</p>
                                    <p style={{ fontSize:"66px", fontWeight:"300" }}>with your mental well-being in mind.</p>
                                </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div
                                    className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
                                    <BackgroundImage2/>
                                    <div
                                        className="content-stretch flex gap-[53px] items-center relative shrink-0 w-full group">
                                        <div
                                            className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[100px] items-start not-italic relative shrink-0">
                                            <p className="leading-[33.9px] relative shrink-0 text-[24.04px] text-black w-[242px]"
                                               style={{ fontSize:"24px", fontWeight:"300" }}>{`Counseling & Therapy`}</p>
                                            <p className="leading-[24px] relative shrink-0 text-[18px] text-[rgba(5,0,56,0.88)] w-[727px]"
                                               style={{ fontSize:"18px", fontWeight:"300" }}>Our
                                                counseling services provide a safe and supportive space to explore
                                                thoughts,
                                                emotions, and behaviors. Sessions are tailored to your unique needs and
                                                may
                                                focus on developing coping strategies, improving emotional regulation,
                                                and
                                                fostering personal growth.</p>
                                        </div>
                                        <ArrowBackgroundImage/>
                                    </div>
                                    <BackgroundImage2/>
                                </div>
                                <div
                                    className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
                                    <BackgroundImage2/>
                                    <div
                                        className="content-stretch flex gap-[53px] items-center relative shrink-0 group">
                                        <div
                                            className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[100px] items-start not-italic relative shrink-0">
                                            <p className="leading-[33.9px] relative shrink-0 text-[24.04px] text-black w-[242px]"
                                               style={{ fontSize:"24px", fontWeight:"300" }}>Mental
                                                Health Consulting</p>
                                            <p className="leading-[24px] relative shrink-0 text-[18px] text-[rgba(5,0,56,0.88)] w-[727px]"
                                               style={{ fontSize:"18px", fontWeight:"300" }}>Our
                                                mental health consulting services provide education, guidance, and
                                                access to
                                                essential resources. These services are designed to help individuals
                                                better
                                                understand their mental health and explore options for care and
                                                support.</p>
                                        </div>
                                        <ArrowBackgroundImage/>
                                    </div>
                                    <BackgroundImage2/>
                                </div>
                                <div
                                    className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
                                    <BackgroundImage2/>
                                    <div
                                        className="content-stretch flex gap-[53px] items-center relative shrink-0 w-full group">
                                        <div
                                            className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[100px] items-start not-italic relative shrink-0">
                                            <p className="leading-[33.9px] relative shrink-0 text-[24.04px] text-black w-[242px]"
                                               style={{ fontSize:"24px", fontWeight:"300" }}>{`Referral & Care Coordination`}</p>
                                            <p className="leading-[24px] relative shrink-0 text-[18px] text-[rgba(5,0,56,0.88)] w-[727px]"
                                               style={{ fontSize:"18px", fontWeight:"300" }}>When
                                                additional or specialized care is required, we offer referral services
                                                to
                                                trusted mental health professionals. Our goal is to ensure you receive
                                                seamless,
                                                continuous support—no matter where your journey leads.</p>
                                        </div>
                                        <ArrowBackgroundImage/>
                                    </div>
                                    <BackgroundImage2/>
                                </div>
                            </div>
                        </div>
                        <div
                            id="why-choose-us"
                            style={{scrollMarginTop: 140}}
                            className="content-stretch flex gap-[36px] items-center relative shrink-0"
                            data-name="What Sets Us Apart">
                            <div
                                className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[647px]"
                                data-name="left side">
                                <div
                                    className="bg-[#e6d9ff] content-stretch flex items-center justify-center px-[13.714px] py-[8px] relative rounded-[6px] shrink-0"
                                    data-name="button">
                                    <TextContainerBackgroundImageAndText1 text="What Sets Us Apart"/>
                                </div>
                                <div
                                    className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                                    <div
                                        className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                                        <div
                                            className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full">
                                            <div
                                                className="flex flex-col justify-center relative shrink-0 text-[#333] text-[58px] w-[636px]"
                                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                <p className="leading-[normal]"
                                                   style={{ fontSize:"58px", fontWeight:"300" }}>Why Choose Moonlight Behavioral
                                                    Center</p>
                                            </div>
                                            <div
                                                className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[64px] justify-center relative shrink-0 text-[#292d34] text-[21px] w-[491px]">
                                                <p className="leading-[35px]" style={{ fontSize:"21px", fontWeight:"300" }}>We are committed to creating a space where
                                                    you
                                                    feel safe, respected, and empowered.</p>
                                            </div>
                                        </div>
                                        <div
                                            className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" style={{ fontSize:"18px", fontWeight:"300" }}>
                                            <BackgroundImageAndText2
                                                text="Licensed, experienced mental health professionals"
                                                additionalClassNames="w-full"/>
                                            <BackgroundImageAndText2 text="Compassionate, non-judgmental environment"/>
                                            <BackgroundImageAndText2 text="Personalized treatment plans"/>
                                            <BackgroundImageAndText2 text="Confidential and ethical care"/>
                                            <BackgroundImageAndText2 text="Community-focused support"/>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#292d34] text-[18px] w-full">
                                        <p className="leading-[28px]" style={{ fontSize:"18px", fontWeight:"300" }}>We are committed to creating a space where you
                                            feel safe,
                                            respected, and empowered.</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                                data-name="right side">
                                <div
                                    className="[grid-area:1_/_1] gap-[12px] grid grid-cols-[repeat(10,_minmax(0px,_1fr))] grid-rows-[repeat(20,_fit-content(100%))] ml-0 mt-0 relative w-[158px]">
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:1_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 6"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:1_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 7"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:1_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 8"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:1_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 9"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:1_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 10"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:1_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 11"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:1_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 12"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:1_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 13"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:4_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 14"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:4_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 15"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:4_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 16"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:4_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 17"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:5_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 18"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:5_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 19"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:5_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 20"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:5_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 21"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:5_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 22"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:5_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 23"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:5_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 24"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:5_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 25"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:5_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 26"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:5_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 27"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:6_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 28"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:6_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 29"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:6_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 30"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:6_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 31"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:6_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 32"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:6_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 33"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:6_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 34"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:6_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 35"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:6_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 36"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:6_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 37"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:7_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 38"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:7_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 39"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:7_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 40"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:7_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 41"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:7_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 42"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:7_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 43"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:7_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 44"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:7_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 45"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:7_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 46"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:7_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 47"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:8_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 48"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:8_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 49"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:8_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 50"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:8_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 51"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:8_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 52"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:8_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 53"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:8_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 54"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:8_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 55"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:8_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 56"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:8_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 57"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:9_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 58"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:9_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 59"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:9_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 60"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:9_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 61"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:9_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 62"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:9_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 63"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:9_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 64"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:9_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 65"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:9_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 66"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:9_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 67"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:10_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 68"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:10_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 69"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:10_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 70"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:10_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 71"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:10_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 78"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:10_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 79"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:10_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 80"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:10_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 81"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:10_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 82"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:10_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 83"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:11_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 84"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:11_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 85"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:11_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 86"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:11_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 87"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:11_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 88"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:11_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 89"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:11_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 90"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:11_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 91"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:11_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 92"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:11_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 93"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:12_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 94"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:12_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 95"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:12_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 96"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:12_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 97"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:12_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 98"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:12_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 99"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:12_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 100"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:12_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 101"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:12_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 102"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:12_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 103"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:13_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 104"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:13_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 105"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:13_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 106"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:13_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 107"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:13_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 108"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:13_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 109"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:13_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 110"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:13_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 111"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:13_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 112"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:13_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 113"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:14_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 114"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:14_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 115"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:14_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 116"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:14_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 117"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:14_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 118"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:14_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 119"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:14_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 120"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:14_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 121"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:14_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 122"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:14_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 123"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:15_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 124"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:15_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 125"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:15_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 126"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:15_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 127"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:15_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 128"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:15_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 129"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:15_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 130"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:15_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 131"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:18_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 132"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:18_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 133"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:18_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 134"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:18_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 135"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:18_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 136"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:18_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 137"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:18_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 138"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:18_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 139"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:18_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 140"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:19_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 141"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:19_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 72"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:19_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 73"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:19_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 74"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:19_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 75"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:19_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 76"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:19_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 77"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:1_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 142"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:2_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 143"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:2_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 144"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:2_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 145"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:2_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 146"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:2_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 147"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:2_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 148"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:2_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 149"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:2_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 150"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:2_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 151"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:2_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 152"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:3_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 153"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:3_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 154"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:3_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 155"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:3_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 156"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:3_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 157"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:3_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 158"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:3_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 159"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:3_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 160"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:3_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 161"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:3_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 162"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:4_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 163"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:4_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 164"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:4_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 165"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:4_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 166"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:4_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 167"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:4_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 168"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:1_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 169"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:15_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 170"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:15_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 171"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:16_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 172"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:16_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 173"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:16_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 174"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:16_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 175"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:16_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 176"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:16_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 177"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:16_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 178"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:16_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 179"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:16_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 180"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:16_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 181"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:17_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 182"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:17_/_2]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 183"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:17_/_3]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 184"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:17_/_4]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 185"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:17_/_5]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 186"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:17_/_6]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 187"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:17_/_7]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 188"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:17_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 189"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:17_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 190"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:17_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 191"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <div
                                        className="[grid-area:20_/_2] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#292d34] text-[18px] text-nowrap">
                                        <p className="leading-[19.25px]">Confidential and ethical care</p>
                                    </div>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:18_/_1]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 192"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:19_/_8]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 193"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <BackgroundImageAndText2 text="Community-focused support"
                                                             additionalClassNames="[grid-area:20_/_1]"/>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:19_/_9]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 194"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                    <Frame95672BackgroundImage additionalClassNames="[grid-area:19_/_10]">
                                        <circle cx="2" cy="2" fill="var(--fill-0, #FE67C5)" fillOpacity="0.53"
                                                id="Ellipse 195"
                                                r="2"/>
                                    </Frame95672BackgroundImage>
                                </div>
                                <div
                                    className="[grid-area:1_/_1] h-[523.493px] ml-[4px] mt-[16.25px] relative w-[569px]"
                                    data-name="Vector">
                                    <img alt="" className="block max-w-none size-full" height="523.493" src={imgVector5}
                                         width="569"/>
                                </div>
                            </div>
                        </div>
                        <div
                            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                            data-name="call to action">
                            <div
                                className="[grid-area:1_/_1] bg-[#f0e8ff] h-[156px] ml-0 mt-0 rounded-[21px] w-[1280px]"/>
                            <div
                                className="[grid-area:1_/_1] content-stretch flex gap-[32px] items-center ml-[60px] mt-[47.5px] relative w-[1155px]"
                                style={{ fontSize:"32px", fontWeight:"300" }}>
                                <BackgroundImageAndText1 text="Feel free to call us to schedule an appointment"/>
                                <div className="content-stretch flex items-start relative shrink-0" data-name="button">
                                    <ButtonBackgroundImage/>
                                </div>
                            </div>
                        </div>
                        <div className="content-stretch flex gap-[72px] items-center relative shrink-0"
                             data-name="Client Experience">
                            <div
                                className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                                data-name="left side">
                                <div
                                    className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
                                    <div
                                        className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
                                        <div className="[grid-area:1_/_1] h-[292px] ml-0 mt-0 relative w-[158px]">
                                            <BackgroundImage6>
                                                <circle cx="19" cy="2" fill="var(--fill-0, #D1BBFA)" id="Ellipse 6"
                                                        r="2"/>
                                                <circle cx="36" cy="2" fill="var(--fill-0, #D1BBFA)" id="Ellipse 7"
                                                        r="2"/>
                                                <circle cx="53" cy="2" fill="var(--fill-0, #D1BBFA)" id="Ellipse 8"
                                                        r="2"/>
                                                <circle cx="70" cy="2" fill="var(--fill-0, #D1BBFA)" id="Ellipse 9"
                                                        r="2"/>
                                                <circle cx="87" cy="2" fill="var(--fill-0, #D1BBFA)" id="Ellipse 10"
                                                        r="2"/>
                                                <circle cx="104" cy="2" fill="var(--fill-0, #D1BBFA)" id="Ellipse 11"
                                                        r="2"/>
                                                <circle cx="121" cy="2" fill="var(--fill-0, #D1BBFA)" id="Ellipse 12"
                                                        r="2"/>
                                                <circle cx="138" cy="2" fill="var(--fill-0, #D1BBFA)" id="Ellipse 13"
                                                        r="2"/>
                                                <circle cx="104" cy="50" fill="var(--fill-0, #D1BBFA)" id="Ellipse 14"
                                                        r="2"/>
                                                <circle cx="121" cy="50" fill="var(--fill-0, #D1BBFA)" id="Ellipse 15"
                                                        r="2"/>
                                                <circle cx="138" cy="50" fill="var(--fill-0, #D1BBFA)" id="Ellipse 16"
                                                        r="2"/>
                                                <circle cx="155" cy="50" fill="var(--fill-0, #D1BBFA)" id="Ellipse 17"
                                                        r="2"/>
                                                <circle cx="2" cy="66" fill="var(--fill-0, #D1BBFA)" id="Ellipse 18"
                                                        r="2"/>
                                                <circle cx="19" cy="66" fill="var(--fill-0, #D1BBFA)" id="Ellipse 19"
                                                        r="2"/>
                                                <circle cx="36" cy="66" fill="var(--fill-0, #D1BBFA)" id="Ellipse 20"
                                                        r="2"/>
                                                <circle cx="53" cy="66" fill="var(--fill-0, #D1BBFA)" id="Ellipse 21"
                                                        r="2"/>
                                                <circle cx="70" cy="66" fill="var(--fill-0, #D1BBFA)" id="Ellipse 22"
                                                        r="2"/>
                                                <circle cx="87" cy="66" fill="var(--fill-0, #D1BBFA)" id="Ellipse 23"
                                                        r="2"/>
                                                <circle cx="104" cy="66" fill="var(--fill-0, #D1BBFA)" id="Ellipse 24"
                                                        r="2"/>
                                                <circle cx="121" cy="66" fill="var(--fill-0, #D1BBFA)" id="Ellipse 25"
                                                        r="2"/>
                                                <circle cx="138" cy="66" fill="var(--fill-0, #D1BBFA)" id="Ellipse 26"
                                                        r="2"/>
                                                <circle cx="155" cy="66" fill="var(--fill-0, #D1BBFA)" id="Ellipse 27"
                                                        r="2"/>
                                                <circle cx="2" cy="82" fill="var(--fill-0, #D1BBFA)" id="Ellipse 28"
                                                        r="2"/>
                                                <circle cx="19" cy="82" fill="var(--fill-0, #D1BBFA)" id="Ellipse 29"
                                                        r="2"/>
                                                <circle cx="36" cy="82" fill="var(--fill-0, #D1BBFA)" id="Ellipse 30"
                                                        r="2"/>
                                                <circle cx="53" cy="82" fill="var(--fill-0, #D1BBFA)" id="Ellipse 31"
                                                        r="2"/>
                                                <circle cx="70" cy="82" fill="var(--fill-0, #D1BBFA)" id="Ellipse 32"
                                                        r="2"/>
                                                <circle cx="87" cy="82" fill="var(--fill-0, #D1BBFA)" id="Ellipse 33"
                                                        r="2"/>
                                                <circle cx="104" cy="82" fill="var(--fill-0, #D1BBFA)" id="Ellipse 34"
                                                        r="2"/>
                                                <circle cx="121" cy="82" fill="var(--fill-0, #D1BBFA)" id="Ellipse 35"
                                                        r="2"/>
                                                <circle cx="138" cy="82" fill="var(--fill-0, #D1BBFA)" id="Ellipse 36"
                                                        r="2"/>
                                                <circle cx="155" cy="82" fill="var(--fill-0, #D1BBFA)" id="Ellipse 37"
                                                        r="2"/>
                                                <circle cx="2" cy="98" fill="var(--fill-0, #D1BBFA)" id="Ellipse 38"
                                                        r="2"/>
                                                <circle cx="19" cy="98" fill="var(--fill-0, #D1BBFA)" id="Ellipse 39"
                                                        r="2"/>
                                                <circle cx="36" cy="98" fill="var(--fill-0, #D1BBFA)" id="Ellipse 40"
                                                        r="2"/>
                                                <circle cx="53" cy="98" fill="var(--fill-0, #D1BBFA)" id="Ellipse 41"
                                                        r="2"/>
                                                <circle cx="70" cy="98" fill="var(--fill-0, #D1BBFA)" id="Ellipse 42"
                                                        r="2"/>
                                                <circle cx="87" cy="98" fill="var(--fill-0, #D1BBFA)" id="Ellipse 43"
                                                        r="2"/>
                                                <circle cx="104" cy="98" fill="var(--fill-0, #D1BBFA)" id="Ellipse 44"
                                                        r="2"/>
                                                <circle cx="121" cy="98" fill="var(--fill-0, #D1BBFA)" id="Ellipse 45"
                                                        r="2"/>
                                                <circle cx="138" cy="98" fill="var(--fill-0, #D1BBFA)" id="Ellipse 46"
                                                        r="2"/>
                                                <circle cx="155" cy="98" fill="var(--fill-0, #D1BBFA)" id="Ellipse 47"
                                                        r="2"/>
                                                <circle cx="2" cy="114" fill="var(--fill-0, #D1BBFA)" id="Ellipse 48"
                                                        r="2"/>
                                                <circle cx="19" cy="114" fill="var(--fill-0, #D1BBFA)" id="Ellipse 49"
                                                        r="2"/>
                                                <circle cx="36" cy="114" fill="var(--fill-0, #D1BBFA)" id="Ellipse 50"
                                                        r="2"/>
                                                <circle cx="53" cy="114" fill="var(--fill-0, #D1BBFA)" id="Ellipse 51"
                                                        r="2"/>
                                                <circle cx="70" cy="114" fill="var(--fill-0, #D1BBFA)" id="Ellipse 52"
                                                        r="2"/>
                                                <circle cx="87" cy="114" fill="var(--fill-0, #D1BBFA)" id="Ellipse 53"
                                                        r="2"/>
                                                <circle cx="104" cy="114" fill="var(--fill-0, #D1BBFA)" id="Ellipse 54"
                                                        r="2"/>
                                                <circle cx="121" cy="114" fill="var(--fill-0, #D1BBFA)" id="Ellipse 55"
                                                        r="2"/>
                                                <circle cx="138" cy="114" fill="var(--fill-0, #D1BBFA)" id="Ellipse 56"
                                                        r="2"/>
                                                <circle cx="155" cy="114" fill="var(--fill-0, #D1BBFA)" id="Ellipse 57"
                                                        r="2"/>
                                                <circle cx="2" cy="130" fill="var(--fill-0, #D1BBFA)" id="Ellipse 58"
                                                        r="2"/>
                                                <circle cx="19" cy="130" fill="var(--fill-0, #D1BBFA)" id="Ellipse 59"
                                                        r="2"/>
                                                <circle cx="36" cy="130" fill="var(--fill-0, #D1BBFA)" id="Ellipse 60"
                                                        r="2"/>
                                                <circle cx="53" cy="130" fill="var(--fill-0, #D1BBFA)" id="Ellipse 61"
                                                        r="2"/>
                                                <circle cx="70" cy="130" fill="var(--fill-0, #D1BBFA)" id="Ellipse 62"
                                                        r="2"/>
                                                <circle cx="87" cy="130" fill="var(--fill-0, #D1BBFA)" id="Ellipse 63"
                                                        r="2"/>
                                                <circle cx="104" cy="130" fill="var(--fill-0, #D1BBFA)" id="Ellipse 64"
                                                        r="2"/>
                                                <circle cx="121" cy="130" fill="var(--fill-0, #D1BBFA)" id="Ellipse 65"
                                                        r="2"/>
                                                <circle cx="138" cy="130" fill="var(--fill-0, #D1BBFA)" id="Ellipse 66"
                                                        r="2"/>
                                                <circle cx="155" cy="130" fill="var(--fill-0, #D1BBFA)" id="Ellipse 67"
                                                        r="2"/>
                                                <circle cx="2" cy="146" fill="var(--fill-0, #D1BBFA)" id="Ellipse 68"
                                                        r="2"/>
                                                <circle cx="19" cy="146" fill="var(--fill-0, #D1BBFA)" id="Ellipse 69"
                                                        r="2"/>
                                                <circle cx="36" cy="146" fill="var(--fill-0, #D1BBFA)" id="Ellipse 70"
                                                        r="2"/>
                                                <circle cx="53" cy="146" fill="var(--fill-0, #D1BBFA)" id="Ellipse 71"
                                                        r="2"/>
                                                <circle cx="70" cy="146" fill="var(--fill-0, #D1BBFA)" id="Ellipse 78"
                                                        r="2"/>
                                                <circle cx="87" cy="146" fill="var(--fill-0, #D1BBFA)" id="Ellipse 79"
                                                        r="2"/>
                                                <circle cx="104" cy="146" fill="var(--fill-0, #D1BBFA)" id="Ellipse 80"
                                                        r="2"/>
                                                <circle cx="121" cy="146" fill="var(--fill-0, #D1BBFA)" id="Ellipse 81"
                                                        r="2"/>
                                                <circle cx="138" cy="146" fill="var(--fill-0, #D1BBFA)" id="Ellipse 82"
                                                        r="2"/>
                                                <circle cx="155" cy="146" fill="var(--fill-0, #D1BBFA)" id="Ellipse 83"
                                                        r="2"/>
                                                <circle cx="2" cy="162" fill="var(--fill-0, #D1BBFA)" id="Ellipse 84"
                                                        r="2"/>
                                                <circle cx="19" cy="162" fill="var(--fill-0, #D1BBFA)" id="Ellipse 85"
                                                        r="2"/>
                                                <circle cx="36" cy="162" fill="var(--fill-0, #D1BBFA)" id="Ellipse 86"
                                                        r="2"/>
                                                <circle cx="53" cy="162" fill="var(--fill-0, #D1BBFA)" id="Ellipse 87"
                                                        r="2"/>
                                                <circle cx="70" cy="162" fill="var(--fill-0, #D1BBFA)" id="Ellipse 88"
                                                        r="2"/>
                                                <circle cx="87" cy="162" fill="var(--fill-0, #D1BBFA)" id="Ellipse 89"
                                                        r="2"/>
                                                <circle cx="104" cy="162" fill="var(--fill-0, #D1BBFA)" id="Ellipse 90"
                                                        r="2"/>
                                                <circle cx="121" cy="162" fill="var(--fill-0, #D1BBFA)" id="Ellipse 91"
                                                        r="2"/>
                                                <circle cx="138" cy="162" fill="var(--fill-0, #D1BBFA)" id="Ellipse 92"
                                                        r="2"/>
                                                <circle cx="155" cy="162" fill="var(--fill-0, #D1BBFA)" id="Ellipse 93"
                                                        r="2"/>
                                                <circle cx="2" cy="178" fill="var(--fill-0, #D1BBFA)" id="Ellipse 94"
                                                        r="2"/>
                                                <circle cx="19" cy="178" fill="var(--fill-0, #D1BBFA)" id="Ellipse 95"
                                                        r="2"/>
                                                <circle cx="36" cy="178" fill="var(--fill-0, #D1BBFA)" id="Ellipse 96"
                                                        r="2"/>
                                                <circle cx="53" cy="178" fill="var(--fill-0, #D1BBFA)" id="Ellipse 97"
                                                        r="2"/>
                                                <circle cx="70" cy="178" fill="var(--fill-0, #D1BBFA)" id="Ellipse 98"
                                                        r="2"/>
                                                <circle cx="87" cy="178" fill="var(--fill-0, #D1BBFA)" id="Ellipse 99"
                                                        r="2"/>
                                                <circle cx="104" cy="178" fill="var(--fill-0, #D1BBFA)" id="Ellipse 100"
                                                        r="2"/>
                                                <circle cx="121" cy="178" fill="var(--fill-0, #D1BBFA)" id="Ellipse 101"
                                                        r="2"/>
                                                <circle cx="138" cy="178" fill="var(--fill-0, #D1BBFA)" id="Ellipse 102"
                                                        r="2"/>
                                                <circle cx="155" cy="178" fill="var(--fill-0, #D1BBFA)" id="Ellipse 103"
                                                        r="2"/>
                                                <circle cx="2" cy="194" fill="var(--fill-0, #D1BBFA)" id="Ellipse 104"
                                                        r="2"/>
                                                <circle cx="19" cy="194" fill="var(--fill-0, #D1BBFA)" id="Ellipse 105"
                                                        r="2"/>
                                                <circle cx="36" cy="194" fill="var(--fill-0, #D1BBFA)" id="Ellipse 106"
                                                        r="2"/>
                                                <circle cx="53" cy="194" fill="var(--fill-0, #D1BBFA)" id="Ellipse 107"
                                                        r="2"/>
                                                <circle cx="70" cy="194" fill="var(--fill-0, #D1BBFA)" id="Ellipse 108"
                                                        r="2"/>
                                                <circle cx="87" cy="194" fill="var(--fill-0, #D1BBFA)" id="Ellipse 109"
                                                        r="2"/>
                                                <circle cx="104" cy="194" fill="var(--fill-0, #D1BBFA)" id="Ellipse 110"
                                                        r="2"/>
                                                <circle cx="121" cy="194" fill="var(--fill-0, #D1BBFA)" id="Ellipse 111"
                                                        r="2"/>
                                                <circle cx="138" cy="194" fill="var(--fill-0, #D1BBFA)" id="Ellipse 112"
                                                        r="2"/>
                                                <circle cx="155" cy="194" fill="var(--fill-0, #D1BBFA)" id="Ellipse 113"
                                                        r="2"/>
                                                <circle cx="2" cy="210" fill="var(--fill-0, #D1BBFA)" id="Ellipse 114"
                                                        r="2"/>
                                                <circle cx="19" cy="210" fill="var(--fill-0, #D1BBFA)" id="Ellipse 115"
                                                        r="2"/>
                                                <circle cx="36" cy="210" fill="var(--fill-0, #D1BBFA)" id="Ellipse 116"
                                                        r="2"/>
                                                <circle cx="53" cy="210" fill="var(--fill-0, #D1BBFA)" id="Ellipse 117"
                                                        r="2"/>
                                                <circle cx="70" cy="210" fill="var(--fill-0, #D1BBFA)" id="Ellipse 118"
                                                        r="2"/>
                                                <circle cx="87" cy="210" fill="var(--fill-0, #D1BBFA)" id="Ellipse 119"
                                                        r="2"/>
                                                <circle cx="104" cy="210" fill="var(--fill-0, #D1BBFA)" id="Ellipse 120"
                                                        r="2"/>
                                                <circle cx="121" cy="210" fill="var(--fill-0, #D1BBFA)" id="Ellipse 121"
                                                        r="2"/>
                                                <circle cx="138" cy="210" fill="var(--fill-0, #D1BBFA)" id="Ellipse 122"
                                                        r="2"/>
                                                <circle cx="155" cy="210" fill="var(--fill-0, #D1BBFA)" id="Ellipse 123"
                                                        r="2"/>
                                                <circle cx="2" cy="226" fill="var(--fill-0, #D1BBFA)" id="Ellipse 124"
                                                        r="2"/>
                                                <circle cx="19" cy="226" fill="var(--fill-0, #D1BBFA)" id="Ellipse 125"
                                                        r="2"/>
                                                <circle cx="36" cy="226" fill="var(--fill-0, #D1BBFA)" id="Ellipse 126"
                                                        r="2"/>
                                                <circle cx="53" cy="226" fill="var(--fill-0, #D1BBFA)" id="Ellipse 127"
                                                        r="2"/>
                                                <circle cx="70" cy="226" fill="var(--fill-0, #D1BBFA)" id="Ellipse 128"
                                                        r="2"/>
                                                <circle cx="87" cy="226" fill="var(--fill-0, #D1BBFA)" id="Ellipse 129"
                                                        r="2"/>
                                                <circle cx="104" cy="226" fill="var(--fill-0, #D1BBFA)" id="Ellipse 130"
                                                        r="2"/>
                                                <circle cx="121" cy="226" fill="var(--fill-0, #D1BBFA)" id="Ellipse 131"
                                                        r="2"/>
                                                <circle cx="19" cy="274" fill="var(--fill-0, #D1BBFA)" id="Ellipse 132"
                                                        r="2"/>
                                                <circle cx="36" cy="274" fill="var(--fill-0, #D1BBFA)" id="Ellipse 133"
                                                        r="2"/>
                                                <circle cx="53" cy="274" fill="var(--fill-0, #D1BBFA)" id="Ellipse 134"
                                                        r="2"/>
                                                <circle cx="70" cy="274" fill="var(--fill-0, #D1BBFA)" id="Ellipse 135"
                                                        r="2"/>
                                                <circle cx="87" cy="274" fill="var(--fill-0, #D1BBFA)" id="Ellipse 136"
                                                        r="2"/>
                                                <circle cx="104" cy="274" fill="var(--fill-0, #D1BBFA)" id="Ellipse 137"
                                                        r="2"/>
                                                <circle cx="121" cy="274" fill="var(--fill-0, #D1BBFA)" id="Ellipse 138"
                                                        r="2"/>
                                                <circle cx="138" cy="274" fill="var(--fill-0, #D1BBFA)" id="Ellipse 139"
                                                        r="2"/>
                                                <circle cx="155" cy="274" fill="var(--fill-0, #D1BBFA)" id="Ellipse 140"
                                                        r="2"/>
                                                <circle cx="2" cy="290" fill="var(--fill-0, #D1BBFA)" id="Ellipse 141"
                                                        r="2"/>
                                                <circle cx="19" cy="290" fill="var(--fill-0, #D1BBFA)" id="Ellipse 72"
                                                        r="2"/>
                                                <circle cx="36" cy="290" fill="var(--fill-0, #D1BBFA)" id="Ellipse 73"
                                                        r="2"/>
                                                <circle cx="53" cy="290" fill="var(--fill-0, #D1BBFA)" id="Ellipse 74"
                                                        r="2"/>
                                                <circle cx="70" cy="290" fill="var(--fill-0, #D1BBFA)" id="Ellipse 75"
                                                        r="2"/>
                                                <circle cx="87" cy="290" fill="var(--fill-0, #D1BBFA)" id="Ellipse 76"
                                                        r="2"/>
                                                <circle cx="104" cy="290" fill="var(--fill-0, #D1BBFA)" id="Ellipse 77"
                                                        r="2"/>
                                                <circle cx="155" cy="2" fill="var(--fill-0, #D1BBFA)" id="Ellipse 142"
                                                        r="2"/>
                                                <circle cx="2" cy="18" fill="var(--fill-0, #D1BBFA)" id="Ellipse 143"
                                                        r="2"/>
                                                <circle cx="19" cy="18" fill="var(--fill-0, #D1BBFA)" id="Ellipse 144"
                                                        r="2"/>
                                                <circle cx="36" cy="18" fill="var(--fill-0, #D1BBFA)" id="Ellipse 145"
                                                        r="2"/>
                                                <circle cx="53" cy="18" fill="var(--fill-0, #D1BBFA)" id="Ellipse 146"
                                                        r="2"/>
                                                <circle cx="70" cy="18" fill="var(--fill-0, #D1BBFA)" id="Ellipse 147"
                                                        r="2"/>
                                                <circle cx="87" cy="18" fill="var(--fill-0, #D1BBFA)" id="Ellipse 148"
                                                        r="2"/>
                                                <circle cx="104" cy="18" fill="var(--fill-0, #D1BBFA)" id="Ellipse 149"
                                                        r="2"/>
                                                <circle cx="121" cy="18" fill="var(--fill-0, #D1BBFA)" id="Ellipse 150"
                                                        r="2"/>
                                                <circle cx="138" cy="18" fill="var(--fill-0, #D1BBFA)" id="Ellipse 151"
                                                        r="2"/>
                                                <circle cx="155" cy="18" fill="var(--fill-0, #D1BBFA)" id="Ellipse 152"
                                                        r="2"/>
                                                <circle cx="2" cy="34" fill="var(--fill-0, #D1BBFA)" id="Ellipse 153"
                                                        r="2"/>
                                                <circle cx="19" cy="34" fill="var(--fill-0, #D1BBFA)" id="Ellipse 154"
                                                        r="2"/>
                                                <circle cx="36" cy="34" fill="var(--fill-0, #D1BBFA)" id="Ellipse 155"
                                                        r="2"/>
                                                <circle cx="53" cy="34" fill="var(--fill-0, #D1BBFA)" id="Ellipse 156"
                                                        r="2"/>
                                                <circle cx="70" cy="34" fill="var(--fill-0, #D1BBFA)" id="Ellipse 157"
                                                        r="2"/>
                                                <circle cx="87" cy="34" fill="var(--fill-0, #D1BBFA)" id="Ellipse 158"
                                                        r="2"/>
                                                <circle cx="104" cy="34" fill="var(--fill-0, #D1BBFA)" id="Ellipse 159"
                                                        r="2"/>
                                                <circle cx="121" cy="34" fill="var(--fill-0, #D1BBFA)" id="Ellipse 160"
                                                        r="2"/>
                                                <circle cx="138" cy="34" fill="var(--fill-0, #D1BBFA)" id="Ellipse 161"
                                                        r="2"/>
                                                <circle cx="155" cy="34" fill="var(--fill-0, #D1BBFA)" id="Ellipse 162"
                                                        r="2"/>
                                                <circle cx="2" cy="50" fill="var(--fill-0, #D1BBFA)" id="Ellipse 163"
                                                        r="2"/>
                                                <circle cx="19" cy="50" fill="var(--fill-0, #D1BBFA)" id="Ellipse 164"
                                                        r="2"/>
                                                <circle cx="36" cy="50" fill="var(--fill-0, #D1BBFA)" id="Ellipse 165"
                                                        r="2"/>
                                                <circle cx="53" cy="50" fill="var(--fill-0, #D1BBFA)" id="Ellipse 166"
                                                        r="2"/>
                                                <circle cx="70" cy="50" fill="var(--fill-0, #D1BBFA)" id="Ellipse 167"
                                                        r="2"/>
                                                <circle cx="87" cy="50" fill="var(--fill-0, #D1BBFA)" id="Ellipse 168"
                                                        r="2"/>
                                                <circle cx="2" cy="2" fill="var(--fill-0, #D1BBFA)" id="Ellipse 169"
                                                        r="2"/>
                                                <circle cx="138" cy="226" fill="var(--fill-0, #D1BBFA)" id="Ellipse 170"
                                                        r="2"/>
                                                <circle cx="155" cy="226" fill="var(--fill-0, #D1BBFA)" id="Ellipse 171"
                                                        r="2"/>
                                                <circle cx="2" cy="242" fill="var(--fill-0, #D1BBFA)" id="Ellipse 172"
                                                        r="2"/>
                                                <circle cx="19" cy="242" fill="var(--fill-0, #D1BBFA)" id="Ellipse 173"
                                                        r="2"/>
                                                <circle cx="36" cy="242" fill="var(--fill-0, #D1BBFA)" id="Ellipse 174"
                                                        r="2"/>
                                                <circle cx="53" cy="242" fill="var(--fill-0, #D1BBFA)" id="Ellipse 175"
                                                        r="2"/>
                                                <circle cx="70" cy="242" fill="var(--fill-0, #D1BBFA)" id="Ellipse 176"
                                                        r="2"/>
                                                <circle cx="87" cy="242" fill="var(--fill-0, #D1BBFA)" id="Ellipse 177"
                                                        r="2"/>
                                                <circle cx="104" cy="242" fill="var(--fill-0, #D1BBFA)" id="Ellipse 178"
                                                        r="2"/>
                                                <circle cx="121" cy="242" fill="var(--fill-0, #D1BBFA)" id="Ellipse 179"
                                                        r="2"/>
                                                <circle cx="138" cy="242" fill="var(--fill-0, #D1BBFA)" id="Ellipse 180"
                                                        r="2"/>
                                                <circle cx="155" cy="242" fill="var(--fill-0, #D1BBFA)" id="Ellipse 181"
                                                        r="2"/>
                                                <circle cx="2" cy="258" fill="var(--fill-0, #D1BBFA)" id="Ellipse 182"
                                                        r="2"/>
                                                <circle cx="19" cy="258" fill="var(--fill-0, #D1BBFA)" id="Ellipse 183"
                                                        r="2"/>
                                                <circle cx="36" cy="258" fill="var(--fill-0, #D1BBFA)" id="Ellipse 184"
                                                        r="2"/>
                                                <circle cx="53" cy="258" fill="var(--fill-0, #D1BBFA)" id="Ellipse 185"
                                                        r="2"/>
                                                <circle cx="70" cy="258" fill="var(--fill-0, #D1BBFA)" id="Ellipse 186"
                                                        r="2"/>
                                                <circle cx="87" cy="258" fill="var(--fill-0, #D1BBFA)" id="Ellipse 187"
                                                        r="2"/>
                                                <circle cx="104" cy="258" fill="var(--fill-0, #D1BBFA)" id="Ellipse 188"
                                                        r="2"/>
                                                <circle cx="121" cy="258" fill="var(--fill-0, #D1BBFA)" id="Ellipse 189"
                                                        r="2"/>
                                                <circle cx="138" cy="258" fill="var(--fill-0, #D1BBFA)" id="Ellipse 190"
                                                        r="2"/>
                                                <circle cx="155" cy="258" fill="var(--fill-0, #D1BBFA)" id="Ellipse 191"
                                                        r="2"/>
                                                <circle cx="2" cy="274" fill="var(--fill-0, #D1BBFA)" id="Ellipse 192"
                                                        r="2"/>
                                                <circle cx="121" cy="290" fill="var(--fill-0, #D1BBFA)" id="Ellipse 193"
                                                        r="2"/>
                                                <circle cx="138" cy="290" fill="var(--fill-0, #D1BBFA)" id="Ellipse 194"
                                                        r="2"/>
                                                <circle cx="155" cy="290" fill="var(--fill-0, #D1BBFA)" id="Ellipse 195"
                                                        r="2"/>
                                            </BackgroundImage6>
                                        </div>
                                    </div>
                                </div>
                                <div className="[grid-area:1_/_1] h-[444px] ml-0 mt-0 relative w-[524px]"
                                     data-name="Vector">
                                    <img alt="" className="block max-w-none size-full" height="444" src={imgVector6}
                                         width="524"/>
                                </div>
                            </div>
                            <div
                                className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[640px]"
                                data-name="right side">
                                <div
                                    className="bg-[#e6d9ff] content-stretch flex items-center justify-center px-[13.714px] py-[8px] relative rounded-[6px] shrink-0"
                                    data-name="button">
                                    <TextContainerBackgroundImageAndText1 text="Client Experience"/>
                                </div>
                                <div
                                    className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                                    <div
                                        className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                                        <div
                                            className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 text-nowrap w-full">
                                            <div
                                                className="flex flex-col justify-center leading-[normal] relative shrink-0 text-[#333] text-[58px]"
                                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                <p className="mb-0" style={{ fontSize:"58px", fontWeight:"300" }}>What You Can</p>
                                                <p style={{ fontSize:"58px", fontWeight:"300" }}>Expect</p>
                                            </div>
                                            <div
                                                className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#292d34] text-[21px]">
                                                <p className="leading-[35px] text-nowrap" style={{ fontSize:"21px", fontWeight:"300" }}>From your first contact with
                                                    us, you
                                                    can expect:</p>
                                            </div>
                                        </div>
                                        <div
                                            className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" style={{ fontSize:"18px", fontWeight:"300" }}>
                                            <BackgroundImageAndText2 text="A welcoming and respectful intake process"/>
                                            <BackgroundImageAndText2 text="Clear communication and transparency"/>
                                            <BackgroundImageAndText2 text="A calm, supportive atmosphere"/>
                                            <BackgroundImageAndText2 text="Ongoing encouragement and guidance"/>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#292d34] text-[18px] w-full">
                                        <p className="leading-[35px]" style={{ fontSize:"18px", fontWeight:"300" }}>Your comfort and trust are at the center of
                                            everything we
                                            do.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                            data-name="privacy">
                            <div
                                className="[grid-area:1_/_1] bg-[#e6dafc] h-[265px] ml-0 mt-0 rounded-[21px] w-[1280px]"/>
                            <div
                                className="[grid-area:1_/_1] h-[178.94px] ml-[83.59%] mt-[16.26%] relative w-[186.821px]"
                                data-name="Group">
                                <svg className="block size-full" style={{transform: 'translateY(-90%)'}} fill="none"
                                     preserveAspectRatio="none"
                                     viewBox="0 0 186.821 178.94">
                                    <g id="Group">
                                        <path clipRule="evenodd" d={svgPaths.p248c2970} fill="var(--fill-0, #D1B7FF)"
                                              fillOpacity="0.74" fillRule="evenodd" id="Vector"/>
                                        <path d={svgPaths.p2116db80} fill="var(--fill-0, #B69DE5)" id="Vector_2"/>
                                        <path d={svgPaths.p26359680} fill="var(--fill-0, white)" id="Vector_3"/>
                                    </g>
                                </svg>
                            </div>


                            <div
                                className="[grid-area:1_/_1] content-stretch flex flex-col gap-[32px] items-start ml-[60px] mt-[60.84px] relative w-[986px]"
                            >
                                {/* Image at the top */}
                                <img src={GroupIcon} alt="Group" className="mb-[24px] w-[50px] h-[50px]" />

                                <div
                                    className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start leading-[0] not-italic relative shrink-0 text-[#333] w-full"
                                >
                                    <div
                                        className="flex flex-col justify-center relative shrink-0 text-[58px] text-nowrap"
                                    >
                                        <p
                                            className="leading-[56px]"
                                            style={{ fontSize: "58px", fontWeight: "300" }}
                                        >
                                            Your Privacy Is Our Priority
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col justify-center relative shrink-0 text-[19px] w-[1000px]"
                                    >
                                        <p
                                            className="leading-[32px]"
                                            style={{ fontSize: "19px", fontWeight: "300" }}
                                        >
                                            We understand that seeking mental health support is a deeply personal decision.
                                            All services are provided in a confidential and judgment-free environment, in
                                            accordance with professional and ethical standards.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div
                            id="faq"
                            style={{scrollMarginTop: 140}}
                            className="content-stretch flex flex-col gap-[56px] items-center relative shrink-0 w-[1200px]"
                            data-name="FAQ">
                            <div
                                className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[58px] text-center w-full"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                <p className="leading-[normal]" style={{ fontSize:"58px", fontWeight:"300" }}>FAQ Section</p>
                            </div>
                            <div className="content-stretch flex gap-[23px] items-start relative shrink-0 w-full">
                                <div
                                    className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[576px]">
                                    <div
                                        className="w-full rounded-[5px] border border-[#dfdfdf] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04)] bg-white overflow-hidden">
                                        <button
                                            type="button"
                                            className="w-full flex items-center justify-between px-[20px] py-[12px]"
                                            onClick={() => setOpenFaq((v) => (v === "referral" ? null : "referral"))}
                                        >
                                            <span
                                                className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] text-[#393e41] text-[16px]" style={{ fontSize:"16px", fontWeight:"300" }}>
                                                Do I need a referral to get started?
                                            </span>
                                            <div
                                                className={clsx("transition-transform duration-200", openFaq === "referral" ? "rotate-180" : "")}
                                            >
                                                <BackgroundImage3/>
                                            </div>
                                        </button>
                                        {openFaq === "referral" && (
                                            <div className="border-t border-[#dfdfdf] px-[20px] py-[16px]">
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] opacity-80 text-[#393e41] text-[14px]" style={{ fontSize:"14px", fontWeight:"300" }}>
                                                    No, you do not need a referral. You can book an appointment directly
                                                    with our mental health professionals. We welcome self-referrals and
                                                    are here to support you whenever you’re ready.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className="w-full rounded-[5px] border border-[#dfdfdf] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04)] bg-white overflow-hidden">
                                        <button
                                            type="button"
                                            className="w-full flex items-center justify-between px-[20px] py-[12px]"
                                            onClick={() => setOpenFaq((v) => (v === "service" ? null : "service"))}
                                        >
                                            <span
                                                className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] text-[#393e41] text-[16px]" style={{ fontSize:"16px", fontWeight:"300" }}>
                                                How do I know which service is right for me?
                                            </span>
                                            <div
                                                className={clsx("transition-transform duration-200", openFaq === "service" ? "rotate-180" : "")}
                                            >
                                                <BackgroundImage3/>
                                            </div>
                                        </button>
                                        {openFaq === "service" && (
                                            <div className="border-t border-[#dfdfdf] px-[20px] py-[16px]">
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] opacity-80 text-[#393e41] text-[14px]" style={{ fontSize:"14px", fontWeight:"300" }}>
                                                    Our team will help assess your needs and guide you toward the most
                                                    appropriate support.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div
                                    className="content-stretch flex flex-col gap-[20px] items-end relative shrink-0 w-[601px]">
                                    <div
                                        className="w-full rounded-[5px] border border-[#dfdfdf] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04)] bg-white overflow-hidden">
                                        <button
                                            type="button"
                                            className="w-full flex items-center justify-between px-[20px] py-[12px]"
                                            onClick={() => setOpenFaq((v) => (v === "confidential" ? null : "confidential"))}
                                        >
                                            <span
                                                className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] text-[#393e41] text-[16px]" style={{ fontSize:"16px", fontWeight:"300" }}>
                                                Are services confidential?
                                            </span>
                                            <div
                                                className={clsx("transition-transform duration-200", openFaq === "confidential" ? "rotate-180" : "")}
                                            >
                                                <BackgroundImage3/>
                                            </div>
                                        </button>
                                        {openFaq === "confidential" && (
                                            <div className="border-t border-[#dfdfdf] px-[20px] py-[16px]">
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] opacity-80 text-[#393e41] text-[14px]" style={{ fontSize:"14px", fontWeight:"300" }}>
                                                    Yes. All services are confidential. Your personal information and
                                                    session details are protected and will never be shared without your
                                                    consent, except where required by law.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className="w-full rounded-[5px] border border-[#dfdfdf] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04)] bg-white overflow-hidden">
                                        <button
                                            type="button"
                                            className="w-full flex items-center justify-between px-[20px] py-[12px]"
                                            onClick={() => setOpenFaq((v) => (v === "first" ? null : "first"))}
                                        >
                                            <span
                                                className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] text-[#393e41] text-[16px]" style={{ fontSize:"16px", fontWeight:"300" }}>
                                                What happens in the first consultation?
                                            </span>
                                            <div
                                                className={clsx("transition-transform duration-200", openFaq === "first" ? "rotate-180" : "")}
                                            >
                                                <BackgroundImage3/>
                                            </div>
                                        </button>
                                        {openFaq === "first" && (
                                            <div className="border-t border-[#dfdfdf] px-[20px] py-[16px]">
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] opacity-80 text-[#393e41] text-[14px]" style={{ fontSize:"14px", fontWeight:"300" }}>
                                                    Each session typically lasts 45–60 minutes. This gives you enough
                                                    time to talk openly with your therapist, explore concerns, and work
                                                    toward your goals at a comfortable pace.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                            data-name="call to action">
                            <div
                                className="[grid-area:1_/_1] bg-[#fff1fa] h-[364px] ml-0 mt-0 rounded-[21px] w-[1280px]"/>
                            <div
                                className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1046px] mt-0 place-items-start relative"
                                data-name="Mask group">
                                <div
                                    className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[48px] mt-[-80px] place-items-start relative">
                                    <div
                                        className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
                                        <div
                                            className="[grid-area:1_/_1] h-[292px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-48px_80px] mask-size-[234px_356px] ml-0 mt-0 relative w-[158px]"
                                            style={{maskImage: `url('${imgFrame95628}')`}}>
                                            <BackgroundImage6>
                                                <circle cx="19" cy="2" fill="var(--fill-0, #FFB9E4)" id="Ellipse 6"
                                                        r="2"/>
                                                <circle cx="36" cy="2" fill="var(--fill-0, #FFB9E4)" id="Ellipse 7"
                                                        r="2"/>
                                                <circle cx="53" cy="2" fill="var(--fill-0, #FFB9E4)" id="Ellipse 8"
                                                        r="2"/>
                                                <circle cx="70" cy="2" fill="var(--fill-0, #FFB9E4)" id="Ellipse 9"
                                                        r="2"/>
                                                <circle cx="87" cy="2" fill="var(--fill-0, #FFB9E4)" id="Ellipse 10"
                                                        r="2"/>
                                                <circle cx="104" cy="2" fill="var(--fill-0, #FFB9E4)" id="Ellipse 11"
                                                        r="2"/>
                                                <circle cx="121" cy="2" fill="var(--fill-0, #FFB9E4)" id="Ellipse 12"
                                                        r="2"/>
                                                <circle cx="138" cy="2" fill="var(--fill-0, #FFB9E4)" id="Ellipse 13"
                                                        r="2"/>
                                                <circle cx="104" cy="50" fill="var(--fill-0, #FFB9E4)" id="Ellipse 14"
                                                        r="2"/>
                                                <circle cx="121" cy="50" fill="var(--fill-0, #FFB9E4)" id="Ellipse 15"
                                                        r="2"/>
                                                <circle cx="138" cy="50" fill="var(--fill-0, #FFB9E4)" id="Ellipse 16"
                                                        r="2"/>
                                                <circle cx="155" cy="50" fill="var(--fill-0, #FFB9E4)" id="Ellipse 17"
                                                        r="2"/>
                                                <circle cx="2" cy="66" fill="var(--fill-0, #FFB9E4)" id="Ellipse 18"
                                                        r="2"/>
                                                <circle cx="19" cy="66" fill="var(--fill-0, #FFB9E4)" id="Ellipse 19"
                                                        r="2"/>
                                                <circle cx="36" cy="66" fill="var(--fill-0, #FFB9E4)" id="Ellipse 20"
                                                        r="2"/>
                                                <circle cx="53" cy="66" fill="var(--fill-0, #FFB9E4)" id="Ellipse 21"
                                                        r="2"/>
                                                <circle cx="70" cy="66" fill="var(--fill-0, #FFB9E4)" id="Ellipse 22"
                                                        r="2"/>
                                                <circle cx="87" cy="66" fill="var(--fill-0, #FFB9E4)" id="Ellipse 23"
                                                        r="2"/>
                                                <circle cx="104" cy="66" fill="var(--fill-0, #FFB9E4)" id="Ellipse 24"
                                                        r="2"/>
                                                <circle cx="121" cy="66" fill="var(--fill-0, #FFB9E4)" id="Ellipse 25"
                                                        r="2"/>
                                                <circle cx="138" cy="66" fill="var(--fill-0, #FFB9E4)" id="Ellipse 26"
                                                        r="2"/>
                                                <circle cx="155" cy="66" fill="var(--fill-0, #FFB9E4)" id="Ellipse 27"
                                                        r="2"/>
                                                <circle cx="2" cy="82" fill="var(--fill-0, #FFB9E4)" id="Ellipse 28"
                                                        r="2"/>
                                                <circle cx="19" cy="82" fill="var(--fill-0, #FFB9E4)" id="Ellipse 29"
                                                        r="2"/>
                                                <circle cx="36" cy="82" fill="var(--fill-0, #FFB9E4)" id="Ellipse 30"
                                                        r="2"/>
                                                <circle cx="53" cy="82" fill="var(--fill-0, #FFB9E4)" id="Ellipse 31"
                                                        r="2"/>
                                                <circle cx="70" cy="82" fill="var(--fill-0, #FFB9E4)" id="Ellipse 32"
                                                        r="2"/>
                                                <circle cx="87" cy="82" fill="var(--fill-0, #FFB9E4)" id="Ellipse 33"
                                                        r="2"/>
                                                <circle cx="104" cy="82" fill="var(--fill-0, #FFB9E4)" id="Ellipse 34"
                                                        r="2"/>
                                                <circle cx="121" cy="82" fill="var(--fill-0, #FFB9E4)" id="Ellipse 35"
                                                        r="2"/>
                                                <circle cx="138" cy="82" fill="var(--fill-0, #FFB9E4)" id="Ellipse 36"
                                                        r="2"/>
                                                <circle cx="155" cy="82" fill="var(--fill-0, #FFB9E4)" id="Ellipse 37"
                                                        r="2"/>
                                                <circle cx="2" cy="98" fill="var(--fill-0, #FFB9E4)" id="Ellipse 38"
                                                        r="2"/>
                                                <circle cx="19" cy="98" fill="var(--fill-0, #FFB9E4)" id="Ellipse 39"
                                                        r="2"/>
                                                <circle cx="36" cy="98" fill="var(--fill-0, #FFB9E4)" id="Ellipse 40"
                                                        r="2"/>
                                                <circle cx="53" cy="98" fill="var(--fill-0, #FFB9E4)" id="Ellipse 41"
                                                        r="2"/>
                                                <circle cx="70" cy="98" fill="var(--fill-0, #FFB9E4)" id="Ellipse 42"
                                                        r="2"/>
                                                <circle cx="87" cy="98" fill="var(--fill-0, #FFB9E4)" id="Ellipse 43"
                                                        r="2"/>
                                                <circle cx="104" cy="98" fill="var(--fill-0, #FFB9E4)" id="Ellipse 44"
                                                        r="2"/>
                                                <circle cx="121" cy="98" fill="var(--fill-0, #FFB9E4)" id="Ellipse 45"
                                                        r="2"/>
                                                <circle cx="138" cy="98" fill="var(--fill-0, #FFB9E4)" id="Ellipse 46"
                                                        r="2"/>
                                                <circle cx="155" cy="98" fill="var(--fill-0, #FFB9E4)" id="Ellipse 47"
                                                        r="2"/>
                                                <circle cx="2" cy="114" fill="var(--fill-0, #FFB9E4)" id="Ellipse 48"
                                                        r="2"/>
                                                <circle cx="19" cy="114" fill="var(--fill-0, #FFB9E4)" id="Ellipse 49"
                                                        r="2"/>
                                                <circle cx="36" cy="114" fill="var(--fill-0, #FFB9E4)" id="Ellipse 50"
                                                        r="2"/>
                                                <circle cx="53" cy="114" fill="var(--fill-0, #FFB9E4)" id="Ellipse 51"
                                                        r="2"/>
                                                <circle cx="70" cy="114" fill="var(--fill-0, #FFB9E4)" id="Ellipse 52"
                                                        r="2"/>
                                                <circle cx="87" cy="114" fill="var(--fill-0, #FFB9E4)" id="Ellipse 53"
                                                        r="2"/>
                                                <circle cx="104" cy="114" fill="var(--fill-0, #FFB9E4)" id="Ellipse 54"
                                                        r="2"/>
                                                <circle cx="121" cy="114" fill="var(--fill-0, #FFB9E4)" id="Ellipse 55"
                                                        r="2"/>
                                                <circle cx="138" cy="114" fill="var(--fill-0, #FFB9E4)" id="Ellipse 56"
                                                        r="2"/>
                                                <circle cx="155" cy="114" fill="var(--fill-0, #FFB9E4)" id="Ellipse 57"
                                                        r="2"/>
                                                <circle cx="2" cy="130" fill="var(--fill-0, #FFB9E4)" id="Ellipse 58"
                                                        r="2"/>
                                                <circle cx="19" cy="130" fill="var(--fill-0, #FFB9E4)" id="Ellipse 59"
                                                        r="2"/>
                                                <circle cx="36" cy="130" fill="var(--fill-0, #FFB9E4)" id="Ellipse 60"
                                                        r="2"/>
                                                <circle cx="53" cy="130" fill="var(--fill-0, #FFB9E4)" id="Ellipse 61"
                                                        r="2"/>
                                                <circle cx="70" cy="130" fill="var(--fill-0, #FFB9E4)" id="Ellipse 62"
                                                        r="2"/>
                                                <circle cx="87" cy="130" fill="var(--fill-0, #FFB9E4)" id="Ellipse 63"
                                                        r="2"/>
                                                <circle cx="104" cy="130" fill="var(--fill-0, #FFB9E4)" id="Ellipse 64"
                                                        r="2"/>
                                                <circle cx="121" cy="130" fill="var(--fill-0, #FFB9E4)" id="Ellipse 65"
                                                        r="2"/>
                                                <circle cx="138" cy="130" fill="var(--fill-0, #FFB9E4)" id="Ellipse 66"
                                                        r="2"/>
                                                <circle cx="155" cy="130" fill="var(--fill-0, #FFB9E4)" id="Ellipse 67"
                                                        r="2"/>
                                                <circle cx="2" cy="146" fill="var(--fill-0, #FFB9E4)" id="Ellipse 68"
                                                        r="2"/>
                                                <circle cx="19" cy="146" fill="var(--fill-0, #FFB9E4)" id="Ellipse 69"
                                                        r="2"/>
                                                <circle cx="36" cy="146" fill="var(--fill-0, #FFB9E4)" id="Ellipse 70"
                                                        r="2"/>
                                                <circle cx="53" cy="146" fill="var(--fill-0, #FFB9E4)" id="Ellipse 71"
                                                        r="2"/>
                                                <circle cx="70" cy="146" fill="var(--fill-0, #FFB9E4)" id="Ellipse 78"
                                                        r="2"/>
                                                <circle cx="87" cy="146" fill="var(--fill-0, #FFB9E4)" id="Ellipse 79"
                                                        r="2"/>
                                                <circle cx="104" cy="146" fill="var(--fill-0, #FFB9E4)" id="Ellipse 80"
                                                        r="2"/>
                                                <circle cx="121" cy="146" fill="var(--fill-0, #FFB9E4)" id="Ellipse 81"
                                                        r="2"/>
                                                <circle cx="138" cy="146" fill="var(--fill-0, #FFB9E4)" id="Ellipse 82"
                                                        r="2"/>
                                                <circle cx="155" cy="146" fill="var(--fill-0, #FFB9E4)" id="Ellipse 83"
                                                        r="2"/>
                                                <circle cx="2" cy="162" fill="var(--fill-0, #FFB9E4)" id="Ellipse 84"
                                                        r="2"/>
                                                <circle cx="19" cy="162" fill="var(--fill-0, #FFB9E4)" id="Ellipse 85"
                                                        r="2"/>
                                                <circle cx="36" cy="162" fill="var(--fill-0, #FFB9E4)" id="Ellipse 86"
                                                        r="2"/>
                                                <circle cx="53" cy="162" fill="var(--fill-0, #FFB9E4)" id="Ellipse 87"
                                                        r="2"/>
                                                <circle cx="70" cy="162" fill="var(--fill-0, #FFB9E4)" id="Ellipse 88"
                                                        r="2"/>
                                                <circle cx="87" cy="162" fill="var(--fill-0, #FFB9E4)" id="Ellipse 89"
                                                        r="2"/>
                                                <circle cx="104" cy="162" fill="var(--fill-0, #FFB9E4)" id="Ellipse 90"
                                                        r="2"/>
                                                <circle cx="121" cy="162" fill="var(--fill-0, #FFB9E4)" id="Ellipse 91"
                                                        r="2"/>
                                                <circle cx="138" cy="162" fill="var(--fill-0, #FFB9E4)" id="Ellipse 92"
                                                        r="2"/>
                                                <circle cx="155" cy="162" fill="var(--fill-0, #FFB9E4)" id="Ellipse 93"
                                                        r="2"/>
                                                <circle cx="2" cy="178" fill="var(--fill-0, #FFB9E4)" id="Ellipse 94"
                                                        r="2"/>
                                                <circle cx="19" cy="178" fill="var(--fill-0, #FFB9E4)" id="Ellipse 95"
                                                        r="2"/>
                                                <circle cx="36" cy="178" fill="var(--fill-0, #FFB9E4)" id="Ellipse 96"
                                                        r="2"/>
                                                <circle cx="53" cy="178" fill="var(--fill-0, #FFB9E4)" id="Ellipse 97"
                                                        r="2"/>
                                                <circle cx="70" cy="178" fill="var(--fill-0, #FFB9E4)" id="Ellipse 98"
                                                        r="2"/>
                                                <circle cx="87" cy="178" fill="var(--fill-0, #FFB9E4)" id="Ellipse 99"
                                                        r="2"/>
                                                <circle cx="104" cy="178" fill="var(--fill-0, #FFB9E4)" id="Ellipse 100"
                                                        r="2"/>
                                                <circle cx="121" cy="178" fill="var(--fill-0, #FFB9E4)" id="Ellipse 101"
                                                        r="2"/>
                                                <circle cx="138" cy="178" fill="var(--fill-0, #FFB9E4)" id="Ellipse 102"
                                                        r="2"/>
                                                <circle cx="155" cy="178" fill="var(--fill-0, #FFB9E4)" id="Ellipse 103"
                                                        r="2"/>
                                                <circle cx="2" cy="194" fill="var(--fill-0, #FFB9E4)" id="Ellipse 104"
                                                        r="2"/>
                                                <circle cx="19" cy="194" fill="var(--fill-0, #FFB9E4)" id="Ellipse 105"
                                                        r="2"/>
                                                <circle cx="36" cy="194" fill="var(--fill-0, #FFB9E4)" id="Ellipse 106"
                                                        r="2"/>
                                                <circle cx="53" cy="194" fill="var(--fill-0, #FFB9E4)" id="Ellipse 107"
                                                        r="2"/>
                                                <circle cx="70" cy="194" fill="var(--fill-0, #FFB9E4)" id="Ellipse 108"
                                                        r="2"/>
                                                <circle cx="87" cy="194" fill="var(--fill-0, #FFB9E4)" id="Ellipse 109"
                                                        r="2"/>
                                                <circle cx="104" cy="194" fill="var(--fill-0, #FFB9E4)" id="Ellipse 110"
                                                        r="2"/>
                                                <circle cx="121" cy="194" fill="var(--fill-0, #FFB9E4)" id="Ellipse 111"
                                                        r="2"/>
                                                <circle cx="138" cy="194" fill="var(--fill-0, #FFB9E4)" id="Ellipse 112"
                                                        r="2"/>
                                                <circle cx="155" cy="194" fill="var(--fill-0, #FFB9E4)" id="Ellipse 113"
                                                        r="2"/>
                                                <circle cx="2" cy="210" fill="var(--fill-0, #FFB9E4)" id="Ellipse 114"
                                                        r="2"/>
                                                <circle cx="19" cy="210" fill="var(--fill-0, #FFB9E4)" id="Ellipse 115"
                                                        r="2"/>
                                                <circle cx="36" cy="210" fill="var(--fill-0, #FFB9E4)" id="Ellipse 116"
                                                        r="2"/>
                                                <circle cx="53" cy="210" fill="var(--fill-0, #FFB9E4)" id="Ellipse 117"
                                                        r="2"/>
                                                <circle cx="70" cy="210" fill="var(--fill-0, #FFB9E4)" id="Ellipse 118"
                                                        r="2"/>
                                                <circle cx="87" cy="210" fill="var(--fill-0, #FFB9E4)" id="Ellipse 119"
                                                        r="2"/>
                                                <circle cx="104" cy="210" fill="var(--fill-0, #FFB9E4)" id="Ellipse 120"
                                                        r="2"/>
                                                <circle cx="121" cy="210" fill="var(--fill-0, #FFB9E4)" id="Ellipse 121"
                                                        r="2"/>
                                                <circle cx="138" cy="210" fill="var(--fill-0, #FFB9E4)" id="Ellipse 122"
                                                        r="2"/>
                                                <circle cx="155" cy="210" fill="var(--fill-0, #FFB9E4)" id="Ellipse 123"
                                                        r="2"/>
                                                <circle cx="2" cy="226" fill="var(--fill-0, #FFB9E4)" id="Ellipse 124"
                                                        r="2"/>
                                                <circle cx="19" cy="226" fill="var(--fill-0, #FFB9E4)" id="Ellipse 125"
                                                        r="2"/>
                                                <circle cx="36" cy="226" fill="var(--fill-0, #FFB9E4)" id="Ellipse 126"
                                                        r="2"/>
                                                <circle cx="53" cy="226" fill="var(--fill-0, #FFB9E4)" id="Ellipse 127"
                                                        r="2"/>
                                                <circle cx="70" cy="226" fill="var(--fill-0, #FFB9E4)" id="Ellipse 128"
                                                        r="2"/>
                                                <circle cx="87" cy="226" fill="var(--fill-0, #FFB9E4)" id="Ellipse 129"
                                                        r="2"/>
                                                <circle cx="104" cy="226" fill="var(--fill-0, #FFB9E4)" id="Ellipse 130"
                                                        r="2"/>
                                                <circle cx="121" cy="226" fill="var(--fill-0, #FFB9E4)" id="Ellipse 131"
                                                        r="2"/>
                                                <circle cx="19" cy="274" fill="var(--fill-0, #FFB9E4)" id="Ellipse 132"
                                                        r="2"/>
                                                <circle cx="36" cy="274" fill="var(--fill-0, #FFB9E4)" id="Ellipse 133"
                                                        r="2"/>
                                                <circle cx="53" cy="274" fill="var(--fill-0, #FFB9E4)" id="Ellipse 134"
                                                        r="2"/>
                                                <circle cx="70" cy="274" fill="var(--fill-0, #FFB9E4)" id="Ellipse 135"
                                                        r="2"/>
                                                <circle cx="87" cy="274" fill="var(--fill-0, #FFB9E4)" id="Ellipse 136"
                                                        r="2"/>
                                                <circle cx="104" cy="274" fill="var(--fill-0, #FFB9E4)" id="Ellipse 137"
                                                        r="2"/>
                                                <circle cx="121" cy="274" fill="var(--fill-0, #FFB9E4)" id="Ellipse 138"
                                                        r="2"/>
                                                <circle cx="138" cy="274" fill="var(--fill-0, #FFB9E4)" id="Ellipse 139"
                                                        r="2"/>
                                                <circle cx="155" cy="274" fill="var(--fill-0, #FFB9E4)" id="Ellipse 140"
                                                        r="2"/>
                                                <circle cx="2" cy="290" fill="var(--fill-0, #FFB9E4)" id="Ellipse 141"
                                                        r="2"/>
                                                <circle cx="19" cy="290" fill="var(--fill-0, #FFB9E4)" id="Ellipse 72"
                                                        r="2"/>
                                                <circle cx="36" cy="290" fill="var(--fill-0, #FFB9E4)" id="Ellipse 73"
                                                        r="2"/>
                                                <circle cx="53" cy="290" fill="var(--fill-0, #FFB9E4)" id="Ellipse 74"
                                                        r="2"/>
                                                <circle cx="70" cy="290" fill="var(--fill-0, #FFB9E4)" id="Ellipse 75"
                                                        r="2"/>
                                                <circle cx="87" cy="290" fill="var(--fill-0, #FFB9E4)" id="Ellipse 76"
                                                        r="2"/>
                                                <circle cx="104" cy="290" fill="var(--fill-0, #FFB9E4)" id="Ellipse 77"
                                                        r="2"/>
                                                <circle cx="155" cy="2" fill="var(--fill-0, #FFB9E4)" id="Ellipse 142"
                                                        r="2"/>
                                                <circle cx="2" cy="18" fill="var(--fill-0, #FFB9E4)" id="Ellipse 143"
                                                        r="2"/>
                                                <circle cx="19" cy="18" fill="var(--fill-0, #FFB9E4)" id="Ellipse 144"
                                                        r="2"/>
                                                <circle cx="36" cy="18" fill="var(--fill-0, #FFB9E4)" id="Ellipse 145"
                                                        r="2"/>
                                                <circle cx="53" cy="18" fill="var(--fill-0, #FFB9E4)" id="Ellipse 146"
                                                        r="2"/>
                                                <circle cx="70" cy="18" fill="var(--fill-0, #FFB9E4)" id="Ellipse 147"
                                                        r="2"/>
                                                <circle cx="87" cy="18" fill="var(--fill-0, #FFB9E4)" id="Ellipse 148"
                                                        r="2"/>
                                                <circle cx="104" cy="18" fill="var(--fill-0, #FFB9E4)" id="Ellipse 149"
                                                        r="2"/>
                                                <circle cx="121" cy="18" fill="var(--fill-0, #FFB9E4)" id="Ellipse 150"
                                                        r="2"/>
                                                <circle cx="138" cy="18" fill="var(--fill-0, #FFB9E4)" id="Ellipse 151"
                                                        r="2"/>
                                                <circle cx="155" cy="18" fill="var(--fill-0, #FFB9E4)" id="Ellipse 152"
                                                        r="2"/>
                                                <circle cx="2" cy="34" fill="var(--fill-0, #FFB9E4)" id="Ellipse 153"
                                                        r="2"/>
                                                <circle cx="19" cy="34" fill="var(--fill-0, #FFB9E4)" id="Ellipse 154"
                                                        r="2"/>
                                                <circle cx="36" cy="34" fill="var(--fill-0, #FFB9E4)" id="Ellipse 155"
                                                        r="2"/>
                                                <circle cx="53" cy="34" fill="var(--fill-0, #FFB9E4)" id="Ellipse 156"
                                                        r="2"/>
                                                <circle cx="70" cy="34" fill="var(--fill-0, #FFB9E4)" id="Ellipse 157"
                                                        r="2"/>
                                                <circle cx="87" cy="34" fill="var(--fill-0, #FFB9E4)" id="Ellipse 158"
                                                        r="2"/>
                                                <circle cx="104" cy="34" fill="var(--fill-0, #FFB9E4)" id="Ellipse 159"
                                                        r="2"/>
                                                <circle cx="121" cy="34" fill="var(--fill-0, #FFB9E4)" id="Ellipse 160"
                                                        r="2"/>
                                                <circle cx="138" cy="34" fill="var(--fill-0, #FFB9E4)" id="Ellipse 161"
                                                        r="2"/>
                                                <circle cx="155" cy="34" fill="var(--fill-0, #FFB9E4)" id="Ellipse 162"
                                                        r="2"/>
                                                <circle cx="2" cy="50" fill="var(--fill-0, #FFB9E4)" id="Ellipse 163"
                                                        r="2"/>
                                                <circle cx="19" cy="50" fill="var(--fill-0, #FFB9E4)" id="Ellipse 164"
                                                        r="2"/>
                                                <circle cx="36" cy="50" fill="var(--fill-0, #FFB9E4)" id="Ellipse 165"
                                                        r="2"/>
                                                <circle cx="53" cy="50" fill="var(--fill-0, #FFB9E4)" id="Ellipse 166"
                                                        r="2"/>
                                                <circle cx="70" cy="50" fill="var(--fill-0, #FFB9E4)" id="Ellipse 167"
                                                        r="2"/>
                                                <circle cx="87" cy="50" fill="var(--fill-0, #FFB9E4)" id="Ellipse 168"
                                                        r="2"/>
                                                <circle cx="2" cy="2" fill="var(--fill-0, #FFB9E4)" id="Ellipse 169"
                                                        r="2"/>
                                                <circle cx="138" cy="226" fill="var(--fill-0, #FFB9E4)" id="Ellipse 170"
                                                        r="2"/>
                                                <circle cx="155" cy="226" fill="var(--fill-0, #FFB9E4)" id="Ellipse 171"
                                                        r="2"/>
                                                <circle cx="2" cy="242" fill="var(--fill-0, #FFB9E4)" id="Ellipse 172"
                                                        r="2"/>
                                                <circle cx="19" cy="242" fill="var(--fill-0, #FFB9E4)" id="Ellipse 173"
                                                        r="2"/>
                                                <circle cx="36" cy="242" fill="var(--fill-0, #FFB9E4)" id="Ellipse 174"
                                                        r="2"/>
                                                <circle cx="53" cy="242" fill="var(--fill-0, #FFB9E4)" id="Ellipse 175"
                                                        r="2"/>
                                                <circle cx="70" cy="242" fill="var(--fill-0, #FFB9E4)" id="Ellipse 176"
                                                        r="2"/>
                                                <circle cx="87" cy="242" fill="var(--fill-0, #FFB9E4)" id="Ellipse 177"
                                                        r="2"/>
                                                <circle cx="104" cy="242" fill="var(--fill-0, #FFB9E4)" id="Ellipse 178"
                                                        r="2"/>
                                                <circle cx="121" cy="242" fill="var(--fill-0, #FFB9E4)" id="Ellipse 179"
                                                        r="2"/>
                                                <circle cx="138" cy="242" fill="var(--fill-0, #FFB9E4)" id="Ellipse 180"
                                                        r="2"/>
                                                <circle cx="155" cy="242" fill="var(--fill-0, #FFB9E4)" id="Ellipse 181"
                                                        r="2"/>
                                                <circle cx="2" cy="258" fill="var(--fill-0, #FFB9E4)" id="Ellipse 182"
                                                        r="2"/>
                                                <circle cx="19" cy="258" fill="var(--fill-0, #FFB9E4)" id="Ellipse 183"
                                                        r="2"/>
                                                <circle cx="36" cy="258" fill="var(--fill-0, #FFB9E4)" id="Ellipse 184"
                                                        r="2"/>
                                                <circle cx="53" cy="258" fill="var(--fill-0, #FFB9E4)" id="Ellipse 185"
                                                        r="2"/>
                                                <circle cx="70" cy="258" fill="var(--fill-0, #FFB9E4)" id="Ellipse 186"
                                                        r="2"/>
                                                <circle cx="87" cy="258" fill="var(--fill-0, #FFB9E4)" id="Ellipse 187"
                                                        r="2"/>
                                                <circle cx="104" cy="258" fill="var(--fill-0, #FFB9E4)" id="Ellipse 188"
                                                        r="2"/>
                                                <circle cx="121" cy="258" fill="var(--fill-0, #FFB9E4)" id="Ellipse 189"
                                                        r="2"/>
                                                <circle cx="138" cy="258" fill="var(--fill-0, #FFB9E4)" id="Ellipse 190"
                                                        r="2"/>
                                                <circle cx="155" cy="258" fill="var(--fill-0, #FFB9E4)" id="Ellipse 191"
                                                        r="2"/>
                                                <circle cx="2" cy="274" fill="var(--fill-0, #FFB9E4)" id="Ellipse 192"
                                                        r="2"/>
                                                <circle cx="121" cy="290" fill="var(--fill-0, #FFB9E4)" id="Ellipse 193"
                                                        r="2"/>
                                                <circle cx="138" cy="290" fill="var(--fill-0, #FFB9E4)" id="Ellipse 194"
                                                        r="2"/>
                                                <circle cx="155" cy="290" fill="var(--fill-0, #FFB9E4)" id="Ellipse 195"
                                                        r="2"/>
                                            </BackgroundImage6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="[grid-area:1_/_1] content-stretch flex flex-col gap-[32px] items-start ml-[60px] mt-[66px] relative w-[986px]">
                                <div
                                    className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start leading-[0] not-italic relative shrink-0 text-[#333] text-nowrap w-full">
                                    <div className="flex flex-col justify-center relative shrink-0 text-[58px]">
                                        <p className="leading-[56px] text-nowrap" style={{ fontSize:"58px", fontWeight:"300" }}>Your Mental Health Matters</p>
                                    </div>
                                    <div
                                        className="flex flex-col justify-center leading-[32px] relative shrink-0 text-[19px]">
                                        <p className="mb-0" style={{ fontSize:"19px", fontWeight:"300" }}>Taking the first step can feel difficult—but you don’t have
                                            to do it
                                            alone. Support,</p>
                                        <p>understanding, and compassionate care are within reach.</p>
                                    </div>
                                </div>
                                <div
                                    className="content-stretch flex items-start relative shrink-0 gap-[16px]"
                                    data-name="button-group">
                                    <button
                                        type="button"
                                        onClick={onScheduleConsultation}
                                        className="relative group flex h-[56px] w-[273px] items-center justify-center
             p-[16px] rounded-[11px] shrink-0 cursor-pointer
             overflow-hidden transition-all duration-200"
                                    >
                                        {/* Default gradient */}
                                        <span
                                            className="absolute inset-0 transition-opacity duration-300"
                                            style={{
                                                background:
                                                    "linear-gradient(126.084deg, rgb(254, 103, 197) 12.215%, rgb(152, 62, 118) 126.73%)",
                                            }}
                                        />

                                        {/* Hover gradient */}
                                        <span
                                            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            style={{
                                                background:
                                                    "linear-gradient(270deg, #690242 -35.38%, #700346 108.59%)",
                                            }}
                                        />

                                        {/* Button content */}
                                        <div className="relative z-10 flex items-center">
                                            <TextContainerBackgroundImageAndText text="Schedule a Consultation"/>

                                            <div
                                                className="relative shrink-0 size-[24px]"
                                                style={{ marginLeft: "-15px" }}
                                                data-name="icon / jam-icons / outline & logos / arrow-right"
                                            >
                                                <svg
                                                    className="block size-full"
                                                    fill="none"
                                                    preserveAspectRatio="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        d="M5 12h12"
                                                        stroke="#FFFFFF"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                    />
                                                    <path
                                                        d="M13 6l6 6-6 6"
                                                        stroke="#FFFFFF"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </button>


                                    <button
                                        type="button"
                                        className="flex w-[273px] h-[56px] items-center justify-center rounded-[11px]
             border-[2px] border-[#983E76]
             bg-transparent text-[#983E76] font-medium text-[16px] tracking-[0.5px]
             transition-all duration-200 hover:bg-[linear-gradient(98.15deg,#FE67C5_12.21%,#983E76_126.73%)]
             hover:text-white cursor-pointer"
                                        onClick={() => {
                                            const phone = "971501234567";
                                            const message = encodeURIComponent("Hello! I want to speak with a professional.");
                                            window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                                        }}
                                    >
                                        Speak with a Professional
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={footerRef}
                 className="absolute bottom-0 content-stretch flex h-[422px] items-start justify-center left-1/2 pb-[40px] pt-[20px] px-[120px] translate-x-[-50%]"
                 data-name="footer"
                 style={{
                     top: measuredFooterTop ?? undefined,
                     bottom: measuredFooterTop !== null ? "auto" : undefined,
                     width: screenWidth < 1368 ? "auto" : "100%",
                     backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(116.042deg, rgb(254, 103, 197) 12.215%, rgb(152, 62, 118) 126.73%)"
                 }}>
                <div className="w-[1128px] max-w-[1128px] flex flex-col text-white">
                    <div className="flex items-start justify-between pt-[36px]">
                        <div className="flex flex-col gap-[24px]">
                            <div
                                className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative">
                                <div
                                    className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[51px] mt-[25px] not-italic pb-[6px] pt-0 px-0 relative text-white w-[220px]">
                                    <div
                                        className="flex flex-col justify-center mb-[-6px] relative shrink-0 text-[16px] tracking-[4.84px] w-full"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        <p className="leading-[24px]">MOONLIGHT</p>
                                    </div>
                                    <div
                                        className="flex flex-col justify-center mb-[-6px] relative shrink-0 text-[10px] tracking-[2px] w-full"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        <p className="leading-[18px]">BEHAVIORAL CENTER</p>
                                    </div>
                                </div>
                                <div
                                    className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative size-[85.169px]">
                                    <div
                                        className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] h-[114.604px] inline-grid ml-[7.66px] mt-[5.4px] place-items-start relative w-[135.354px]">
                                        <div
                                            className="[grid-area:1_/_1] flex h-[87.552px] items-center justify-center ml-[-18.63px] mt-[-7.56px] relative w-[84.069px]"
                                            style={{
                                                "--transform-inner-width": "0",
                                                "--transform-inner-height": "0"
                                            } as React.CSSProperties}>
                                            <div className="flex-none rotate-[1.53deg]">
                                                <div
                                                    className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] h-[85.398px] mask-position-[13.124px,_17.778px_4.61px,_8.099px] mask-size-[80.863px_80.863px,_135.269px_114.52px] relative w-[81.817px]"
                                                    style={{maskImage: `url('${imgVector1}'), url('${imgVector2}')`}}>
                                                    <div className="absolute inset-0"
                                                         style={{"--fill-0": "rgba(255, 255, 255, 1)"} as React.CSSProperties}>
                                                        <svg className="block size-full" fill="none"
                                                             preserveAspectRatio="none"
                                                             viewBox="0 0 81.8175 85.3977">
                                                            <path d={svgPaths.p2aafb700} fill="var(--fill-0, white)"
                                                                  id="Vector 1"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] opacity-90 w-[320px]">
                                <p>Compassionate care. Confidential support.</p>
                                <p>Lasting wellness.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-[90px]">
                            <div className="flex flex-col gap-[16px]">
                                <div className="font-['Inter:Medium',sans-serif] font-medium text-[14px]">
                                    <p className="leading-[24px]">Quick Links</p>
                                </div>
                                <div
                                    className="flex flex-col gap-[12px] font-['Inter:Regular',sans-serif] font-normal text-[13px] opacity-90">
                                    <button type="button" className="text-left leading-[24px] hover:opacity-80"
                                            onClick={() => scrollToSection("conditions")}>Conditions
                                    </button>
                                    <button type="button" className="text-left leading-[24px] hover:opacity-80"
                                            onClick={() => scrollToSection("our-approach")}>Our Approach
                                    </button>
                                    <button type="button" className="text-left leading-[24px] hover:opacity-80"
                                            onClick={() => scrollToSection("services")}>Services
                                    </button>
                                    <button type="button" className="text-left leading-[24px] hover:opacity-80"
                                            onClick={() => scrollToSection("why-choose-us")}>Why Choose Us
                                    </button>
                                    <button type="button" className="text-left leading-[24px] hover:opacity-80"
                                            onClick={() => scrollToSection("faq")}>FAQ
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[16px] w-[320px]">
                                <div className="font-['Inter:Medium',sans-serif] font-medium text-[14px]">
                                    <p className="leading-[24px]">Contact Us</p>
                                </div>
                                <div
                                    className="flex flex-col gap-[10px] font-['Inter:Regular',sans-serif] font-normal text-[13px] opacity-90">
                                    <a className="leading-[24px] hover:opacity-80"
                                       href="mailto:info@moonlightbc.com">info@moonlightbc.com</a>
                                    <a className="leading-[24px] hover:opacity-80" href="tel:+16146551015">+1
                                        614-655-1015</a>
                                    <div className="leading-[24px]">(380)215-3812</div>
                                    <div className="leading-[20px]">4889 Sinclair Rd Suite 112,<br/>Columbus, OH 43229
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[28px] h-[1px] w-full bg-[rgba(255,255,255,0.35)]"/>

                    <div className="flex items-center justify-between py-[18px]">
                        <div className="font-['Inter:Regular',sans-serif] font-normal text-[14px] opacity-90">
                            <p className="leading-[24px]">© Moonlight Behavioral Center. All rights reserved.</p>
                        </div>

                        <div className="flex items-center gap-[16px]">
                            <button type="button" className="transition-opacity hover:opacity-80">
                                <BackgroundImage5>
                                    <g id="Link - Our Instagram account â SVG">
                                        <path d={svgPaths.p2bb89000} fill="var(--fill-0, white)" id="Vector"/>
                                    </g>
                                </BackgroundImage5>
                            </button>
                            <button type="button" className="transition-opacity hover:opacity-80">
                                <BackgroundImage5>
                                    <g id="Link - Our Youtube channel â SVG">
                                        <path d={svgPaths.p3b1c8e00} fill="var(--fill-0, white)" id="Vector"/>
                                    </g>
                                </BackgroundImage5>
                            </button>
                            <button type="button" className="transition-opacity hover:opacity-80">
                                <div className="overflow-clip relative shrink-0 size-[24px]">
                                    <div className="absolute contents inset-[12.5%]">
                                        <div
                                            className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px] mask-size-[18px_18px]"
                                            style={{maskImage: `url('${imgGroup}')`}}>
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none"
                                                 viewBox="0 0 14 14">
                                                <g id="Group">
                                                    <path d={svgPaths.p2da8f280} fill="var(--fill-0, white)"
                                                          id="Vector"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button type="button" className="transition-opacity hover:opacity-80">
                                <BackgroundImage5>
                                    <g id="Link - Our Twitter account â SVG">
                                        <path d={svgPaths.p258fc4c0} fill="var(--fill-0, white)" id="Vector"/>
                                    </g>
                                </BackgroundImage5>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
