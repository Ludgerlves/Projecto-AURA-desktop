<p align="center">
  <img src="public/Logo-AURA.png" alt="AURA Logo" width="180" style="border-radius: 12px;" />
</p>

# 🌌 AURA — Portal de Horários Académicos
> **Projecto de Fim de Curso**  
> Uma aplicação desktop de alta performance desenvolvida para automatizar a geração e a gestão de horários escolares, prevenindo conflitos de recursos (professores, salas e turmas) através de algoritmos de inteligência computacional e satisfação de restrições.

---

## 📸 Interface e Demonstração

> [!TIP]
> Para exibir os ecrãs reais da sua aplicação no GitHub ou no repositório, basta tirar capturas de ecrã (screenshots) do AURA em execução e guardá-las na pasta `public/screenshots/` com os nomes sugeridos abaixo.

| Ecrã | Pré-visualização |
| :--- | :--- |
| **Painel Principal (Dashboard)** <br> Contém as estatísticas gerais do sistema, tempos letivos ativos e cronograma de aulas do dia de hoje. | ![Dashboard](public/screenshots/dashboard.png) |
| **Geração de Horários** <br> Interface onde se selecionam as turmas e se dispara o algoritmo inteligente com logs detalhados em tempo de execução. | ![Geração de Horários](public/screenshots/gerar.png) |
| **Visualização de Horários & PDF** <br> Matriz de horários da turma ou professor e botão para gerar relatórios para impressão via `@react-pdf/renderer`. | ![Visualização e Exportação](public/screenshots/horarios.png) |
| **Disponibilidades dos Professores** <br> Tela de configuração onde são definidas as restrições e agendas de disponibilidade de cada docente. | ![Disponibilidades](public/screenshots/professores.png) |

---

## 📌 Visão Geral

O **AURA** é um sistema completo de gestão de horários académicos criado especificamente para simplificar e automatizar o planeamento letivo em instituições de ensino. O planeamento manual de horários é uma tarefa complexa que consome dias e é altamente propensa a erros humanos, como a alocação dupla de professores ou o sobrelaçamento de turmas na mesma sala.

O AURA resolve esse problema utilizando um motor de busca inteligente baseado em satisfação de restrições (**Constraint Satisfaction Problem - CSP**) com **Backtracking**, Heurística **MRV (Minimum Remaining Values)** e **Forward Checking**, garantindo que todos os horários gerados sejam 100% livres de conflitos.

Originalmente concebido como um **Projecto de Fim de Curso**, o AURA integra tecnologias modernas de desenvolvimento web num ecossistema nativo desktop através do empacotamento com **Electron**.

---

## 🚀 Funcionalidades Principais

*   **📊 Painel de Controlo (Dashboard):** Visão analítica em tempo real contendo estatísticas de professores, turmas, disciplinas e salas cadastradas, acompanhado do cronograma de aulas planeadas para o dia corrente.
*   **🧠 Algoritmo de Geração Inteligente:**
    *   **Livre de Conflitos:** Garante matematicamente a impossibilidade de sobreposição de horários para o mesmo professor, sala ou turma no mesmo período.
    *   **Heurística MRV & Forward Checking:** Redução drástica do tempo de processamento através de podas prévias no espaço de busca.
    *   **Regras Customizadas:** Definição de regras específicas (ex: aulas de Educação Física em qualquer período, turmas de 12ª classe com acesso preferencial à manhã, turmas gerais na tarde).
*   **📅 Gestão Integral de Recursos (CRUDs completos):**
    *   **Cursos & Classes:** Definição da matriz curricular.
    *   **Professores:** Cadastro de dados pessoais e janelas de **Disponibilidade Horária** semanal.
    *   **Salas:** Cadastro detalhado com tipo (Salas Normais, Laboratórios de Informática, Oficinas, Campos) e capacidade de alunos.
    *   **Turmas:** Vínculo de turmas a cursos, classes, contagem de alunos e sala de aula preferencial.
    *   **Atribuição Docente (ProfTurmaDisciplina):** Vínculo preciso de qual professor ministrará qual disciplina em determinada turma.
*   **📄 Exportação e Impressão de Relatórios em PDF:** Geração instantânea de horários formatados para impressão em PDF para cada turma ou professor através do `@react-pdf/renderer`.
*   **🔌 Distribuição Desktop Multiplataforma:** Executável nativo com atualizações automáticas via **Electron Auto-Updater**.
*   **🐳 Prontidão para Contentores (Docker Ready):** Configurações completas prontas para execução do banco de dados e aplicação web via Docker Compose.

---

## 🛠️ Tecnologias Utilizadas

O ecossistema do AURA foi estruturado com uma arquitetura moderna e escalável:

### Frontend & Interface
*   **React 19** & **Next.js 16.0** (App Router)
*   **Tailwind CSS v4** (Estilização responsiva de alta performance)
*   **shadcn/ui** & **Radix UI** (Componentes de interface acessíveis e modernos)
*   **Lucide React** (Pacote de ícones vetoriais)
*   **SWR** (Estratégia de cache e revalidação de dados no cliente)
*   **Recharts** (Gráficos analíticos dinâmicos no dashboard)

### Backend & Persistência
*   **Next.js Server Actions** (Comunicações assíncronas type-safe)
*   **Prisma ORM v7** (Mapeamento objeto-relacional)
*   **PostgreSQL** (Banco de dados relacional robusto)
*   **Zod** (Validação rigorosa de esquemas de dados em tempo de execução)

### Runtime Desktop & Distribuição
*   **Electron v42.2** (Wrapper de runtime nativo)
*   **Electron Builder** (Empacotamento multiplataforma)
*   **Electron Updater** (Gestão de ciclo de vida e novas versões)
*   **Docker & Docker Compose** (Ambiente isolado para implantação)

---

## 📐 Arquitetura do Sistema

O AURA opera em um modelo híbrido. Quando iniciado no desktop, o Electron atua como uma casca nativa que inicia um servidor Next.js em segundo plano (`standalone server`) e carrega o painel web no browser interno isolado.

```mermaid
graph TD
    A[Electron Main Process] -->|1. Spawns Child Process| B(Next.js Standalone Server)
    A -->|2. Loads Local URL| C[BrowserWindow / Renderer]
    C -->|HTTP/WebSockets| B
    B -->|Prisma Client| D[(PostgreSQL DB)]
    A -->|Auto-Updates| E[Remote Release Repository]
```

---

## 🗄️ Modelo de Dados (Prisma Schema)

O banco de dados armazena as entidades académicas estruturadas de forma relacional. A integridade dos horários é assegurada a nível físico por restrições exclusivas compostas (`@@unique`) na tabela de alocação de tempos:

```mermaid
erDiagram
    Curso ||--o{ Turma : "possui"
    Classe ||--o{ Turma : "possui"
    Sala ||--o{ Turma : "sala preferencial"
    Sala ||--o{ Tempo_Lectivo : "alocada em"
    DiaSemana ||--o{ Tempo_Lectivo : "ocorre em"
    Periodo ||--o{ Tempo_Lectivo : "ocorre em"
    Professor ||--o{ Disponibilidade : "cadastra"
    Professor ||--o{ ProfTurmaDisciplina : "vinculado a"
    Turma ||--o{ ProfTurmaDisciplina : "recebe"
    Disciplina ||--o{ ProfTurmaDisciplina : "atribuida a"
    ProfTurmaDisciplina ||--o{ Tempo_Lectivo : "gera"
    Turma ||--o{ TurmaDisciplina : "carga de"
    Disciplina ||--o{ TurmaDisciplina : "carga de"
```

### Chaves de Segurança Contra Conflitos
Na tabela `Tempo_Lectivo` (mapeada no banco como `tempo_lectivo`), três índices `@@unique` compostos bloqueiam inserções duplicadas concorrentes:
1.  `no_professor_conflict`: `[id_professor, id_dia, id_periodo, ordem]` -> O mesmo professor não pode dar duas aulas simultâneas.
2.  `no_sala_conflict`: `[id_sala, id_dia, id_periodo, ordem]` -> Duas turmas não podem usar a mesma sala simultaneamente.
3.  `no_turma_conflict`: `[id_turma, id_dia, id_periodo, ordem]` -> Uma turma não pode ter duas disciplinas agendadas no mesmo instante.

---

## 🧠 Funcionamento do Algoritmo de Geração

O arquivo [gerarHorario.ts](file:///Users/mac/Projecto-AURA-desktop/lib/actions/gerarHorario.ts) contém o núcleo lógico do sistema. O problema de geração de horários é modelado como um **CSP** e resolvido da seguinte forma:

```
                  ┌──────────────────────────────┐
                  │   Definição de Aulas Livres   │
                  │   e Cálculo dos Domínios     │
                  └──────────────┬───────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────┐
                  │    Ordenação por MRV         │
                  │   (Menor domínio primeiro)   │
                  └──────────────┬───────────────┘
                                 │
            ┌────────────────────┴────────────────────┐
            ▼                                         ▼
   [Se restam aulas]                        [Se todas alocadas]
            │                                         │
            ▼                                         ▼
┌──────────────────────┐                     ┌─────────────────┐
│ Escolhe Próximo Slot │                     │ Salva no DB     │
│  no domínio da Aula  │                     │ (createMany)    │
└───────────┬──────────┘                     └─────────────────┘
            │
            ▼
┌──────────────────────────────────────────────┐
│ Valida Restrições e Conflitos                │
│ (Professor, Sala e Turma no mesmo slot)      │
└───────────┬──────────────────────────────────┘
            ├──────────────────────────┐
      [Sem Conflitos]             [Com Conflito]
            │                          │
            ▼                          ▼
┌──────────────────────┐     ┌──────────────────────┐
│ Alocação Temporária  │     │ Tenta Próximo Slot   │
└───────────┬──────────┘     │ ou Retrocede (Back)  │
            │                 └──────────────────────┘
            ▼
┌──────────────────────┐
│ Forward Checking     │
│ (Filtra domínios)    │
└───────────┬──────────┘
            ├──────────────────────────┐
     [Domínios OK]             [Domínio Vazio]
            │                          │
            ▼                          ▼
   [Chamada Recursiva]        ┌──────────────────────┐
   Avança para próx. aula     │ Backtrack (Desfaz)   │
                              └──────────────────────┘
```

1.  **Criação dos Domínios:** Para cada aula solicitada pela matriz (ex: 4 aulas de Matemática semanais para a turma A), o algoritmo calcula o **Domínio** (slots válidos de dia, período e ordem de aula) baseado estritamente na tabela de disponibilidades que o respectivo professor declarou.
2.  **Pré-Filtragem:** Slots previamente agendados em execuções passadas para outras turmas são deduzidos do domínio inicial para evitar violações de horários inter-turmas.
3.  **Ordenação MRV (Minimum Remaining Values):** As aulas a alocar são ordenadas com base no tamanho do seu domínio. Professores com restrições severas de agenda (poucas horas disponíveis) são processados primeiro, reduzindo dramaticamente a taxa de falha de alocação em estágios tardios do algoritmo.
4.  **Backtracking com Forward Checking:**
    *   O algoritmo tenta preencher um slot do domínio da aula atual.
    *   Ao preencher o slot, o **Forward Checking** analisa as aulas subsequentes que utilizam o mesmo professor ou turma e remove este slot específico dos seus respectivos domínios.
    *   Se qualquer aula futura ficar com o domínio vazio (0 slots disponíveis), o algoritmo aborta o caminho imediatamente, restaura os domínios modificados e realiza o **backtrack** (recua para tentar um slot diferente na aula anterior).

---

## ⚙️ Configuração e Instalação

### Pré-requisitos
*   **Node.js v22.x** (ou superior)
*   **NPM** ou **PNPM**
*   **Docker & Docker Compose** (para instanciar o banco PostgreSQL de maneira rápida)

### Passo 1: Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto contendo as credenciais de acesso ao banco. Exemplo:

```env
# Conexão principal utilizada pelo Prisma
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/aura?schema=public"

# Configurações adicionais de autenticação (opcionais / preparação futura)
WORKOS_API_KEY="sua_chave_workos_aqui"
WORKOS_CLIENT_ID="seu_client_id_workos_aqui"
```

### Passo 2: Instalação de Dependências
Instale as dependências declaradas no manifesto executando:

```bash
npm install
```

### Passo 3: Migração e Alimentação do Banco (Seed)
Execute as migrações do Prisma para estruturar o banco de dados PostgreSQL local e carregue a massa de dados simulada contendo turnos, classes, salas técnicas, cursos e grades iniciais:

```bash
# Executar migrations para criar tabelas
npx prisma migrate dev --name init

# Opcional: Popular banco de dados com dados reais de teste
npx prisma db seed
```

---

## 💻 Como Executar

O projeto pode ser executado em modo web autónomo ou como aplicação integrada desktop.

### 1. Executando em Modo Web (Next.js isolado)
Excelente para testar as rotas de API, conexões de banco e estilização CSS no navegador convencional.

```bash
npm run dev
```
*Acesse em seu navegador:* `http://localhost:3001`

### 2. Executando em Modo Desktop (Electron + Next.js)
Compila os scripts do Electron, inicializa o servidor de renderização Next.js e renderiza o software dentro da janela de aplicativo desktop.

```bash
npm run electron:dev
```

---

## 📦 Compilação e Empacotamento (Build)

Para distribuir o AURA como um aplicativo de desktop empacotado para uso em produção, utilize os scripts integrados do **Electron Builder**:

```bash
# Compilar Electron + build standalone do Next.js + gerar instalador multiplataforma
npm run electron:build

# Compilar instalador nativo específico para macOS (.dmg)
npm run electron:build:mac

# Compilar executável nativo específico para Windows (.exe)
npm run electron:build:win
```
*Os instaladores gerados e os diretórios descompactados serão criados na pasta `/release-mac` ou `/release` conforme as configurações de build do `package.json`.*

---

## 🐳 Implantação de Produção com Docker

Para rodar todo o ecossistema (Servidor Next.js + Banco de Dados PostgreSQL) sob contentores isolados de produção, utilize o Docker Compose:

```bash
# Construir imagens e rodar containers em segundo plano
docker-compose up -d --build
```

O container da aplicação rodará um script de entrada (`entrypoint`) que executa automaticamente `npx prisma migrate deploy` antes de subir o servidor Node standalone na porta `3000`.

---

## 📁 Estrutura de Diretórios

Abaixo está o mapa simplificado com as principais pastas do projeto:

```text
├── app/                      # Roteamento Next.js (App Router), Páginas e Server Actions
│   ├── api/                  # Rotas de API internas (ex: /api/turmas)
│   ├── cursos/               # Páginas e controllers de Cursos
│   ├── disciplinas/          # Páginas e controllers de Disciplinas
│   ├── gerar/                # Painel de controlo da geração do algoritmo
│   ├── horarios/             # Visualização matricial de horários criados
│   ├── professores/          # Cadastro de docentes e disponibilidades
│   ├── salas/                # Cadastro de salas físicas e laboratórios
│   ├── turmas/               # Configuração das turmas acadêmicas
│   └── globals.css           # Estilos globais e tokens do Tailwind v4
├── components/               # Componentes de UI modulares e reutilizáveis (React)
│   ├── ui/                   # Componentes base do shadcn/ui
│   ├── app-sidebar.tsx       # Navegação lateral persistente
│   ├── gerar-content.tsx     # Interface de seleção e logs de geração
│   ├── horario-pdf.tsx       # Renderizador de PDF dos horários letivos
│   └── horarios-content.tsx  # Matriz interativa de exibição de horários
├── electron/                 # Código-fonte nativo do Electron (Main process)
│   ├── tsconfig.json         # Configuração TypeScript do Electron
│   ├── main.ts               # Ciclo de vida nativo e spawn do Next.js
│   ├── preload.ts            # Ponte de segurança ipcRenderer/ipcMain
│   └── updater.ts            # Implementação do Auto Updater
├── hooks/                    # Hooks customizados do React
├── lib/                      # Serviços, Validações e Utilitários compartilhados
│   ├── Service/              # Camada CRUD que interage com o banco via Prisma
│   ├── Validation/           # Esquemas de validação de formulários (Zod)
│   ├── actions/              # Server Actions do Next.js (Core Algorithm reside aqui)
│   └── prisma.ts             # Instanciação do Prisma Client
├── prisma/                   # Banco de dados
│   ├── schema.prisma         # Modelo relacional do banco de dados (PostgreSQL)
│   └── seed.ts               # Massa de dados padrão para testes acadêmicos
└── package.json              # Manifesto de dependências e scripts de automação
```

---

## 🎓 Autoria e Licença

Este projecto foi desenvolvido como **Projecto de Fim de Curso** com propósitos académicos e de automação organizacional.  
Distribuído sob os termos da licença **MIT** (veja o arquivo `LICENSE` para mais detalhes).