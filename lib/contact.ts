export interface ContactSEO {
  meta_title: string;
  meta_description: string;
  meta_key: string;
}

export interface ContactBanner {
  title_first: string;
  title_highlight: string;
  image: string | null;
}

export interface ContactAddress {
  heading: string;
  description: string;
}

export interface OperatingHoursTransit {
  heading: string;
  description: string;
}

export interface ContactDetails {
  address?: ContactAddress[];
  phone1?: string;
  email1?: string;
  email2?: string;
  email3?: string;
  operating_hrs_transit?: OperatingHoursTransit[];
}

export interface ContactPageData {
  success: boolean;
  seo: ContactSEO;
  banner: ContactBanner;
  data: ContactDetails;
}

// --------------------------------------------------
// Get Contact Page Data
// --------------------------------------------------

export async function getContact(): Promise<ContactPageData | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

    if (!apiUrl) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const response = await fetch(`${apiUrl}/contact`);

    if (!response.ok) {
      throw new Error(`Contact API error: ${response.status}`);
    }

    const result: ContactPageData = await response.json();

    if (!result.success) {
      return null;
    }

    return result;
  } catch (error) {
    console.error("Failed to fetch contact data:", error);
    return null;
  }
}
