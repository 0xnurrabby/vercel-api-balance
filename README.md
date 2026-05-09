# Vercel Balance

A small desktop app that sits on top of every window and shows your [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) credit balance in real time.

![compact](https://img.shields.io/badge/mode-compact-black?style=flat-square) ![full](https://img.shields.io/badge/mode-full-0073ff?style=flat-square) ![bulk](https://img.shields.io/badge/mode-bulk__tester-16a34a?style=flat-square)

---

## What it does

| | |
|---|---|
| **Always on top** | Floats above every app, every window, always |
| **Live balance** | Shows remaining credits and total used, auto-refreshes |
| **Compact mode** | Shrinks to a tiny pill — just balance and used |
| **Bulk tester** | Paste 50 API keys at once, check all balances in parallel |
| **Persistent** | Your API key and settings survive restarts |
| **Draggable** | Grab the titlebar, drag it anywhere on screen |

---

## Requirements

- **Node.js** v18 or newer — [nodejs.org](https://nodejs.org)
- **Git** — [git-scm.com](https://git-scm.com)
- A **Vercel API token** — [vercel.com/account/tokens](https://vercel.com/account/tokens)

---

## Setup

**1. Clone the repo**

```bash
git clone https://github.com/0xnurrabby/vercel-api-balance.git
cd vercel-api-balance
```

**2. Install dependencies**

```bash
npm install
```

**3. Run**

```bash
npm start
```

The app opens on your screen. Click the **gear / settings** icon, paste your Vercel token, hit **Save**. Done.

---

## Getting your Vercel token

1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click **Create Token**
3. Give it any name, set expiry to **No Expiration**
4. Copy the token and paste it into the app

> The token needs **AI Gateway** access. A full-access token works fine.

---

## Modes

### Full mode
The default view. Shows balance, total used, account name, API key input, compact toggle, and the bulk tester button.

```
┌─────────────────────────────────────┐
│ ▲ Vercel Balance  ●   ⟳  —  ✕      │
├─────────────────────────────────────┤
│ ● Live                              │
│  ┌──────────────┐ ┌──────────────┐  │
│  │ BALANCE      │ │ TOTAL USED   │  │
│  │ $5.00        │ │ $0.00        │  │
│  └──────────────┘ └──────────────┘  │
│  ┌───────────────────────────────┐  │
│  │ ACCOUNT                       │  │
│  │ your-username                 │  │
│  └───────────────────────────────┘  │
│  API KEY  [........token.......][Save]│
│  ○ Compact mode                     │
│  ⊞ Bulk API Key Tester          >   │
├─────────────────────────────────────┤
│ Updated 1:34 AM             [ 5s ▾] │
└─────────────────────────────────────┘
```

### Compact mode
Toggle the **Compact mode** switch. The window shrinks to a minimal floating pill.

```
┌──────────────────────────────────────┐
│ ▲ Vercel Balance  ●   ↗  —  ✕       │
├───────────────────┬──────────────────┤
│      BALANCE      │       USED       │
│      $5.00        │      $0.00       │
└───────────────────┴──────────────────┘
```

Click **↗** to go back to full mode.

### Bulk tester
Click **Bulk API Key Tester** in full mode. Paste one key per line, click **Check All**. All keys are checked in parallel and results show up in a table with individual balance, used, and status for each.

---

## Build an exe

If you want a standalone `.exe` that runs without Node.js installed:

```bash
npm run package
```

Output is in `dist-pkg/Vercel Balance-win32-x64/`. Run `Vercel Balance.exe` from that folder. Your settings are saved to `%APPDATA%\vercel-balance-checker\config.json`.

---

## Refresh intervals

`1s` `2s` `3s` `4s` `5s` `10s` — pick from the dropdown in the footer.

---

## Project structure

```
vercel-api-balance/
├── main.js              Electron main process
├── preload.js           IPC bridge
├── store.js             JSON config persistence
├── renderer/
│   └── index.html       All UI — full, compact, and bulk modes
└── package.json
```

---

## License

MIT
