# DownTik-Mac 🎬🔥

An Open Source TikTok Multimedia Downloader for macOS, built with **Electron** and powered by automated **GitHub Actions** workflows.

---

## 🚀 Core Features Matrix (Desktop Edition)

#### 🎬 Main & Media Downloader
* **Video Downloader Core:** Fetches TikTok video metadata instantly using the TikWM API.
* **Advanced Video Preview:** Interactive thumbnails that can be clicked to enter a smooth fullscreen preview window, featuring a play button overlay designed with Material Expressive Player guidelines.
* **Audio Extractor Tab:** A dedicated tab with a specific **"Get Audio"** button to isolate and extract audio tracks directly from TikTok videos.
* **Smart Storage Matrix:** Downloaded files are automatically sorted into dedicated local directories:
  * 📁 `Downloads/DownTik/Video`
  * 📁 `Downloads/DownTik/Audio`
* **Persistent History Log:** Keeps a local record of your download history, allowing you to easily browse and view previously downloaded multimedia files.

#### 📤 Share System & Clipboard Integration
* **Auto-Clipboard Listener:** Optimized for desktop environments; it automatically detects TikTok URLs copied to your macOS system clipboard.
* **Seamless Input:** When the application is launched or maximized, the detected TikTok link is automatically pasted into the input field without requiring manual actions.
* **Crash Protection:** Strict validation mechanics filter out invalid links and non-URL text, preventing application freezes or crashes.

#### 🔄 3-Channel Update System
The application integrates directly with the **GitHub Releases API** to monitor and deliver updates seamlessly:
* **3 Distribution Channels:** Supports `Stable` (v1.2.5), `Beta` (v1.2.5-beta.x), and `Nightly` (automated daily builds) channels.
* **Smart Cache & Traffic Optimization:** Utilizes persistent caching with `ETag` and `304 Not Modified` headers to conserve bandwidth and prevent API rate-limiting issues.
* **Interval Scheduler:** Runs an automated background update check every **6 hours**, with a manual check button available in Settings to bypass the interval restriction.
* **Security Digest Verification:** Downloaded installation packages must pass a strict `SHA-256` checksum verification to ensure package integrity before installation.

#### 💝 Developer Support
An option bar placed next to the history button allows users to support the project's sustainability:
* **Donate Button:** Triggers an interactive dialog offering both local and international donation platforms:
  * 🇮🇩 **Saweria** (For Indonesian local e-wallets/QRIS)
  * 🌎 **SociaBuzz** (For international payment methods)
  * *Developer Message:* `"berikan donasi untuk fitur baru aplikasi DownTik dan domain web. kalau gak ada, gakpapa, gak pemaksa kok :)"`
* **See an Ads Confirmation:** Displays a native confirmation dialog before loading ad placements inside an isolated sandbox window, ensuring users are never forcefully redirected to an external browser.

#### 🌐 Bilingual Support & Localization
* **Built-in Multi-language Engine:** Complete native localization for 🇮🇩 **Bahasa Indonesia** and 🇬🇧 **English**, covering all components, dialogs, button triggers, error messages, and accessibility content descriptions.
* **Flexible Toggles:** Language settings can be reconfigured dynamically at any time via the **Settings** panel.
* **👋 Onboarding Screen (First-Run Intro):**
  * **Slide 1:** Welcome introduction highlighting key multimedia features (Video, Audio, History, Multi-channel updates).
  * **Slide 2:** Quick preference toggle to pick the default interface language (Bahasa Indonesia / English).
  * *Onboarding states are saved persistently upon completion, ensuring it never interrupts subsequent app launches.*

#### 🛡️ Reliability & Security Architecture
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

## 🎨 Visual Step-by-Step Guide: How to Fork, Build, and Download DownTik macOS Installer

#### Step 1: Navigating the Source Repository
Before creating your personal copy, you can explore the central hub by opening the main repository page and checking the baseline configuration layout.
![Source Repository Interface](image_tZAyzi.png)

#### Step 2: Accessing the Source Actions Pipeline
Clicking on the **Actions** tab on the main repository page will show the default workflow landscape view.
![Baseline Actions State](image_RYCxor.png)

#### Step 3: Checking Available Workflows
Under the action directory menu structure, you can view the integrated automated build modules that have been prepared.
![Source Workflows Framework](image_DIiC_R.png)

#### Step 4: Forking the Project to Your Profile
Click the **Fork** button located at the top-right corner of the main hub page. On the setup page, verify your personal **Owner** account profile, customize your destination repository name, keep the main branch tracking checked, and click the green **Create fork** button.
![Create a New Fork Setup Panel](git-assets/screenshots/5.png)

#### Step 5: Waiting for the Duplication Process
A synchronized loading interface screen will prompt while the cloud framework clones the repository structure into your profile space.
![Forking Initialization Loader](image_6Zxaoz.png)

#### Step 6: Viewing the Forked Repository Home
Once the cloning process finishes, you will be redirected to your personal workspace directory file hierarchy layout.
![Forked Repository File Tree](image_TSjLJg.png)

#### Step 7: Unlocking Workflow Restrictions
Navigate to the **Actions** tab on your newly mirrored personal repository page. Click the large green confirmation block statement button to activate execution privileges.
![Granting Actions Clearances Control](image_WX_CUe.png)

#### Step 8: Initializing the Build Control Environment
After granting access permissions, the build engine panel interface clears into an active structural state ready for pipeline deployment.
![Actions Enabled Dashboard](image_TerhRp.png)

#### Step 9: Launching the Automated Compiler Script
Select **"Build macOS DMG"** on the left sidebar menu layout. Look towards the right-hand panel view and click the gray **"Run workflow"** box toggle. When the inner overlay context card prompts, click the green **"Run workflow"** confirmation button.
![Deploying the Automated Compiler Run](image_aVaofT.png)

#### Step 10: Monitoring the Cloud Runner Infrastructure Queue
The newly triggered execution instance will dynamically append to the build listing array, switching state to a queued operation flag.
![Cloud Builder Infrastructure Processing Pipeline](image_-n6FLa.png)

#### Step 11: Watching the Virtual Environment Compilation Execution
The pipeline transitions to a processing track state as the background virtual terminal processes build dependencies.
![Runner Task Processing Queue](image_QkJsUx.png)

#### Step 12: Confirming Verified Success Execution Marks
Wait until the active operational tracking processes resolve completely into stable **green checkmarks** labeled with a success status string.
![Successful Compiler Run Verification Workspace](image_-FUxZg.png)

#### Step 13: Downloading the Production Bundle Asset Package
Scroll down to the absolute bottom of the successful run summary page to access the generated workspace outputs. Click the blue download asset bundle link labeled **DownTik-macOS-DMG** to download the package file.
![Artifact Package Summary Control](image_ZIsjVt.png)

#### Step 14: Extracting the Local Archive Folder Package
Locate the downloaded file `DownTik-macOS-DMG.zip` inside your system local file manager interface, right-click on the icon block space, and select **Extract** or **Extract to...**.
![Extracting the Local Archive Container Package](image_TJjMX-.png)

#### Step 15: Executing the Native Standalone macOS DMG Disk Image
The output process creates a new target folder directory containing your compiled production-ready disk asset installer: **`DownTik-1.0.0-arm64.dmg`**!
![Production Standalone macOS DMG Disk Image Output](image_12v-TC.png)

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
4. Compile and package the production .dmg file locally:
```bash
   bash npm run build    
   ```
