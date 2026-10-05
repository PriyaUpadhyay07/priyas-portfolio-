# Architecture Decisions

- Keep portfolio project content in grouped configuration inside `Projects.tsx` so category order, cards, and tool attribution stay consistent.
- Store project previews and tool marks as local imported assets so Vite consistently serves them in preview and production.
- Store uploaded project walkthroughs, gallery imagery, and official remote brand assets as CDN pointers; present project context in a compact accessible bottom drawer.