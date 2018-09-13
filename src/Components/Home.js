import React, { Component } from "react";
import { Link } from "react-router-dom";
import Poke from "../Poke.jpeg";
import { connect } from "react-redux";
//convert from functional to class-based component
class Home extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.posts);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Poke} alt="Not a pokemon" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title yellow-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet.</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts //map this to props
  };
};

export default connect(mapStateToProps)(Home);
