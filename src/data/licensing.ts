export type LicensePlan = {
  slug: string;
  name: string;
  audience: string;
  features: string[];
  overview: string;
  detailFeatures: string[];
  officialUrl: string;
};

export type LicenseVendor = {
  vendor: "Microsoft 365" | "Google Workspace";
  eyebrow: string;
  title: string;
  description: string;
  plans: LicensePlan[];
  moreNote: string;
};

export const licenseVendors: LicenseVendor[] = [
  {
    vendor: "Microsoft 365",
    eyebrow: "Licenciamento Microsoft",
    title: "Microsoft 365 para cada estágio da operação.",
    description:
      "E-mail profissional, Office completo, segurança e colaboração em nuvem, com o plano certo para o tamanho e a maturidade do seu time.",
    moreNote:
      "E muito mais: Microsoft 365 Apps for Business, Exchange Online, Teams Premium, Windows 365 e outras licenças Microsoft sob consulta.",
    plans: [
      {
        slug: "microsoft-365-business-basic",
        name: "Business Basic",
        audience: "Times pequenos que precisam de e-mail corporativo e nuvem",
        features: [
          "E-mail profissional com Exchange",
          "Teams, OneDrive (1 TB) e SharePoint",
          "Office na web e no celular",
        ],
        overview:
          "O ponto de entrada do Microsoft 365 para empresas: e-mail com domínio próprio, armazenamento em nuvem e os apps do Office pelo navegador ou celular, sem precisar instalar nada no computador.",
        detailFeatures: [
          "E-mail profissional com Exchange Online (domínio próprio da empresa)",
          "Word, Excel e PowerPoint no navegador e nos apps mobile",
          "OneDrive for Business com 1 TB de armazenamento por usuário",
          "Microsoft Teams para chat, reuniões e compartilhamento de tela",
          "SharePoint Online para intranet e sites de equipe",
          "Sem instalação dos apps do Office no desktop",
        ],
        officialUrl:
          "https://www.microsoft.com/pt-br/microsoft-365/business/compare-all-microsoft-365-business-products",
      },
      {
        slug: "microsoft-365-business-standard",
        name: "Business Standard",
        audience: "Empresas que precisam do Office instalado no computador",
        features: [
          "Tudo do Business Basic",
          "Word, Excel, PowerPoint e Outlook no desktop",
          "Gravação e edição avançada no Teams",
        ],
        overview:
          "Para empresas que precisam dos apps do Office instalados no Windows ou Mac, além de tudo que já vem no Business Basic.",
        detailFeatures: [
          "Tudo do Business Basic",
          "Word, Excel, PowerPoint e Outlook instalados no desktop (Windows e Mac)",
          "Clipchamp para edição de vídeo",
          "Recursos avançados de reunião no Teams (webinars, gravação)",
          "OneDrive for Business com 1 TB de armazenamento por usuário",
        ],
        officialUrl:
          "https://www.microsoft.com/pt-br/microsoft-365/business/compare-all-microsoft-365-business-products",
      },
      {
        slug: "microsoft-365-business-premium",
        name: "Business Premium",
        audience: "Operações que exigem segurança e gestão de dispositivos",
        features: [
          "Tudo do Business Standard",
          "Proteção contra ameaças com Defender",
          "Gestão de dispositivos e dados com Intune",
        ],
        overview:
          "Tudo do Business Standard, mais segurança avançada e gestão de dispositivos — ideal para empresas que precisam proteger dados corporativos em notebooks e celulares da equipe.",
        detailFeatures: [
          "Tudo do Business Standard",
          "Microsoft Defender for Business (proteção contra ameaças e malware)",
          "Microsoft Intune para gestão de dispositivos (MDM)",
          "Proteção de informações e criptografia de dados sensíveis",
          "Windows Autopilot para configuração automática de dispositivos",
          "Controles de acesso condicional",
        ],
        officialUrl:
          "https://www.microsoft.com/pt-br/microsoft-365/business/compare-all-microsoft-365-business-products",
      },
      {
        slug: "microsoft-365-e3-e5",
        name: "E3 / E5",
        audience: "Empresas maiores ou com exigências de compliance",
        features: [
          "Segurança e conformidade em nível corporativo",
          "Análise de dados e automação avançada",
          "Pronto para Copilot e IA no Office",
        ],
        overview:
          "Os planos Enterprise do Microsoft 365, para operações maiores ou reguladas. O E3 cobre produtividade, identidade e conformidade em nível corporativo; o E5 adiciona segurança avançada, análise e telefonia na nuvem.",
        detailFeatures: [
          "E3: apps completos do Office, licença Windows Enterprise, gestão avançada de dispositivos",
          "E3: prevenção de perda de dados (DLP), rótulos de sensibilidade e auditoria padrão",
          "E5: tudo do E3 + Microsoft Defender for Endpoint Plan 2 e Defender for Cloud Apps",
          "E5: Insider Risk Management e eDiscovery Premium",
          "E5: Phone System (telefonia na nuvem) e Power BI Pro incluídos",
          "Pronto para Microsoft 365 Copilot como complemento",
        ],
        officialUrl:
          "https://www.microsoft.com/pt-br/microsoft-365/enterprise/compare-microsoft-365-enterprise-plans",
      },
    ],
  },
  {
    vendor: "Google Workspace",
    eyebrow: "Licenciamento Google",
    title: "Google Workspace para colaborar sem fricção.",
    description:
      "Gmail profissional, Drive, Meet e as ferramentas do Google organizadas por plano, do time enxuto à operação corporativa.",
    moreNote:
      "E muito mais: Google Workspace Frontline, Essentials Starter, AppSheet e outros complementos do Google sob consulta.",
    plans: [
      {
        slug: "google-workspace-business-starter",
        name: "Business Starter",
        audience: "Times pequenos que precisam do essencial",
        features: [
          "Gmail com domínio próprio",
          "Drive com 30 GB por usuário",
          "Google Meet, Docs, Sheets e Slides",
        ],
        overview:
          "O plano de entrada do Google Workspace: e-mail profissional e as ferramentas essenciais de colaboração, com IA do Gemini incluída.",
        detailFeatures: [
          "Gmail profissional com domínio próprio da empresa",
          "Google Drive com 30 GB de armazenamento por usuário",
          "Google Meet com videochamadas para até 100 participantes",
          "Docs, Sheets, Slides, Forms e Sites",
          "Gemini integrado ao Gmail e ao app do Gemini",
          "Suporte para até 300 usuários",
        ],
        officialUrl: "https://workspace.google.com/intl/pt-BR/pricing.html",
      },
      {
        slug: "google-workspace-business-standard",
        name: "Business Standard",
        audience: "Empresas que precisam de mais espaço e controle",
        features: [
          "Drive com 2 TB por usuário",
          "Gravação de reuniões no Meet",
          "Painéis administrativos avançados",
        ],
        overview:
          "Mais espaço e mais recursos de reunião para empresas em crescimento, com Gemini presente em todo o pacote de produtividade.",
        detailFeatures: [
          "Tudo do Business Starter",
          "Google Drive com 2 TB de armazenamento por usuário",
          "Google Meet com até 150 participantes, gravação salva no Drive e redução de ruído",
          "Páginas de agendamento de reuniões",
          "Assinatura eletrônica em Docs e PDFs",
          "Gemini em Gmail, Docs, Sheets, Slides, Meet e Chat",
        ],
        officialUrl: "https://workspace.google.com/intl/pt-BR/pricing.html",
      },
      {
        slug: "google-workspace-business-plus",
        name: "Business Plus",
        audience: "Operações com exigências de segurança mais altas",
        features: [
          "Drive com 5 TB por usuário",
          "Retenção e eDiscovery para compliance",
          "Recursos de IA com Gemini integrados",
        ],
        overview:
          "Mais armazenamento e segurança para operações que precisam de retenção de dados, controles avançados de dispositivo e reuniões maiores.",
        detailFeatures: [
          "Tudo do Business Standard",
          "Google Drive com 5 TB de armazenamento por usuário",
          "Google Meet com até 500 participantes e acompanhamento de presença",
          "Google Vault para retenção, arquivamento e eDiscovery",
          "LDAP seguro e gestão avançada de endpoints",
          "Controles de segurança e administração aprimorados",
        ],
        officialUrl: "https://workspace.google.com/intl/pt-BR/pricing.html",
      },
      {
        slug: "google-workspace-enterprise",
        name: "Enterprise",
        audience: "Grandes operações com exigências corporativas",
        features: [
          "Segurança e prevenção de perda de dados (DLP)",
          "Arquivamento e retenção avançados",
          "Suporte prioritário e controles corporativos",
        ],
        overview:
          "O plano mais completo do Google Workspace, com segurança de nível corporativo, armazenamento expansível e suporte prioritário — sob consulta conforme o tamanho da operação.",
        detailFeatures: [
          "Tudo do Business Plus, com armazenamento expansível",
          "Prevenção de perda de dados (DLP) e criptografia S/MIME",
          "Acesso baseado em contexto e controles de residência de dados",
          "Cloud Identity Premium para gestão avançada de identidade",
          "Transmissão ao vivo de reuniões para grandes públicos internos",
          "Suporte prioritário e SLA corporativo",
        ],
        officialUrl: "https://workspace.google.com/intl/pt-BR/pricing.html",
      },
    ],
  },
];

export const whyAlltech = [
  {
    title: "Revenda autorizada",
    text: "Licenciamento oficial Microsoft 365 e Google Workspace, com faturamento em real e nota fiscal.",
  },
  {
    title: "Consultoria no plano certo",
    text: "Ajudamos a escolher o plano por usuário, sem pagar por recurso que a operação não usa.",
  },
  {
    title: "Migração assistida",
    text: "Time técnico próprio conduz a migração de e-mail, arquivos e domínio sem parar a operação.",
  },
  {
    title: "Suporte contínuo",
    text: "Gestão centralizada das licenças, renovações e suporte em português quando precisar.",
  },
];

export function getLicensePlanBySlug(slug: string) {
  for (const vendor of licenseVendors) {
    const plan = vendor.plans.find((item) => item.slug === slug);

    if (plan) {
      return { plan, vendor };
    }
  }

  return undefined;
}

export const allLicensePlans = licenseVendors.flatMap((vendor) =>
  vendor.plans.map((plan) => ({ plan, vendor })),
);
