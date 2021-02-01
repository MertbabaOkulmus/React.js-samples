import React,{useEffect,useState} from "react";
import axios from "axios";

const Posts =()=>{
    const [posts,setPosts]=useState([]);

    useEffect(async ()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/posts")  //await bekle demek, axios.get tamamlana kadar bekler
        const {data}=await axios.get("https://jsonplaceholder.typicode.com/posts") //gelen objectin içinden sadece data yı alıyoruz bu şekilde
        setPosts(data);//postların içini doldurduk setposts ile
        console.log(result.data);
    },[])//ikinci parametreyi boş dizi olarak verirsek sadece bir defaya mahsus çalışır daha da çalışmaz
    return(
        <div>
          <ul>
            {
          posts.map(post => (
            <li key={post.id}>
                {post.title}
            </li>
          ))
            }
          </ul>
        </div>
    )
}

export default Posts;