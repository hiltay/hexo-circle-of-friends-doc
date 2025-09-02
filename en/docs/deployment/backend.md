# Backend Deployment

The **Friends Feed (fcircle) backend** is responsible for **scraping articles from friend links and generating data APIs** for the frontend.  
Two deployment methods are supported:

1. **GitHub Action + Vercel (recommended)** – serverless, zero-maintenance  
2. **Self-hosted (server deployment)** – higher stability on your own server  

---

## 🚀 GitHub + Vercel (Recommended)

The simplest route: GitHub Actions automatically scrape friend data, and Vercel hosts the API.

### Steps

1. **Fork the Repository**  
   Open [hexo-circle-of-friends](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends) and click **Fork**.  
   We’ll call this “your repo” below.

2. **Edit the Config File**  
   Update `fc_settings.yaml` in the root with your friend-links page and theme:

   ```yaml
   LINK:
     - { link: "https://www.yyyzyyyz.cn/link/", theme: "butterfly" }
   ```

   * `link` – your blog’s friend-links page  
   * `theme` – matching theme (e.g., butterfly, matery)

3. **Grant GitHub Action Permissions**  
   In your repo → **Settings → Actions → General** → choose **Read and write permissions**.

   ![GitHub Actions Permissions](/imgs/docs/deployment/backend/01.png)

4. **Enable GitHub Actions**

   * Click **Actions** in the repo menu → enable workflows

   ![GitHub Actions Run](/imgs/docs/deployment/backend/02.png)

   * Find `update-friends-posts`, click **Run workflow** manually once

     ![GitHub Actions Run](/imgs/docs/deployment/backend/03.png)

     ![GitHub Actions Run](/imgs/docs/deployment/backend/04.png)

   * After completion, your repo will contain `data.db`.

5. **Deploy to Vercel**

   * Sign up at [Vercel](https://vercel.com) and link your GitHub account  
   * Click **New Project** → import your fork

     ![Vercel Import](/imgs/docs/deployment/backend/05.png)

   * Click **Deploy** and wait

   When finished, find the URL under **Domains**, e.g.:

   ```txt
   https://hexo-friendcircle4-api.vercel.app
   ```

   Append `/all`:

   ```txt
   https://hexo-friendcircle4-api.vercel.app/all
   ```

   If JSON data is returned, the backend is live 🎉  
   This URL is what the frontend needs.

   ![Vercel Deploy](/imgs/docs/deployment/backend/06.png)

   ::: warning Note
   Vercel is blocked in some regions; bind a custom domain for reliable access.
   :::

---

## 🛠️ Self-Hosted Deployment

If you have your own server, host everything yourself for full control.

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Rock-Candy-Tea/hexo-circle-of-friends.git
   ```

2. **Edit the Config**

   Same as GitHub deployment:

   ```yaml
   LINK:
     - { link: "https://www.yyyzyyyz.cn/link/", theme: "butterfly" }
   ```

3. **Download the Binary**

   Grab the latest release for your platform (Linux example):

   ```bash
   wget https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/releases/download/v6.0.3/linux-x86_64-unknown-linux-musl.zip
   unzip linux-x86_64-unknown-linux-musl.zip
   ```

4. **Start the Service**

   ```bash
   chmod +x start.sh && ./start.sh
   ```

5. **Test the API**

   ```bash
   curl 127.0.0.1:8000/all
   ```

   If data returns, the backend is running.  
   Use a reverse proxy to expose it under your domain if desired.

6. **Open the Port**

   Default port **8000**—open it in your firewall or panel.  
   After deployment, access via `http://yourdomain:8000/all`.

---

## 📦 Database Notes

* Default **SQLite**—no extra setup, sufficient for most cases  
* **MySQL / MongoDB** also supported—see [Configuration Reference](/docs/configuration)

---

## 📖 Further Reading

* Adapting your friend-links page → [Advanced Guide](/docs/advanced)  
* Updating versions → [Changelog](/docs/changelog)

---

*Last Updated: 2025-08-31*