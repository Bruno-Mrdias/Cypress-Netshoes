# Projeto de Testes Automatizados com Cypress - Netshoes

Este repositório contém um projeto de automação de testes realizado com [Cypress](https://www.cypress.io/), no qual foram testadas funcionalidades essenciais do site da Netshoes. O foco dos testes inclui a verificação da funcionalidade de inserção de CEP, a adição de itens ao carrinho e a navegação pelas categorias de produtos da loja.

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades Testadas](#funcionalidades-testadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar os Testes](#como-executar-os-testes)
- [Relatórios de Testes](#relatórios-de-testes)
- [Contribuição](#contribuição)

## Sobre o Projeto
Este projeto foi desenvolvido para validar a qualidade das principais funcionalidades do site de e-commerce da Netshoes, proporcionando uma experiência de usuário confiável e consistente. Os testes garantem que operações como a inserção de CEP, a adição de produtos ao carrinho e a navegação por categorias estejam funcionando corretamente.

## Funcionalidades Testadas
As principais funcionalidades cobertas pelos testes são:
1. **Inserção de CEP**: Verifica se o sistema aceita e valida o CEP corretamente para exibir as opções de frete e entrega.
2. **Adição de Itens ao Carrinho**: Valida o fluxo de adicionar produtos ao carrinho, incluindo a verificação de quantidades e preços.
3. **Navegação por Categorias**: Testa se o usuário consegue acessar e navegar entre as diferentes categorias de produtos da loja.

## Estrutura do Projeto
O projeto segue a estrutura padrão do Cypress e utiliza o conceito de **Page Object Model** para organizar e manter o código de maneira eficiente e escalável.

```plaintext
.
├── cypress
│   ├── e2e
│   │   ├── NetshoesCep.cy.js         # Teste para inserção de CEP
│   │   ├── NetshoesCheckou.cy.js        # Teste para adição de itens ao carrinho
│   │   └── NeshoesCategory.cy.spec.js  # Teste para navegação por categorias
│   ├── fixtures
│   ├── pages                   # Modelos de página seguindo Page Object Model
│   └── support
├── cypress.config.js
├── package.json
└── README.md
```
## Tecnologias Utilizadas
- Cypress: Framework de teste end-to-end para garantir a funcionalidade de interfaces de usuário.
- JavaScript: Linguagem principal para o desenvolvimento dos testes.
- Mochawesome: Utilizado para geração de relatórios de testes.

## Como Executar os Testes
Clone este repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
````
Instale as dependências:
```bash
npm install
```
Execute os testes:
No modo interativo:
```bash
npx cypress open
```
No modo headless:
```bash
npx cypress run
```
## Relatórios de Testes
Este projeto usa o Mochawesome para gerar relatórios. Os relatórios são gerados automaticamente após a execução dos testes no modo headless. Os arquivos de relatório estarão disponíveis na pasta cypress/reports.

## Contribuição
Sinta-se à vontade para contribuir com este projeto. Para isso, siga os passos:

## Fork o repositório.

Crie uma branch com a nova feature:
```bash
git checkout -b feature/sua-feature.
```
Commit suas mudanças:
```bash
git commit -m 'Adiciona nova feature'.
```
Envie para a branch principal:
```bash
git push origin feature/sua-feature.
```
- Abra um Pull Request.
