import * as vscode from 'vscode';
import * as path from 'path';

export class NodeProvider implements vscode.TreeDataProvider<TreeNode> {

	constructor(private context: vscode.ExtensionContext) {
	}

	private createNode(nodeType:string, nodeName:string, 
		collapsibleState:vscode.TreeItemCollapsibleState, webUrl:string, command?: vscode.Command) {
		if (command) {
			return new TreeNode(nodeType, nodeName, collapsibleState, webUrl, command);
		}
		return new TreeNode(nodeType, nodeName, collapsibleState, webUrl);
	}

	public async getChildren(task?: TreeNode): Promise<TreeNode[]> {

		let treeNodes: TreeNode[] = [];

		treeNodes.push (this.createNode(
			"string",
			"Fuse Documentation",
			vscode.TreeItemCollapsibleState.None,
			"https://access.redhat.com/documentation/en-us/red_hat_fuse/7.2/html-single/getting_started/index",
			{ 
				command: 'extension.openDocsUrl', 
				title: "Execute", 
				arguments: ["https://access.redhat.com/documentation/en-us/red_hat_fuse/7.2/html-single/getting_started/index", ]
			}
		));

		treeNodes.push (this.createNode(
			"string",
			"Fuse VS Code Extensions",
			vscode.TreeItemCollapsibleState.None,
			"https://marketplace.visualstudio.com/items?itemName=camel-tooling.apache-camel-extension-pack",
			{ 
				command: 'extension.openExtensionsUrl', 
				title: "Execute", 
				arguments: ["https://marketplace.visualstudio.com/items?itemName=camel-tooling.apache-camel-extension-pack", ]
			}
		));

		// treeNodes.push (this.createNode(
		// 	"string",
		// 	"Fuse Quickstarts",
		// 	vscode.TreeItemCollapsibleState.None,
		// 	"empty"
		// ));

		return treeNodes;
	}

	getTreeItem(task: TreeNode): vscode.TreeItem {
		return task;
	}
}

class TreeNode extends vscode.TreeItem {
	type: string;
	webUrl: string;

	constructor(
		type: string,
		label: string,
		collapsibleState: vscode.TreeItemCollapsibleState,
		webUrl: string,
		command?: vscode.Command
	) {
		super(label, collapsibleState);
		this.type = type;
		this.webUrl = webUrl;
		this.iconPath = {
			light: path.join(__filename, '..', '..', 'resources', 'light', 'folder.svg'),
			dark: path.join(__filename, '..', '..', 'resources', 'dark', 'folder.svg')
		};
		this.command = command;
	}
}