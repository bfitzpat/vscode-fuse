'use strict';

import * as vscode from 'vscode';
import { BaseNodeProvider } from './BaseNodeProvider';
import { FuseDummyNodeProvider } from './FuseDummyViewProvider';
import { FuseProjectExplorerNodeProvider } from './FuseProjectExplorerViewProvider';
import { FuseServersNodeProvider } from './FuseServersViewProvider';

export async function activate(context: vscode.ExtensionContext) {

	const nodeProvider = new FuseDummyNodeProvider(context);
	vscode.window.registerTreeDataProvider('nodeOutline', nodeProvider);

	const projectExplorer = new FuseProjectExplorerNodeProvider(context);
	vscode.window.registerTreeDataProvider('fuseProjectExplorer', projectExplorer);

	const serverExplorer = new FuseServersNodeProvider(context);
	vscode.window.registerTreeDataProvider('fuseServerExplorer', serverExplorer);

	const springBootExplorer = new BaseNodeProvider(context);
	vscode.window.registerTreeDataProvider('springBootDashboard', springBootExplorer);

	vscode.commands.registerCommand('extension.openDocsUrl', url => {

		// Create and show a new webview
		const fusepanel = vscode.window.createWebviewPanel(
			'fuseDocs', // Identifies the type of the webview. Used internally
			'Red Hat Fuse Documentation', // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
			{
				// Enable javascript in the webview
				enableScripts: true
			}
		);
		loadWebContent(url, fusepanel);
	});

	vscode.commands.registerCommand('extension.openExtensionsUrl', url => {
		// Create and show a new webview
		const extpanel = vscode.window.createWebviewPanel(
			'fuseExts', // Identifies the type of the webview. Used internally
			'Camel Extension Pack for VS Code', // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
			{
				// Enable javascript in the webview
				enableScripts: true
			}
		);
		loadWebContent(url, extpanel);
	});
}

async function loadWebContent(url: string, panel: vscode.WebviewPanel) {
	var fetchUrl = require("fetch").fetchUrl;
	fetchUrl(url, function (error, meta, body) {
		try {
			var content = body.toString();
			var contentWithHrefFullySpecified = content.replace('href="/"', 'href="' + url + '/"');
			var contentWithHrefFullySpecifiedAndCSS = contentWithHrefFullySpecified.replace('<body>', '<body style="padding: 0">');
			panel.webview.html = contentWithHrefFullySpecifiedAndCSS;
		} catch (err) {
			console.log(err);
		}
	});
}
