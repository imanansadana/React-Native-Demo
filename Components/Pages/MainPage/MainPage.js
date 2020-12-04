import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, FlatList } from "react-native";
import styles from "./MainPageStyles";
import PostCard from "../../PostCard/PostCard";

export default function MainPage(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //Getting the Posts data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/user/1/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .finally(() => setLoading(false));
  }, []);

  //Showing all posts with a static image.
  return (
    <>
      <Text style={styles.heading}>All Posts</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          keyExtractor={(item, index) => "key" + index}
          data={data}
          renderItem={(post) => {
            return (
              <PostCard
                params={props}
                id={post.item.id}
                title={post.item.title}
              />
            );
          }}
        />
      )}
    </>
  );
}
