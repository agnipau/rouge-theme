# Rouge Theme for VSCode
VSCode theme created for a dark, material feel with a flushed color palette, optimized for use with Operator Mono font. 
Inspiration was drawn from Atom's Material Theme tweaked to my liking, and [loved-syntax](https://github.com/DanielPintilei/atom-loved-syntax) for Atom.

## Version 1.0 is here!
Welcome to Rouge Theme for VSCode, official release on the [Marketplace](https://marketplace.visualstudio.com/items?itemName=josef.rouge-theme).

### Changelog
[CHANGELOG.MD](./CHANGELOG.MD)

### Issues or Concerns?
Create an issue on the [repository](https://github.com/josefaidt/rouge-theme/issues).

### Screenshots
![Screenshot](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/screenshot01.png)

![Screenshot](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/screenshot02.png)

![Screenshot](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/screenshot03.png)

### Recommended Settings
I prefer to use the colorless version of [file-icons](https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons) and the settings below. If you do not have Operator Mono installed, Fira Code works well also, though the italics are optimized for use with Operator Mono.

	
	"workbench.iconTheme": "file-icons-colourless",
	"editor.fontFamily": "Operator Mono, Consolas, 'Courier New', monospace"
		

### Options
I'm torn with a design choice, if you do not care for the Rouge colored sidebar headers you can flatten the colors with the following lines to your user settings:

	
	"workbench.colorCustomizations": {
		"sideBarSectionHeader.background": "#172030",
		"sideBarSectionHeader.foreground": "#e6e6e6"
	}
	

![Screenshot](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/screenshot04a.png)![Screenshot](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/screenshot04b.png)

### Supported Languages
- C#
- Java
- JavaScript
- JSON
- HTML
- CSS, Sass, LESS
- XML
- Markdown

### Manual Install Instructions
1. Ensure your copy of VSCode is above v1.15
2. Download/unzip contents of this project
3. Copy folder to your profile's extensions folder
	- Windows:  `C:\Users\<yourprofile>\.vscode\extensions`
	- macOS:    `~/.vscode/extensions`
4. Reload the VSCode window (command palette > reload window)
5. Select **Rouge** (command palette > Preferences: Color Theme)


### License
[MIT License](./LICENSE)
