# Version Updates

## GitHub Updates

If you deployed via **Fork**, simply click **`Sync fork`** on your repository page to pull the latest version.

* **`Discard xx commits`** – discards any commits ahead of upstream (e.g., generated `data.db`, `fc_settings.yaml`) before syncing. Use when your repo has many conflicts.  
* **`Update branch`** – merges upstream changes directly without discarding your commits. Try this first; only use `Discard` if conflicts arise.

![sync_fork](/imgs/docs/upgrade/01.png)

## Server Updates

1. **Stop the API service**

   ```bash
   chmod +x stop.sh && ./stop.sh
   ```

2. **Pull latest code**

   ```bash
   git pull origin main
   ```

   > Optional: if `git pull` fails, re-clone:
   > ```bash
   > git clone https://github.com/Rock-Candy-Tea/hexo-circle-of-friends
   > ```

3. **Update binaries**

   Download the latest release binaries for your platform from [Releases](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/releases) and replace the old files in the project folder.

4. **Restart the service**

   ```bash
   chmod +x start.sh && ./start.sh
   ```

If issues occur during the update, [report](contactus) them promptly.

## Frontend Updates

No source-code changes are required; simply update the referenced CDN URL.  
Check the [Frontend Deployment](frontenddeploy) doc for the latest resource links and replace them in your blog config.

## Exporting Config & Data

Before updating or migrating, back up critical files to avoid data loss:

* **`data.db`** – SQLite database with scraped articles.  
* **`fc_settings.yaml`** – Project configuration.  
* **`.env`** – Environment variables (DB credentials, etc.).

Save these files to a safe location; after updating, copy them back to restore seamlessly.

## Notes

* Always back up key files before updating.  
* If the project helps you, please ⭐Star it so more people can discover it.