import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Button,
  Image,
} from "react-native";
import styles from "./PostPageStyles";

export default function PostPage(props) {
  const [Post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [commentLoading, setCommentLoading] = useState(true);
  const activePost = props.navigation.state.params.id;

  //Geting the Posts Data from the API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${activePost}`)
      .then((response) => response.json())
      .then((json) => setPost(json))
      .finally(() => setPostLoading(false));
  }, []);

  //Getting the Comments Data from the API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${activePost}/comments`)
      .then((response) => response.json())
      .then((json) => setComments(json))
      .finally(() => setCommentLoading(false));
  }, []);

  //Deleting a Post
  //Not Working yet
  deletePost = () => {
    console.log("method working");
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
  };

  //The post card along with the comments related to it,
  //not made a separate component for the "comments" because very less code.
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Post card */}
        {postLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <View style={styles.card}>
              <Text style={styles.heading}>{Post.title}</Text>
              <Image
                style={{
                  width: "100%",
                  height: 300,
                }}
                source={require("../../../assets/Traveling-rafiki.png")}
              />
              <Text style={styles.content}>{Post.body}</Text>
            </View>
            <Text style={styles.commenthead}>Comments</Text>
            {/* Comments Section */}
            {commentLoading ? (
              <ActivityIndicator />
            ) : (
              <>
                {comments.map((comment) => (
                  <View key={comment.id} style={styles.comment}>
                    <Text style={styles.name}>{comment.email}</Text>
                    <Text>{comment.body}</Text>
                  </View>
                ))}
              </>
            )}
          </>
        )}
        {/* Delete button not working yet */}
        <Button title="Delete Post" color="red" onPress={deletePost} />
      </ScrollView>
    </SafeAreaView>
  );
}
