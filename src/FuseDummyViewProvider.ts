import * as vscode from 'vscode';
import { BaseNodeProvider } from './BaseNodeProvider';

export class FuseDummyNodeProvider extends BaseNodeProvider {
	
	constructor(private newcontext: vscode.ExtensionContext) {
		super(newcontext);
		super.addNode (
			"string",
			"Red Hat Fuse Documentation",
			vscode.TreeItemCollapsibleState.None,
			"https://access.redhat.com/documentation/en-us/red_hat_fuse/7.2/html-single/getting_started/index",
			{ 
				command: 'extension.openDocsUrl', 
				title: "Execute", 
				arguments: ["https://access.redhat.com/documentation/en-us/red_hat_fuse/7.2/html-single/getting_started/index", ]
			}
		);

		super.addNode (
			"string",
			"Fuse VS Code Extensions",
			vscode.TreeItemCollapsibleState.None,
			"https://marketplace.visualstudio.com/items?itemName=camel-tooling.apache-camel-extension-pack",
			{ 
				command: 'extension.openExtensionsUrl', 
				title: "Execute", 
				arguments: ["https://marketplace.visualstudio.com/items?itemName=camel-tooling.apache-camel-extension-pack", ]
			}
		);
	}
}