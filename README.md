<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,8,15&height=180&section=header&text=Vercel+Balance&fontSize=48&fontColor=000000&fontAlignY=38&desc=Always-on-top+floating+Vercel+AI+Gateway+balance+checker&descAlignY=58&descSize=14&animation=fadeIn" width="100%"/>

<div align="center">

[![Download](https://img.shields.io/badge/Download%20.zip-bbf7d0?style=for-the-badge&logoColor=000)](https://github.com/0xnurrabby/vercel-api-balance/releases/latest)
[![License](https://img.shields.io/badge/MIT-bfdbfe?style=for-the-badge&logoColor=000)](LICENSE)
[![Platform](https://img.shields.io/badge/Windows-fde68a?style=for-the-badge&logoColor=000)]()
[![Tech](https://img.shields.io/badge/Electron-fca5a5?style=for-the-badge&logoColor=000)]()

</div>

<div align="center">
<i>A tiny Electron desktop app that floats above every window and shows your Vercel AI Gateway credit balance in real time .... screen recordings, fullscreen, everything, it stays on top.</i>
</div>

---

```
+----------------------------------+
| Vercel Balance  [pin] [-] [x]    |
+------------------+---------------+
|   BALANCE        |   USED        |
|   $5.00          |   $0.61       |
+------------------+---------------+
```

---

## ✦ Features

<div align="center">

| | Feature | What it does |
|:---:|---|---|
| 📌 | Always on top | Floats above every window, every app, even fullscreen |
| ⚡ | Live balance | Auto-refreshes every 1s / 2s / 3s / 4s / 5s / 10s |
| 🔲 | Compact mode | Shrinks to a tiny pill showing just balance and used amount |
| 📋 | Bulk tester | Paste up to 50 API keys and check all balances in parallel |
| 💾 | Persistent | API key saved between restarts, no re-entering required |

</div>

---

## ✦ Download & Run

**Step 1** .... Download

```
Go to: https://github.com/0xnurrabby/vercel-api-balance/releases/latest
Download: VercelBalance-win64.zip
```

**Step 2** .... Extract

```
Right-click the zip -> Extract All -> choose a folder
```

**Step 3** .... Run

```
Open the extracted folder
Double-click VercelBalance.exe
No install wizard needed
```

---

## ✦ Run from Source

Requirements: Node.js 18+, npm

```bash
git clone https://github.com/0xnurrabby/vercel-api-balance
cd vercel-api-balance
npm install
npm start
```

---

## ✦ Setup

```
1. Download the .zip from the releases page (link above)
2. Extract it anywhere
3. Run VercelBalance.exe
4. Paste your Vercel AI Gateway API key in the input field
5. The balance and usage update automatically at the set interval
6. Use the Compact button to shrink it to a small pill
7. Use Bulk Tester to check multiple keys at once
```

---

## ✦ Project Structure

```
vercel-api-balance/
  main.js      ->  Electron main process, always-on-top window setup
  preload.js   ->  Electron preload script
  store.js     ->  persistent API key storage
  renderer/    ->  HTML + CSS + JS for the UI
  package.json
```

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,8,15&height=100&section=footer&animation=fadeIn" width="100%"/>

<div align="center">MIT License .... built by <a href="https://github.com/0xnurrabby">0xnurrabby</a></div>
