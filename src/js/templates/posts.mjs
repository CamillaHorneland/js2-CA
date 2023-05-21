export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post");

  const title = document.createElement("h2");
  title.innerText = postData.title;
  post.appendChild(title);

  const body = document.createElement("p");
  body.innerText = postData.body;
  post.appendChild(body);

  if (postData.media) {
    const image = document.createElement("img");
    image.src = postData.media;
    image.alt = `Image from ${postData.title}`;
    post.appendChild(image);
  }

  const tags = document.createElement("ul");
  for (const tag of postData.tags) {
    const tagItem = document.createElement("li");
    tagItem.innerText = tag;
    tags.appendChild(tagItem);
  }
  post.appendChild(tags);

  const created = document.createElement("p");
  created.innerText = `Created: ${postData.created}`;
  post.appendChild(created);

  const updated = document.createElement("p");
  updated.innerText = `Updated: ${postData.updated}`;
  post.appendChild(updated);

  const comments = document.createElement("p");
  comments.innerText = `Comments: ${postData._count.comments}`;
  post.appendChild(comments);

  const reactions = document.createElement("p");
  reactions.innerText = `Reactions: ${postData._count.reactions}`;
  post.appendChild(reactions);

  return post;
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
}
