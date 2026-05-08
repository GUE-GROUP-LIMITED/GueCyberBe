import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Gue Cyber";
const DEFAULT_TITLE = "Gue Cyber | Cybersecurity, Software Engineering and AI";
const DEFAULT_DESCRIPTION =
  "Gue Cyber delivers cybersecurity, software engineering, AI automation, cloud and DevOps, IT consulting, enterprise training, and technology procurement services.";
const DEFAULT_IMAGE = "/img/gue (5).jpg";

const routeMeta = {
  "/": {
    title: "Gue Cyber | Cybersecurity & IT Solutions",
    description:
      "Gue Cyber provides practical cybersecurity, IT consulting and software solutions to help small and medium businesses operate securely and reliably.",
  },
  "/about": {
    title: "About | Gue Cyber",
    description:
      "Learn about Gue Cyber, our mission, values, and approach to building resilient digital operations across cybersecurity, software engineering, and AI.",
  },
  "/services": {
    title: "Services | Gue Cyber",
    description:
      "Explore Gue Cyber service offerings across cybersecurity, software engineering, AI automation, cloud and DevOps, consulting, training, and tech procurement.",
  },
  "/contact": {
    title: "Contact | Gue Cyber",
    description:
      "Contact Gue Cyber to discuss cybersecurity, software engineering, AI, cloud, DevOps, and IT transformation priorities.",
  },
  "/careers": {
    title: "Careers | Gue Cyber",
    description:
      "Explore career opportunities at Gue Cyber across cybersecurity, cloud and DevOps, software engineering, AI, IT support, training, and procurement operations.",
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
  let tag = document.querySelector(`meta[name=\"${name}\"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  let tag = document.querySelector(`meta[property=\"${property}\"]`);
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
