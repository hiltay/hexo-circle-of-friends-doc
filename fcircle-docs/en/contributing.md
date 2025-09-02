# Contributing to Friends Feed

Thank you for considering a contribution to this project! We welcome any form of contribution, from bug fixes and documentation improvements to new features.

This document provides simple guidelines and a standard workflow for contributing to the `hexo-circle-of-friends` project.

## Table of Contents

- [Contributing to Friends Feed](#contributing-to-friends-feed)
  - [Table of Contents](#table-of-contents)
  - [Project Tech Stack & Architecture](#project-tech-stack--architecture)
  - [Setting Up the Development Environment](#setting-up-the-development-environment)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Running Tests & Checks](#running-tests--checks)
  - [Branch Management & Pull Requests](#branch-management--pull-requests)
  - [Contributing to Documentation](#contributing-to-documentation)

## Project Tech Stack & Architecture

This project is primarily a Rust application with some Python components for specific deployment scenarios.

- **Core Logic (Rust):**

  - The main application is a Rust workspace composed of several crates:
    - `core`: Main data-processing logic.
    - `downloader`: Responsible for crawling friends’ links and article pages.
    - `db`: Manages database interactions, supporting SQLite, MySQL, and MongoDB.
    - `api`: A web server built on Axum that serves data endpoints.
    - `tools`: Shared utility functions.
    - `data_structures`: Defines the core data models used throughout the project.
  - **Key technologies:** Uses [Tokio](https://tokio.rs/) as the async runtime, [Reqwest](https://github.com/seanmonstar/reqwest) for HTTP requests, [SQLx](https://github.com/launchbadge/sqlx) for database access, and [Axum](https://github.com/tokio-rs/axum) for the API.

- **Python Components:**

  - Provides a [FastAPI](https://fastapi.tiangolo.com/) app (`api/vercel.py`) for easy deployment on Vercel.
  - Dependencies are managed by `uv` and listed in `requirements.txt`.

- **Configuration:**
  - `fc_settings.yaml`: Main application settings.
  - `css_rules.yaml`: Contains CSS selectors used for web scraping.

## Setting Up the Development Environment

### Prerequisites

- **Rust:** Install the Rust toolchain via [rustup](https://rustup.rs/).
- **Python:** Python 3.12 or higher.
- **Git:** For version control.

### Steps

1. **Fork & Clone the Repository:**
   Fork the [Rock-Candy-Tea/hexo-circle-of-friends](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends) repo, then clone your fork locally:

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/hexo-circle-of-friends.git
   cd hexo-circle-of-friends
   ```

2. **Configure the Project:**
   Create your own settings file from the template:

   ```bash
   cp fc_settings.yaml my_settings.yaml
   ```

   For local development, we recommend using the `sqlite` database, which requires no additional setup. Ensure `DATABASE: "sqlite"` is set in your `my_settings.yaml`.

3. **Build the Rust Project:**
   Build the entire workspace to fetch all dependencies and ensure the code compiles.

   ```bash
   cargo build
   ```

4. **Run the Core Application:**
   To crawl and populate the database, run the `fcircle_core` binary. It will use `fc_settings.yaml` by default.

   ```bash
   cargo run --bin fcircle_core
   ```

   This creates an SQLite file named `data.db` in the root directory.

5. **Run the API Server:**
   To serve the data, run the `fcircle_api` binary.

   ```bash
   cargo run --bin fcircle_api
   ```

   The API will be available at `http://localhost:8000`.

## Running Tests & Checks

Before submitting any changes, make sure all tests and code-quality checks pass.

- **Run Tests:**
  Write tests for any components or features you contribute. To run tests locally:

  ```bash
  cargo test --workspace --all-features --all-targets -- --test-threads=1
  ```

- **Format Check:**
  Use `rustfmt` to maintain a consistent code style.

  ```bash
  cargo fmt --all --check
  ```

- **Run Linter (Clippy):**
  Use `clippy` to catch common mistakes and improve code quality.

  ```bash
  cargo clippy --workspace --all-targets --all-features -- -D warnings
  ```

## Branch Management & Pull Requests

1. **Create a Branch:** Create a new branch based on `main` for your feature or bug fix.

   ```bash
   git checkout -b your-feature-name main
   ```

2. **Make Changes:** Commit your changes with clear, concise, and descriptive messages.

3. **Push & Create PR:** Push your branch to your fork and open a pull request (PR) against the `main` branch of the upstream repository.

4. **PR Checklist:**

   - Provide a clear title and description for your PR.
   - Ensure all tests, formatting, and lint checks pass.
   - Add corresponding tests if you introduce new features.
   - Update documentation if your changes affect configuration or require new setup steps.

## Contributing to Documentation

Documentation lives in the [hexo-circle-of-friends-doc](https://github.com/hiltay/hexo-circle-of-friends-doc) repository and is built with [Docsify](https://docsify.js.org/).

Steps to contribute to the docs:

1. Clone the `hexo-circle-of-friends-doc` repository.

2. Make changes to the Markdown files in the `docs/` directory.

3. To preview your changes locally, use the Docsify CLI:

   ```bash
   # Install docsify-cli if you haven't
   npm i docsify-cli -g
   # Serve the docs
   docsify serve docs
   ```

4. Submit a pull request with your changes.