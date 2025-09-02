# Simple Mode

> See [issue 69](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/issues/69).  
> **Simple Mode** runs the program with minimal configuration and outputs a streamlined result—ideal for users who only need basic friend-link data.

## Deployment Steps

### 1. Fork the Repository

Go to [hexo-circle-of-friends](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends) and click **Fork** to copy the project to your account.

### 2. Edit the Configuration File

In your forked repository, open `fc_settings.yaml` and update:

```yaml
LINK:
  - { link: "https://www.yyyzyyyz.cn/link/", theme: "butterfly" }
```

* `link` – your friend-links page URL  
* `theme` – your blog theme (commonly `butterfly`)

### 3. Enable Simple Mode

Edit `.github/workflows/CI.yml`, set **SIMPLE_MODE** to `true`:

```yaml
SIMPLE_MODE: true
```

### 4. Configure Actions Permissions

1. Open **Settings → Actions → General**  
2. Under **Workflow permissions**, check **Read and write permissions**

![GitHub Actions Permissions](/imgs/docs/deployment/simplemode/01.png)

### 5. Enable GitHub Actions

1. Open the **Actions** tab in your repo  
2. Click **“I understand my workflows, go ahead and enable them”**  
3. Find the `update-friends-posts` workflow and click **Enable workflow**

![GitHub Actions Run](/imgs/docs/deployment/simplemode/02.png)

### 6. Manually Run the Workflow

1. Open the `update-friends-posts` workflow page  
2. Click **Run workflow → Run workflow**  
3. Wait for completion

![GitHub Actions Run](/imgs/docs/deployment/simplemode/03.png)  
![GitHub Actions Run](/imgs/docs/deployment/simplemode/04.png)

### 7. Retrieve the Data

After the run, the repository will upload `data.json`.  
Its content matches the `/all` API response; download or fetch it directly for any front-end or downstream use.

## Summary

* Minimal configuration required  
* Outputs `data.json`—no extra backend needed  
* Perfect for users who only need basic friend-link data  

📅 **Last Updated: 2025-09-01**