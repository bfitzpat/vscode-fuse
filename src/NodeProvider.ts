import * as vscode from 'vscode';
import * as path from 'path';

export class NodeProvider implements vscode.TreeDataProvider<TreeNode> {

	constructor(private context: vscode.ExtensionContext) {
	}

	private createNode(nodeType:string, nodeName:string, 
		collapsibleState:vscode.TreeItemCollapsibleState, webUrl:string) {
		return new TreeNode(nodeType, nodeName, collapsibleState, webUrl);
	}

	public async getChildren(task?: TreeNode): Promise<TreeNode[]> {

		let treeNodes: TreeNode[] = [];

		treeNodes.push (this.createNode(
			"string",
			"Fuse Documentation",
			vscode.TreeItemCollapsibleState.None,
			"empty"
		));

		treeNodes.push (this.createNode(
			"string",
			"Fuse VS Code Extensions",
			vscode.TreeItemCollapsibleState.None,
			"empty"
		));

		treeNodes.push (this.createNode(
			"string",
			"Fuse Quickstarts",
			vscode.TreeItemCollapsibleState.None,
			"empty"
		));

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
		webUrl: string
	) {
		super(label, collapsibleState);
		this.type = type;
		this.webUrl = webUrl;
		this.iconPath = {
			light: path.join(__filename, '..', '..', 'resources', 'light', 'folder.svg'),
			dark: path.join(__filename, '..', '..', 'resources', 'dark', 'folder.svg')
		};		
	}
}