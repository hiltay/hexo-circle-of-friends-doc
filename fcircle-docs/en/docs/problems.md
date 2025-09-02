# Frequently Asked Questions

## GitHub Deployment Issues

### How to add a Secret?

Go to repository settings: `Settings → Secrets and variables → Actions → New repository secret` and add your Secret here.

![Add Secret Example](/imgs/docs/problems/01.png)

### Why can't sqlite or data.json be pushed to the repository?

GitHub updated the default permissions. Forked repositories usually have only `read` permissions, preventing file writes.

Fix:  
Go to repository settings: `Settings → Actions → General → Workflow permissions`, check **Read and write permissions**, then click **Save**.

![Permission Example](/imgs/docs/problems/02.png)

## Server Deployment Issues

### How to install Git?

Download it from the official site:  
👉 [https://git-scm.com/downloads](https://git-scm.com/downloads)

### How to stop the program?

Run the following command in the project directory:

```bash
chmod +x && ./stop.sh
```

### How to view the logs?

Logs are saved in `./log/`; open the files directly.

## Other Common Issues

### “hexo” in the project name—does it only support Hexo?

No. Although the project is called **hexo-circle-of-friends**, the logic is universal. It was simply born in the Hexo community.  
Other frameworks or themes can also be adapted—see [Advanced Guide](AdvancedGuide).

### MySQL charset error?

If data contains emojis, MySQL’s default charset may fail with `Incorrect string value`.  
Fix: set the MySQL database charset to **utf8mb4**.

Related discussion: [issues/25](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/issues/25).

### 5.x front-end broken in Volantis theme?

Add the following CSS to the friends-feed page:

```html
<style>
article#page {
    transform: none;
    transition: none;
    backdrop-filter: none;
}
</style>
```

Related discussion: [issues/65](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/issues/65).

## Still no answer?

If your issue isn’t covered:

* Check [Discussions](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/discussions) for similar questions.
* Search or open a new [Issue](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/issues) with reproduction steps and screenshots so the community can help.