# XRDP setup (Ubuntu server) <Badge type="tip" text="Windows" />

Here is the step-by-step guide to setting up XRDP with MATE, securing it so it is **only** accessible via SSH tunnel, and connecting from Windows.

---

### Part 1: Server-Side Setup (Admin)

Run these commands on your Ubuntu server.

**1. Install XRDP**
Since you already have MATE, you just need the RDP server software.
```bash
sudo apt update
sudo apt install xrdp xorgxrdp
```

**2. Configure XRDP to use MATE System-Wide**
By default, XRDP might try to launch GNOME or look for other sessions. We will force it to use `mate-session` for X11 connections.

Edit the startup script:
```bash
sudo nano /etc/xrdp/startwm.sh
```
Scroll to the end. You will see lines testing for various sessions. **Comment out** the existing `test` and `exec` lines at the bottom (add a `#` in front of them) and add these two lines at the very end:

```bash
# Add these lines at the end of the file
unset DBUS_SESSION_BUS_ADDRESS
unset XDG_RUNTIME_DIR
exec mate-session
```
*Why?* The `unset` commands prevent session conflicts that cause black screens when a user has disconnected but left a session running.

**3. Grant Permission to SSL Certificates**
This prevents connection errors related to permissions.
```bash
sudo adduser xrdp ssl-cert
```

**4. Secure XRDP (Bind to Localhost ONLY)**
Since you want users to use an SSH tunnel (and not open port 3389 to the public internet), you should force XRDP to **only listen on localhost**. This ensures that even if your firewall fails, no one can hack the RDP port directly.

Edit the config file:
```bash
sudo nano /etc/xrdp/xrdp.ini
```
Find the line `port=3389` and change it to:
```ini
port=tcp://127.0.0.1:3389
```

**5. Fix the "Authentication Required" Popups**
When running MATE over XRDP, users often get annoying popups asking for passwords to manage color profiles. Let's silence that.

Create a new policy file:
```bash
sudo nano /etc/polkit-1/localauthority/50-local.d/45-allow-colord.pkla
```
Paste this content inside:
```ini
[Allow Colord all Users]
Identity=unix-user:*
Action=org.freedesktop.color-manager.create-device;org.freedesktop.color-manager.create-profile;org.freedesktop.color-manager.delete-device;org.freedesktop.color-manager.delete-profile;org.freedesktop.color-manager.modify-device;org.freedesktop.color-manager.modify-profile
ResultAny=no
ResultInactive=no
ResultActive=yes
```

**6. Restart the Service**
```bash
sudo service xrdp restart
```

---

### Part 2: User Configuration (Per User)

Each user needs a simple `.xsession` file in their home directory to ensure MATE launches correctly for their specific user profile.

**Run this as the user (or sudo su - user):**
```bash
echo "mate-session" > ~/.xsession
```

*Note: This file does not affect X2Go. X2Go ignores this file because the X2Go client specifies the session type explicitly during the handshake.*

---

### Part 3: Client Guide (For Windows Users)

Send these instructions to your Windows users. They do not need to install anything; they just need to use what Windows already has.

#### Step A: Open the SSH Tunnel
1.  On Windows, press **Start** and type `PowerShell`. Open it.
2.  Run the following command (replace `username` and `server-ip`):
    ```powershell
    ssh -L 33389:127.0.0.1:3389 your_username@server.ivr.uni-stuttgart.de
    ```
3.  Enter your password when prompted.
4.  **Keep this PowerShell window open.** (You can minimize it).

#### Step B: Connect via Remote Desktop
1.  Press **Start**, type `Remote Desktop Connection`, and open it.
2.  In the "Computer" field, type:
    ```text
    localhost:33389
    ```
3.  Click **Connect**.
4.  You will see a login prompt for the XRDP server. Enter your Linux username and password.
5.  **Result:** You are now in a MATE desktop session running Stata/RStudio with near-native Windows performance.

---

### Part 4: Important Warnings for Users

1.  **Do not log in twice:** If a user is already logged in via X2Go, they should not try to log in via XRDP at the same time (and vice versa). It can confuse the session manager.
2.  **Stata/RStudio:** If they run a calculation that takes 5 hours, they can simply click the "X" on the Remote Desktop bar to disconnect. The session **stays running** on the server. To resume, they just reconnect steps A and B.
3.  **To fully log out:** They must go to **System -> Log Out** inside the MATE desktop to kill the session and free up RAM.
