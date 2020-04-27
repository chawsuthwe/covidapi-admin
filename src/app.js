const electron = require("electron");
const path = require("path");
const url = require("url");
const { app, BrowserWindow, Menu, shell } = electron;

// initialize main window
let main_window;

const create_main_window = () => {
	main_window = new BrowserWindow({
		width: 800,
		height: 400,
		webPreferences: {
			nodeIntegration: true,
		},
	});
	let main_url = url.format({
		pathname: path.join(__dirname, "/../public/coviddashB/html/main.html"),
		protocol: "file:",
		slashes: true,
	});

	if (!main_url) {
		console.log(
			"canot find starting url. please build frontend or start frontend dev server"
		);
	}
	main_window.loadURL(main_url);
};

app.whenReady().then(create_main_window);

app.on("window-all-closed", () => {
	// if macOS, don't quit: keep it open on dock
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	// for macOS, when click icon on dock, re-create window
	if (BrowserWindow.getAllWindows().length === 0) {
		create_main_window();
	}
});

const isMac = process.platform === "darwin";
const template = [
	{
		label: "File",
		submenu: [isMac ? { role: "close" } : { role: "quit" }],
	},
	{
		label: "Help",
		submenu: [
			{ role: "reload" },
			{ role: "toggledevtools" },
			{
				label: "Learn More",
				click: async () => {
					await shell.openExternal(
						"https://www.facebook.com/UITStudentsUnion/"
					);
				},
			},
		],
	},
];

if (isMac) {
	template.unshift({
		label: "Covid19 MM",
		submenu: [
			{ type: "separator" },
			{
				label: "Quit Covid19 MM",
				accelerator: "Command+Q",
				click() {
					app.quit();
				},
			},
		],
	});
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
