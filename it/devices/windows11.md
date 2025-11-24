# Windows 11 Installation <Badge type="tip" text="Windows" />

This is the easiest way of installing Windows 11 on a standard PC / Tablet, etc. **This should be done everytime**, even if the device already comes with Windows installed.

---

*This method requires you to have the Windows11 installation stick with the `autounattended.xml` on it*


## Setting the Boot medium
1. Before you can install Windows, turn of the PC
2. Connect the device to the University LAN. Without LAN while the installation process, the auto installing of Webex, Office, etc. wont work.
3. If you don't know how to open the *Boot menu*:
Start the PC again. Immediatly start pressing the `F2` Key very often, until you enter the BIOS. Here are two examples for <Popover text="Lenovo" path="/Lenovo-BIOS.png" :width="700" /> and <Popover text="Microsoft surface" path="/Surface-UEFI.png" :width="600" />
4. Navigate / Find `Boot` options and select the stick (San Disk or something similar) or put it in first row
5. Navigate to `Exit` or `Restart`, etc., if possible select `Save configuration and restart` or something similar

## Installing Windows

1. Let the system run, it will take some time to prepare Windows
2. When naming the System in the now opening Dialog, follow the [naming scheme](../info/device-naming-scheme)
3. Press `ENTER` during the KMS config steps
4. After the Administrator user is created and logged in, wait until everything is installed (All command prompt windows are closed)
5. Change the Admin password by opening an [Admin CMD](../info/admin-cmd) and typing in
```ps
net user Administrator *
```
and then the new password, `ENTER` and again.

## Configuring the domain
To use network drives, etc. the device has to be in the domain.

1. Open Settings and navigate to About
2. Click on Info
3. Click on `Domäne oder Arbeitsgruppe`
4. Click on `Ändern`
5. Select `Domäne`
6. Type in `uni-stuttgart.de`
7. When clicking on `OK`, in the User Access Control Popup type in the Domain Administrator (ad..., ask Susanne Becker) credentials.
8. After clicking `OK` again, click confirm the restart dialog

![Domain Dialog](/domain-dialog.png)