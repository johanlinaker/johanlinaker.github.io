module.exports = async (params) => {
  const { app } = params;

  const file = app.workspace.getActiveFile();
  if (!file) {
    new Notice("No active file.");
    return;
  }

  if (file.extension !== "md") {
    new Notice("Active file is not a markdown file.");
    return;
  }

  const basename = file.basename;
  const match = basename.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);

  if (!match) {
    new Notice("Filename must follow YYYY-MM-DD-slug format.");
    return;
  }

  const oldDate = match[1];
  const slug = match[2];

  const currentContent = await app.vault.read(file);
  const frontmatterDateMatch = currentContent.match(/^date:\s*(.+)$/m);
  const currentFrontmatterDate = frontmatterDateMatch ? frontmatterDateMatch[1].trim() : `${oldDate}T00:00:00+00:00`;

  const newDate = await params.quickAddApi.inputPrompt(
    "New date (YYYY-MM-DD)",
    oldDate
  );

  if (!newDate || !/^\d{4}-\d{2}-\d{2}$/.test(newDate.trim())) {
    new Notice("Invalid date. Use YYYY-MM-DD.");
    return;
  }

  const trimmedNewDate = newDate.trim();

  let newFrontmatterDate = currentFrontmatterDate;
  if (/^\d{4}-\d{2}-\d{2}T/.test(currentFrontmatterDate)) {
    newFrontmatterDate = currentFrontmatterDate.replace(/^\d{4}-\d{2}-\d{2}/, trimmedNewDate);
  } else {
    newFrontmatterDate = trimmedNewDate;
  }

  const oldBaseName = `${oldDate}-${slug}`;
  const newBaseName = `${trimmedNewDate}-${slug}`;

  const oldFilePath = file.path;
  const newFilePath = `${file.parent.path}/${newBaseName}.md`;

  const oldImageFolder = `assets/images/${oldBaseName}`;
  const newImageFolder = `assets/images/${newBaseName}`;

  const oldTeaser = `/assets/images/${oldBaseName}/teaser.jpg`;
  const newTeaser = `/assets/images/${newBaseName}/teaser.jpg`;

  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter.date = newFrontmatterDate;

    if (frontmatter.header && typeof frontmatter.header === "object") {
      frontmatter.header.teaser = newTeaser;
    }
  });

  let updatedContent = await app.vault.read(file);

  updatedContent = updatedContent.replace(
    new RegExp(oldTeaser.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
    newTeaser
  );

  await app.vault.modify(file, updatedContent);

  if (oldFilePath !== newFilePath) {
    await app.fileManager.renameFile(file, newFilePath);
  }

  const imageFolder = app.vault.getAbstractFileByPath(oldImageFolder);
  if (imageFolder) {
    await app.vault.adapter.rename(oldImageFolder, newImageFolder);
  }

  const renamedFile = app.vault.getAbstractFileByPath(newFilePath);
  if (renamedFile) {
    let finalContent = await app.vault.read(renamedFile);

    finalContent = finalContent.replace(
      new RegExp(oldTeaser.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
      newTeaser
    );

    await app.vault.modify(renamedFile, finalContent);
  }

  new Notice(`Updated date to ${trimmedNewDate}`);
};