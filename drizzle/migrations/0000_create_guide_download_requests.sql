CREATE TABLE public.guide_download_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  guide_slug text NOT NULL,
  guide_title text NOT NULL,
  article_slug text,
  article_title text,
  source text NOT NULL DEFAULT 'article_banner',
  newsletter_opt_in boolean NOT NULL DEFAULT false,
  consent_text_version text,
  ip_hash text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  download_completed_at timestamptz
);

CREATE INDEX idx_guide_download_requests_created_at ON public.guide_download_requests (created_at DESC);
CREATE INDEX idx_guide_download_requests_ip_hash ON public.guide_download_requests (ip_hash, created_at DESC);

-- Aucune lecture ni écriture publique : seules les fonctions serveur (service_role) y accèdent.
GRANT ALL ON public.guide_download_requests TO service_role;

ALTER TABLE public.guide_download_requests ENABLE ROW LEVEL SECURITY;

-- Pas de policy pour anon/authenticated : table verrouillée côté client.
