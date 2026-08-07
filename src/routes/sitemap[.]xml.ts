import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { articles } from "@/data/articles";
import { formations } from "@/data/formations";
import { products } from "@/data/products";

// TODO : remplacer par l'URL du site une fois le nom de projet ou le domaine défini.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/guides", changefreq: "weekly", priority: "0.9" },
          { path: "/blog", changefreq: "weekly", priority: "0.9" },
          { path: "/cours-presentiel", changefreq: "monthly", priority: "0.8" },
          { path: "/micro-formations", changefreq: "monthly", priority: "0.8" },
          { path: "/a-propos", changefreq: "yearly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.6" },
          { path: "/mentions-legales", changefreq: "yearly", priority: "0.3" },
          { path: "/politique-confidentialite", changefreq: "yearly", priority: "0.3" },
          { path: "/cgv", changefreq: "yearly", priority: "0.3" },
          ...products.map((p) => ({
            path: `/guides/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...articles.map((a) => ({
            path: `/blog/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...formations.map((f) => ({
            path: `/micro-formations/${f.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});