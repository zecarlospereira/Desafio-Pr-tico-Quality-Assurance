# Testes da Aplicação AYR e Website CEiiA

Este repositório contém testes automatizados desenvolvidos no âmbito de uma candidatura para o cargo de **QA Engineer**.  
Os testes abrangem duas áreas principais:

- **Automação Mobile** – validação dos principais fluxos da aplicação móvel **AYR**.  
- **Automação Web** – testes funcionais do website institucional do **CEiiA**.

---

## Tarefa 2 – Mobile Automation (Aplicação AYR)

Os ficheiros YAML descrevem fluxos de teste automatizados para a aplicação **AYR**, desde a criação de conta até ao registo de uma atividade.

### Estrutura dos Ficheiros

| Ficheiro | Descrição |
|-----------|------------|
| `Criação de conta na aplicação AYR..yaml` | Define o fluxo de teste para criar uma nova conta, incluindo o preenchimento de campos obrigatórios e validação do registo. |
| `Login com uma conta existente..yaml` | Contém o cenário de teste para autenticação de um utilizador já registado. |
| `Registar uma atividade dentro da aplicação..yaml` | Descreve o processo de registo de uma atividade após o login. |

---

### Pré-requisitos

- Dispositivo recém-configurado (sem histórico da aplicação AYR).  
- Permissão de localização **“sempre permitir”** previamente concedida.

---

### Como Executar

1. Garantir que o dispositivo cumpre os pré-requisitos.  
2. Importar os ficheiros `.yaml` no ambiente de testes.  
3. Executar na seguinte ordem:
   1. `Criação de conta na aplicação AYR..yaml`
   2. `Login com uma conta existente..yaml`
   3. `Registar uma atividade dentro da aplicação..yaml`

> **Nota:**  
> Se a app já tiver sido usada no dispositivo, recomenda-se reinstalar e limpar dados antes da execução.  
> Cada cenário pode ser executado de forma independente, mas a ordem acima assegura coerência.

---

## Tarefa 3 – Web Automation (Website CEiiA)

A automação web foi implementada em **Cypress**, com o ficheiro principal `ceiia.spec.cy.js`.  
O objetivo é validar a navegação, a estrutura e o conteúdo do site oficial do **CEiiA**.

---

### Estrutura do Ficheiro

| Ficheiro | Descrição |
|-----------|------------|
| `ceiia.spec.cy.js` | Contém os testes automatizados do website CEiiA, incluindo verificação de menus, páginas internas e footer. |

---

### Funcionalidades Testadas

- **Validação da homepage** – título e elementos principais.  
- **Menu principal** – abertura e visibilidade de todas as opções:
  - Home  
  - Markets  
  - Products  
  - Our World  
  - News  
  - Careers  
  - Contact Us  
  - Privacy Policy  
  - Terms & Conditions  
- **Verificação de navegação** – acesso e conteúdo de cada página listada acima.  
- **Scroll e validação do footer** – confirmação da presença dos links principais no rodapé.  
- **Gestão de cookies** – deteção e aceitação automática de banners “Accept” ou “Aceitar”.

---

### Como Executar

Certifica-te de que tens o **Node.js** e o **Cypress** instalados:

```bash
npm install
npx cypress open
```

1. Abre o Cypress.  
2. Executa o ficheiro `ceiia.spec.cy.js`.  
3. Os testes irão correr automaticamente no navegador configurado (por defeito, **Chrome**).

---

### Notas Técnicas

- O script foi desenvolvido para **resiliência a variações linguísticas** (ex.: botões “Accept” ou “Aceitar”).  
- Os **seletores** foram definidos com base em **visibilidade e texto**, garantindo compatibilidade com futuras alterações visuais do site.  
- Cada teste é **independente** e inicia sempre com uma **nova visita à homepage**.

---

## Autor

**José Pereira**  
 **QA Engineer** – automação de testes mobile e web.
