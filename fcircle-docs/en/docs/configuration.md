# Configuration Reference

Split into **Project Configuration** and **Environment Variables**.

## Project Configuration

The project configuration file is `fc_settings.yaml`.  
Follow the inline comments and the explanations below to adjust its contents.

- **OUTDATE_CLEAN**  
  Defaults to `60`. Articles older than this value (in days) are deleted from the database on the next run.

- **LINK**  
  Starting friend-link pages and crawling strategies. Multiple entries are allowed; details are in the comments.

- **SETTINGS_FRIENDS_LINKS**  
  A universal way to list friends when the crawler cannot parse your friend-links page.  
  - **list** format:  
    ```python
    [Name, Home URL, Avatar URL]
    # or
    [Name, Home URL, Avatar URL, Custom RSS suffix]
    ```
  - **json_api_or_path**: A JSON endpoint or local file containing the friend list.  
    Format:  
    ```json
    {"friends":[ ["Friend1"], ["Friend2"], ["Friend3"], ... ]}
    ```
    See [test_api.json](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/blob/main/tests/test_api.json) for a complete example.

- **BLOCK_SITE**  
  URLs listed here will not be crawled. Useful for excluding your own blog. **Regex supported**.  
  ```python
  BLOCK_SITE = [
      "https://example.com/",               # Exact match
      r".*\.com",                           # Any .com domain
      r"^http://",                          # All http:// URLs
  ]
  ```

- **BLOCK_SITE_REVERSE**  
  `true` = invert the block list (only crawl listed sites).  
  `false` = normal block list (default).

- **MAX_POSTS_NUM**  
  Maximum posts fetched per friend. Default `5`.

- **CRON**  
  (Self-hosted only) Cron expression for scheduled runs.  
  Default: `0 0,6,12,18,21 * * *` (run at 00:00, 06:00, 12:00, 18:00, 21:00 daily).

- **SIMPLE_MODE**  
  (GitHub + Vercel only) Enable minimal mode. Default `false`.

- **DATABASE**  
  Storage backend: `mysql`, `sqlite`, or `mongodb`. Default `sqlite`.

- **DEPLOY_TYPE**  
  Deployment target: `github` or `server`. Default `github`.

- **GENERATE_SUMMARY** – AI summary settings  
  - **enabled** – Turn on AI summaries. Requires the corresponding API key in environment variables. Default `false`.
  - **provider** – `gemini`, `siliconflow`, or `all` (default `all`).
  - **max_concurrent** – Max parallel calls. Default `3`.
  - **wait_on_rate_limit** – Wait when rate-limited. Default `true`.
  - **max_chars** – Max chars per request. Default `8000`.
  - **gemini**
    - **models**: List of model names to try in order.
  - **siliconflow**
    - **models**: List of model names to try in order.

#### Tips

- The first run after enabling AI summaries can be slow; enable it **after** everything else works.  
- **Check your usage/costs** when using paid models.

## Environment Variables

### For GitHub Deployment

All secrets are visible in `.github/workflows/CI.yml`.

```yaml
env:
  SIMPLE_MODE: false        # Minimal mode, default false
  DATABASE: sqlite          # Default sqlite
  PROXY: ${{ secrets.PROXY }}          # Optional HTTP proxy
  # Pick only one of mysql/sqlite/mongodb
  MYSQL_URI: ${{ secrets.MYSQL_URI }}  # MySQL URI
  MONGODB_URI: ${{ secrets.MONGODB_URI }}  # MongoDB URI (mongodb:// or mongodb+srv://)
  GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
  SILICONFLOW_API_KEY: ${{ secrets.SILICONFLOW_API_KEY }}
  TZ: Asia/Shanghai
```

See [How to add Secrets?](problems.md?id=如何添加Secret？)

Required secrets:

- **PROXY** (optional) – HTTP proxy; leave empty to disable.  
- **MYSQL_URI** (optional) – Required only if `DATABASE=mysql`.  
- **MONGODB_URI** (optional) – Required only if `DATABASE=mongodb`.  
- **GEMINI_API_KEY** (optional) – Needed for Gemini summaries. [Get key](https://ai.google.dev/gemini-api/docs/api-key?hl=zh-cn).  
- **SILICONFLOW_API_KEY** (optional) – Needed for SiliconFlow summaries. [Get key](https://cloud.siliconflow.cn/me/account/ak).

### For Self-Hosted Deployment

You can export variables temporarily, set permanent ones, or create a `.env` file in the program directory:

```
MYSQL_URI=mysql://root:123456@127.0.0.1:3306/pyq
PROXY=127.0.0.1:7890
MONGODB_URI=mongodb://root:123456@127.0.0.1:27017
GEMINI_API_KEY=xxxxx
SILICONFLOW_API_KEY=xxxxx
```

The `.env` file has the highest priority and overrides existing environment variables.