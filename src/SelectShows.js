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

  changeShowSelected(show, isSelected) {
    if (isSelected) this.props.selectShow(show)
    else this.props.deselectShow(show)
  }

  renderShow(show, isSelected) {
    if (
      this.state.searchInput !== '' &&
      show.title.toLowerCase().indexOf(this.state.searchInput) === -1
    ) {
      return null
    }

    return <li key={show.id}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={e => this.changeShowSelected(show, e.target.checked)}
      />
      <a href={show.url} target="_blank" rel="noopener noreferrer">{show.title}</a>
    </li>
  }

  render() {
    return <div className="select-shows">
      <h2>Show Selection</h2>
      <label>Filter by title: <input type="text" onChange={this.updateShowSearch} /></label>
      <ul>
        {this.props.selectedShows.map(show => this.renderShow(show, true))}
        {shows
          .filter(show => !this.props.selectedShows.includes(show))
          .map(show => this.renderShow(show, false))}
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
