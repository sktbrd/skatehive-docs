# LLM-Friendly Documentation

Skatehive documentation is now optimized for AI agent consumption using the **llmstxt.org** standard.

## 🤖 For AI Agents

Access the documentation in LLM-friendly formats:

### Main Files

| File | Size | Description |
|------|------|-------------|
| [`/llms.txt`](https://docs.skatehive.app/llms.txt) | 4.3KB | Index with links to all documentation pages |
| [`/llms-full.txt`](https://docs.skatehive.app/llms-full.txt) | 76KB | Complete concatenated documentation |

### Section-Specific Files

For targeted retrieval, use these specialized files:

| File | Size | Docs | Description |
|------|------|------|-------------|
| [`/llms-onboarding.txt`](https://docs.skatehive.app/llms-onboarding.txt) | 25KB | 7 | Getting started: account creation, login, mobile app |
| [`/llms-features.txt`](https://docs.skatehive.app/llms-features.txt) | 29KB | 8 | Platform features: wallet, map, leaderboard, bounties |
| [`/llms-developers.txt`](https://docs.skatehive.app/llms-developers.txt) | 22KB | 7 | Developer guides: forking, Hive setup, advanced topics |

---

## 📚 Multi-Language Support

All files are available in 5 languages:

- **English** (en): `/llms.txt`
- **Portuguese (BR)** (pt-br): `/pt-br/llms.txt`
- **Spanish** (es): `/es/llms.txt`
- **French** (fr): `/fr/llms.txt`
- **Luganda** (lg): `/lg/llms.txt`

---

## 🛠️ For Developers

### How It Works

Generated automatically during build using [`docusaurus-plugin-llms`](https://github.com/jina-ai/docusaurus-plugin-llms).

Configuration in `docusaurus.config.js`:

```javascript
plugins: [
  [
    'docusaurus-plugin-llms',
    {
      generateLLMsTxt: true,
      generateLLMsFullTxt: true,
      excludeImports: true,
      removeDuplicateHeadings: true,
      includeOrder: [
        'docs/README.md',
        'docs/create-account.mdx',
        'docs/Get Started/',
        'docs/Features/',
        'docs/Advance/',
        'docs/Devs/',
      ],
      customLLMFiles: [
        {
          filename: 'llms-onboarding.txt',
          includePatterns: ['docs/README.md', 'docs/create-account.mdx', 'docs/Get Started/**'],
          fullContent: true,
          title: 'Skatehive Onboarding Guide',
        },
        // ... more custom files
      ],
    },
  ],
],
```

### Build Process

```bash
# Build generates llms*.txt files automatically
pnpm build

# Files are created in:
build/llms.txt
build/llms-full.txt
build/llms-onboarding.txt
build/llms-features.txt
build/llms-developers.txt
```

---

## 🔍 Example Usage

### Curl

```bash
# Get the index
curl https://docs.skatehive.app/llms.txt

# Get full documentation
curl https://docs.skatehive.app/llms-full.txt

# Get onboarding section
curl https://docs.skatehive.app/llms-onboarding.txt
```

### Python

```python
import requests

# Fetch onboarding guide
response = requests.get('https://docs.skatehive.app/llms-onboarding.txt')
onboarding_docs = response.text

# Parse and use with your LLM
llm_response = your_llm.generate(
    prompt="How do I create a Skatehive account?",
    context=onboarding_docs
)
```

### JavaScript

```javascript
// Fetch documentation for LLM context
const response = await fetch('https://docs.skatehive.app/llms-features.txt');
const featuresContext = await response.text();

// Use with OpenAI, Anthropic, etc.
const completion = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    { role: "system", content: `You are a Skatehive expert. Context:\n\n${featuresContext}` },
    { role: "user", content: "How does the leaderboard work?" }
  ]
});
```

---

## ✅ Verification

Check that all files are generated:

```bash
cd build
ls -lh llms*.txt

# Expected output:
# -rw-r--r--  4.3K  llms.txt
# -rw-r--r--  76K   llms-full.txt
# -rw-r--r--  25K   llms-onboarding.txt
# -rw-r--r--  29K   llms-features.txt
# -rw-r--r--  22K   llms-developers.txt
```

Verify no import statements leaked:

```bash
grep "^import " build/llms-full.txt
# (should return nothing)
```

---

## 📖 References

- **Standard**: https://llmstxt.org
- **Plugin**: https://github.com/jina-ai/docusaurus-plugin-llms
- **Docusaurus**: https://docusaurus.io/docs

---

## 🚀 Deploy

Files are automatically deployed with the Docusaurus site. After push to `main`:

1. Vercel builds the site
2. Plugin generates llms*.txt files
3. Files are deployed to production
4. Available at `https://docs.skatehive.app/llms*.txt`

---

**Last Updated**: 2026-02-22  
**Docusaurus**: v3.9.2  
**Plugin**: docusaurus-plugin-llms v0.3.0
