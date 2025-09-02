# Frontend Deployment

The **Friends Feed (fcircle) frontend** is responsible for **displaying friend-link articles** by calling the backend API and rendering the page.

Currently, only **Hexo Butterfly** and similar themes are supported; other themes are under development—stay tuned.  
To integrate with other themes, follow this guide and adjust as needed.

## 📄 Deployment Steps

### 1. Create a New Page

In your blog root, run:

```bash
hexo new page fcircle
```

This creates `source/fcircle/index.md`.  
You can also create the file manually.

### 2. Edit the Page Content

Open `source/fcircle/index.md`, clear its default content, and paste:

```markdown
---
title: Friend Circle
date: 2022-10-09 00:38:16
---

<div id="friend-circle-container">Connecting to host…</div>

<script>
    if (typeof UserConfig === 'undefined') {
        var UserConfig = {
            // Your fcircle backend API (must be deployed first)
            private_api_url: 'https://your-api-domain.com/',
            // Articles per “Load more” click; default 24
            page_turning_number: 24,
            // Fallback avatar when loading fails
            error_img: 'https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/logo.png',
        }
    }
</script>

<!-- Stylesheet: Butterfly theme only -->
<link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/default.min.css">

<!-- Script: theme-specific features -->
<script src="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/default.min.js"></script>
```

::: tip Notes

* Replace `private_api_url` with your backend endpoint, e.g.  
  `https://hexo-friendcircle4-api.vercel.app/` or `https://your-domain.com/all`  
* The backend must be live; otherwise the frontend cannot fetch data.
:::

### 3. Choose a Style

Currently **only Hexo Butterfly** is supported, with multiple styles.

Change **CSS & JS file paths** to switch styles:

#### Default Style (default)

```html
<link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/default.min.css">
<script src="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/default.min.js"></script>
```

#### IMm Style (imm)

```html
<link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/imm.min.css">
<script src="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/imm.min.js"></script>
```

#### yyyz Style (yyyz)

```html
<link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/yyyz.min.css">
<script src="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/yyyz.min.js"></script>
```

See the frontend repo for more styles:  
👉 [Friend-Circle-Frontend](https://github.com/Rock-Candy-Tea/Friend-Circle-Frontend)

### 4. Preview

View styles live (demo not yet public):  
👉 [Demo Page](https://blog.111.222/)

Note: the demo may differ slightly from your deployed version.

### 5. Finalize Deployment

Rebuild your blog:

```bash
hexo clean && hexo g && hexo s
```

Visit:

```txt
https://your-domain/fcircle
```

Content loads? Deployment successful 🎉

## 🔄 Changing Styles

To switch styles later, just replace the CSS/JS URLs—no need to touch the page content or config.

*Last Updated: 2025-08-31*