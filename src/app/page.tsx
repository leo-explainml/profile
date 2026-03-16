import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  FileText,
  Briefcase,
  GraduationCap,
  Mic,
  BookOpen,
} from "lucide-react";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-sm text-muted transition-colors hover:text-foreground"
    >
      {label}
    </a>
  );
}

function SectionHeading({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="text-accent">{icon}</span>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="ml-2 h-px flex-1 bg-border" />
    </div>
  );
}

function ExperienceCard({
  role,
  company,
  period,
  bullets,
}: {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/30 hover:bg-surface-hover">
      <div className="mb-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
        <h3 className="font-semibold text-foreground">{role}</h3>
        <span className="font-mono text-xs text-muted">{period}</span>
      </div>
      <p className="mb-3 text-sm text-accent">{company}</p>
      <ul className="space-y-1.5 text-sm text-muted">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent/50" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  href,
}: {
  title: string;
  description: string;
  tags: string[];
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:bg-surface-hover"
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <ExternalLink className="h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <p className="mb-4 flex-1 text-sm text-muted">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

function PublicationCard({
  title,
  venue,
  year,
  href,
}: {
  title: string;
  venue: string;
  year: string;
  href?: string;
}) {
  const className =
    "group flex items-start gap-4 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent/30 hover:bg-surface-hover";
  const content = (
    <>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        <p className="mt-1 text-xs text-muted">
          {venue} &middot; {year}
        </p>
      </div>
      {href && (
        <ExternalLink className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}

function SkillGroup({
  label,
  skills,
}: {
  label: string;
  skills: string[];
}) {
  return (
    <div>
      <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
          <a
            href="#"
            className="font-mono text-sm font-medium text-foreground"
          >
            iam.quietscale.ai
          </a>
          <div className="flex items-center gap-6">
            <NavLink href="#experience" label="Experience" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#publications" label="Writing" />
            <NavLink href="/blog" label="Blog" />
            <NavLink href="#contact" label="Contact" />
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="flex min-h-[85vh] flex-col justify-center pb-12 pt-24">
          <p className="mb-4 font-mono text-sm text-accent">Hi, I&apos;m</p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Leonardo Apolonio
          </h1>
          <p className="mb-6 max-w-xl text-xl text-muted">
            Staff ML Engineer. 10+ years building systems that work quietly at
            scale — NLP platforms, LLM pipelines, text analytics infrastructure.
            Currently at <span className="text-foreground">Qualtrics</span>.
            Founder of <span className="text-foreground">Quiet Scale</span>.
          </p>
          <p className="mb-8 max-w-lg text-sm leading-relaxed text-muted">
            I care about the unglamorous parts of ML — evaluation, data quality,
            the bridge from research to production. Previously at Clarabridge,
            Oracle, and DARPA. MS CS from Georgia Tech.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/lapolonio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border p-2.5 text-muted transition-colors hover:border-accent/50 hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-apolonio/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border p-2.5 text-muted transition-colors hover:border-accent/50 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:apolonio.leonardo@gmail.com"
              className="rounded-lg border border-border p-2.5 text-muted transition-colors hover:border-accent/50 hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-16 flex justify-center">
            <a
              href="#experience"
              className="animate-bounce text-muted transition-colors hover:text-foreground"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* Philosophy */}
        <section className="pb-20">
          <blockquote className="border-l-2 border-accent/40 pl-6 text-muted leading-relaxed">
            I believe the best systems are the ones nobody notices — because they
            just work. Quiet Scale is the company I&apos;m building around that
            idea: AI infrastructure and tools that earn trust through
            reliability, not hype.
          </blockquote>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 pb-24">
          <SectionHeading
            icon={<Briefcase className="h-5 w-5" />}
            title="Experience"
          />
          <div className="space-y-4">
            <ExperienceCard
              role="Staff Machine Learning Engineer"
              company="Qualtrics"
              period="2021 — Present"
              bullets={[
                "Lead design and operationalization of ML/LLM text analytics platforms serving enterprise customers",
                "Built AI-driven topic detection and conversational summarization systems",
                "Designed LLM-as-a-Judge evaluation frameworks for production quality assessment",
                "Analyzed ~4M customer conversations to surface systemic insights",
              ]}
            />
            <ExperienceCard
              role="Principal Machine Learning Engineer"
              company="Clarabridge"
              period="2019 — 2021"
              bullets={[
                "Modernized legacy NLP systems by migrating rules-based solutions to ML approaches",
                "Built and deployed text classification pipelines at enterprise scale",
              ]}
            />
            <ExperienceCard
              role="Principal Machine Learning Engineer"
              company="Oracle"
              period="2017 — 2019"
              bullets={[
                "Developed ML models for natural language understanding and text analytics products",
              ]}
            />
            <ExperienceCard
              role="Senior Data Scientist"
              company="DARPA"
              period="2016 — 2017"
              bullets={[
                "Applied machine learning to defense and intelligence problems",
                "Published research on network traffic anomaly detection using recurrent neural networks",
              ]}
            />
            <ExperienceCard
              role="Senior Data Scientist & Software Engineer"
              company="Advisory Board Company"
              period="2013 — 2016"
              bullets={[
                "Built data science capabilities from the ground up across healthcare analytics",
              ]}
            />
            <ExperienceCard
              role="Senior Consultant"
              company="IBM"
              period="2010 — 2013"
              bullets={[
                "Supported FEMA critical infrastructure and disaster recovery systems",
              ]}
            />
          </div>
        </section>

        {/* Education */}
        <section className="pb-24">
          <SectionHeading
            icon={<GraduationCap className="h-5 w-5" />}
            title="Education"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-6">
              <h3 className="font-semibold text-foreground">
                M.S. Computer Science
              </h3>
              <p className="text-sm text-accent">Georgia Institute of Technology</p>
              <p className="mt-1 text-xs text-muted">
                Machine Learning Specialization &middot; 2016
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <h3 className="font-semibold text-foreground">
                B.S. Computer Engineering
              </h3>
              <p className="text-sm text-accent">
                University of Maryland, College Park
              </p>
              <p className="mt-1 text-xs text-muted">2010</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 pb-24">
          <SectionHeading
            icon={<FileText className="h-5 w-5" />}
            title="Projects"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <ProjectCard
              title="Science Replication"
              description="Automated system for assessing social science research reproducibility. Analyzes papers, executes code in Docker containers, and validates results using Claude's vision capabilities."
              tags={["FastAPI", "Claude API", "Docker", "Python"]}
              href="https://science-replication.vercel.app/"
            />
            <ProjectCard
              title="ML for NLP Guide"
              description="Curated guide for engineers interested in NLP machine learning — covering techniques, tools, and resources for getting started."
              tags={["NLP", "Guide", "ML"]}
              href="https://github.com/lapolonio/machine-learning-for-nlp-guide"
            />
            <ProjectCard
              title="How to Solve NLP"
              description="Collection of notebooks and resources for tackling common NLP problems with practical, hands-on examples."
              tags={["Jupyter", "NLP", "Python"]}
              href="https://github.com/lapolonio/how-to-solve-NLP"
            />
            <ProjectCard
              title="BERT Text Classification"
              description="Enterprise-grade solution for text classification using BERT — with TensorFlow serving and Kubernetes deployment patterns."
              tags={["BERT", "TensorFlow", "Kubernetes"]}
              href="https://github.com/lapolonio/text_classification_tutorial"
            />
          </div>
        </section>

        {/* Publications & Talks */}
        <section id="publications" className="scroll-mt-20 pb-24">
          <SectionHeading
            icon={<BookOpen className="h-5 w-5" />}
            title="Writing & Talks"
          />
          <div className="space-y-3">
            <PublicationCard
              title="Enterprise AF Solution for Text Classification Using BERT"
              venue="HackerNoon"
              year="2019"
              href="https://hackernoon.com/enterprise-af-solution-for-text-classification-using-bert-9fe2b7234c46"
            />
            <PublicationCard
              title="Network Traffic Anomaly Detection Using Recurrent Neural Networks"
              venue="MSS National Symposium"
              year="2017"
            />
            <div className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5">
              <Mic className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <div>
                <h3 className="text-sm font-medium text-foreground">
                  NLP for Entrepreneurs
                </h3>
                <p className="mt-1 text-xs text-muted">
                  TWIMLfest 2020 &middot; Speaker
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5">
              <Mic className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <div>
                <h3 className="text-sm font-medium text-foreground">
                  Journal Club Panelist
                </h3>
                <p className="mt-1 text-xs text-muted">
                  iHeart Podcast &middot; July 2020
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="pb-24">
          <SectionHeading
            icon={<FileText className="h-5 w-5" />}
            title="Skills"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SkillGroup
              label="Languages"
              skills={["Python", "Java", "JavaScript", "SQL", "R", "Scala", "C++"]}
            />
            <SkillGroup
              label="ML / AI"
              skills={[
                "LLMs",
                "BERT",
                "TensorFlow",
                "Keras",
                "Spark",
                "FastText",
                "Weak Supervision",
              ]}
            />
            <SkillGroup
              label="Infrastructure"
              skills={[
                "Kubernetes",
                "AWS",
                "Docker",
                "GCP",
                "PostgreSQL",
              ]}
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 pb-24">
          <div className="rounded-lg border border-border bg-surface p-8 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-foreground">
              Get in touch
            </h2>
            <p className="mb-6 text-sm text-muted">
              Building something that needs to work at scale? Or just want to
              talk shop about ML and production systems.
            </p>
            <a
              href="mailto:apolonio.leonardo@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/80"
            >
              <Mail className="h-4 w-4" />
              apolonio.leonardo@gmail.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 text-xs text-muted">
          <span>&copy; {new Date().getFullYear()} Leonardo Apolonio</span>
          <a href="https://quietscale.ai" target="_blank" rel="noopener noreferrer" className="font-mono transition-colors hover:text-foreground">quietscale.ai</a>
        </div>
      </footer>
    </div>
  );
}
