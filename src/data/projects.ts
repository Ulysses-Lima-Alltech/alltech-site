export type ProjectStatus = "Produção" | "MVP" | "Protótipo" | "Acadêmico";

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
  featured?: boolean;
  accent: "blue" | "blueDark" | "neutral" | "black" | "cyan";
};

export const projects: Project[] = [
  {
    name: "DS Control",
    slug: "ds-control",
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
    featured: true,
    accent: "blue",
  },
  {
    name: "NETIV / Ana",
    slug: "netiv-ana",
    category: "IA Conversacional / Imobiliário",
    status: "Produção",
    summary:
      "Plataforma de atendimento inteligente via WhatsApp para leads imobiliários, com IA conversacional, funil, base de conhecimento e handoff para corretores.",
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
    accent: "cyan",
  },
  {
    name: "Facial Detect",
    slug: "facial-detect",
    category: "Biometria / Segurança",
    status: "MVP",
    summary:
      "Solução web para reconhecimento facial, liveness detection e validação de presença.",
    problem:
      "Sistemas de presença e validação precisam reduzir fraudes e confirmar identidade com segurança.",
    solution:
      "Aplicação web com reconhecimento facial, validação de presença e detecção de prova de vida.",
    features: [
      "Reconhecimento facial",
      "Liveness detection",
      "Validação de presença",
      "Backend Python",
      "Frontend web",
      "Deploy com Docker/Nginx",
    ],
    stack: ["Python", "Next.js", "TypeScript", "Docker", "Nginx"],
    impact: "Validação biométrica mais segura e automatizada.",
    accent: "blueDark",
  },
  {
    name: "ABP4",
    slug: "abp4-dispenser-medicamentos",
    category: "IoT / Saúde / Acadêmico",
    status: "Acadêmico",
    summary:
      "Dispenser automático de medicamentos com frontend, backend, banco de dados, MQTT e ESP32.",
    problem:
      "Pessoas podem esquecer horários de medicamentos e precisam de apoio para controle de doses.",
    solution:
      "Sistema IoT com dispenser automatizado, controle via aplicação, comunicação MQTT e backend integrado.",
    features: [
      "Frontend web",
      "Backend API",
      "Banco de dados",
      "Comunicação MQTT",
      "Integração com ESP32",
      "Controle de horários",
    ],
    stack: [
      "React",
      "Vite",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "MQTT",
      "ESP32",
    ],
    impact:
      "Apoio ao controle de medicamentos e automação de uma rotina crítica.",
    accent: "blue",
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
  "IoT",
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
