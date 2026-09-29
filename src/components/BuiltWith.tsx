import figmaLogo from "@/assets/figma-logo.svg";
import antigravityLogo from "@/assets/google-antigravity.png";
import netlifyLogo from "@/assets/netlify-logo.png";
import replitLogo from "@/assets/tool-logos/replit.svg";
import vercelLogo from "@/assets/tool-logos/vercel.svg";
import claudeLogo from "@/assets/tool-logos/claude.svg";
import openaiLogo from "@/assets/tool-logos/openai.svg";
import supabaseLogo from "@/assets/tool-logos/supabase.svg";
import framerLogo from "@/assets/tool-logos/framer.svg";

interface Tool {
  name: string;
  logo: string;
}

const TOOL_LOGOS: Record<string, string> = {
  Lovable: "https://lovable.dev/favicon.ico",
  Supabase: supabaseLogo,
  Framer: framerLogo,
  Figma: figmaLogo,
  "Google Antigravity": antigravityLogo,
  Netlify: netlifyLogo,
  Replit: replitLogo,
  Vercel: vercelLogo,
  Claude: claudeLogo,
  GPT: openaiLogo,
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
