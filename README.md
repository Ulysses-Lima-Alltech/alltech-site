# Alltech Portfólio

Site de portfólio profissional da Alltech, criado com Next.js App Router, TypeScript, Tailwind CSS, Framer Motion e Lucide React.

## Como instalar

```powershell
npm install
```

## Como rodar em desenvolvimento

```powershell
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

## Como fazer build

```powershell
npm run build
```

## Estrutura do projeto

```text
src/
├── app/
│   ├── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── solutions/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── SolutionCard.tsx
│   ├── AnimatedBackground.tsx
│   ├── CustomCursor.tsx
│   ├── MagneticButton.tsx
│   ├── SectionHeader.tsx
│   ├── Reveal.tsx
│   ├── ProjectsExplorer.tsx
│   └── ContactForm.tsx
├── data/
│   └── projects.ts
└── lib/
    └── utils.ts
```

## Onde alterar os projetos

Os cases ficam em:

```text
src/data/projects.ts
```

Para adicionar um projeto, crie um novo objeto no array `projects` com `name`, `slug`, `category`, `status`, `summary`, `problem`, `solution`, `features`, `stack`, `impact` e `accent`.

As páginas individuais são geradas automaticamente pela rota:

```text
/projects/[slug]
```

## Deploy futuro

O projeto já está preparado para build e publicação futura no domínio:

```text
alltechbr.com.br
```

O deploy ainda não foi configurado. Quando for publicar, basta conectar o repositório a uma plataforma compatível com Next.js, configurar o domínio e executar o build padrão.
