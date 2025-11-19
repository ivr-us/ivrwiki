# GitHub

This tutorial helps you set up your GitHub Education account, install [git](https://en.wikipedia.org/wiki/Git) on your devices, and connect it with [GitHub](https://en.wikipedia.org/wiki/GitHub).

---

### Creating a GitHub Account

To use GitHub, you first need to create a free account on the GitHub website.

1. Go to [https://github.com](https://github.com).  
2. Click **Sign up** in the top right corner.  
3. Enter your **email address**, **password**, and **username**.  The email address doesn't have to be your IVR-Address. 
4. Once verified, complete the setup and sign in to your new account.

---

### Apply to GitHub Education

GitHub Education provides free access to developer tools and learning resources for students and educators.

1. Visit [https://github.com/education/teachers](https://github.com/education/teachers).  
2. Click **Join GitHub Education**.  
3. Sign in with your GitHub account.  
4. Fill out the application form:
   - Select Teacher as **academic status**.  
   - Enter Universität Stuttgart as **school name** and **academic email address**. 
   - Allow GitHub to track your location (Otherwise your application will almost certainly be rejected)
   - Upload proof (e.g., University employee card).  
1. Click **Submit your application**.  
2. Wait for approval — it may take a few hours. You’ll receive an email once your application is accepted. About a day later your free GitHub Pro is active.

---

### Install git on your device

Git is the version control software that GitHub uses.  
Follow the steps below depending on your operating system.

#### On Windows
1. Go to [https://git-scm.com/download/win](https://git-scm.com/download/win).  
2. Download Git for Windows/x64 Setup (or ARM if you have a very new device with an ARM Chip, like the Surface Pro 9, 10, 11 with 5G).  
3. Run the installer and follow the setup wizard.  

If you see a version number, Git was installed successfully.

#### On macOS

1. Open **Terminal**.
2. Type:
    ```bash
    git --version
    ```
    If Git is already installed, you’ll see a version number.
3. If not, you’ll be prompted to install **Xcode Command Line Tools**.
4. Confirm the installation and wait for it to finish.
---

### Install GitHub Desktop on your device

GitHub Desktop is a graphical interface that simplifies using Git and GitHub.

#### On Windows

1. Go to [https://desktop.github.com](https://desktop.github.com).
2. Click **Download for Windows**.
3. Run the installer and follow the setup process.
4. Once installed, open **GitHub Desktop**.
5. Sign in with your GitHub account.
6. Choose the default folder where your repositories will be saved.

#### On macOS

1. Go to [https://desktop.github.com/download](https://desktop.github.com/download).
2. Click **Download for macOS**.
3. Open the downloaded `.zip` file and drag **GitHub Desktop.app** to your **Applications** folder.
4. Launch the app from **Applications**.
5. Sign in with your GitHub account.
6. Set your preferred repository folder.

### Example: Use the Lab Template
The Lab Template can be used to standardize your file structure projects. It can be found here: [Lab template](https://github.com/rbluhm/lab_template). In order to use it, you have to clone it to your device.
1. Open GitHub Desktop.
2. Click on **File** and **Clone repository...**.
3. Select the tab **URL**.
4. Paste in the URL `https://github.com/rbluhm/lab_template`.
5. Select a local path (The repository contents will be cloned into a subfolder with the repository name, in this case `lab_template`).
6. Click clone to copy the repository to your device.
7. Open the repository on your device via File Explorer
8. You'll find a setup.bat *For MacOS setup.sh* in there. Start it to create the folder structure.
9. If you add a file, like a r-Script or a csv, you can see them in GitHub Desktop in the left tab under **Changes**.