// Using Promises
const postObjects = [
    {title : "Sample Post", body : "Sample Post Sample Text"},
    {title : "Another Post", body : "Another Post Sample Text"}
];

function getPosts() {
    setTimeout(function() {
        let postsOutput = "";
        postObjects.forEach((post, index) => {
        postsOutput += `<li>${post.title}</li>`
        });
        document.body.innerHTML = postsOutput;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            postObjects.push(post);
            const errorCheck = false;
            //const errorCheck = true;
            if(!errorCheck) {
                resolve();
            } else {
                reject("Something Fishy");
            }
        }, 2000);
    });
}

// Single Promise
createPost({title : "Dummy Post", body : "Dummy Post Sample Text"})
.then(getPosts)
.catch(err => console.log(err));

// Multiple Promise
const samplePromise = Promise.resolve("Hello World!!");
const anotherPromise = 10;
const dummyPromise = new Promise((resolve, reject) => 
setTimeout(resolve, 2000, "Ciao!!"));

const againPromise = fetch("https://jsonplaceholder.typicode.com/users").then(res => 
res.json());

Promise.all([samplePromise, anotherPromise, dummyPromise, againPromise])
.then(values => console.log(values));

// Async Await
async function init() {
    createPost({title : "Example Post", body : "Example Post Sample Text"})
    getPosts();
}

init();

// Async Await With Fetch
async function fetchUsers() {
    const fetchPromise = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataStringified = await fetchPromise.json(); 
    console.log(dataStringified);
}

fetchUsers();
    
/*

// Callbacks Examples
const postObjects = [
    {title : "Sample Post", body : "Sample Post Sample Text"},
    {title : "Another Post", body : "Another Post Sample Text"}
];

function getPosts() {
    setTimeout(function() {
        let postsOutput = "";
        postObjects.forEach((post, index) => {
        postsOutput += `<li>${post.title}</li>`
        });
        document.body.innerHTML = postsOutput;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        postObjects.push(post);
        callback(); // This would make this function call back getPosts.
    }, 2000);
}

//getPosts();
// Calling createPost metohd with a callback function attach to it so that all posts get listed.
createPost({title : "Created Post", body : "Created Post Sample Text"}, getPosts);

*/