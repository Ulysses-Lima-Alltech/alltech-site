import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";

const baseUrl = "https://alltechbr.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/solutions", "/about", "/contact"];

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}` })),
    ...projects.map((project) => ({ url: `${baseUrl}/projects/${project.slug}` })),
  ];
}
