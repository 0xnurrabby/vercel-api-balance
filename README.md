# VERCEL BALANCE

> **Always-on-top floating desktop app** .... shows your Vercel AI Gateway credit balance live, on top of every window.

---

## ⬇ DOWNLOAD

**→ [Download VercelBalance-win64.zip from Releases](https://github.com/0xnurrabby/vercel-api-balance/releases/latest)**

1. Download `VercelBalance-win64.zip`
2. Extract the zip anywhere
3. Open the extracted folder, run `Vercel Balance.exe`

No Node.js needed.

---

## WHAT IT DOES

```
┌─────────────────────────────────────────┐
│  BALANCE          │  USED               │
│  $5.00            │  $0.61              │
└─────────────────────────────────────────┘
```

- Floats above every app on your screen
- Auto-refreshes every 1s / 2s / 3s / 4s / 5s / 10s
- **Compact mode** → tiny pill with just balance + used
- **Bulk tester** → paste 50 keys, check all at once
- Saves your API key .... no re-entering after restart

---

## RUN FROM SOURCE

**You need**
- [Node.js](https://nodejs.org) v18+
- [Git](https://git-scm.com)

```bash
git clone https://github.com/0xnurrabby/vercel-api-balance.git
cd vercel-api-balance
npm install
npm start
```

---

## GET YOUR VERCEL TOKEN

```
vercel.com/your-project/ai-gateway/api-keys  →  Create Token  →  No Expiration  →  Copy
```

Paste it into the app → **Save**. That's it.

---

## MODES

### FULL
Default view. Balance, used, account name, API key input, compact toggle, bulk tester.

### COMPACT
```
┌──────────────────────────────────┐
│ ▲ Vercel Balance  ●   ↗  -  ✕   │
├─────────────────┬────────────────┤
│    BALANCE      │      USED      │
│    $5.00        │     $0.61      │
└─────────────────┴────────────────┘
```
Toggle the switch in full mode. Click **↗** to expand back.

### BULK TESTER
Paste one API key per line → **Check All** → see balance, used, and status for every key in parallel.

---

## BUILD EXE YOURSELF

```bash
npm install
npm run package
```

Output: `dist-pkg/Vercel Balance-win32-x64/Vercel Balance.exe`

Settings are saved to `%APPDATA%\vercel-balance-checker\config.json`

---

## FILES

```
├── main.js           electron main process
├── preload.js        ipc bridge
├── store.js          json config persistence  
├── renderer/
│   └── index.html    all ui (full, compact, bulk)
└── package.json
```

---

## LICENSE

MIT
