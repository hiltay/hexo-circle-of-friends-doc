---
# https://vitepress.dev/reference/default-theme-home-page  
layout: home

hero:
  name: "Friends Feed"
  text: "Aggregated Friends' Updates"
  tagline: A versatile tool that aggregates updates from your friends' blogs, featuring AI-generated article summaries and effortless tracking of friends' feeds.
  image:
    src: /logo.png
    alt: Friends Feed
  actions:
    - theme: brand
      text: Go to Docs
      link: /en/docs/
    - theme: alt
      text: API Reference
      link: /en/api/

features:
  - title: AI Summary Generation
    icon: 🤖
    details: Supports Gemini, SiliconFlow, and other models to automatically generate article summaries
  - title: Content Hash Caching
    icon: 📖
    details: Prevents duplicate summary generation, reducing API calls and costs
  - title: Version Detection
    icon: 📌
    details: Built-in version checking to receive timely update notifications
  - title: Friends' Feed Aggregation
    icon: 👭
    details: Real-time retrieval of the latest posts and updates from friends' sites
  - title: Activity Tracking
    icon: 📊
    details: Intuitive insights into the activity status of each friend's website
  - title: Flexible Deployment
    icon: 📦
    details: Comprehensive documentation for quick deployment in various environments

---