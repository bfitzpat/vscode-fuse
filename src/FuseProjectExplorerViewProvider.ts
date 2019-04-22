import * as vscode from 'vscode';
import { BaseNodeProvider } from './BaseNodeProvider';

export class FuseProjectExplorerNodeProvider extends BaseNodeProvider {
	
	constructor(private newcontext: vscode.ExtensionContext) {
		super(newcontext);
		super.addNode (
			"string",
			"camel-context.xml",
			vscode.TreeItemCollapsibleState.None,
			"empty"
		);
		super.addNode (
			"string",
			"cbr.xml",
			vscode.TreeItemCollapsibleState.None,
			"empty"
		);
		super.addNode (
			"string",
			"EndpointRoute.java",
			vscode.TreeItemCollapsibleState.None,
			"empty"
		);
	}
}