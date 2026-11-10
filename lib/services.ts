// --------------------------------------------------
// Services SEO
// --------------------------------------------------

export interface ServicesSEO {
  meta_title: string;
  meta_description: string;
  meta_key: string;
}

// --------------------------------------------------
// Services Banner
// --------------------------------------------------

export interface ServicesBanner {
  title_first: string;
  title_highlight: string;
  image: string | null;
}

// --------------------------------------------------
// Individual Service
// --------------------------------------------------

export interface ServiceItem {
  id: number;
  title: string;

  // Extracted from HTML description
  tagline: string;
  subtitle: string;
  description_text: string;
  features: string[];

  // Original HTML description
  description: string;

  image: string | null;
}

// --------------------------------------------------
// Services Page API Response
// --------------------------------------------------

export interface ServicesPageData {
  success: boolean;
  seo: ServicesSEO;
  banner: ServicesBanner;
  services: ServiceItem[];
}

// --------------------------------------------------
// Get Services API
// --------------------------------------------------

export async function getServices(): Promise<ServicesPageData | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

    if (!apiUrl) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const response = await fetch(`${apiUrl}/services`);

    if (!response.ok) {
      throw new Error(`Services API error: ${response.status}`);
    }

    const result: ServicesPageData = await response.json();

    if (!result.success) {
      return null;
    }

    return result;
  } catch (error) {
    console.error("Failed to fetch services data:", error);
    return null;
  }
}
