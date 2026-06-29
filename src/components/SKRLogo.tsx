import React from "react";

export default function SKRLogo({ className = "h-8 w-8 text-white" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Industrial Hexagonal Frame */}
      <path
        d="M60 6 L108 30 V70 L60 94 L12 70 V30 Z"
        stroke="#F97316"
        strokeWidth="5"
        strokeLinejoin="round"
        className="opacity-90"
      />
      
      {/* Internal Grid Lines (Subtle engineering blueprint look) */}
      <line x1="60" y1="6" x2="60" y2="94" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-15" />
      <line x1="12" y1="30" x2="108" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-15" />
      <line x1="12" y1="70" x2="108" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-15" />

      {/* Letter S (Left) */}
      <path
        d="M40 35 H26 V48 H40 V61 H26"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Letter K (Center) */}
      <path
        d="M52 32 V64"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M66 32 L52 48 L66 64"
        stroke="#F97316"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Letter R (Right) */}
      <path
        d="M78 32 V64"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M78 34 H88 C93 34, 93 48, 88 48 H78"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M84 48 L92 64"
        stroke="#F97316"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
