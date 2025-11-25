# SSH and RDP setup (Windows client) <Badge type="tip" text="Windows" />

Here is the complete guide for setting up SSH and RDP on your Windows machine. This covers generating a new secure key on Windows, sending it to your Ubuntu server, and launching the connection.

**Prerequisite:** Open **PowerShell** as a normal user (no need for Administrator rights).

---

### Step 1: Generate SSH Keys on Windows
We will use the modern **Ed25519** algorithm.

1.  In PowerShell, run:
    ```powershell
    ssh-keygen -t ed25519 -C "windows_machine"
    ```
2.  **Press Enter** to accept the default file location (`C:\Users\YourName\.ssh\id_ed25519`).
3.  **Passphrase:** You can press Enter twice for no passphrase (easier) or type a password to encrypt the key file (more secure).

---

### Step 2: Copy the Key to the Server
Windows does not have the `ssh-copy-id` tool found on Linux, so we have to do it manually.

**Option A: If Password Authentication is still ON**
Run this command to send the public key contents directly to the server's authorized list:

```powershell
type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh richard@141.58.162.118 "cat >> .ssh/authorized_keys"
```
*It will ask for your Linux user password one last time.*

**Option B: If Password Authentication is OFF (Locked Down)**
If you already disabled passwords, you cannot send the key via PowerShell.
1.  On Windows: Run `type $env:USERPROFILE\.ssh\id_ed25519.pub` and copy the output string (starts with `ssh-ed25519...`).
2.  On Linux (or via your working Linux laptop connection): Open `~/.ssh/authorized_keys` and paste that new line at the bottom.

---

### Step 3: Test the SSH Connection
Verify that the key works. In PowerShell:

```powershell
ssh richard@141.58.162.118
```

*   **Success:** You log in without typing a password (or only typing the key passphrase if you set one).
*   **Failure:** If it asks for the *Linux user password*, the key copy didn't work.

Type `exit` to close this test connection.

---

### Step 4: Open the Tunnel (The Daily Workflow)
This is what you will do every time you want to work on the server.

1.  Open PowerShell.
2.  Run the tunnel command:
    ```powershell
    ssh -L 33389:127.0.0.1:3389 richard@141.58.162.118
    ```
    *   `-L` means "Local Forward".
    *   It maps port `33389` on your Windows machine -> `127.0.0.1:3389` on the Ubuntu server.
    *   (I use `33389` locally to avoid conflicts if you ever enable RDP on your own Windows PC).

3.  **Leave this PowerShell window open.** Minimize it, but do not close it.

---

### Step 5: Connect via Remote Desktop
1.  Press **Start**, type **Remote Desktop Connection**, and open it.
2.  **Computer:** `localhost:33389`
3.  Click **Connect**.
4.  **The Login Screen:**
    *   You will see the XRDP login box.
    *   **username:** `richard`
    *   **password:** Your **Linux Password** (not the SSH key passphrase).
5.  You should now see your MATE desktop.

---

### Optional: Create a "One-Click" Script for Windows
To avoid typing the ssh command every time, create a shortcut file.

1.  Open Notepad.
2.  Paste this:
    ```batch
    @echo off
    echo Starting SSH Tunnel to Ubuntu Server...
    ssh -L 33389:127.0.0.1:3389 richard@141.58.162.118
    pause
    ```
3.  Save the file to your Desktop as `Connect-Server.bat` (Make sure "Save as type" is "All Files").
4.  Now you just double-click that icon, wait for the connection, and then open Remote Desktop.
