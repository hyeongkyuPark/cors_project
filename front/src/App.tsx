import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AddPostPage from './features/addPost/AddPostPage';
import DetailPostView from './features/detailPostView/DetailPostView';
import Login from './features/login/Login';
import PostList from './features/postList/PostList';
import Join from './features/join/Join';
import GlobalStyle from './styles/GlobalStyles';

function App():JSX.Element {
  return (
    <div className="App">
      <GlobalStyle />
      <div>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={PostList} />
            <Route path="/post/:id" exact component={DetailPostView} />
            <Route path="/addPost/:division" exact component={AddPostPage} />
            <Route path="/join" exact component={Join} />
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
