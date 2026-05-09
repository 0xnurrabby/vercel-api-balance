<div align="center">

<img src="https://img.shields.io/badge/VERCEL_BALANCE-000000?style=for-the-badge&logoColor=white" />

**A floating desktop widget that shows your Vercel AI Gateway credit balance live .... on top of every window, always.**

![platform](https://img.shields.io/badge/Windows-0078D4?style=flat-square&logoColor=white)
![electron](https://img.shields.io/badge/Electron-47848F?style=flat-square&logoColor=white)
![license](https://img.shields.io/badge/MIT-22c55e?style=flat-square)

</div>

---

## `WHAT IT DOES`

```
┌──────────────────────────────────┐
│ ▲ Vercel Balance  ●   ↗  -  ✕   │
├─────────────────┬────────────────┤
│    BALANCE      │      USED      │
│    $5.00        │    $0.61       │
└─────────────────┴────────────────┘
```

> Sits on top of every window. Screen recording, fullscreen apps, anything .... it stays.

&nbsp;

| Feature | |
|---|---|
| Always on top | Floats above every app, every window |
| Live balance | Auto-refreshes every 1s / 2s / 3s / 4s / 5s / 10s |
| Compact mode | Shrinks to a tiny pill .... just balance and used |
| Bulk tester | Paste 50 keys at once, check all balances in parallel |
| Persistent | API key saved .... no re-entering after restart |

---

## `DOWNLOAD`

<div align="center">

### **[⬇ VercelBalance-win64.zip](https://github.com/0xnurrabby/vercel-api-balance/releases/latest)**

</div>

```
Step 1 .... download  VercelBalance-win64.zip
Step 2 .... extract   anywhere on your PC
Step 3 .... open      the extracted folder
Step 4 .... run       Vercel Balance.exe
```

> No Node.js needed. No install. Just extract and run.

---

## `GET YOUR VERCEL TOKEN`

```
1. Go to    vercel.com/account/tokens
2. Click    Create Token
3. Set      No Expiration
4. Copy     the token
5. Paste    into the app  →  Save
```

> The token needs AI Gateway access. A full-access token works fine.

---

## `RUN FROM SOURCE`

**You need first**

```
Node.js  v18+    nodejs.org
Git              git-scm.com
```

**Then**

```bash
git clone https://github.com/0xnurrabby/vercel-api-balance.git
cd vercel-api-balance
npm install
npm start
```

That's it. The app opens on your screen.

---

## `MODES`

**FULL** .... default view with everything

```
┌────────────────────────────────────────┐
│ ▲ Vercel Balance  ●          ⟳  -  ✕  │
├────────────────────────────────────────┤
│ ● Live                                 │
│  ┌─────────────┐  ┌─────────────────┐  │
│  │ BALANCE     │  │ TOTAL USED      │  │
│  │ $5.00       │  │ $0.61           │  │
│  └─────────────┘  └─────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │ ACCOUNT                          │  │
│  │ your-username                    │  │
│  └──────────────────────────────────┘  │
│  API KEY  [.... token ....] [ Save ]   │
│  ○ Compact mode                        │
│  ⊞ Bulk API Key Tester             >   │
├────────────────────────────────────────┤
│ Updated 1:34 AM                 [ 5s ] │
└────────────────────────────────────────┘
```

**COMPACT** .... toggle the switch, window shrinks to a pill

```
┌──────────────────────────────────┐
│ ▲ Vercel Balance  ●   ↗  -  ✕   │
├─────────────────┬────────────────┤
│    BALANCE      │      USED      │
│    $5.00        │    $0.61       │
└─────────────────┴────────────────┘
```

Click **↗** to go back to full mode.

**BULK TESTER** .... click the bulk button in full mode

```
Paste one key per line:

tok_abc123...
tok_def456...
tok_xyz789...

→ Click Check All
→ See balance, used, status for every key
```

---

## `BUILD EXE YOURSELF`

```bash
npm install
npm run package
```

Output lands in `dist-pkg/Vercel Balance-win32-x64/`

Settings saved to `%APPDATA%\vercel-balance-checker\config.json`

---

## `FILES`

```
vercel-api-balance/
├── main.js
├── preload.js
├── store.js
├── renderer/
│   └── index.html
└── package.json
```

---

## `LICENSE`

MIT
