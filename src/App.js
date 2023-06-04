import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import DetailPage from "./Components/DetailPage";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./redux/actions/fetchActions";
import { Routes, Route } from "react-router-dom";
import './style.css'

function App() {

  let loading = useSelector(state => state.post.loading)
  let posts = useSelector(state => state.post.posts)
  let error = useSelector(state => state.post.error)

  let completePosts = posts.map((value, index) => ({ ...value, image: `https://picsum.photos/200/200?random=${index}` }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  if (loading) {
    return <div className="loading">{<lottie-player className="animation" src="https://assets2.lottiefiles.com/datafiles/bEYvzB8QfV3EM9a/data.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>}</div>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage data={completePosts} />} />
        <Route path="/item/:id" element={<DetailPage data={completePosts} />} />
      </Routes>
    </div>
  );
}

export default App;
