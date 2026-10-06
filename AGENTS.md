# Architecture Decisions

- Keep portfolio project content in grouped configuration inside `Projects.tsx` so category order, cards, and tool attribution stay consistent.
- Store project previews and tool marks as local imported assets so Vite consistently serves them in preview and production.
- Keep uploaded project walkthroughs and gallery imagery as CDN pointers, proxy their asset paths to the preview origin during local development, and present project context in a compact accessible bottom drawer.