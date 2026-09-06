export type LicensePlan = {
  name: string;
  audience: string;
  features: string[];
};

export type LicenseVendor = {
  vendor: "Microsoft 365" | "Google Workspace";
  eyebrow: string;
  title: string;
  description: string;
  plans: LicensePlan[];
};

export const licenseVendors: LicenseVendor[] = [
  {
    vendor: "Microsoft 365",
    eyebrow: "Licenciamento Microsoft",
    title: "Microsoft 365 para cada estágio da operação.",
    description:
      "E-mail profissional, Office completo, segurança e colaboração em nuvem, com o plano certo para o tamanho e a maturidade do seu time.",
    plans: [
      {
        name: "Business Basic",
        audience: "Times pequenos que precisam de e-mail corporativo e nuvem",
        features: [
          "E-mail profissional com Exchange",
          "Teams, OneDrive (1 TB) e SharePoint",
          "Office na web e no celular",
        ],
      },
      {
        name: "Business Standard",
        audience: "Empresas que precisam do Office instalado no computador",
        features: [
          "Tudo do Business Basic",
          "Word, Excel, PowerPoint e Outlook no desktop",
          "Gravação e edição avançada no Teams",
        ],
      },
      {
        name: "Business Premium",
        audience: "Operações que exigem segurança e gestão de dispositivos",
        features: [
          "Tudo do Business Standard",
          "Proteção contra ameaças com Defender",
          "Gestão de dispositivos e dados com Intune",
        ],
      },
      {
        name: "E3 / E5",
        audience: "Empresas maiores ou com exigências de compliance",
        features: [
          "Segurança e conformidade em nível corporativo",
          "Análise de dados e automação avançada",
          "Pronto para Copilot e IA no Office",
        ],
      },
    ],
  },
  {
    vendor: "Google Workspace",
    eyebrow: "Licenciamento Google",
    title: "Google Workspace para colaborar sem fricção.",
    description:
      "Gmail profissional, Drive, Meet e as ferramentas do Google organizadas por plano, do time enxuto à operação corporativa.",
    plans: [
      {
        name: "Business Starter",
        audience: "Times pequenos que precisam do essencial",
        features: [
          "Gmail com domínio próprio",
          "Drive com 30 GB por usuário",
          "Google Meet, Docs, Sheets e Slides",
        ],
      },
      {
        name: "Business Standard",
        audience: "Empresas que precisam de mais espaço e controle",
        features: [
          "Drive com 2 TB por usuário",
          "Gravação de reuniões no Meet",
          "Painéis administrativos avançados",
        ],
      },
      {
        name: "Business Plus",
        audience: "Operações com exigências de segurança mais altas",
        features: [
          "Drive com 5 TB por usuário",
          "Retenção e eDiscovery para compliance",
          "Recursos de IA com Gemini integrados",
        ],
      },
      {
        name: "Enterprise",
        audience: "Grandes operações com exigências corporativas",
        features: [
          "Segurança e prevenção de perda de dados (DLP)",
          "Arquivamento e retenção avançados",
          "Suporte prioritário e controles corporativos",
        ],
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
