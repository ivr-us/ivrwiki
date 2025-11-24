# Ricoh Printer setup <Badge type="tip" text="Windows" />

The Ricoh printer in front of the Hiwi-Room is part of the TIK printing server. Here is setup tutorial for it:

---

1. Remove all old printers at the same IP (141.58.162.8)
Delete Printers from Systemsteuerung such as IVR-Printer, etc. which may reference old printers as the new one has the same IP. 1. Head to [Printers](ms-settings:printers) in the Settings 2. Select the printer, e.g. "IVR-Drucker" 3. Click on it and then on "Weitere Geräte- und Druckeinstellungen" 4. In the new Window right-click the printer and click "Entfernen"
2. Add the new printer from TIK
Open the file explorer program
    In the searchbar at the top type `\\dr-us-1.uni-stuttgart.de\rc5028-IVR` and press `ENTER`.
    In the User Access control Window opening type in Domain Administrator credentails.

3. Add the Anwendercode
After successful installation head to the [Printer Settings](ms-settings:printers) once again
    Click on the new printer "Ricoh in dr-us-1" or something similar
    Click on Druckeinstellungen
    <Popover text="At the top right, click Anwendercode" path="/ricoh-anwendercode.png" :width="600"/>
    Type in your departments code.

