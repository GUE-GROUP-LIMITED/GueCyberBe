import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Gue Cyber";
const DEFAULT_TITLE = "Gue Cyber | IT Consultancy, Software Development, Security Awareness";
const DEFAULT_DESCRIPTION =
  "Gue Cyber delivers IT consultancy, software development, QA support, cloud setup, and practical security awareness for Belgian organisations and individuals.";
const DEFAULT_IMAGE = "/img/gue (5).jpg";

const routeMeta = {
  "/": {
    title: "Gue Cyber | IT Consultancy, Software Development, Security Awareness",
    description:
      "Gue Cyber provides practical IT consultancy, software development, and security awareness services for Belgian SMEs and individuals.",
  },
  "/about": {
    title: "About | Gue Cyber",
    description:
      "Learn about Gue Cyber, the founder-led service model, and the practical approach behind our IT, software, and security work.",
  },
  "/services": {
    title: "Services | Gue Cyber",
    description:
      "Explore Gue Cyber services across IT consultancy, software development, QA, cloud support, and security awareness.",
  },
  "/contact": {
    title: "Contact | Gue Cyber",
    description:
      "Contact Gue Cyber to discuss IT support, software projects, cloud setup, or security assessment needs.",
  },
  "/careers": {
    title: "Careers | Gue Cyber",
    description:
      "Explore career opportunities at Gue Cyber across software development, cloud support, and technical delivery.",
  },
  "/assessment": {
    title: "Assessment | Gue Cyber",
    description: "Request a free introductory security assessment to identify the most useful next technical or security steps.",
  },
  "/privacy": {
    title: "Privacy Policy | Gue Cyber",
    description: "Read the Gue Cyber privacy policy and data handling practices.",
  },
  "/terms": {
    title: "Terms | Gue Cyber",
    description: "Review terms and conditions for using Gue Cyber website and services.",
  },
  "/cookie-policy": {
    title: "Cookie Policy | Gue Cyber",
    description: "Understand how Gue Cyber uses cookies and similar technologies.",
  },
};

function upsertMetaByName(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(url) {
  let tag = document.querySelector("link[rel='canonical']");
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", url);
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const page = routeMeta[location.pathname] || {};
    const title = page.title || DEFAULT_TITLE;
    const description = page.description || DEFAULT_DESCRIPTION;
    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    const imageUrl = `${window.location.origin}${DEFAULT_IMAGE}`;

    document.title = title;
    upsertMetaByName("description", description);
    upsertMetaByName("robots", "index,follow,max-image-preview:large");

    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:site_name", SITE_NAME);
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:image", imageUrl);
    upsertMetaByProperty("og:locale", "en");

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", imageUrl);

    upsertCanonical(canonicalUrl);
  }, [location.pathname]);

  return null;
}
