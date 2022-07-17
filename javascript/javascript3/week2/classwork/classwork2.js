fetch('https://yesno.wtf/api')
.then(response => (response.json()))
.then(data => {
  console.log((data).answer);
})

setTimeout(function(){
  console.log("hi");
}, 5000);

// method 2

const logHi = function(){console.log("hi")};

setTimeout(logHi, 5000);

// method 1
function waitForThreeSeconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

waitForThreeSeconds().then(() => {
  console.log('Finished!');
});

// method 2
const wait = new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

wait.then(() => {
  console.log('3 seconds finished');
});

// ex3
// creating promise
function wait(delay) {
  return new promise(resolve => {
    setTimeout(() => {
      resolve();
    }, delay * 1000);
});
}

// use a promise
wait(1000).then(() => {
  console.log('finished')
});

Create a promise that resolves after 4 seconds.
Use this promise to log out the text 'hello' after 4 seconds.
Now make the promise fail by rejecting it
with an error message instead of resolving it, and log the error message to the console.

function wait(delay) {
  return new Promise((resolve, reject) => {
    if (typeof delay !== "number") {
      reject("Time must be a number");
    }
    setTimeout(() => {
      resolve("Done");
    }, delay * 1000);
  });
}

// use a promise
wait(4)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));




  fetch("http://api.open-notify.org/astros.json")
  .then (res => res.json())
  .then (data => {
    console.log(data.people)
    fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    )
    .then (res => res.json())
    .then (data => {
    console.log(data);
  })
  })




  Fetch posts from this API
https://jsonplaceholder.typicode.com/posts
and fetch the comments of each post from this API
https://jsonplaceholder.typicode.com/comments

fetch("https://jsonplaceholder.typicode.com/posts")
.then (resp => resp.json())
.then (posts =>{
console.log(posts)
fetch ("https://jsonplaceholder.typicode.com/comments")
.then (resp => resp.json())
.then (posts => posts.comments)
})

// method2
async function showBlogPosts() {
  const postRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postRes.json();

  const commentsRes = await fetch(
    'https://jsonplaceholder.typicode.com/comments'
  );
  const comments = await commentsRes.json();

  for (const post of posts) {
    const h1 = document.createElement('h1');
    h1.textContent = post.title;
    const p = document.createElement('p');
    p.textContent = post.body;
    document.body.appendChild(h1);
    document.body.appendChild(p);
    const ul = document.createElement('ul');
    document.body.appendChild(ul);

    const postComments = comments.filter(comment => comment.postId === post.id);
    for (const comment of postComments) {
      const li = document.createElement('li');
      li.textContent = comment.body;
      ul.appendChild(li);
    }
  }
}
showBlogPosts();
