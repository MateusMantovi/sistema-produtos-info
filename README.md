# Sistema de Gestão de Produtos de Informática (v1.0)

![Java](https://img.shields.io/badge/Java-21-blue.svg?logo=openjdk&style=for-the-badge) ![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.3.0-6DB33F.svg?logo=spring&style=for-the-badge) ![Angular](https://img.shields.io/badge/Angular-18-DD0031.svg?logo=angular&style=for-the-badge) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791.svg?logo=postgresql&style=for-the-badge) ![Status](https://img.shields.io/badge/status-ativo-success.svg?style=for-the-badge)

Repositório da aplicação web Full-Stack "Sistema de Gestão de Produtos". Este projeto serve como um exemplo robusto e moderno de desenvolvimento de software, utilizando as melhores práticas do mercado com Java/Spring Boot para o backend e Angular para o frontend.

---

## 📖 Tabela de Conteúdos

1.  [Filosofia e Arquitetura](#-filosofia-e-arquitetura)
2.  [✨ Funcionalidades Principais](#-funcionalidades-principais)
3.  [🛠️ Stack de Tecnologias](#-stack-de-tecnologias)
4.  [✅ Pré-requisitos](#-pré-requisitos)
5.  [🚀 Configuração do Ambiente](#-configuração-do-ambiente)
6.  [▶️ Executando Localmente](#-executando-localmente)
7.  [🧪 Testando a Aplicação](#-testando-a-aplicação)
8.  [📦 Build e Deployment com Docker](#-build-e-deployment-com-docker)
9.  [📄 Endpoints da API](#-endpoints-da-api)
10. [🤝 Como Contribuir](#-como-contribuir)
11. [⚖️ Licença](#-licença)

---

## 🏛️ Filosofia e Arquitetura

* **Arquitetura Monolítica com Separação de Responsabilidades:** O sistema é um monólito, mas o código é estritamente separado em `backend` e `frontend`. Isso permite que equipes diferentes possam trabalhar em paralelo e facilita uma futura migração para microserviços, se necessário.
* **Backend Robusto e Orientado a Domínio:** Utilizamos Spring Boot pela sua produtividade e ecossistema maduro. O padrão de camadas (Controller, Service, Repository) isola as regras de negócio da lógica de acesso a dados e da exposição da API. O uso de Spring Data JPA abstrai o SQL, aumentando a produtividade e a portabilidade do banco de dados.
* **Frontend Moderno e Reativo:** Angular foi escolhido por sua estrutura robusta para aplicações de grande escala (enterprise). A arquitetura é baseada em **Standalone Components**, o que simplifica o desenvolvimento e melhora o *tree-shaking* (remoção de código não utilizado). O uso de **Formulários Reativos** oferece um controle fino sobre a validação e o estado dos formulários.
* **Comunicação via API RESTful:** A comunicação desacoplada entre frontend e backend é feita através de uma API REST bem definida, utilizando o formato JSON. O endpoint do frontend é configurado via `@CrossOrigin` no backend para permitir o desenvolvimento local.

---

## ✨ Funcionalidades Principais

* **Gerenciamento Completo de Produtos (CRUD):** Criação, listagem, edição e exclusão de produtos.
* **Interface Responsiva e Intuitiva:** Experiência de usuário fluida em desktops e dispositivos móveis.
* **Tema Claro e Escuro (Dark/Light Mode):** Preferência do usuário salva no `localStorage`.
* **Validação de Dados End-to-End:** Regras de validação aplicadas no frontend (Angular Forms) e reforçadas no backend (Jakarta Bean Validation) para garantir a integridade dos dados.
* **Feedback ao Usuário:** Interações na interface fornecem feedback visual (a ser aprimorado com toasts).

---

## 🛠️ Stack de Tecnologias

* **Backend:** Java 21, Spring Boot 3.3.0, Spring Data JPA, Hibernate, Maven, Lombok (opcional, para reduzir boilerplate).
* **Frontend:** Angular 18, TypeScript, Node.js, SCSS, RxJS.
* **Banco de Dados:** PostgreSQL 16.
* **DevOps & Ferramentas:** Git, VS Code, DBeaver, Docker, Postman (para testes de API).

---

## ✅ Pré-requisitos

* **Java Development Kit (JDK):** Versão 21 ou superior.
* **Maven:** Versão 3.8 ou superior.
* **Node.js e NPM:** Node na versão LTS.
* **Angular CLI:** Versão 18.
* **Git:** Para controle de versão.
* **Docker e Docker Compose:** (Opcional) Para rodar a aplicação em contêineres.

---

## 🚀 Configuração do Ambiente

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/sistema-produtos-info.git](https://github.com/seu-usuario/sistema-produtos-info.git)
    cd sistema-produtos-info
    ```

2.  **Configure o Banco de Dados:**
    * Crie o banco `produtos_inf` no PostgreSQL e a tabela `tb_produto` usando os scripts do guia original.

3.  **Configure as Variáveis de Ambiente do Backend:**
    * **Segurança:** Em vez de colocar a senha no `application.properties`, é uma boa prática usar variáveis de ambiente.
    * No diretório `backend/src/main/resources/`, renomeie `application.properties` para que ele use as variáveis:
        ```properties
        server.port=${SERVER_PORT:8080}
        spring.datasource.url=jdbc:postgresql://${DB_HOST:localhost}:${DB_PORT:5432}/${DB_NAME:produtos_inf}
        spring.datasource.username=${DB_USER:postgres}
        spring.datasource.password=${DB_PASSWORD} # Será lida do ambiente
        # ... resto das configurações JPA
        ```
    * Antes de executar o backend, defina a variável de ambiente `DB_PASSWORD`:
        ```powershell
        # Exemplo para PowerShell (Windows)
        $env:DB_PASSWORD="sua_senha_secreta"

        # Exemplo para Bash (Linux/macOS)
        export DB_PASSWORD="sua_senha_secreta"
        ```

4.  **Instale as Dependências:**
    ```bash
    # Para o frontend
    cd frontend && npm install
    ```

---

## ▶️ Executando Localmente

1.  **Backend (Terminal 1):**
    ```bash
    # Exporte a senha primeiro (se ainda não fez)
    cd backend
    ./mvnw spring-boot:run
    ```
    ✅ API rodando em `http://localhost:8080`.

2.  **Frontend (Terminal 2):**
    ```bash
    cd frontend
    ng serve -o
    ```
    ✅ Aplicação web rodando em `http://localhost:4200`.

---

## 🧪 Testando a Aplicação

1.  **Testes Unitários e de Integração do Backend:**
    O Spring Boot já vem com uma suíte de testes configurada.
    ```bash
    cd backend
    ./mvnw test
    ```
    Isso executará todos os testes na pasta `src/test/java`.

2.  **Testes Unitários e de Componente do Frontend:**
    O Angular CLI usa Karma e Jasmine para testes.
    ```bash
    cd frontend
    ng test
    ```
    Isso abrirá um navegador para executar os testes definidos nos arquivos `.spec.ts`.

---

## 📦 Build e Deployment com Docker

Para simular um ambiente de produção, você pode criar contêineres para cada parte da aplicação.

1.  **Crie os Arquivos de Build:**
    ```bash
    # Backend (gera o .jar em /target)
    cd backend && ./mvnw package -DskipTests

    # Frontend (gera os arquivos estáticos em /dist)
    cd frontend && ng build
    ```

2.  **Use Docker para Containerizar:**
    * Crie um `Dockerfile` na raiz de `backend/`:
        ```dockerfile
        # backend/Dockerfile
        FROM openjdk:21-jdk-slim
        ARG JAR_FILE=target/*.jar
        COPY ${JAR_FILE} app.jar
        ENTRYPOINT ["java","-jar","/app.jar"]
        ```
    * Crie um `Dockerfile` na raiz de `frontend/` com um servidor Nginx:
        ```dockerfile
        # frontend/Dockerfile
        # Etapa 1: Build
        FROM node:lts-alpine as build
        WORKDIR /app
        COPY package*.json ./
        RUN npm install
        COPY . .
        RUN npm run build

        # Etapa 2: Servir com Nginx
        FROM nginx:alpine
        COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html
        EXPOSE 80
        ```
    * Crie um `docker-compose.yml` na raiz do projeto para orquestrar os serviços:
        ```yaml
        # docker-compose.yml
        version: '3.8'
        services:
          postgres-db:
            image: postgres:16
            container_name: postgres-db
            environment:
              - POSTGRES_DB=produtos_inf
              - POSTGRES_USER=postgres
              - POSTGRES_PASSWORD=sua_senha_secreta
            ports:
              - "5432:5432"
            volumes:
              - postgres_data:/var/lib/postgresql/data

          backend-api:
            build: ./backend
            container_name: backend-api
            depends_on:
              - postgres-db
            ports:
              - "8080:8080"
            environment:
              - DB_PASSWORD=sua_senha_secreta

          frontend-app:
            build: ./frontend
            container_name: frontend-app
            ports:
              - "80:80" # ou 4200:80

        volumes:
          postgres_data:
        ```

3.  **Execute com Docker Compose:**
    ```bash
    docker-compose up --build
    ```
    ✅ Sua aplicação completa estará rodando! Acesse pelo `localhost` na porta definida para o frontend.

---

## 📄 Endpoints da API

*URL Base: `http://localhost:8080/api/v1/produtos`*
_(A tabela de endpoints permanece a mesma da versão anterior)_

---

## 🤝 Como Contribuir

1.  **Faça um Fork** deste repositório.
2.  **Crie uma Branch** para sua feature (`git checkout -b feature/minha-feature`).
3.  **Faça o Commit** de suas alterações (`git commit -m 'feat: Adiciona minha feature'`). Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/).
4.  **Faça o Push** para a branch (`git push origin feature/minha-feature`).
5.  **Abra um Pull Request**.

---

## ⚖️ Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
