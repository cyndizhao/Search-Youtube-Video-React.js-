import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyD1RxB59fP46uTK33a4stVuX05m4gh7bwk';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    // YTSearch({key: API_KEY, term:'jolin'}, (videos) => {
    //   this.setState({
    //     videos: videos,
    //     selectedVideo: videos[0]
    //   });
    // });
    this.videoSearch('Vancouver night');

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term:term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    //two argument for debounce: function and time
    return (
      <div>
         {/* <SearchBar onSearchItemChange={(term) => this.videoSearch(term)} /> */}
         <SearchBar onSearchItemChange={videoSearch} />
         <VideoDetail video={this.state.selectedVideo}/>
         <VideoList onVideoSelect={(selectedVideo)=> this.setState({selectedVideo: selectedVideo})} videos={this.state.videos} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
