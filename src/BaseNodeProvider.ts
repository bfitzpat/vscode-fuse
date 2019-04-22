import * as vscode from 'vscode';
import * as path from 'path';

export class BaseNodeProvider implements vscode.TreeDataProvider<TreeNode> {

	// tree nodes field
	treeNodes : TreeNode[] = [];

	constructor(private context: vscode.ExtensionContext) {
		// this.addNode (
		// 	"string",
		// 	"Fuse Quickstarts",
		// 	vscode.TreeItemCollapsibleState.None,
		// 	"empty"
		// );
	}

	public addNode(nodeType:string, nodeName:string, 
		collapsibleState:vscode.TreeItemCollapsibleState, webUrl:string, command?: vscode.Command) {

		if (command) {
			this.treeNodes.push(new TreeNode(nodeType, nodeName, collapsibleState, webUrl, command));
		} else {
			this.treeNodes.push(new TreeNode(nodeType, nodeName, collapsibleState, webUrl));
		}
	}

	public async getChildren(task?: TreeNode): Promise<TreeNode[]> {

		return this.treeNodes;
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