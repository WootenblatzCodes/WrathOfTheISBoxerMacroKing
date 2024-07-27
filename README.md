# Wrath of the ISBoxer Macro King

Change to the generator folder (`cd generator/`) and run generate.js with node.  Pass in the class you want to generate macros for and supply NOFUNC if you want to omit using the function keys.  Redirect the output to a filename ending in .xml.  See usage examples below.

`node generate.js (class) [key-options] > your-file-name.xml`

**usage examples:**

`node generate.js Warlock > warlock.xml`

`node generate.js Priest NOFUNC > priest.xml`

## CLASSES (Required, only one at a time)  
Warrior, Paladin, Hunter, Rogue, Priest, DeathKnight, Shaman, Mage, Warlock, Druid, Evoker

### Key Options (Optional)
Leave blank to use modifiers (ctrl,alt,shift) with the following keys:
NUM keys, F1-F9, HOME, END, PGUP, PGDN

Pass NOFUNC to exclude the F1-F9 keys.

## How can I use the XML files this program generates?

Open the XML file in any text editor, such as Notepad or Visual Studio Code.  Select all of the text in the file and copy it to the clipboard.  Open your ISBoxer config, right click on the Macro Sets entry in the tree and select `Paste WoW Macro Sets from Clipboard`
