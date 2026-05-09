<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:fde68a,50:fca5a5,100:c4b5fd&height=180&section=header&text=Vercel%20Balance&fontSize=42&fontColor=000000&fontAlignY=38&desc=Always-on-top%20floating%20credit%20balance%20checker&descAlignY=58&descSize=14" width="100%"/>

<br/>

[![Download](https://img.shields.io/badge/⬇%20Download%20.zip-000000?style=for-the-badge)](https://github.com/0xnurrabby/vercel-api-balance/releases/latest)
&nbsp;
[![License](https://img.shields.io/badge/MIT-bbf7d0?style=for-the-badge&labelColor=bbf7d0&color=bbf7d0&logoColor=000)](LICENSE)
&nbsp;
[![Platform](https://img.shields.io/badge/Windows-bfdbfe?style=for-the-badge&labelColor=bfdbfe&color=bfdbfe)](https://github.com/0xnurrabby/vercel-api-balance/releases/latest)
&nbsp;
[![Electron](https://img.shields.io/badge/Electron-fde68a?style=for-the-badge&labelColor=fde68a&color=fde68a)](https://www.electronjs.org/)

</div>

<br/>

---

<div align="center">

```
┌──────────────────────────────────┐
│ ▲ Vercel Balance  ●   ↗  -  ✕   │
├─────────────────┬────────────────┤
│    BALANCE      │      USED      │
│    $5.00        │    $0.61       │
└─────────────────┴────────────────┘
```

*Floats above every window. Screen recording, fullscreen, anything .... it stays.*

</div>

---

<br/>

## ✦ Features

<div align="center">

| | Feature | |
|:---:|---|:---:|
| 📌 | Always on top .... floats above every window, every app | |
| ⚡ | Live balance .... auto-refreshes 1s / 2s / 3s / 4s / 5s / 10s | |
| 🔲 | Compact mode .... shrinks to a tiny pill, just balance and used | |
| 📋 | Bulk tester .... paste 50 keys at once, check all in parallel | |
| 💾 | Persistent .... API key saved, no re-entering after restart | |

</div>

<br/>

---

## ✦ Download & Run

> No Node.js needed. No install wizard. Just extract and run.

<br/>

**Step 1** &nbsp; Download

```
https://github.com/0xnurrabby/vercel-api-balance/releases/latest
```

Get `VercelBalance-win64.zip`

<br/>

**Step 2** &nbsp; Extract

```
Right click the zip  →  Extract All  →  pick any folder
```

<br/>

**Step 3** &nbsp; Run

```
Open the extracted folder  →  double click  Vercel Balance.exe
```

<br/>

---

## ✦ Get Your Vercel Token

<br/>

```
1.  Open     vercel.com/account/tokens
2.  Click    Create Token
3.  Name     anything you want
4.  Expiry   No Expiration
5.  Copy     the token
6.  Open     the app  →  paste the token  →  Save
```

> Uses the AI Gateway credits endpoint. A full-access Vercel token works.

<br/>

---

## ✦ Modes

<br/>

<table>
<tr>
<td width="33%" align="center">
<b>FULL</b><br/><br/>
Default view<br/>
Balance, used, account,<br/>
API key, compact toggle,<br/>
bulk tester button
</td>
<td width="33%" align="center">
<b>COMPACT</b><br/><br/>
Toggle the switch<br/>
Window shrinks to a pill<br/>
Click ↗ to expand back
</td>
<td width="33%" align="center">
<b>BULK TESTER</b><br/><br/>
Click the bulk button<br/>
Paste one key per line<br/>
Check All runs in parallel
</td>
</tr>
</table>

<br/>

---

## ✦ Run from Source

<br/>

**Requirements**

```
Node.js  v18+    →  nodejs.org
Git              →  git-scm.com
```

<br/>

**Clone and run**

```bash
git clone https://github.com/0xnurrabby/vercel-api-balance.git
cd vercel-api-balance
npm install
npm start
```

<br/>

**Build exe yourself**

```bash
npm run package
```

Output lands in `dist-pkg/Vercel Balance-win32-x64/`

Settings saved to `%APPDATA%\vercel-balance-checker\config.json`

<br/>

---

## ✦ Project Structure

```
vercel-api-balance/
├── main.js          →  electron main process, window management, drag
├── preload.js       →  secure ipc bridge between main and renderer
├── store.js         →  json file-based persistent storage
├── renderer/
│   └── index.html   →  all ui, full mode, compact mode, bulk tester
└── package.json
```

<br/>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:c4b5fd,50:fca5a5,100:fde68a&height=100&section=footer" width="100%"/>

**MIT License** &nbsp;·&nbsp; built by [0xnurrabby](https://github.com/0xnurrabby)

</div>
