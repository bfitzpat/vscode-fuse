'use strict';

import * as vscode from 'vscode';
import { NodeProvider } from './NodeProvider';

export async function activate(context: vscode.ExtensionContext) {

	const nodeProvider = new NodeProvider(context);
	vscode.window.registerTreeDataProvider('nodeOutline', nodeProvider);
}
