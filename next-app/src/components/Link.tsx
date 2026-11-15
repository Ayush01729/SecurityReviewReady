import React from "react";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  prefetch?: boolean;
}

/**
 * Universal Link Component for Next.js Static Export.
 *
 * In Next.js static exports (`output: "export"`), `next/link` intercepts clicks
 * and attempts client-side React Server Component (RSC) payload fetching via `?_rsc=...`.
 * Because static servers return `text/html` instead of the streaming RSC flight protocol,
 * Next.js silently aborts client-side transitions and swallows user clicks.
 *
 * This component renders a standard semantic `<a>` tag that guarantees 100% reliable
 * browser navigation, supports Ctrl+click / middle-click / new tab, avoids RSC fetch stalls,
 * and maintains full SEO crawlability for Googlebot and LLMs.
 */
export function Link({ href, children, prefetch: _prefetch, ...props }: LinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

export default Link;
