import * as vscode from 'vscode';
import { BaseNodeProvider } from './BaseNodeProvider';

export class FuseServersNodeProvider extends BaseNodeProvider {
	
	constructor(private newcontext: vscode.ExtensionContext) {
		super(newcontext);
		super.addNode (
			"string",
			"Red Hat Fuse 7.2 Runtime Server",
			vscode.TreeItemCollapsibleState.None,
			"empty"
		);
	}
}