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
            <h1>Fringr: Toronto 2025</h1>
            <h2>How to use this</h2>
            <details className="help">
                <summary>Details</summary>
                <ol>
                    <li>Select the shows you're interested in below.</li>
                    <li>
                        On the right, begin clicking performance times that work for
                        you, and scrolling down the page. You can see visually how
                        much time there is between performances. Make sure to leave
                        yourself enough travel time between venues 🙂
                    </li>
                    <li>
                        Keep going down the page and looking for performances with a{' '}
                        <strong>dashed border</strong>. That means you have not yet
                        selected a performance for that show. Ignore performances
                        that are <strong>crossed out</strong>. That means you have
                        already selected a performance for that show. You can still click
                        a crossed-out performance to switch your performance selection for
                        that show.
                    </li>
                    <li style={{ listStyleType: "'💾'" }}>
                        Your address bar keeps track of your selections. To save
                        them for later, use a bookmark. To share them with a
                        friend, just copy the current address and send. Note: if
                        you change it later, they won't see the change unless you
                        send them a fresh link.
                    </li>
                    <li style={{ listStyleType: "'⚠️'" }}>
                        This tool is unofficial. I am not affiliated with the
                        Fringe Festival, I just love it. The Fringe Festival does
                        not endorse this tool, although I heartily endorse the
                        festival. Information may have become out of date since I
                        gathered it. Please double check all information on the
                        official Fringe Festival website using the provided links,
                        before making plans.
                    </li>
                </ol>
            </details>
            <h2>Show Selection</h2>
            <label>
                Filter by title:
                <br />
                <input type="text" onChange={updateShowSearch} />
            </label>
            <ul className="shows">
                {/* Show selected shows first */}
                {shows
                    .filter((show) => selectedShowIds.includes(show.id))
                    .map((show) => renderShow(show, true))}
                {shows
                    .filter((show) => !selectedShowIds.includes(show.id))
                    .map((show) => renderShow(show, false))}
            </ul>
            <h2>Who am I?</h2>
            <ul className="contact">
                <li style={{ listStyleType: "'📫'" }}>
                    <a href="mailto:linus@rachlis.net">linus@rachlis.net</a>
                </li>
                <li style={{ listStyleType: "'👩‍💻'" }}>
                    <a href="https://github.com/linusrachlis/fringr2-fe/">
                        Github
                    </a>
                </li>
            </ul>
        </div>
    )
}
