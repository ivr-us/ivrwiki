# RDP setup <Badge type="info" text="macOS" />

:::tip
You need to have the [SSH Setup](./ssh_macos.md) completed for this to work.
:::

:::tip
If you want you can download [this script](/scripts/macos-rdp.sh) (Open and `Save page as`) and customize the variables on top to automate the whole process.
:::

## Setting up the connection (Has to be done everytime)
1. Open the `Terminal` App
2. Type / Paste in
    ```bash
    ssh -L 33389:127.0.0.1:3389 yourname@server.ivr.uni-stuttgart.de
    ```
    (Don't forget to replace `yourname` with your name)
3. Leave the window open it will tunnel a local service through ssh

## Using RDP (First time)
1. Download the Windows App by Microsoft from the App Store.
2. Open it
3. Click on the + Icon at the top right
4. Change PC-Name to `localhost:33389`
5. Click Save

## Using RDP (Everytime)
1. Open the Windows App
2. Connect by double-clicking
3. Done