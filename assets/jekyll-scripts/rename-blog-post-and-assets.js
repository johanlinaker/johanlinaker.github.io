module.exports = async (params) => {
  const { app } = params;

  const file = app.workspace.getActiveFile();
  if (!file) {
    new Notice("No active file.");
    return;
  }

  if (file.extension !== "md") {
    new Notice("Active file is not a markdown note.");
    return;
  }

  const content = await app.vault.read(file);

  const currentTitleMatch = content.match(/^title:\s*"?(.*?)"?\s*$/m);
  const currentTitle = currentTitleMatch ? currentTitleMatch[1] : file.basename;

  const newTitle = await params.quickAddApi.inputPrompt(
    "New title",
    currentTitle
  );

  if (!newTitle || !newTitle.trim()) {
    new Notice("Rename cancelled.");
    return;
  }

  function slugify(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[åä]/g, "a")
      .replace(/ö/g, "o")
      .replace(/[ÅÄ]/g, "A")
      .replace(/Ö/g, "O")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-+/g, "-");
  }

  const basename = file.basename;
  const dateMatch = basename.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);

  if (!dateMatch) {
    new Notice("Filename does not match YYYY-MM-DD-slug format.");
    return;
  }

  const datePrefix = dateMatch[1];
  const oldSlug = dateMatch[2];
  const newSlug = slugify(newTitle);
  const newBaseName = `${datePrefix}-${newSlug}`;
  const newFilePath = `${file.parent.path}/${newBaseName}.md`;

  const oldImageFolder = `assets/images/${basename}`;
  const newImageFolder = `assets/images/${newBaseName}`;
  const oldTeaser = `/assets/images/${basename}/teaser.jpg`;
  const newTeaser = `/assets/images/${newBaseName}/teaser.jpg`;

  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter.title = newTitle;
    frontmatter.seo_title = newTitle;
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

  if (file.path !== newFilePath) {
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

  new Notice(`Updated title, file, and image folder to: ${newBaseName}`);
};