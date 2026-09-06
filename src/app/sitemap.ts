import type { MetadataRoute } from "next";

import { allLicensePlans } from "@/data/licensing";
import { projects } from "@/data/projects";

const baseUrl = "https://alltechbr.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/solutions", "/about", "/contact"];

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}` })),
    ...projects.map((project) => ({ url: `${baseUrl}/projects/${project.slug}` })),
    ...allLicensePlans.map(({ plan }) => ({ url: `${baseUrl}/licenciamento/${plan.slug}` })),
  ];
}
