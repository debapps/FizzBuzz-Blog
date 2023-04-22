import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Get the directories where blogs are kept.
const blogDir = path.join(process.cwd(), "blogposts");

// Asset URL from environment variable.
const assetURL = process.env.ASSET_URL || "";

// console.log(getPostMetaData());

// This function gets the metadata of the blog posts.
export function getPostMetaData() {
  // Get the blog markdown file names.
  let FileNames = fs.readdirSync(blogDir);

  let blogMetaData = FileNames.map((fileName) => {
    // blogID is the file name without '.md' extension.
    let blogID = fileName.split(".")[0];

    // Get the blog file content from the file path.
    let blogFilePath = path.join(blogDir, fileName);
    let blogContent = fs.readFileSync(blogFilePath, "utf-8");

    // Get the blog meta data.
    let blogMeta = matter(blogContent).data;

    return {
      blogID,
      ...blogMeta,
    };
  });

  // return the sorted blog posts based on published date.
  return blogMetaData.sort((a, b) => {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);

    if (dateA > dateB) {
      return -1;
    } else {
      return 1;
    }
  });
}

// This function gets the paths of the blog post.
export function getBlogPaths() {
  // Get the blog markdown file names.
  let FileNames = fs.readdirSync(blogDir);

  // Get the list of blog path IDs.
  let blogIDs = FileNames.map((fileName) => {
    return fileName.split(".")[0];
  });

  let blogPaths = blogIDs.map((blogID) => {
    return {
      params: {
        blogID,
      },
    };
  });

  return blogPaths;
}

// This function gets the content of the blog file based on input id.
export async function getBlogContent(id) {
  // Get the blog file content from the file path.
  let blogFilePath = path.join(blogDir, `${id}.md`);
  let fileContent = fs.readFileSync(blogFilePath, "utf-8");

  // Get the blog meta data.
  let blogMeta = matter(fileContent).data;

  // Get the blog Content.
  let blogContent = matter(fileContent).content;

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(blogContent);
  let blogHTML = processedContent.toString();

  // Replace all image URLs with the asset URL.
  if (assetURL !== "") {
    blogHTML = blogHTML.replace(/\/images/g, assetURL);
  }

  // Return the content with MetaData.
  return {
    id,
    ...blogMeta,
    blogHTML,
  };
}
