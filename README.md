# Testes da Aplicação AYR

Este repositório contém ficheiros YAML que descrevem diferentes fluxos de teste automatizados para a aplicação **AYR**.  
Os testes foram criados para validar o funcionamento da aplicação desde a criação de conta até ao registo de uma atividade.

---

## Estrutura dos Ficheiros

| Ficheiro | Descrição |
|-----------|------------|
| **Criação de conta na aplicação AYR..yaml** | Define o fluxo de teste para criar uma nova conta na aplicação AYR, incluindo o preenchimento dos campos necessários e a validação do processo de registo. |
| **Login com uma conta existente..yaml** | Contém o cenário de teste para autenticação de um utilizador já registado na aplicação AYR. |
| **Registar uma atividade dentro da aplicação..yaml** | Descreve o processo de registo de uma atividade após o utilizador estar autenticado. |

---

## Pré-requisitos

Para que os testes possam ser executados corretamente, é necessário garantir o seguinte:

- O dispositivo deve ser **um telemóvel acabado de ser configurado**, ou seja, **sem qualquer histórico de utilização da aplicação AYR**.  
- A **permissão de localização** deve estar configurada para **“sempre permitir”** antes da execução dos testes.

---

## Como Executar

1. Certifica-te de que o dispositivo cumpre os pré-requisitos acima.  
2. Importa os ficheiros `.yaml` no ambiente de testes.  
3. Executa os testes na ordem recomendada:
   1. `Criação de conta na aplicação AYR..yaml`
   2. `Login com uma conta existente..yaml`
   3. `Registar uma atividade dentro da aplicação..yaml`

---

## Notas Adicionais

- Caso o dispositivo já tenha instalado a aplicação AYR anteriormente, **os testes podem falhar** devido a dados residuais ou permissões já configuradas.  
- Recomenda-se **reinstalar a aplicação** e **limpar os dados do dispositivo** antes de executar novamente.  
- Todos os cenários foram estruturados para **executar de forma independente**, mas a sequência lógica acima garante um fluxo mais coerente.

---

## Autor e Manutenção

Este conjunto de testes foi criado por José Pereira para apoiar a validação funcional da aplicação AYR, garantindo a consistência dos principais fluxos de utilização.
