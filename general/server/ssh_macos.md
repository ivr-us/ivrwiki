# SSH Client setup <Badge type="info" text="macOS" />

:::tip
You need an account on the IVR Server to perform this installation.
:::

## Setting up ssh
*SSH is already included in all modern macOS distributions*

If you do not already have a pair of ed25519 keys (or do not know), open the `Terminal` App and type in `ssh-keygen -t ed25519` and hit `ENTER`. If you do not want an alternative path or a passphrase for your key, which is not needed most of the time, press `ENTER` thrice, until a little image is printed in the console.

## Sending your key to the server
*For this to work, we have to enable Password login on the Server or you have to have physical access to the server*

1. If password authentication is enabled, open the `Terminal` App and type / paste in
    ```bash
    cat ~/.ssh/id_ed25519.pub | ssh yourname@server.ivr.uni-stuttgart.de 'mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys'
    ```
    (Don't forget to replace `yourname` with your server username)
2. Now type in `exit`
3. Type in
    ```bash
    ssh yourname@server.ivr.uni-stuttgart.de
    ```
    If there is no Password prompt, congrats, everything is working


## Adding your key manually (with physical access to the server)


1. On your **Mac**, show your key:
    ```bash
    cat ~/.ssh/id_ed25519.pub
    ```
    And copy it onto a USB drive or something similar

2. Go to the **server** and log in locally as your user

3. On the server, open a `Terminal` (click left most icon in the top bar) create the `.ssh` directory and set the correct permissions:
    ```bash
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh
    ```

4. Create the `authorized_keys` file in an editor, for example with `nano`:
    ```bash
    nano ~/.ssh/authorized_keys
    ```
    Paste the public key from your Mac, then save (`CTRL + O`) and exit (`CTRL + X`).

5. Set the correct permissions on `authorized_keys`:
    ```bash
    chmod 600 ~/.ssh/authorized_keys
    ```

6. Back on your **Mac**, test the SSH login:
    ```bash
    ssh yourname@server.ivr.uni-stuttgart.de
    ```
    If there is no password prompt, congrats, everything is working.
