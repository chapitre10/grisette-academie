import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

import { processGuideDownload, type GuideDownloadResult } from "./guideDownload.server";

const schema = z.object({
  guideSlug: z.string().min(1).max(120),
  email: z.string().min(3).max(255),
  newsletterOptIn: z.boolean().default(false),
  articleSlug: z.string().max(160).optional(),
  articleTitle: z.string().max(300).optional(),
  source: z.string().max(60).optional(),
  trap: z.string().max(200).optional(),
});

export const requestGuideDownload = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }): Promise<GuideDownloadResult> => {
    const ip =
      getRequestHeader("cf-connecting-ip") ??
      getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ??
      new URL(getRequest().url).hostname;
    return processGuideDownload(data, ip ?? null);
  });
