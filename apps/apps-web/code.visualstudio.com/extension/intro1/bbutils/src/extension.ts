// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const bbGoogleSearchDp = vscode.commands.registerTextEditorCommand(
    'bbutils.bbGoogleSearch',
    bbGoogleSearch
  );
  const bbAdoSearchDp = vscode.commands.registerTextEditorCommand(
    'bbutils.bbAdoSearch',
    bbAdoSearch
  );
  const bbGithubSearchDp = vscode.commands.registerTextEditorCommand(
    'bbutils.bbGithubSearch',
    bbGithubSearch
  );
  const bbSlackSearchDp = vscode.commands.registerTextEditorCommand(
    'bbutils.bbSlackSearch',
    bbSlackSearch
  );

  context.subscriptions.push(bbGoogleSearchDp);
  context.subscriptions.push(bbAdoSearchDp);
  context.subscriptions.push(bbSlackSearchDp);
  context.subscriptions.push(bbGithubSearchDp);
}

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

function getSearchTemplate(configSectionName: string) {
  const googleSearchCfg = vscode.workspace.getConfiguration(configSectionName);
  const queryTemplate: any = googleSearchCfg.get('QueryTemplate');
  return queryTemplate;
}

function makeSearch(queryTemplate: string) {
  const selectedText = getSelectedText();

  if (!selectedText) {
    vscode.window.showInformationMessage('No text selected!');
    return;
  }

  const uri: string = queryTemplate.replace(
    '%SELECTION%',
    encodeURI(selectedText)
  );
  // vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(uri));
  vscode.env.clipboard.writeText(selectedText);
  vscode.env.openExternal(vscode.Uri.parse(uri));
}

function getSelectedText() {
  const documentText = vscode.window.activeTextEditor?.document.getText();
  if (!documentText) {
    return '';
  }

  const activeSelection = vscode.window.activeTextEditor?.selection;
  if (!activeSelection) {
    return '';
  }

  if (activeSelection.isEmpty) {
    return '';
  }

  const selStartoffset = vscode.window.activeTextEditor?.document.offsetAt(
    activeSelection.start
  );

  const selEndOffset = vscode.window.activeTextEditor?.document.offsetAt(
    activeSelection.end
  );

  let selectedText = documentText.slice(selStartoffset, selEndOffset).trim();

  // https://www.w3schools.com/jsref/jsref_regexp_whitespace.asp
  return selectedText.replace(/\s\s+/g, ' ');
}

// this method is called when your extension is deactivated
export function deactivate() {}
