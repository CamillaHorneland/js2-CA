export function myPostTemplate(postData) {
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
    image.style.maxWidth = "100%"; 
    image.style.width = "100%";
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

  const editBtn = document.createElement('a');
  editBtn.className = 'btn btn-warning m-2 mb-5';
  editBtn.innerText = 'Edit';
  //editBtn.href = `/user-post/edit/${postData.id}`;
  editBtn.href = `/user-post/edit/?id=${postData.id}`;
  
  post.appendChild(editBtn);

  const delBtn = document.createElement('a');
  delBtn.className = 'btn btn-danger m-2 mb-5 delete-post';
  delBtn.innerText = 'Delete';
  delBtn.dataset.id = `${postData.id}`;
  
  post.appendChild(delBtn);



  return post;
}

export function renderMyPostTemplates(postDataList, parent) {
  
  if(postDataList.length > 0) {
    parent.append(...postDataList.map(myPostTemplate));
  } else {
    const emptyResult = document.createElement('h2');
    emptyResult.innerText = 'No posts to display';
    parent.append(emptyResult);
  }
}
