import React from 'react'

class SelectShows extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: ''
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
              <li onClick={_ => this.props.deselectShow(show)} key={show.url}>{show.title}</li>)
        }
      </ul>
      <input type="text" onChange={this.updateShowSearch} />
      <ul>
        {
          this.props.shows
            .filter(show => {
              if (this.props.selectedShows.includes(show)) return false
              else if (this.state.searchInput === '') return true
              else {
                return ~show.title.toLowerCase().indexOf(this.state.searchInput)
              }
            })
            .map(show =>
              <li onClick={_ => this.props.selectShow(show)} key={show.url}>{show.title}</li>)
        }
      </ul>
    </div>
  }
}

export default SelectShows
