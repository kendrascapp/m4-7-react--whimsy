import React from "react";
import styled from "styled-components";
import "focus-visible";

import avatar from "../../assets/carmen-sandiego.png";

import Tweet from "../Tweet";

const initialState = {
  numOfLikes: 62,
  numOfRetweets: 402,
  isLikedByCurrentUser: false,
  isRetweetedByCurrentUser: false
};

const reducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "Like":
      if (state.isLikedByCurrentUser) {
        newState = {
          ...state,
          numOfLikes: state.numOfLikes - 1,
          isLikedByCurrentUser: false
        };
      } else {
        newState = {
          ...state,
          numOfLikes: state.numOfLikes + 1,
          isLikedByCurrentUser: true
        };
      }
      break;
    case "Retweet":
      if (state.isRetweetedByCurrentUser) {
        newState = {
          ...state,
          numOfRetweets: state.numOfRetweets - 1,
          isRetweetedByCurrentUser: false
        };
      } else {
        newState = {
          ...state,
          numOfRetweets: state.numOfRetweets + 1,
          isRetweetedByCurrentUser: true
        };
      }
      break;
    default:
      console.log("LOL");
  }
  return newState;
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const handleToggleLike = () => {
    dispatch({ type: "Like" });
  };

  const handleToggleRetweet = () => {
    dispatch({ type: "Retweet" });
  };
  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={new Date()}
        handleToggleLike={handleToggleLike}
        handleToggleRetweet={handleToggleRetweet}
        numOfRetweets={state.numOfRetweets}
        numOfLikes={state.numOfLikes}
        isRetweetedByCurrentUser={state.isRetweetedByCurrentUser}
        isLikedByCurrentUser={state.isLikedByCurrentUser}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
