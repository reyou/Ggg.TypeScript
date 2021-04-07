"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    const bbGoogleSearchDp = vscode.commands.registerTextEditorCommand('bbutils.bbGoogleSearch', bbGoogleSearch);
    const bbAdoSearchDp = vscode.commands.registerTextEditorCommand('bbutils.bbAdoSearch', bbAdoSearch);
    const bbGithubSearchDp = vscode.commands.registerTextEditorCommand('bbutils.bbGithubSearch', bbGithubSearch);
    const bbSlackSearchDp = vscode.commands.registerTextEditorCommand('bbutils.bbSlackSearch', bbSlackSearch);
    context.subscriptions.push(bbGoogleSearchDp);
    context.subscriptions.push(bbAdoSearchDp);
    context.subscriptions.push(bbSlackSearchDp);
    context.subscriptions.push(bbGithubSearchDp);
}
exports.activate = activate;
// Title: Sub menus for Editor Context Menu · Issue #9827 · microsoft/vscode
// Url:	https://github.com/microsoft/vscode/issues/9827
function bbGoogleSearch() {
    makeSearch(getSearchTemplate('bbGoogleSearch'));
}
function bbAdoSearch() {
    makeSearch(getSearchTemplate('bbAdoSearch'));
}
function bbGithubSearch() {
    makeSearch(getSearchTemplate('bbGithubSearch'));
}
// https://api.slack.com/reference/deep-linking
function bbSlackSearch() {
    makeSearch(getSearchTemplate('bbSlackSearch'));
}
function getSearchTemplate(configSectionName) {
    const googleSearchCfg = vscode.workspace.getConfiguration(configSectionName);
    const queryTemplate = googleSearchCfg.get('QueryTemplate');
    return queryTemplate;
}
function makeSearch(queryTemplate) {
    const selectedText = getSelectedText();
    if (!selectedText) {
        vscode.window.showInformationMessage('No text selected!');
        return;
    }
    const uri = queryTemplate.replace('%SELECTION%', encodeURI(selectedText));
    // vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(uri));
    vscode.env.clipboard.writeText(selectedText);
    vscode.env.openExternal(vscode.Uri.parse(uri));
}
function getSelectedText() {
    var _a, _b, _c, _d;
    const documentText = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.getText();
    if (!documentText) {
        return '';
    }
    const activeSelection = (_b = vscode.window.activeTextEditor) === null || _b === void 0 ? void 0 : _b.selection;
    if (!activeSelection) {
        return '';
    }
    if (activeSelection.isEmpty) {
        return '';
    }
    const selStartoffset = (_c = vscode.window.activeTextEditor) === null || _c === void 0 ? void 0 : _c.document.offsetAt(activeSelection.start);
    const selEndOffset = (_d = vscode.window.activeTextEditor) === null || _d === void 0 ? void 0 : _d.document.offsetAt(activeSelection.end);
    let selectedText = documentText.slice(selStartoffset, selEndOffset).trim();
    // https://www.w3schools.com/jsref/jsref_regexp_whitespace.asp
    return selectedText.replace(/\s\s+/g, ' ');
}
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map