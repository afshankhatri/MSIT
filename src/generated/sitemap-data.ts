/* This file is auto-generated. Do not edit by hand. */

export interface SitemapLink {
  label: string;
  to: string;
}

export interface SitemapSubsection {
  key: string;
  label: string;
  description: string;
  links: SitemapLink[];
}

export interface SitemapSection {
  key: string;
  label: string;
  description: string;
  links?: SitemapLink[];
  subsections?: SitemapSubsection[];
}

export const sitemapSections: SitemapSection[] = [
  {
    "key": "core",
    "label": "Core Pages",
    "description": "Essential pages for browsing the site and getting in touch.",
    "links": [
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "About Us",
        "to": "/about"
      },
      {
        "label": "Services",
        "to": "/services"
      },
      {
        "label": "Testimonials",
        "to": "/testimonials"
      },
      {
        "label": "FAQ",
        "to": "/faq"
      },
      {
        "label": "Contact",
        "to": "/contact"
      },
      {
        "label": "Locations",
        "to": "/locations"
      },
      {
        "label": "HTML Sitemap",
        "to": "/sitemap"
      }
    ]
  },
  {
    "key": "services",
    "label": "Services",
    "description": "All public service pages currently available on the site.",
    "links": [
      {
        "label": "Laptop Repair",
        "to": "/services/laptop-repair"
      },
      {
        "label": "Computer Repair",
        "to": "/services/computer-maintenance"
      },
      {
        "label": "AMC Services",
        "to": "/services/amc-services"
      },
      {
        "label": "Refurbished Sales",
        "to": "/services/refurbished-sales"
      },
      {
        "label": "Tablet Services",
        "to": "/services/tablet-services"
      },
      {
        "label": "Android Services",
        "to": "/services/android-services"
      },
      {
        "label": "iOS Services",
        "to": "/services/ios-services"
      },
      {
        "label": "Hardware Support",
        "to": "/services/hardware-support"
      },
      {
        "label": "Software Support",
        "to": "/services/software-support"
      },
      {
        "label": "E-Waste",
        "to": "/services/e-waste-management"
      }
    ]
  },
  {
    "key": "locations",
    "label": "Locations",
    "description": "Branch pages for our public service locations.",
    "links": [
      {
        "label": "Dongri Branch",
        "to": "/locations/SOBO"
      }
    ]
  },
  {
    "key": "specialized",
    "label": "Specialized Pages",
    "description": "SEO landing pages grouped by topic so users can scan them quickly.",
    "subsections": [
      {
        "key": "buy",
        "label": "Buy Pages",
        "description": "Refurbished and purchase-focused pages.",
        "links": [
          {
            "label": "Buy Old Laptop",
            "to": "/buy-old-laptop"
          },
          {
            "label": "Second Hand Laptop Mumbai",
            "to": "/second-hand-laptop-mumbai"
          },
          {
            "label": "Used Laptops for Sale",
            "to": "/used-laptops-for-sale"
          },
          {
            "label": "Buy Used Laptops",
            "to": "/buy-used-laptops"
          }
        ]
      },
      {
        "key": "sell",
        "label": "Sell Pages",
        "description": "Trade-in and resale pages.",
        "links": [
          {
            "label": "Sell Old Laptop",
            "to": "/sell-old-laptop"
          },
          {
            "label": "Sell Used Laptops",
            "to": "/sell-used-laptops"
          }
        ]
      },
      {
        "key": "repair",
        "label": "Repair Pages",
        "description": "Brand and service-specific repair pages.",
        "links": [
          {
            "label": "PC Repair in Mumbai",
            "to": "/pc-repair-in-mumbai"
          },
          {
            "label": "HP Laptop Repair Service",
            "to": "/hp-laptop-repair-service"
          },
          {
            "label": "HP Computer Repair",
            "to": "/hp-computer-repair"
          },
          {
            "label": "Computer Repair in Mumbai",
            "to": "/computer-repair-in-mumbai"
          },
          {
            "label": "Lenovo Computer Repair",
            "to": "/lenovo-computer-repair"
          },
          {
            "label": "Lenovo Laptop Repair",
            "to": "/lenovo-laptop-repair"
          },
          {
            "label": "Dell Laptop Repair",
            "to": "/dell-laptop-repair"
          }
        ]
      },
      {
        "key": "service",
        "label": "Service Pages",
        "description": "Specialized support and maintenance pages.",
        "links": [
          {
            "label": "Computer AMC Service",
            "to": "/computer-amc-service"
          }
        ]
      }
    ]
  }
];
