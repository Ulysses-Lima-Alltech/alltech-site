export type ProjectStatus = "Produção" | "MVP" | "Protótipo";

export type Project = {
  name: string;
  slug: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  impact: string;
  logo?: {
    alt: string;
    height: number;
    src: string;
    width: number;
  };
  featured?: boolean;
  accent: "blue" | "blueDark" | "neutral" | "black" | "cyan";
};

export const projects: Project[] = [
  {
    name: "iControl",
    slug: "icontrol",
    category: "AgroTech / Operação",
    status: "Produção",
    summary:
      "Plataforma para drones agrícolas, gestão de pulverização, rotas, mapas, ordens de serviço, relatórios e aplicativo mobile.",
    problem:
      "Empresas agrícolas precisam controlar aplicações, pilotos, áreas, mapas, relatórios e ordens de serviço sem depender de processos manuais.",
    solution:
      "Plataforma web e mobile para centralizar a operação, acompanhar aplicações, gerar relatórios e apoiar o trabalho em campo.",
    features: [
      "Dashboard operacional",
      "Ordens de serviço",
      "Rotas e mapas",
      "Relatórios em PDF",
      "Aplicativo mobile",
      "Gestão de pilotos",
      "Acompanhamento em campo",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Expo",
      "Mapbox",
    ],
    impact:
      "Centralização da operação agrícola, redução de controles manuais e maior rastreabilidade das aplicações.",
    logo: {
      alt: "Logo do iControl",
      height: 464,
      src: "/assets/logos/icontrol-logo.png",
      width: 1166,
    },
    featured: true,
    accent: "blue",
  },
  {
    name: "Convera",
    slug: "convera",
    category: "IA Conversacional / Imobiliário",
    status: "Produção",
    summary:
      "Convera é uma plataforma de atendimento inteligente via WhatsApp para leads imobiliários, com IA conversacional, funil, base de conhecimento e handoff comercial.",
    problem:
      "Leads imobiliários chegam por diferentes canais e precisam de atendimento rápido, padronizado e alinhado às regras comerciais.",
    solution:
      "Assistente inteligente integrado ao WhatsApp, CRM, funil comercial, base de conhecimento e painel de gestão.",
    features: [
      "Atendimento via WhatsApp",
      "IA conversacional",
      "Base de conhecimento por empreendimento",
      "Handoff para corretores",
      "Funil comercial",
      "Dashboard de conversas",
      "Regras comerciais personalizadas",
    ],
    stack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS ECS",
      "WhatsApp API",
      "IA",
      "RAG",
    ],
    impact:
      "Atendimento mais rápido, padronização comercial e melhor organização dos leads imobiliários.",
    logo: {
      alt: "Logo da Convera",
      height: 530,
      src: "/assets/logos/convera-logo.png",
      width: 1804,
    },
    featured: true,
    accent: "blueDark",
  },
  {
    name: "UMMIA",
    slug: "ummia",
    category: "IA / Educação / Visão Computacional",
    status: "MVP",
    summary:
      "Sistema educacional com visão computacional para análise de atenção em sala de aula e transcrição inteligente de aulas.",
    problem:
      "Escolas precisam compreender melhor engajamento, atenção e qualidade das aulas sem depender apenas de percepção manual.",
    solution:
      "Sistema com câmeras, visão computacional e IA para analisar atenção, comportamento e conteúdo explicado em aula.",
    features: [
      "Detecção facial",
      "Análise de atenção",
      "Identificação de sono, conversa e celular",
      "Transcrição de aulas",
      "Geração de perguntas de estudo",
      "Indicadores educacionais",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "YOLO", "Whisper", "IA", "React"],
    impact:
      "Maior visibilidade sobre engajamento em sala e apoio à melhoria pedagógica.",
    logo: {
      alt: "Logo da UMMIA",
      height: 295,
      src: "/assets/logos/ummia-logo.png",
      width: 1383,
    },
    featured: true,
    accent: "neutral",
  },
  {
    name: "ATHENA",
    slug: "athena",
    category: "IA / Operação / Produtividade",
    status: "Protótipo",
    summary:
      "Plataforma de análise operacional com visão computacional, produtividade, EPI, estoque e relatórios.",
    problem:
      "Operações físicas precisam medir produtividade, segurança e comportamento operacional com mais precisão.",
    solution:
      "Plataforma com visão computacional e dashboards para apoiar análise operacional e tomada de decisão.",
    features: [
      "Análise por vídeo",
      "Indicadores de produtividade",
      "Detecção de EPI",
      "Relatórios operacionais",
      "Dashboard de gestão",
    ],
    stack: ["Python", "IA", "Visão Computacional", "Dashboards", "Relatórios"],
    impact:
      "Mais controle operacional, indicadores visuais e apoio à gestão de produtividade.",
    logo: {
      alt: "Logo da ATHENA",
      height: 312,
      src: "/assets/logos/athena-logo.png",
      width: 1539,
    },
    featured: true,
    accent: "black",
  },
  {
    name: "SHOMER",
    slug: "shomer",
    category: "IA / Comércio / Analytics",
    status: "Protótipo",
    summary:
      "Sistema de inteligência comercial para análise de fluxo de pessoas e atendimento em estabelecimentos físicos.",
    problem:
      "Comércios físicos têm dificuldade em medir fluxo, atendimento e comportamento dos clientes de forma objetiva.",
    solution:
      "Solução com visão computacional para gerar indicadores comerciais e operacionais a partir de câmeras.",
    features: [
      "Análise de fluxo de pessoas",
      "Indicadores de atendimento",
      "Monitoramento de comportamento",
      "Dashboard comercial",
      "Relatórios gerenciais",
    ],
    stack: ["Python", "Visão Computacional", "Analytics", "Dashboard"],
    impact:
      "Mais inteligência sobre fluxo, atendimento e performance de lojas físicas.",
    logo: {
      alt: "SHOMER",
      height: 400,
      src: "/assets/logos/shomer-logo.svg",
      width: 1120,
    },
    accent: "cyan",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectFilters = [
  "Todos",
  "IA",
  "AgroTech",
  "Operação",
  "Visão Computacional",
  "Web/Mobile",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function projectMatchesFilter(project: Project, filter: ProjectFilter) {
  if (filter === "Todos") {
    return true;
  }

  if (filter === "Web/Mobile") {
    return project.stack.some((item) =>
      ["Next.js", "React", "Expo", "React Native", "Vite"].includes(item),
    );
  }

  return project.category.includes(filter) || project.stack.includes(filter);
}
