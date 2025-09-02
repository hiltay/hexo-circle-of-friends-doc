# Advanced Guide

## How to Adapt Your Friend-Links Page

We understand that this project cannot cover every blog theme, so to support as many as possible we provide `css_rules.yaml` for users to define custom scraping rules. Before introducing this file, let’s first explain how the program works.

### Implementation Principle

Each time the program runs, it fetches the URLs configured in `fc_settings.yaml` as starting points. For example, you configure:

```yaml
LINK:
  [
    { link: "https://www.yyyzyyyz.cn/link/", theme: "butterfly" },
    { link: "https://immmmm.com/about/", theme: "common1" },
  ]
```

The program will then visit `https://www.yyyzyyyz.cn/link/` and `https://immmmm.com/about/` one by one, extracting all friend links displayed on those pages. As mentioned earlier, everyone may use a different blog theme, so these pages vary and lack a unified standard. Therefore we provide a `theme` field and ship some common themes such as Hexo’s butterfly, volantis, etc. If your theme is not built-in, there are two ways to make the program recognize it:

1. Modify the page so its structure matches our scraping format.
2. Edit `css_rules.yaml` and add a custom rule.

For users with limited front-end knowledge, modifying the page can be complex and difficult, so we describe the simpler second option. **Note that you still need basic HTML and CSS knowledge.** If you’re completely new to front-end, try opening an issue on GitHub and ask us or other contributors to help, or consult an AI assistant like ChatGPT to write it for you.

### Adapting Your Starting Page

Back to the topic. Let’s see how to edit `css_rules.yaml` to fit your page. Open the file and you’ll see it’s broadly divided into two parts:

```yaml
post_page_rules: {}
# ...
link_page_rules: {}
# ...
```

`link_page_rules` defines the scraping rules for the starting page; we’ll edit it first. Its structure looks like:

```yaml
link_page_rules: {
    butterfly:
      {
        author:
          [
            { selector: ".flink-list .flink-sitename", attr: "text" },
            { selector: ".flink-list a .flink-item-name", attr: "text" },
            { selector: ".flink .site-card .info .title", attr: "text" },
          ],
        link:
          [
            { selector: ".flink-list a", attr: "href" },
            { selector: ".flink .site-card", attr: "href" },
          ],
        avatar:
          [
            { selector: ".flink-list .info img", attr: "src" },
            { selector: ".flink-list a img", attr: "src" },
            { selector: "flink .site-card .info img", attr: "src" },
          ],
      },
    fluid: {},
    # ...
    matery: {},
    # ...
  }
# ...
```

`butterfly` indicates we are writing scraping rules for the butterfly theme.  
`butterfly.author`, `butterfly.link`, and `butterfly.avatar` correspond to the author’s name, blog URL, and avatar URL, respectively. Take `butterfly.author` as an example:

```yaml
author:
  [
    { selector: ".flink-list .flink-sitename", attr: "text" },
    { selector: ".flink-list a .flink-item-name", attr: "text" },
    { selector: ".flink .site-card .info .title", attr: "text" },
  ],
```

It’s a list of three rules. Each rule has a `selector` (CSS selector) and an `attr` (which attribute to extract from the matched element).

We include three rules because the same theme may have different versions—e.g., butterfly 4.x vs 3.x—and users who customize their pages may also alter the structure. The program tries each rule from top to bottom until it successfully retrieves a value; **once a value is obtained, later rules are skipped**.

If you have basic front-end knowledge, you already know what to do—just add `author`, `link`, and `avatar` rules for your page under a new theme name, e.g., `mytheme`:

```diff
link_page_rules: {
  butterfly:
  {
    # ...
  },
  fluid: {
    # ...
  },
  matery: {
    # ...
  },
  # ...
+  mytheme: {
+    author:
+      [
+       { selector: ".mylink .link-name", attr: "text" },
+      ],
+    link:
+      [
+        { selector: ".mylink a", attr: "href" },
+      ],
+    avatar:
+      [
+        { selector: ".mylink .link-img", attr: "src" },
+      ],
+  }
}
```

Finally, update `fc_settings.yaml`:

```yaml
LINK: [{ link: "https://your.blog.cn/link/", theme: "mytheme" }]
```

Now the program will scrape your page according to the rules you defined.

### Adapting Friend-Links Pages for Theme Developers

If you are a theme author or secondary developer and the current Friends Feed does not support scraping your friend-links page, the following reference may help.

As we mentioned, friend-links scraping relies on CSS selectors. Therefore we provide two universal CSS rule sets, `common1` and `common2`:

```css
/* Rule 1 (common1): */
/*  avatar : '.cf-friends img::attr(src)'  */
/*  link   : '.cf-friends a::attr(href)'  */
/*  name   : '.cf-friends a::text'  */

/* Rule 2 (common2): */
/*  avatar : 'img.cf-friends-avatar'  */
/*  link   : 'a.cf-friends-link'  */
/*  name   : '.cf-friends-name'  */
```

If the above CSS selectors match your markup, adaptation is complete.

## How to Scrape More Home Pages

Continuing the workflow: after visiting the starting URLs and extracting friend blog home pages, the program attempts to parse articles from each home page.

When parsing, the program first tries to parse the blog’s [RSS](https://en.wikipedia.org/wiki/RSS) feed. If RSS parsing succeeds, the results are returned immediately. Therefore, we encourage every user to add RSS to their blog. If RSS parsing fails, the program falls back to CSS rules for scraping.

Likewise, because home pages vary widely, apart from the built-in themes we support, you can write custom rules for any theme you need. In `css_rules.yaml`:

```yaml
post_page_rules: {}
# ...
link_page_rules: {}
# ...
```

`post_page_rules` defines scraping rules for blog home pages. Its structure is:

```yaml
post_page_rules: { anzhiyu: {
        title: [],
        # ...
        link: [],
        # ...
        created: [],
        #...
        updated: [],
      } }
# ...
```

`anzhiyu` indicates we’re writing rules for the anzhiyu theme home page. You need to provide:

- `title`: article title  
- `link`: article URL  
- `created`: article creation time  
- `updated`: article last-update time  

Once these rules are written, rerun the crawler and the program will fetch the articles according to your rules.

### Help Us Improve Built-in Rules

If you’d like to contribute rules for other blog themes, feel free to [submit a PR](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/pulls) with a brief description.