import React from 'react';

interface BrandLogoProps {
  className?: string;
  color?: string;
}

export const CiscoLogo: React.FC<BrandLogoProps> = ({ className = "h-12" }) => (
  <img src="/partners/Cisco_logo.svg" alt="Cisco" className={className} />
);

export const HoneywellLogo: React.FC<BrandLogoProps> = ({ className = "h-10" }) => (
  <img src="/partners/Honeywell_logo.svg" alt="Honeywell" className={className} />
);

export const MicrosoftLogo: React.FC<BrandLogoProps> = ({ className = "h-10" }) => (
  <img src="/partners/Microsoft_logo.svg" alt="Microsoft" className={className} />
);

export const OracleLogo: React.FC<BrandLogoProps> = ({ className = "h-8" }) => (
  <img src="/partners/Oracle_logo.svg" alt="Oracle" className={className} />
);

export const SapLogo: React.FC<BrandLogoProps> = ({ className = "h-12" }) => (
  <img src="/partners/SAP_2011_logo.svg" alt="SAP" className={className} />
);

export const OdooLogo: React.FC<BrandLogoProps> = ({ className = "h-12" }) => (
  <img src="/partners/Odoo_logo.svg" alt="Odoo" className={className} />
);

export const AzureLogo: React.FC<BrandLogoProps> = ({ className = "h-12" }) => (
  <img src="/partners/Microsoft_Azure.svg" alt="Azure" className={className} />
);

export const AwsLogo: React.FC<BrandLogoProps> = ({ className = "h-12" }) => (
  <img src="/partners/Amazon_Web_Services_Logo.svg" alt="AWS" className={className} />
);

export const ReactLogo: React.FC<BrandLogoProps> = ({ className = "h-12" }) => (
  <img src="/partners/React-icon.svg" alt="React" className={className} />
);

export const PythonLogo: React.FC<BrandLogoProps> = ({ className = "h-12" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50,5c-20,0-18,9-18,9l0.1,8.1h18.2v2.6H25.1c0,0-14.3-1.6-14.3,18.2c0,19.8,12.5,19.1,12.5,19.1h7.4v-10.4c0,0-0.3-12.4,12.2-12.4h18.4c0,0,11.8,0.1,11.8-11.3V16.3c0,0,1.4-11.3-13.2-11.3H50z M40.2,12.2c1.4,0,2.6,1.2,2.6,2.6s-1.2,2.6-2.6,2.6c-1.4,0-2.6-1.2-2.6-2.6S38.8,12.2,40.2,12.2z" fill="#3776ab" />
    <path d="M50,95c20,0,18-9,18-9l-0.1-8.1H49.7v-2.6h25.2c0,0,14.3,1.6,14.3-18.2c0-19.8-12.5-19.1-12.5-19.1h-7.4v10.4c0,0,0.3,12.4-12.2,12.4H48.7c0,0-11.8-0.1-11.8,11.3v11.5c0,0-1.4,11.3,13.2,11.3H50z M59.8,87.8c-1.4,0-2.6-1.2-2.6-2.6c0-1.4,1.2-2.6,2.6-2.6c1.4,0,2.6,1.2,2.6,2.6C62.4,86.6,61.2,87.8,59.8,87.8z" fill="#ffde57" />
  </svg>
);
