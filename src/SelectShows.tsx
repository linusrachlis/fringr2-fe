import { ChangeEvent, useState } from 'react'
import shows from './data/shows.ts'
import './styles/SelectShows.css'
import {
    DeselectShowActionGenerator,
    SelectShowActionGenerator,
    SelectedShows,
    Show,
} from './types.ts'

export default function SelectShows({
    selectedShows,
    selectShow,
    deselectShow,
}: {
    selectedShows: SelectedShows
    selectShow: SelectShowActionGenerator
    deselectShow: DeselectShowActionGenerator
}) {
    const [searchInput, updateSearchInput] = useState('')

    function updateShowSearch(e: ChangeEvent<HTMLInputElement>) {
        updateSearchInput(e.target.value.toLowerCase())
    }

    function changeShowSelected(show: Show, isSelected: boolean) {
        if (isSelected) selectShow(show)
        else deselectShow(show)
    }

    function renderShow(show: Show, isSelected: boolean) {
        if (
            searchInput !== '' &&
            show.title.toLowerCase().indexOf(searchInput) === -1
        ) {
            return null
        }

        return (
            <li key={show.id}>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={(e) => {
                        changeShowSelected(show, e.target.checked)
                    }}
                />
                <a href={show.url} target="_blank" rel="noopener noreferrer">
                    {show.title}
                </a>
            </li>
        )
    }

    const selectedShowIds = selectedShows.map((show) => show.id)

    return (
        <div className="select-shows">
            <h2>Show Selection</h2>
            <label>
                Filter by title:{' '}
                <input type="text" onChange={updateShowSearch} />
            </label>
            <ul>
                {/* Show selected shows first */}
                {shows
                    .filter((show) => selectedShowIds.includes(show.id))
                    .map((show) => renderShow(show, true))}
                {shows
                    .filter((show) => !selectedShowIds.includes(show.id))
                    .map((show) => renderShow(show, false))}
            </ul>
        </div>
    )
}
