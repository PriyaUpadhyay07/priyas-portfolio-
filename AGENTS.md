# Architecture Decisions

- Keep portfolio project content in grouped configuration inside `Projects.tsx` so category order, cards, and tool attribution stay consistent.
- Store project previews and tool marks as local imported assets so Vite consistently serves them in preview and production.
- Store uploaded project walkthroughs and gallery imagery as CDN asset pointers, and open project context in an accessible bottom drawer.