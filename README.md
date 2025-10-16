### 🚀 Tecnologias Frontend

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)](https://rxjs.dev/)
[![Angular CLI](https://img.shields.io/badge/Angular_CLI-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/tools/cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# ConsumirDeezer.UI (Angular)

Aplicação Single Page Application (SPA) desenvolvida em **Angular (^19.2.0)** e **TypeScript** para interagir com a `ConsumirDeezer.API` (Backend) e exibir resultados de busca de artistas e suas músicas mais populares do Deezer.

## 🔗 Projeto Completo

Este é o módulo Frontend do projeto. O código completo do Backend (.NET Core) está disponível aqui:
[ConsumirDeezer.API (Backend)](https://github.com/marcelogmoura/ConsumirDeezer.API)

## 🚀 Tecnologias Utilizadas

| Categoria | Tecnologia | Versão |
| :--- | :--- | :--- |
| Framework | Angular | ^19.2.0 |
| Linguagem | TypeScript | ~5.7.2 |
| HTTP/Assincronia | RxJS e HttpClient | Utiliza `debounceTime` e `switchMap` para busca otimizada |
| Estrutura | Standalone Components | Arquitetura moderna e modular |
| Roteamento | Angular Router | Mapeamento das rotas `/` (Busca) e `/artist/:id` (Detalhes) |

## 📁 Estrutura do Projeto

O projeto segue a estrutura de Standalone Components, organizada por features:

* **`src/app/pages/search`:** Componente principal para busca de artistas.
* **`src/app/pages/artist-detail`:** Componente para exibir o Top Tracks de um artista.
* **`src/app/services/api.service.ts`:** Camada centralizada de comunicação com a `ConsumirDeezer.API` (Backend).
* **`src/app/types/deezer.types.ts`:** Definição das interfaces (DTOs) que espelham a estrutura de dados da API.

## ⚙️ Configuração e Execução

### Pré-requisitos

* Node.js (versão compatível com Angular 19)
* Angular CLI (`npm install -g @angular/cli`)

**⚠️ Atenção:** Este frontend faz requisições para `http://localhost:5215/api`. O projeto **Backend** (`ConsumirDeezer.API`) deve estar rodando para a aplicação funcionar.

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/marcelogmoura/ConsumirDeezer.UI]
    cd ConsumirDeezer.UI
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    A aplicação será servida na porta padrão `4200`.
    ```bash
    ng serve
    ```

4.  **Acesse a aplicação:**
    Abra seu navegador em `http://localhost:4200/`.

## 📈 Funcionalidades Principais

* **Busca Otimizada (RxJS):** Utiliza `FormControl` em conjunto com `debounceTime(400ms)` e `distinctUntilChanged` para evitar requisições desnecessárias, melhorando a performance.
* **Player de Áudio:** O componente de detalhes exibe um player nativo (`<audio>`) utilizando o link de `preview` de 30 segundos fornecido pela API.
* **Tratamento de Falhas:** Implementação de lógica para exibir mensagens de "nenhum resultado" apenas após a tentativa de busca e para substituir imagens ausentes por *placeholders*.

## 🧪 Testes Unitários

Para executar os testes unitários (usando Karma):

```bash
ng test
```

## 🖼️ Demonstração (Interface)

Abaixo estão algumas capturas de tela da aplicação em funcionamento, demonstrando o fluxo de busca e visualização dos detalhes:

### 1. Tela de Busca Otimizada
Interface inicial com a barra de busca e a instrução clara para o usuário.

![Tela de Busca de Artista (Estado Inicial)](https://i.postimg.cc/Dw3SVsdx/Screenshot-22.jpg)

### 2. Resultados da Busca
Exibição dos resultados (Cards de Artista) em tempo real, após a digitação do termo de busca.

![Resultados da Busca de Artistas](https://i.postimg.cc/3wSpHNww/Screenshot-23.jpg)

### 3. Detalhes e Top Tracks
Página de detalhes do artista, exibindo o Top Tracks, a prévia em áudio e a duração formatada.

![Tela de Detalhes do Artista e Top Tracks](https://i.postimg.cc/0NB6B4t9/Screenshot-24.jpg)


---

## 🧑‍💻 Autor

| Autor | GitHub | LinkedIn | Email |
| :---: | :---: | :---: | :---: |
| **Marcelo Moura** | [![GitHub Badge](https://img.shields.io/badge/-GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/marcelogmoura) | [![LinkedIn Badge](https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/marcelogmoura) | `mgmoura@gmail.com` |

---
