# Password management

Every device in the IVR domain has a unique password für local admin access.
All passwords are stored in a keepass database on the ivr share accessible for IT staff.

## Acessing the password manager
1. Open the ivr share in the file explorer
2. Navigate to `IT-Verwaltung\KeePass`
3. Start the `Start KeePass.bat` file
4. Enter the password to open the database

## Creating backups
When dealing with this kind of important information, please please back up the Passwords.kbdx at least every month, like the files you can see in the folder. Sometimes KeePass can corrupt the database and you have to reset every password by using an
[Admin CMD](admin-cmd) and the domain admin credentials. Or in the case of printers, etc. a factory reset which will be unpleasant for everyone involved.

## In the field
To access the passwords comfortably while working, install the [Android](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free) or [iOS](https://apps.apple.com/us/app/strongbox-password-manager/id897283731) version of keepass and copy the database to your phone. If you add passwords to this database, make sure to also add them to the one on the server.

