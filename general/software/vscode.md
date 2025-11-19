# VSCode

This tutorial helps you install Visual Studio Code (VSCode), set up R and GitHub Copilot extensions, and configure everything for coding and version control.

**Prerequisites**
You have R and git installed on your device and are signed in with GitHub.

---

### Downloading VSCode

Visual Studio Code is a free and lightweight code editor developed by Microsoft.

#### On Windows
1. Visit [https://code.visualstudio.com](https://code.visualstudio.com).  
2. Click **Download for Windows**.  
3. Once the installer finishes downloading, run it.  
4. Follow the setup wizard, leaving the default options selected.

#### On macOS
1. Go to [https://code.visualstudio.com](https://code.visualstudio.com).  
2. Click **Download for macOS**.  
3. Open the downloaded `.zip` file.  
4. Drag **Visual Studio Code** into your **Applications** folder.  

---

### Installing R- and Copilot Extensions

Extensions expand VSCode’s functionality. To use AI with R, you need the following: **R language support** and **GitHub Copilot**.

1. Open **VSCode**.  
2. Click the **Extensions** icon on the left sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X` on Mac).  
3. In the search bar, type **R**.  
4. Install the extension named **R** by REditorSupport.  
5. Then search for **GitHub Copilot**.  
6. Install **GitHub Copilot** by GitHub.  
7. Once both are installed, reload VSCode if prompted.

---

### Setting up Copilot

GitHub Copilot uses AI to suggest code and complete functions automatically.

1. Open **VSCode**.  
2. Go to the **Extensions** panel and confirm that **GitHub Copilot** is installed.  
3. Sign in with your GitHub account when prompted.  
   - Click **Sign in to GitHub** and authorize VSCode to use your account.  
4. After signing in, open a new file and start typing code.  
5. Copilot will suggest completions (displayed in gray).  
6. Press `Tab` or `Enter` to accept a suggestion.

---

### Setting up R

VSCode needs to know where your R installation is located.

#### On Windows
1. Install R from [https://cran.r-project.org](https://cran.r-project.org).  
2. During installation, keep the default path (usually `C:\Program Files\R\R-x.x.x`).  
3. In VSCode, open **Settings** (`Ctrl+,`).  
4. Search for “R path”.  
5. Set the path to your R executable, for example:
```

C:\Program Files\R\R-4.4.1\bin\R.exe

````
6. Open a new file with the `.R` extension to start writing R code.

#### On macOS
1. Download and install R from [https://cran.r-project.org](https://cran.r-project.org).  

2. In VSCode, open **Settings** (`Cmd+,`).
    
3. Search for “R path” and set it to:
    
    ```
    /usr/local/bin/R
    ```
    
4. Open a `.R` file and test code execution by running a simple command (e.g., `1 + 1`).
    

---

### Using Git

You can manage version control directly inside VSCode using Git.

1. Make sure **Git** is installed on your system (see the Git tutorial).
    
2. Open a project folder in VSCode by clicking `File` and `Open folder`.
    
3. Click the **Source Control** icon on the left sidebar (or press `Ctrl+Shift+G` / `Cmd+Shift+G`).
    
4. Click **Initialize Repository** if Git isn’t set up yet.
    
5. To commit changes:
    
    - Type a message in the input box.
        
    - Click the **checkmark** icon or press `Ctrl+Enter`.
        
6. To publish your project:
    
    - Click **Publish to GitHub** (you may need to sign in).
        
7. From now on, you can **pull**, **commit**, and **push** changes directly from within VSCode.
    

---

You now have a fully functional VSCode setup with R, GitHub Copilot, and Git integration!