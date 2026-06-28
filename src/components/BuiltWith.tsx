interface Tool {
  name: string;
  logo: string;
}

const TOOL_LOGOS: Record<string, string> = {
  Lovable: "https://lovable.dev/favicon.ico",
  Supabase: "https://cdn.simpleicons.org/supabase/3FCF8E",
  Framer: "https://cdn.simpleicons.org/framer/0055FF",
  Figma: "https://cdn.simpleicons.org/figma/F24E1E",
  "v0 by Vercel": "https://cdn.simpleicons.org/v0/000000",
  "Google AI Studio": "https://cdn.simpleicons.org/googlegemini/8E75B2",
};

const BuiltWith = ({ tools }: { tools: string[] }) => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
      <span className="text-xs sm:text-sm font-semibold text-foreground/70">Built with</span>
      <div className="flex items-center gap-2">
        {tools.map((tool) => (
          <div
            key={tool}
            title={tool}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-foreground/10 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform"
          >
            <img
              src={TOOL_LOGOS[tool] || ""}
              alt={`${tool} logo`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuiltWith;
