# Teste Econverse: Vaga Desenvolvedor Front-End

Este repositório contém a implementação do teste técnico para a vaga de Desenvolvedor Front-End na Econverse.

## Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/) (versão recomendada: 18+)
- [VS Code](https://code.visualstudio.com/) (ou outro editor de sua preferência)
- [pnpm](https://pnpm.io/) (recomendado) ou npm/yarn
- Navegador atualizado (Google Chrome recomendado para testes com Cypress)

## Compatibilidade e Responsividade

Este projeto foi desenvolvido para ser totalmente responsivo, garantindo uma ótima experiência em diferentes dispositivos, incluindo:

- **Dispositivos móveis** (smartphones e tablets)
- **Desktops** (telas grandes)

O layout e os componentes foram ajustados para se adaptarem de forma fluida a diferentes tamanhos de tela.

## Instalação

Clone o repositório e instale as dependências:

```sh
# Clonar o repositório
git clone https://github.com/Jacksons357/teste-front-end.git
cd teste-front-end

# Instalar dependências com pnpm (recomendado)
pnpm install

# Ou, se preferir, com npm
npm install
```

## Scripts Disponíveis

Você pode rodar os seguintes comandos:

### Desenvolvimento

```sh
pnpm dev  # Inicia o servidor de desenvolvimento
```

### Build para Produção

```sh
pnpm build  # Compila o projeto para produção
```

### Lint

```sh
pnpm lint  # Verifica problemas de lint no código
```

### Testes com Cypress

Para abrir o painel interativo do Cypress:

```sh
pnpm cy:open
```

Caso queira rodar os testes em modo headless:

```sh
pnpm cypress run
```

---

Qualquer dúvida, fique à vontade para entrar em contato!
