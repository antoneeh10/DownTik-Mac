# DownTik-Mac 🎬🔥

An Open Source TikTok Multimedia Downloader for macOS, built with **Electron** and powered by automated **GitHub Actions** workflows.

---

## 🎨 Workflow Status & Automated Installation

Every time code is pushed to this repository, GitHub Actions automatically builds the application and packages it into a production-ready `.dmg` file.

### How to Download the Build Artifacts:
1. Navigate to the main page of your **DownTik-Mac** repository on GitHub.
2. Click on the **Actions** tab located in the top navigation bar.
3. On the left sidebar menu, look under the workflow list and click on the **Pinned option** (or directly select the **"Build macOS DMG"** workflow).
4. Click on the most recent successful workflow run (indicated by a green checkmark).
5. Scroll down to the very bottom of the page to the **Artifacts** section, and click on **DownTik-macOS-Package** to download your `.dmg` installer.

---

## 🚀 Core Features Matrix (Desktop Edition)

### 🎬 Main & Media Downloader
* **Video Downloader Core:** Fetches TikTok video metadata instantly using the TikWM API.
* **Advanced Video Preview:** Interactive thumbnails that can be clicked to enter a smooth fullscreen preview window, featuring a play button overlay designed with Material Expressive Player guidelines.
* **Audio Extractor Tab:** A dedicated tab with a specific **"Get Audio"** button to isolate and extract audio tracks directly from TikTok videos.
* **Smart Storage Matrix:** Downloaded files are automatically sorted into dedicated local directories:
  * 📁 `Downloads/DownTik/Video`
  * 📁 `Downloads/DownTik/Audio`
* **Persistent History Log:** Keeps a local record of your download history, allowing you to easily browse and view previously downloaded multimedia files.

### 📤 Share System & Clipboard Integration
* **Auto-Clipboard Listener:** Optimized for desktop environments; it automatically detects TikTok URLs copied to your macOS system clipboard.
* **Seamless Input:** When the application is launched or maximized, the detected TikTok link is automatically pasted into the input field without requiring manual actions.
* **Crash Protection:** Strict validation mechanics filter out invalid links and non-URL text, preventing application freezes or crashes.

### 🔄 3-Channel Update System
The application integrates directly with the **GitHub Releases API** to monitor and deliver updates seamlessly:
* **3 Distribution Channels:** Supports `Stable` (v1.2.5), `Beta` (v1.2.5-beta.x), and `Nightly` (automated daily builds) channels.
* **Smart Cache & Traffic Optimization:** Utilizes persistent caching with `ETag` and `304 Not Modified` headers to conserve bandwidth and prevent API rate-limiting issues.
* **Interval Scheduler:** Runs an automated background update check every **6 hours**, with a manual check button available in Settings to bypass the interval restriction.
* **Security Digest Verification:** Downloaded installation packages must pass a strict `SHA-256` checksum verification to ensure package integrity before installation.

### 💝 Developer Support
An option bar placed next to the history button allows users to support the project's sustainability:
* **Donate Button:** Triggers an interactive dialog offering both local and international donation platforms:
  * 🇮🇩 **Saweria** (For Indonesian local e-wallets/QRIS)
  * 🌎 **SociaBuzz** (For international payment methods)
  * *Developer Message:* `"berikan donasi untuk fitur baru aplikasi DownTik dan domain web. kalau gak ada, gakpapa, gak dipaksa kok :)"`
* **See an Ads Confirmation:** Displays a native confirmation dialog before loading ad placements inside an isolated sandbox window, ensuring users are never forcefully redirected to an external browser.

### 🌐 Bilingual Support & Localization
* **Built-in Multi-language Engine:** Complete native localization for 🇮🇩 **Bahasa Indonesia** and 🇬🇧 **English**, covering all components, dialogs, button triggers, error messages, and accessibility content descriptions.
* **Flexible Toggles:** Language settings can be reconfigured dynamically at any time via the **Settings** panel.
* **👋 Onboarding Screen (First-Run Intro):**
  * **Slide 1:** Welcome introduction highlighting key multimedia features (Video, Audio, History, Multi-channel updates).
  * **Slide 2:** Quick preference toggle to pick the default interface language (Bahasa Indonesia / English).
  * *Onboarding states are saved persistently upon completion, ensuring it never interrupts subsequent app launches.*

### 🛡️ Reliability & Security Architecture
* **Zero Hardcoded Secrets:** No personal access tokens, GitHub PATs, or API keys are stored within the source code.
* **Strict HTTP Stream Handling:** Network requests utilize optimized libraries, ensuring all HTTP response streams are closed explicitly to eliminate memory leaks.
* **Graceful Cancellation:** Canceling active downloads is handled gracefully without logging an application error state, and temporary cache files are wiped instantly.
* **Code Minification:** JavaScript source files and application assets are bundled and minified using optimized compilation rules for crisp macOS desktop performance.

---

## 🧩 User Experience Architecture (UX Structure)

```text
                    DownTik (Mac Desktop)
                              │
               ┌──────────────┴──────────────┐
               │                             │
            Video                          Audio
               │                             │
          Get Video                       Get Audio
               │                             │
               └────────── Download ─────────┘
                              │
                     Download/DownTik/
                        ├── Video
                        └── Audio

Top Actions Bar:
[ Donate 💝 ]   [ See an Ads 📺 ]   [ History 📜 ]

External Input:
System Clipboard Copy (TikTok URL) → Auto Detect → Fill Downloader
```

---

## 🛠️ Local Development

To run and compile this application locally on your machine:

1. Clone the repository:
   ```bash
   git clone https://github.com
   cd DownTik-Mac
   ```
2. Install the Node.js package dependencies:
   ```bash
   npm install
   ```
3. Boot the app in development mode:
   ```bash
   npm start
   ```
   
4. Compile and package the production `.dmg` file locally:
   ```bash
   npm run build
   ```

---
*DownTik has successfully evolved from a simple link-paster into a complete, reliable, and secure desktop multimedia downloading ecosystem centered around user experience. 🗿🔥*
