async function fetchPosts() {
    // Write logic here
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        
        for(let i=0;i<10;i++){
            console.log("Title : ",data[i].title);
            //console.log("Body : ",data[i].body);
        }
    }
    catch(error){
        console.log(error);
    }
}
  
fetchPosts();