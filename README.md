<p align="center">
  <img src="public/Logo-AURA.png" alt="AURA Logo" width="180" style="border-radius: 12px;" />
</p>

# 🌌 AURA — Portal de Horários Académicos
> **Projecto de Fim de Curso**  
> Uma aplicação de alta performance desenvolvida para automatizar a geração e a gestão de horários escolares, prevenindo conflitos de recursos (professores, salas e turmas) através de algoritmos de inteligência computacional e satisfação de restrições.

> [!CAUTION]
> ### 🔌 Requisito Crítico de Ligação à Base de Dados
> Esta aplicação **só funciona com uma base de dados (PostgreSQL) ativa e conectada**. Se a base de dados não estiver operacional ou a ligação falhar, **o Dashboard e as demais funcionalidades não irão abrir**. Certifique-se de que a sua base de dados PostgreSQL está a correr e acessível antes de iniciar o servidor.

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

## ⚙️ Instalação e Preparação

### Passo 1: Instalação de Dependências
Instale as dependências declaradas no manifesto executando:

```bash
npm install
```

### Passo 2: Sincronização do Banco de Dados (Prisma)
Execute as migrações para estruturar as tabelas na sua base de dados PostgreSQL ativa e carregue a massa de dados padrão:

```bash
# Executar as migrações para criar as tabelas
npx prisma migrate dev --name init

# Popular o banco de dados com dados reais de teste
npx prisma db seed
```

---

## 💻 Como Executar

Inicie o servidor de desenvolvimento local Next.js:

```bash
npm run dev
```
*Aceda em seu navegador:* `http://localhost:3001`

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