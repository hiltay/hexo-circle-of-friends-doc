# 为友链朋友圈做贡献

首先，感谢你考虑为本项目做出贡献！我们欢迎任何形式的贡献，从修复错误、改进文档到添加新功能。

本文档为 `hexo-circle-of-friends` 项目的贡献提供了简单的指导方案和标准工作流程。

## 目录

- [为友链朋友圈做贡献](#为友链朋友圈做贡献)
  - [目录](#目录)
  - [项目技术栈与架构](#项目技术栈与架构)
  - [搭建开发环境](#搭建开发环境)
    - [前提条件](#前提条件)
    - [步骤](#步骤)
  - [运行测试与检查](#运行测试与检查)
  - [分支管理与拉取请求](#分支管理与拉取请求)
  - [为文档做贡献](#为文档做贡献)

## 项目技术栈与架构

本项目主要是一个 Rust 应用程序，带有一些用于特定部署场景的 Python 组件。

- **核心逻辑 (Rust):**

  - 主应用程序是一个由多个 crate 组成的 Rust 工作区：
    - `core`: 主要的数据处理逻辑。
    - `downloader`: 负责抓取友链和文章页面。
    - `db`: 管理数据库交互，支持 SQLite、MySQL 和 MongoDB。
    - `api`: 一个基于 Axum 的 Web 服务器，用于提供数据接口。
    - `tools`: 共享的工具函数。
    - `data_structures`: 定义了整个项目使用的核心数据模型。
  - **关键技术:** 使用 [Tokio](https://tokio.rs/) 作为异步运行时，[Reqwest](https://github.com/seanmonstar/reqwest) 用于 HTTP 请求，[SQLx](https://github.com/launchbadge/sqlx) 用于数据库访问，以及 [Axum](https://github.com/tokio-rs/axum) 用于 API。

- **Python 组件:**

  - 提供了一个 [FastAPI](https://fastapi.tiangolo.com/) 应用 (`api/vercel.py`)，以便在 Vercel 上轻松部署。
  - 依赖项由 `uv` 管理，并列在 `requirements.txt` 中。

- **配置:**
  - `fc_settings.yaml`: 主要的应用程序设置。
  - `css_rules.yaml`: 包含用于网页抓取的 CSS 选择器。

## 搭建开发环境

### 前提条件

- **Rust:** 通过 [rustup](https://rustup.rs/) 安装 Rust 工具链。
- **Python:** Python 3.12 或更高版本。
- **Git:** 用于版本控制。

### 步骤

1. **Fork 并克隆仓库:**
   Fork [Rock-Candy-Tea/hexo-circle-of-friends](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends) 仓库，并将你的 fork 克隆到本地：

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/hexo-circle-of-friends.git
   cd hexo-circle-of-friends
   ```

2. **配置项目:**
   从模板创建你自己的设置文件：

   ```bash
   cp fc_settings.yaml my_settings.yaml
   ```

   对于本地开发，建议使用 `sqlite` 数据库，它不需要额外设置。请确保在你的 `my_settings.yaml` 中设置了 `DATABASE: "sqlite"`。

3. **构建 Rust 项目:**
   构建整个工作区，以确保所有依赖项都已获取并且代码可以编译。

   ```bash
   cargo build
   ```

4. **运行核心应用:**
   要执行抓取并填充数据库，请运行 `fcircle_core` 二进制文件。它将默认使用 `fc_settings.yaml`。

   ```bash
   cargo run --bin fcircle_core
   ```

   这将在根目录中创建一个 `data.db` SQLite 文件。

5. **运行 API 服务器:**
   要提供数据服务，请运行 `fcircle_api` 二进制文件。

   ```bash
   cargo run --bin fcircle_api
   ```

   API 将在 `http://localhost:8000` 上可用。

## 运行测试与检查

在提交任何更改之前，请确保所有测试和代码质量检查都通过。

- **运行测试:**
  请为你编写的组件或功能编写测试。要在本地运行测试，请运行：

  ```bash
  cargo test --workspace --all-features --all-targets -- --test-threads=1
  ```

- **检查格式化:**
  使用 `rustfmt` 来保持一致的代码风格。

  ```bash
  cargo fmt --all --check
  ```

- **运行 Linter (Clippy):**
  使用 `clippy` 来捕捉常见错误并提高代码质量。

  ```bash
  cargo clippy --workspace --all-targets --all-features -- -D warnings
  ```

## 分支管理与拉取请求

1. **创建分支:** 基于 `main` 分支为你的功能或错误修复创建一个新分支。

   ```bash
   git checkout -b your-feature-name main
   ```

2. **进行更改:** 使用清晰简洁但概括全面的消息提交你的更改。

3. **推送并创建拉取请求:** 将你的分支推送到你的 fork，并针对主仓库的 `main` 分支创建一个拉取请求（PR）。

4. **PR 清单:**

   - 为你的 PR 提供一个清晰的标题和描述。
   - 确保所有测试、格式化检查和 linter 检查都通过。
   - 如果你添加了新功能，请同时添加相应的测试。
   - 如果你的更改影响了配置或需要新的设置步骤，请相应地更新文档。

## 为文档做贡献

文档位于 [hexo-circle-of-friends-doc](https://github.com/hiltay/hexo-circle-of-friends-doc) 仓库中，并使用 [Docsify](https://docsify.js.org/) 构建。

为文档做贡献的步骤：

1. 克隆 `hexo-circle-of-friends-doc` 仓库。

2. 在 `docs/` 目录中对 Markdown 文件进行更改。

3. 要本地预览你的更改，可以使用 Docsify CLI：

   ```bash
   # 如果你还没有安装 docsify-cli
   npm i docsify-cli -g
   # 启动文档服务
   docsify serve docs
   ```

4. 提交一个包含你更改的拉取请求。