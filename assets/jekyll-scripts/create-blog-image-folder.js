module.exports = async (params) => {
  const { app } = params;

  const file = app.workspace.getActiveFile();
  if (!file) {
    new Notice("No active file.");
    return;
  }

  const filename = file.basename;
  const folderPath = `assets/images/${filename}`;

  const existing = app.vault.getAbstractFileByPath(folderPath);
  if (existing) {
    new Notice(`Folder already exists: ${folderPath}`);
    return;
  }

  await app.vault.createFolder(folderPath);
  new Notice(`Created folder: ${folderPath}`);
};