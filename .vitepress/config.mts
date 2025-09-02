import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // title: "友链朋友圈",
  // description: "一款聚合友链更新的工具，支持文章摘要 AI 生成功能，助你轻松追踪友链动态。",
  lastUpdated: true,
  // 忽略死链接检查
  srcDir: './fcircle-docs',
  ignoreDeadLinks: true,

  sitemap: {
    hostname: 'https://fcircle-doc.yyyzyyyz.cn/'
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Rock-Candy-Tea/hexo-circle-of-friends' },
    ],
    search: {
      provider: 'local'
    }
  },

  locales: {
    root: {
      lang: 'zh-CN',
      label: '简体中文',
      title: '友链朋友圈',
      description: '一款聚合友链更新的工具，支持文章摘要 AI 生成功能，助你轻松追踪友链动态。',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: '展示', link: '/docs/preview' }
        ],
        sidebar: [
          {
            text: '部署文档',
            link: '/docs/',
            items: [
              { text: '项目预览', link: '/docs/preview' },
              {
                text: '项目部署',
                link: '/docs/deployment/',
                items: [
                  { text: '后端部署', link: '/docs/deployment/backend' },
                  { text: '前端部署', link: '/docs/deployment/frontend' },
                  { text: '极简模式', link: '/docs/deployment/simplemode' }
                ]
              },
              { text: '配置项说明', link: '/docs/configuration' },
              { text: '常见问题', link: '/docs/problems' },
              { text: '如何更新', link: '/docs/upgrade' },
            ]
          },
          {
            text: 'API文档',
            link: '/api/',
            items: [
              { text: '完整信息', link: '/api/all' },
              { text: '所有友链', link: '/api/friend' },
              { text: '随机友链', link: '/api/randomfriend' },
              { text: '随机文章', link: '/api/randompost' },
              { text: '版本信息', link: '/api/version' },
              { text: '指定链接文章', link: '/api/post' },
              { text: '指定文章摘要', link: '/api/summary' },
            ]
          },
          { 
            text: '其他',
            items: [
              { text: '贡献代码', link: '/contributing' },
              { text: '联系我们', link: '/contactus' },
            ]
          },
        ]
      }
    },

    // en: {
    //   lang: 'en-US',
    //   label: 'English',
    //   title: 'Hexo Circle of Friends',
    //   description: 'A tool that aggregates friend updates, supports AI-generated article summaries, and helps you easily track friend dynamics.',
    //   themeConfig: {
    //     nav: [
    //       { text: 'Home', link: '/en/' },
    //       { text: 'Preview', link: '/en/docs/preview' }
    //     ],
    //     sidebar: [
    //       {
    //         text: 'Deployment',
    //         link: '/en/docs/',
    //         items: [
    //           { text: 'Preview', link: '/en/docs/preview' },
    //           {
    //             text: 'Deployment',
    //             link: '/en/docs/deployment/',
    //             items: [
    //               { text: 'Backend', link: '/en/docs/deployment/backend' },
    //               { text: 'Frontend', link: '/en/docs/deployment/frontend' },
    //               { text: 'Simple Mode', link: '/en/docs/deployment/simplemode' }
    //             ]
    //           },
    //           { text: 'Configuration', link: '/en/docs/configuration' },
    //           { text: 'FAQ', link: '/en/docs/problems' },
    //           { text: 'Update', link: '/en/docs/upgrade' },
    //         ]
    //       },
    //       {
    //         text: 'API Documentation',
    //         link: '/en/api/',
    //         items: [
    //           { text: 'All Info', link: '/en/api/all' },
    //           { text: 'All Friends', link: '/en/api/friend' },
    //           { text: 'Random Friend', link: '/en/api/randomfriend' },
    //           { text: 'Random Post', link: '/en/api/randompost' },
    //           { text: 'Version', link: '/en/api/version' },
    //           { text: 'Specific Post', link: '/en/api/post' },
    //           { text: 'Post Summary', link: '/en/api/summary' },
    //         ]
    //       },
    //       { 
    //         text: 'Others',
    //         items: [
    //           { text: 'Contributing', link: '/en/contributing' },
    //           { text: 'Contact Us', link: '/en/contactus' },
    //         ]
    //       },
    //     ]
    //   }
    // }
  }
})
