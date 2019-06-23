import React from 'react'
import { connect } from 'react-redux'

import { selectedShowsSelector } from './selectors'
import { selectShow, deselectShow } from './actions'

import shows from './data'

class UnconnectedSelectShows extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: '',
    }

    this.updateShowSearch = this.updateShowSearch.bind(this)
  }

  updateShowSearch(e) {
    this.setState({ searchInput: e.target.value.toLowerCase() })
  }

  render() {
    return <div className="select-shows">
      <ul className="selected-shows">
        {
          this.props.selectedShows
            .map(show =>
              <li onClick={() => this.props.deselectShow(show)} key={show.id}>{show.title}</li>)
        }
      </ul>
      <label>Filter by title: <input type="text" onChange={this.updateShowSearch} /></label>
      <ul>
        {
          shows
            .filter(show => {
              if (this.props.selectedShows.includes(show)) return false
              else if (this.state.searchInput === '') return true
              else {
                return ~show.title.toLowerCase().indexOf(this.state.searchInput)
              }
            })
            .map(show =>
              <li onClick={() => this.props.selectShow(show)} key={show.id}>{show.title}</li>)
        }
      </ul>
    </div>
  }
}

const mapStateToProps = state => ({
  selectedShows: selectedShowsSelector(state),
})

const mapDispatchToProps = dispatch => ({
  selectShow: show => dispatch(selectShow(show)),
  deselectShow: show => dispatch(deselectShow(show)),
})

const SelectShows = connect(mapStateToProps, mapDispatchToProps)(UnconnectedSelectShows)

export default SelectShows
