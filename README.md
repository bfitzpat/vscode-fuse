# vscode-fuse

Work in progress investigation into use of a Fuse specific "view" in VS Code.

## Current status

* Created simple "Fuse Dummy View" that provides three nodes in a view in the VS Code Side Bar.
* Created simple "Fuse Explorer" with F inside circle icon in the Activity Bar that contains the Fuse Dummy View.
* Set up the Fuse Documentation node to show a web view of the [Red Hat Fuse Getting Started Guide for Fuse 7.2](https://access.redhat.com/documentation/en-us/red_hat_fuse/7.2/html-single/getting_started/index)
* Set up the FuseVS Code Extensions node to show a web view of the [Extension Pack for Apache Camel page in the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=camel-tooling.apache-camel-extension-pack)
* Hid the Fuse Quickstarts node for now

Note: No parent/child relationship exists in these items at present, but we could certainly add that.

## Next steps

* Possible - Provide an action to possibly install the Camel Extension Pack and/or test to see if it's already installed and update the label accordingly?
* Question - What can we do with Fuse Quickstarts? Don't want to step on the [Project Initializer by Red Hat extension](https://marketplace.visualstudio.com/items?itemName=redhat.project-initializer) since we are working to improve that for use with Fuse/Camel examples

## Current screen shots

### Fuller Fuse Dashboard idea with Docs page open

![Dummy View with icon in Activity Bar](media/Fuse-dashboard-mockup-22-APR-2019.gif)

### Dummy View with Docs page open

![Dummy View with icon in Activity Bar](media/dummy-view-docs-page-getting-started.gif)

### Dummy View with Extensions page open

![Dummy View with icon in Activity Bar](media/dummy-view-exts-page.gif)

### Dummy View in Activity Bar

![Dummy View with icon in Activity Bar](media/dummy-view-with-activity-bar-icon.gif)

### Dummy View included in main Side Bar

![Dummy View](media/dummy-view.gif)

## Resources

* Tree View example from Microsoft - relies on unreleased APIs at present [Code here](https://github.com/Microsoft/vscode-extension-samples/tree/master/tree-view-sample/src)
* Possible example that relies on an older model [References view](https://github.com/Microsoft/vscode-references-view/blob/master/src/provider.ts)
* Great article walks through using the tree model [here](https://medium.com/@sanaajani/creating-your-first-vs-code-extension-8dbdef2d6ad9)

## Icon

* F inside a circle icon [link](https://www.flaticon.com/free-icon/f-inside-a-circle_12605#term=letter%20f&page=1&position=6)
