# Backlog do Produto - Sistema de Gestão de Produtos

Este documento é a única fonte da verdade para todo o trabalho a ser realizado na aplicação. Ele é mantido e priorizado pelo Product Owner para guiar o time de desenvolvimento.

**Visão do Produto:** Construir a plataforma de gestão de inventário mais eficiente e amigável para lojas de informática de pequeno e médio porte, servindo como base para futuras expansões de e-commerce e inteligência de negócio.

---

### Definition of Done (DoD)

Um item do backlog (User Story) é considerado **"Done"** somente quando todos os critérios abaixo são atendidos:
- [ ] O código foi escrito e segue os padrões de estilo do projeto.
- [ ] Todos os testes automatizados (unitários e de integração) passam com sucesso.
- [ ] Novos testes foram criados para cobrir a nova funcionalidade.
- [ ] A funcionalidade atende a todos os Critérios de Aceite da User Story.
- [ ] O código foi revisado (Code Review) e aprovado por pelo menos um outro membro da equipe.
- [ ] A branch da feature foi mesclada na branch principal (`main` ou `develop`).
- [ ] A build do CI/CD foi concluída com sucesso após o merge.

---

## ✅ Concluído (Versão 1.0 - MVP)

| ID | User Story | Critérios de Aceite (AC) |
| :--- | :--- | :--- |
| **P-01** | **Como** gerente, **eu quero** ver uma lista de todos os produtos, **para que** eu possa ter uma visão geral do inventário. | **AC 1:** A tabela deve exibir as colunas: Nome, Categoria, Preço (formatado em BRL), e Estoque.<br>**AC 2:** Ações de Editar e Excluir devem estar visíveis para cada produto.<br>**AC 3:** Se não houver produtos, uma mensagem informativa deve ser exibida. |
| **P-02** | **Como** gerente, **eu quero** criar um novo produto, **para que** eu possa adicionar itens ao catálogo. | **AC 1:** O formulário deve conter campos para nome, categoria, descrição, preço e estoque.<br>**AC 2:** Os campos Nome, Preço e Estoque são obrigatórios.<br>**AC 3:** O formulário deve ter validação em tempo real.<br>**AC 4:** Ao submeter com sucesso, o usuário é redirecionado para a lista de produtos. |
| **P-03** | **Como** gerente, **eu quero** editar um produto existente, **para que** eu possa atualizar informações. | **AC 1:** Ao clicar em editar, o formulário deve ser pré-preenchido com os dados do produto.<br>**AC 2:** O título da página deve indicar que é uma edição.<br>**AC 3:** Ao salvar, as alterações são persistidas e o usuário retorna à lista. |
| **P-04** | **Como** gerente, **eu quero** excluir um produto, **para que** eu possa manter o catálogo limpo. | **AC 1:** Ao clicar em excluir, uma caixa de diálogo de confirmação deve aparecer.<br>**AC 2:** Somente após a confirmação o produto é removido do banco.<br>**AC 3:** A lista de produtos é atualizada automaticamente. |
| **P-05** | **Como** usuário, **eu quero** alternar entre tema claro e escuro, **para que** eu possa ter mais conforto visual. | **AC 1:** Um ícone na interface permite a troca de tema.<br>**AC 2:** A escolha do tema é salva no `localStorage` e persiste entre as sessões.<br>**AC 3:** Todos os componentes da aplicação devem se adaptar ao tema selecionado. |

---

## 📝 Backlog do Produto (Priorizado para Próximas Sprints)

| ID | User Story / Tarefa Técnica | Épico | Prioridade |
| :--- | :--- | :--- | :--- |
| **AA-01** | **Como** um usuário não autenticado, **eu quero** ver uma página de login, **para que** eu possa acessar o sistema. | Autenticação | **Crítica** |
| | **Critérios de Aceite:**<br>1. A página deve ter campos para email e senha.<br>2. Deve haver um link para "Cadastre-se" (funcionalidade futura).<br>3. Acesso a qualquer outra rota deve redirecionar para o login se não estiver autenticado. | | |
| **AA-02** | **Backend:** Criar endpoint `POST /api/v1/auth/login` que valida as credenciais e retorna um JWT (JSON Web Token). | Autenticação | **Crítica** |
| | **Critérios de Aceite:**<br>1. Endpoint aceita email e senha.<br>2. Se as credenciais forem válidas, retorna um token JWT com `userId` e `roles` no payload.<br>3. Se inválidas, retorna status `401 Unauthorized`.<br>4. A senha deve ser armazenada no banco usando um algoritmo de hash forte (ex: bcrypt). | | |
| **AA-03** | **Frontend:** Implementar um `HttpInterceptor` para anexar o JWT em todas as requisições para a API após o login. | Autenticação | **Crítica** |
| | **Critérios de Aceite:**<br>1. O token JWT é salvo de forma segura no frontend (ex: `localStorage`).<br>2. O interceptor adiciona o header `Authorization: Bearer <token>` a todas as chamadas HTTP, exceto para `/login` e `/register`.<br>3. O sistema deve lidar com a expiração do token (redirecionar para login). | | |
| **BF-01** | **Como** gerente, **eu quero** um campo de busca na lista de produtos, **para que** eu encontre itens pelo nome. | Busca e Filtros | **Alta** |
| | **Critérios de Aceite:**<br>1. Um campo de input "Buscar..." está visível acima da tabela.<br>2. A busca é acionada enquanto o usuário digita (debounce de 300ms).<br>3. A lista é filtrada no backend para melhor performance. | | |
| **T-01** | **Tarefa Técnica:** Configurar um pipeline de CI/CD básico (ex: GitHub Actions) para rodar testes e builds automaticamente. | DevOps | **Alta** |
| | **Critérios de Aceite:**<br>1. O workflow é acionado em cada push para `main` e em Pull Requests.<br>2. O job do backend executa `./mvnw test`.<br>3. O job do frontend executa `npm install` e `ng test`. | | |
| **UX-01** | **Como** usuário, **eu quero** ver notificações (toasts) de sucesso ou erro após minhas ações (CRUD), **para que** eu tenha feedback claro. | Melhorias de UI/UX | **Média** |
| | **Critérios de Aceite:**<br>1. Um toast verde de sucesso aparece para criações/edições/exclusões bem-sucedidas.<br>2. Um toast vermelho de erro aparece se a API retornar um erro.<br>3. Os toasts desaparecem automaticamente após 5 segundos. | | |

---

## 🧊 Icebox (Ideias para o Futuro / Baixa Prioridade)

| ID | Ideia / User Story | Épico |
| :--- | :--- | :--- |
| **ICE-01** | **Como** gerente, **eu quero** fazer upload de imagens para cada produto. | Gestão de Produtos |
| **ICE-02** | **Como** gerente, **eu quero** um dashboard com gráficos do valor total em estoque e produtos por categoria. | Dashboard e Relatórios |
| **ICE-03** | **Como** gerente, **eu quero** poder exportar a lista de produtos para CSV. | Dashboard e Relatórios |
| **ICE-04** | **Como** usuário, **eu quero** poder me cadastrar no sistema para obter uma conta. | Autenticação |
| **ICE-05** | **Como** administrador, **eu quero** uma interface para gerenciar usuários (ativar/desativar, definir papéis). | Gestão de Usuários |
