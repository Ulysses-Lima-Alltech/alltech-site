import { Hero } from "@/components/Hero";
import { MagneticButton } from "@/components/MagneticButton";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SolutionCard, type SolutionIcon } from "@/components/SolutionCard";
import { featuredProjects } from "@/data/projects";

const developmentAreas: Array<{
  title: string;
  text: string;
  icon: SolutionIcon;
}> = [
  {
    title: "Aplicacoes Web",
    text: "Plataformas, portais, dashboards e sistemas internos para operacoes digitais.",
    icon: "web",
  },
  {
    title: "Aplicativos Mobile",
    text: "Apps para campo, atendimento, gestao, vendas e produtos digitais.",
    icon: "mobile",
  },
  {
    title: "Inteligencia Artificial",
    text: "Assistentes, analise, RAG, classificacao e automacoes inteligentes.",
    icon: "ai",
  },
  {
    title: "Visao Computacional",
    text: "Analise de imagem e video, reconhecimento e indicadores visuais.",
    icon: "vision",
  },
  {
    title: "Automacoes RPA",
    text: "Robos para rotinas repetitivas, planilhas, relatorios e sistemas legados.",
    icon: "rpa",
  },
  {
    title: "Integracoes e APIs",
    text: "Conexoes entre sistemas, ERPs, CRMs, WhatsApp, bancos e servicos externos.",
    icon: "api",
  },
  {
    title: "Cloud AWS",
    text: "Arquitetura, deploy, containers, bancos, monitoramento e evolucao.",
    icon: "cloud",
  },
  {
    title: "Dashboards e Relatorios",
    text: "Indicadores executivos e operacionais para decisoes mais rapidas.",
    icon: "dashboard",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Expo",
  "React Native",
  "Tailwind CSS",
  "OpenCV",
  "MediaPipe",
  "YOLO",
  "Whisper",
  "Mapbox",
  "WhatsApp API",
  "RPA",
];

const process = [
  "Diagnostico",
  "Arquitetura",
  "Desenvolvimento",
  "Integracao",
  "Deploy",
  "Evolucao",
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              description="Cases construidos para operacao real, com engenharia, produto e tecnologia trabalhando no mesmo fluxo."
              eyebrow="Trabalhos selecionados"
              title="Cases com presenca de produto, engenharia e operacao."
            />
            <MagneticButton href="/projects" variant="secondary">
              Ver todos
            </MagneticButton>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard index={index} key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-soft/70 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Do primeiro diagnostico ao sistema em producao, criamos solucoes sob medida para tecnologia virar operacao."
            eyebrow="Solucoes que construimos"
            title="Web, mobile, IA, automacao e cloud no mesmo padrao de entrega."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {developmentAreas.map((area, index) => (
              <SolutionCard
                icon={area.icon}
                index={index}
                key={area.title}
                text={area.text}
                title={area.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Um caminho objetivo para sair de processos manuais e chegar a plataformas operacionais."
            eyebrow="Como tiramos do papel"
            title="Da descoberta a evolucao continua."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {process.map((step, index) => (
              <Reveal delay={index * 0.05} key={step}>
                <article className="h-full rounded-lg border border-neutral-200/80 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                  <span className="text-sm font-semibold text-brand-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-black">{step}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-soft/70 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-lg border border-neutral-200/80 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)] md:p-7">
              <SectionHeader
                description="Ferramentas modernas para construir produtos rapidos, escalaveis, integraveis e prontos para evolucao."
                eyebrow="Stack"
                title="Tecnologias usadas para entregar sistemas reais."
              />
              <div className="mt-7 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-sm font-medium text-neutral-700"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-lg border border-neutral-200/80 bg-white p-6 text-center shadow-[0_14px_40px_rgba(15,23,42,0.06)] md:p-8">
            <h2 className="text-3xl font-semibold leading-tight text-brand-black md:text-5xl">
              Tem uma operacao que precisa virar sistema?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
              Transformamos processos manuais, planilhas e ideias em plataformas
              digitais reais, escalaveis e prontas para operacao.
            </p>
            <div className="mt-8">
              <MagneticButton href="/contact" size="lg">
                Comecar conversa
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
