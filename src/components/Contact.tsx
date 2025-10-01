import { Mail, Linkedin, Twitter, Download } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "upadhyaypriya974@gmail.com",
      link: "mailto:upadhyaypriya974@gmail.com",
      color: "bg-highlight-yellow",
    },
    {
      icon: Mail,
      label: "Email",
      value: "upadhyaypriya479@gmail.com",
      link: "mailto:upadhyaypriya479@gmail.com",
      color: "bg-highlight-pink",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/priya-upadhyay68",
      link: "https://www.linkedin.com/in/priya-upadhyay68/",
      color: "bg-highlight-blue",
    },
    {
      icon: Twitter,
      label: "Twitter/X",
      value: "@Priya_Upadhyay_",
      link: "https://x.com/Priya_Upadhyay_",
      color: "bg-highlight-green",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Let's <span className="highlight-pink">Connect!</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-lg border border-foreground/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`${contact.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <contact.icon className="w-6 h-6 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
              <p className="font-medium text-foreground group-hover:text-foreground/80 transition-colors break-all">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        {/* Decorative stickers */}
        <div className="mt-12 flex justify-center gap-4">
          <span className="text-3xl animate-float">✨</span>
          <span className="text-3xl animate-float" style={{ animationDelay: "0.5s" }}>💌</span>
          <span className="text-3xl animate-float" style={{ animationDelay: "1s" }}>🚀</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
