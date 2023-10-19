import moment from 'moment'
import { Performance, Show, ShowData } from '../types'

const showsData: ShowData[] = [
    {
        title: 'Black in Canada',
        url: 'https://fringetoronto.com/next-stage/show/black-canada',
        venue: 'Buddies in Bad Times Chamber',
        address: '12 Alexander Street, Toronto, ON, M4Y 1B4',
        id: 1,
        perfsData: [
            {
                id: 1,
                flags: [],
                start: '2023-10-19T19:00:00-04:00',
                end: '2023-10-19T19:40:00-04:00',
            },
            {
                id: 2,
                flags: [],
                start: '2023-10-20T13:30:00-04:00',
                end: '2023-10-20T14:10:00-04:00',
            },
            {
                id: 3,
                flags: ['asl'],
                start: '2023-10-21T16:45:00-04:00',
                end: '2023-10-21T17:25:00-04:00',
            },
            {
                id: 4,
                flags: [],
                start: '2023-10-22T18:30:00-04:00',
                end: '2023-10-22T19:10:00-04:00',
            },
            {
                id: 5,
                flags: ['relaxed'],
                start: '2023-10-23T17:00:00-04:00',
                end: '2023-10-23T17:40:00-04:00',
            },
            {
                id: 6,
                flags: [],
                start: '2023-10-29T14:00:00-04:00',
                end: '2023-10-29T14:40:00-04:00',
            },
        ],
    },
    {
        title: 'Bremen Town',
        url: 'https://fringetoronto.com/next-stage/show/bremen-town',
        venue: 'Buddies in Bad Times Chamber',
        address: '12 Alexander Street, Toronto, ON, M4Y 1B4',
        id: 2,
        perfsData: [
            {
                id: 1,
                flags: [],
                start: '2023-10-19T21:00:00-04:00',
                end: '2023-10-19T22:40:00-04:00',
            },
            {
                id: 2,
                flags: [],
                start: '2023-10-21T14:00:00-04:00',
                end: '2023-10-21T15:40:00-04:00',
            },
            {
                id: 3,
                flags: [],
                start: '2023-10-23T19:00:00-04:00',
                end: '2023-10-23T20:40:00-04:00',
            },
            {
                id: 4,
                flags: [],
                start: '2023-10-26T21:15:00-04:00',
                end: '2023-10-26T22:55:00-04:00',
            },
            {
                id: 5,
                flags: [],
                start: '2023-10-27T19:30:00-04:00',
                end: '2023-10-27T21:10:00-04:00',
            },
            {
                id: 6,
                flags: [],
                start: '2023-10-29T16:00:00-04:00',
                end: '2023-10-29T17:40:00-04:00',
            },
        ],
    },
    {
        title: 'Dead Parents Society: A Dark Sketch Comedy Revue',
        url: 'https://fringetoronto.com/next-stage/show/dead-parents-society-dark-sketch-comedy-revue',
        venue: 'Buddies in Bad Times Chamber',
        address: '12 Alexander Street, Toronto, ON, M4Y 1B4',
        id: 3,
        perfsData: [
            {
                id: 1,
                flags: [],
                start: '2023-10-18T21:45:00-04:00',
                end: '2023-10-18T22:40:00-04:00',
            },
            {
                id: 2,
                flags: [],
                start: '2023-10-20T17:00:00-04:00',
                end: '2023-10-20T17:55:00-04:00',
            },
            {
                id: 3,
                flags: [],
                start: '2023-10-21T20:45:00-04:00',
                end: '2023-10-21T21:40:00-04:00',
            },
            {
                id: 4,
                flags: [],
                start: '2023-10-25T19:15:00-04:00',
                end: '2023-10-25T20:10:00-04:00',
            },
            {
                id: 5,
                flags: ['relaxed'],
                start: '2023-10-28T16:00:00-04:00',
                end: '2023-10-28T16:55:00-04:00',
            },
            {
                id: 6,
                flags: [],
                start: '2023-10-29T21:15:00-04:00',
                end: '2023-10-29T22:10:00-04:00',
            },
        ],
    },
    {
        title: 'ECHO',
        url: 'https://fringetoronto.com/next-stage/show/echo',
        venue: 'Buddies in Bad Times Chamber',
        address: '12 Alexander Street, Toronto, ON, M4Y 1B4',
        id: 4,
        perfsData: [
            {
                id: 1,
                flags: [],
                start: '2023-10-18T19:30:00-04:00',
                end: '2023-10-18T20:45:00-04:00',
            },
            {
                id: 2,
                flags: [],
                start: '2023-10-20T21:30:00-04:00',
                end: '2023-10-20T22:45:00-04:00',
            },
            {
                id: 3,
                flags: [],
                start: '2023-10-22T20:30:00-04:00',
                end: '2023-10-22T21:45:00-04:00',
            },
            {
                id: 4,
                flags: [],
                start: '2023-10-25T17:00:00-04:00',
                end: '2023-10-25T18:15:00-04:00',
            },
            {
                id: 5,
                flags: ['relaxed'],
                start: '2023-10-26T17:00:00-04:00',
                end: '2023-10-26T18:15:00-04:00',
            },
            {
                id: 6,
                flags: [],
                start: '2023-10-28T18:00:00-04:00',
                end: '2023-10-28T19:15:00-04:00',
            },
        ],
    },
    {
        title: 'Guildwood',
        url: 'https://fringetoronto.com/next-stage/show/guildwood',
        venue: 'Buddies in Bad Times Chamber',
        address: '12 Alexander Street, Toronto, ON, M4Y 1B4',
        id: 5,
        perfsData: [
            {
                id: 1,
                flags: [],
                start: '2023-10-18T17:00:00-04:00',
                end: '2023-10-18T18:30:00-04:00',
            },
            {
                id: 2,
                flags: [],
                start: '2023-10-20T19:00:00-04:00',
                end: '2023-10-20T20:30:00-04:00',
            },
            {
                id: 3,
                flags: [],
                start: '2023-10-22T14:00:00-04:00',
                end: '2023-10-22T15:30:00-04:00',
            },
            {
                id: 4,
                flags: [],
                start: '2023-10-25T21:15:00-04:00',
                end: '2023-10-25T22:45:00-04:00',
            },
            {
                id: 5,
                flags: [],
                start: '2023-10-27T17:00:00-04:00',
                end: '2023-10-27T18:30:00-04:00',
            },
            {
                id: 6,
                flags: [],
                start: '2023-10-29T18:45:00-04:00',
                end: '2023-10-29T20:15:00-04:00',
            },
        ],
    },
    {
        title: 'Pool Party',
        url: 'https://fringetoronto.com/next-stage/show/pool-party',
        venue: 'Buddies in Bad Times Cabaret',
        address: '12 Alexander Street, Toronto, ON, M4Y 1B4',
        id: 6,
        perfsData: [
            {
                id: 1,
                flags: [],
                start: '2023-10-22T21:30:00-04:00',
            },
        ],
    },
    {
        title: 'Something in the Water',
        url: 'https://fringetoronto.com/next-stage/show/something-water',
        venue: 'Buddies in Bad Times Chamber',
        address: '12 Alexander Street, Toronto, ON, M4Y 1B4',
        id: 7,
        perfsData: [
            {
                id: 1,
                flags: [],
                start: '2023-10-19T17:00:00-04:00',
                end: '2023-10-19T18:00:00-04:00',
            },
            {
                id: 2,
                flags: [],
                start: '2023-10-21T18:45:00-04:00',
                end: '2023-10-21T19:45:00-04:00',
            },
            {
                id: 3,
                flags: ['relaxed'],
                start: '2023-10-22T16:30:00-04:00',
                end: '2023-10-22T17:30:00-04:00',
            },
            {
                id: 4,
                flags: [],
                start: '2023-10-26T19:15:00-04:00',
                end: '2023-10-26T20:15:00-04:00',
            },
            {
                id: 5,
                flags: [],
                start: '2023-10-27T22:15:00-04:00',
                end: '2023-10-27T23:15:00-04:00',
            },
            {
                id: 6,
                flags: [],
                start: '2023-10-28T14:00:00-04:00',
                end: '2023-10-28T15:00:00-04:00',
            },
        ],
    },
    {
        title: 'The Rocky Horror Picture Show ASL-Interpreted Screening',
        url: 'https://fringetoronto.com/next-stage/show/rocky-horror-picture-show-asl-interpreted-screening',
        venue: 'Buddies in Bad Times Chamber',
        address: '12 Alexander Street, Toronto, ON, M4Y 1B4',
        id: 8,
        perfsData: [
            {
                id: 1,
                flags: ['asl', 'closed-captioning'],
                start: '2023-10-28T20:15:00-04:00',
                end: '2023-10-28T22:15:00-04:00',
            },
        ],
    },
]

const referenceStartOfDay = moment().startOf('day')

// Hydrate shows data
// TODO check memory usage from all the moment objects created here
const shows: Show[] = showsData.map((show) => {
    const perfs: Performance[] = show.perfsData.map((perf) => {
        const start = moment(perf.start)
        const startTime = referenceStartOfDay
            .clone()
            .add(start.diff(start.clone().startOf('day')), 'milliseconds')

        const deemedEnd =
            perf.end === undefined
                ? start.clone().add(2, 'hours')
                : moment(perf.end)
        const deemedEndTime = referenceStartOfDay
            .clone()
            .add(
                deemedEnd.diff(deemedEnd.clone().startOf('day')),
                'milliseconds'
            )

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { start: _1, end: _2, ...partialPerformance } = perf

        return {
            ...partialPerformance,
            showId: show.id,
            start,
            end: perf.end === undefined ? undefined : deemedEnd,
            startTime,
            deemedEndTime,
        }
    })

    // Convert show data to show objects (ShowData type to Show type)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { perfsData: _, ...partialShow } = show
    return {
        ...partialShow,
        perfs,
    }
})

export default shows
