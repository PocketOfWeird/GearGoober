import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectSubreddit))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectSubreddit !== this.props.selectSubreddit) {
      const { dispatch, selectSubreddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectSubreddit))
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectSubreddit } = this.props
    dispatch(invalidateSubreddit(selectSubreddit))
    dispatch(fetchPostsIfNeeded(selectSubreddit))
  }

  render(){
    const { selectSubreddit, posts, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Picker value={selectSubreddit}
                onChange={this.handleChange}
                options={[ 'reactjs', 'frontend', 'weird' ]} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href='#'
                onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>
        {isFetching && posts.length === 0 &&
          <h2>Empty</h2>
        }
        {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        }
      </div>
    )
  }
}

AsyncApp.propTypes = {
  selectSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { selectSubreddit, postsBySubreddit } = state
  const {
    isFetching, lastUpdated, items: posts
  } = postsBySubreddit[selectSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(AsyncApp)
