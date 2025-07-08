// Design tokens pour customisation
export interface DesignTokens {
  colors: {
    brand: string; // The main brand color (e.g., dark teal)
    accent: string; // The accent color for CTAs (e.g., bright cyan)
    background: string; // Background color
    text: string; // Text color
  };
  fonts: {
    heading: string;
    body: string;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}

// Informations entreprise
export interface CompanyInfo {
  name: string;
  phone?: string;
  email?: string;
  address?: string;
  hours?: string;
  isEmergency24h?: boolean;
  slogan?: string;
  isLicensed?: boolean;
  isInsured?: boolean;
}

// Service individuel
export interface Service {
  name: string;
  description?: string;
  isEmergency?: boolean;
  imageUrl?: string;
}

// Zone géographique desservie
export interface ServiceArea {
  name: string;
  isMain?: boolean;
}

// Offre spéciale
export interface SpecialOffer {
  title: string;
  description: string;
  discount: string;
  validUntil?: string;
  conditions?: string;
}

// Engagement/Garantie
export interface Commitment {
  title: string;
  description: string;
  icon?: string;
}

export interface AboutBlock {
  title: string;
  text: string;
  ctaText: string;
  imageUrl: string;
}

// Contenu du site étendu
export interface WebsiteContent {
  company: CompanyInfo;
  hero: {
    title: string;
    subtitle: string;
    ctaText?: string;
    formTitle?: string;
    imageUrl?: string;
  };
  services: Service[];
  mascot?: {
    imageUrl?: string;
    name?: string;
    messages: {
      urgent: string;
      emergency: string;
    };
  };
  aboutBlock: AboutBlock;
  offers?: SpecialOffer[];
  serviceAreas?: ServiceArea[];
  areasServed?: ServiceArea[]; // Alternative name for serviceAreas
  whyWait: {
    title: string;
    message: string;
    ctaText?: string;
  };
  about?: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email?: string;
    emergencyPhone?: string;
  };
  footer?: {
    copyright: string;
    links?: { text: string; url: string }[];
    license?: string;
    insurance?: string;
  };
}

// Données complètes du site
export interface PlumbingWebsiteData {
  content: WebsiteContent;
  design: DesignTokens;
  logoUrl?: string;
  templateStyle?: "modern" | "classic" | "emergency" | "premium";
}

// Props pour les templates
export interface TemplateProps {
  data: PlumbingWebsiteData;
  isPreview?: boolean;
}
