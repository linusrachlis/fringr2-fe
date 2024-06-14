import moment from 'moment'
import { Performance, Show, ShowData } from '../types'

const showsData: ShowData[] = [
    {
        "title": "1 Santosh Santosh 2 Go: Tosh Finds His Groove",
        "url": "https://fringetoronto.com/fringe/show/1-santosh-santosh-2-go-tosh-finds-his-groove",
        "venue": "Theatre Passe Muraille Backspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 1,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-05T14:15:00-04:00",
                "end": "2024-07-05T15:10:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T20:00:00-04:00",
                "end": "2024-07-06T20:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T21:45:00-04:00",
                "end": "2024-07-07T22:40:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T19:45:00-04:00",
                "end": "2024-07-08T20:40:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T14:15:00-04:00",
                "end": "2024-07-10T15:10:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T16:15:00-04:00",
                "end": "2024-07-11T17:10:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T12:15:00-04:00",
                "end": "2024-07-12T13:10:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-14T18:15:00-04:00",
                "end": "2024-07-14T19:10:00-04:00"
            }
        ]
    },
    {
        "title": "86 Me: The Restaurant Play",
        "url": "https://fringetoronto.com/fringe/show/86-me-restaurant-play",
        "venue": "Supermarket: Bar and Variety",
        "address": "268 Augusta Ave,, Toronto, Ontario, M5T 2L9",
        "id": 2,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T19:00:00-04:00",
                "end": "2024-07-03T20:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-04T17:00:00-04:00",
                "end": "2024-07-04T18:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-05T15:30:00-04:00",
                "end": "2024-07-05T17:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-06T15:30:00-04:00",
                "end": "2024-07-06T17:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-07T19:00:00-04:00",
                "end": "2024-07-07T20:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-09T18:00:00-04:00",
                "end": "2024-07-09T19:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-10T19:00:00-04:00",
                "end": "2024-07-10T20:30:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-11T17:00:00-04:00",
                "end": "2024-07-11T18:30:00-04:00"
            },
            {
                "id": 9,
                "flags": [],
                "start": "2024-07-12T15:30:00-04:00",
                "end": "2024-07-12T17:00:00-04:00"
            },
            {
                "id": 10,
                "flags": [],
                "start": "2024-07-13T15:30:00-04:00",
                "end": "2024-07-13T17:00:00-04:00"
            },
            {
                "id": 11,
                "flags": [],
                "start": "2024-07-14T19:00:00-04:00",
                "end": "2024-07-14T20:30:00-04:00"
            }
        ]
    },
    {
        "title": "Aala Tamasha Aala",
        "url": "https://fringetoronto.com/fringe/show/aala-tamasha-aala",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 3,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T14:30:00-04:00",
                "end": "2024-07-04T15:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T19:00:00-04:00",
                "end": "2024-07-05T20:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T12:15:00-04:00",
                "end": "2024-07-06T13:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-07T21:15:00-04:00",
                "end": "2024-07-07T22:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-09T19:00:00-04:00",
                "end": "2024-07-09T20:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T21:15:00-04:00",
                "end": "2024-07-11T22:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T17:00:00-04:00",
                "end": "2024-07-13T18:00:00-04:00"
            }
        ]
    },
    {
        "title": "AbracadabraHaHa",
        "url": "https://fringetoronto.com/fringe/show/abracadabrahaha",
        "venue": "Tarragon Theatre Mainspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 4,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T20:00:00-04:00",
                "end": "2024-07-04T20:50:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T21:45:00-04:00",
                "end": "2024-07-06T22:35:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T18:00:00-04:00",
                "end": "2024-07-07T18:50:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-10T19:30:00-04:00",
                "end": "2024-07-10T20:20:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-11T14:00:00-04:00",
                "end": "2024-07-11T14:50:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T13:45:00-04:00",
                "end": "2024-07-12T14:35:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T17:45:00-04:00",
                "end": "2024-07-14T18:35:00-04:00"
            }
        ]
    },
    {
        "title": "All of our Parents are Immigrants",
        "url": "https://fringetoronto.com/fringe/show/all-our-parents-are-immigrants",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 5,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T19:00:00-04:00",
                "end": "2024-07-03T20:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T14:00:00-04:00",
                "end": "2024-07-06T15:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-07T16:00:00-04:00",
                "end": "2024-07-07T17:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T20:45:00-04:00",
                "end": "2024-07-08T22:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T21:30:00-04:00",
                "end": "2024-07-11T22:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T18:00:00-04:00",
                "end": "2024-07-12T19:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T12:00:00-04:00",
                "end": "2024-07-14T13:15:00-04:00"
            }
        ]
    },
    {
        "title": "The Apartment",
        "url": "https://fringetoronto.com/fringe/show/apartment",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 6,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T19:00:00-04:00",
                "end": "2024-07-03T20:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T21:45:00-04:00",
                "end": "2024-07-05T22:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T14:00:00-04:00",
                "end": "2024-07-07T15:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T19:00:00-04:00",
                "end": "2024-07-08T20:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-09T12:00:00-04:00",
                "end": "2024-07-09T13:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T18:00:00-04:00",
                "end": "2024-07-11T19:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T14:30:00-04:00",
                "end": "2024-07-12T15:30:00-04:00"
            }
        ]
    },
    {
        "title": "Are you lovin' it?",
        "url": "https://fringetoronto.com/fringe/show/are-you-lovin-it",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 7,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T19:45:00-04:00",
                "end": "2024-07-04T20:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T15:45:00-04:00",
                "end": "2024-07-06T16:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-08T13:30:00-04:00",
                "end": "2024-07-08T14:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T19:45:00-04:00",
                "end": "2024-07-09T20:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T21:45:00-04:00",
                "end": "2024-07-10T22:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T16:15:00-04:00",
                "end": "2024-07-12T17:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T14:00:00-04:00",
                "end": "2024-07-13T15:00:00-04:00"
            }
        ]
    },
    {
        "title": "Artificially Intelligent",
        "url": "https://fringetoronto.com/fringe/show/artificially-intelligent",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 8,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T21:30:00-04:00",
                "end": "2024-07-04T22:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T19:15:00-04:00",
                "end": "2024-07-06T20:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T21:45:00-04:00",
                "end": "2024-07-07T22:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T17:15:00-04:00",
                "end": "2024-07-08T18:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T16:15:00-04:00",
                "end": "2024-07-11T17:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T12:30:00-04:00",
                "end": "2024-07-12T13:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T15:45:00-04:00",
                "end": "2024-07-13T16:45:00-04:00"
            }
        ]
    },
    {
        "title": "Barry Potter and the Magic of Wizardry",
        "url": "https://fringetoronto.com/fringe/show/barry-potter-and-magic-wizardry",
        "venue": "Al Green Theatre",
        "address": "750 Spadina Ave, Toronto, Ontario, M5S 2J2",
        "id": 9,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-03T19:00:00-04:00",
                "end": "2024-07-03T20:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T18:00:00-04:00",
                "end": "2024-07-05T19:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T14:00:00-04:00",
                "end": "2024-07-07T15:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T20:00:00-04:00",
                "end": "2024-07-08T21:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T17:45:00-04:00",
                "end": "2024-07-11T18:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T14:00:00-04:00",
                "end": "2024-07-12T15:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T12:15:00-04:00",
                "end": "2024-07-13T13:15:00-04:00"
            }
        ]
    },
    {
        "title": "Before We Go",
        "url": "https://fringetoronto.com/fringe/show/we-go",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 10,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T15:45:00-04:00",
                "end": "2024-07-04T16:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T18:00:00-04:00",
                "end": "2024-07-06T19:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T21:45:00-04:00",
                "end": "2024-07-07T22:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T16:00:00-04:00",
                "end": "2024-07-09T17:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T17:15:00-04:00",
                "end": "2024-07-10T18:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-11T12:00:00-04:00",
                "end": "2024-07-11T13:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T20:00:00-04:00",
                "end": "2024-07-12T21:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-14T13:45:00-04:00",
                "end": "2024-07-14T14:45:00-04:00"
            }
        ]
    },
    {
        "title": "Being Celine",
        "url": "https://fringetoronto.com/fringe/show/being-celine",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 11,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T17:15:00-04:00",
                "end": "2024-07-03T18:08:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T16:15:00-04:00",
                "end": "2024-07-06T17:08:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T22:15:00-04:00",
                "end": "2024-07-07T23:08:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-10T15:30:00-04:00",
                "end": "2024-07-10T16:23:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T16:00:00-04:00",
                "end": "2024-07-11T16:53:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T20:15:00-04:00",
                "end": "2024-07-12T21:08:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T13:45:00-04:00",
                "end": "2024-07-13T14:38:00-04:00"
            }
        ]
    },
    {
        "title": "the bluffs",
        "url": "https://fringetoronto.com/fringe/show/bluffs",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 12,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T16:00:00-04:00",
                "end": "2024-07-04T17:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T21:30:00-04:00",
                "end": "2024-07-05T22:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T20:00:00-04:00",
                "end": "2024-07-07T21:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-10T17:30:00-04:00",
                "end": "2024-07-10T18:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-12T12:00:00-04:00",
                "end": "2024-07-12T13:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T17:30:00-04:00",
                "end": "2024-07-13T18:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T14:00:00-04:00",
                "end": "2024-07-14T15:15:00-04:00"
            }
        ]
    },
    {
        "title": "Bobert's For Profit Money Show",
        "url": "https://fringetoronto.com/fringe/show/boberts-profit-money-show",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 13,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-03T22:00:00-04:00",
                "end": "2024-07-03T23:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T16:45:00-04:00",
                "end": "2024-07-05T17:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T19:00:00-04:00",
                "end": "2024-07-07T20:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-10T14:30:00-04:00",
                "end": "2024-07-10T15:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T14:30:00-04:00",
                "end": "2024-07-11T15:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T21:15:00-04:00",
                "end": "2024-07-12T22:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T19:15:00-04:00",
                "end": "2024-07-13T20:15:00-04:00"
            }
        ]
    },
    {
        "title": "bol, brown boy, bol (speak, brown boy, speak)",
        "url": "https://fringetoronto.com/fringe/show/bol-brown-boy-bol-speak-brown-boy-speak",
        "venue": "Blackhurst Cultural Centre",
        "address": "777 Bathurst Street, Toronto, M5S 1Z5",
        "id": 14,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T18:30:00-04:00",
                "end": "2024-07-04T19:50:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T18:30:00-04:00",
                "end": "2024-07-05T19:50:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T14:00:00-04:00",
                "end": "2024-07-06T15:20:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-06T17:00:00-04:00",
                "end": "2024-07-06T18:20:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T18:30:00-04:00",
                "end": "2024-07-11T19:50:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T18:30:00-04:00",
                "end": "2024-07-12T19:50:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T14:00:00-04:00",
                "end": "2024-07-13T15:20:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-13T17:00:00-04:00",
                "end": "2024-07-13T18:20:00-04:00"
            }
        ]
    },
    {
        "title": "Boy Boy and The Magic Drum",
        "url": "https://fringetoronto.com/fringe/show/boy-boy-and-magic-drum",
        "venue": "Tarragon Theatre Mainspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 15,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-03T17:00:00-04:00",
                "end": "2024-07-03T18:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T19:30:00-04:00",
                "end": "2024-07-06T20:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T21:45:00-04:00",
                "end": "2024-07-07T23:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T19:15:00-04:00",
                "end": "2024-07-09T20:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-10T13:30:00-04:00",
                "end": "2024-07-10T14:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T17:45:00-04:00",
                "end": "2024-07-11T19:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T14:15:00-04:00",
                "end": "2024-07-13T15:30:00-04:00"
            }
        ]
    },
    {
        "title": "Bus Stop",
        "url": "https://fringetoronto.com/fringe/show/bus-stop",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 16,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-05T15:45:00-04:00",
                "end": "2024-07-05T16:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T21:45:00-04:00",
                "end": "2024-07-06T22:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-08T19:00:00-04:00",
                "end": "2024-07-08T20:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-09T15:30:00-04:00",
                "end": "2024-07-09T16:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T19:45:00-04:00",
                "end": "2024-07-11T20:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T22:00:00-04:00",
                "end": "2024-07-12T23:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T18:15:00-04:00",
                "end": "2024-07-14T19:15:00-04:00"
            }
        ]
    },
    {
        "title": "Cabaret of Murder",
        "url": "https://fringetoronto.com/fringe/show/cabaret-murder",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 17,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-05T19:45:00-04:00",
                "end": "2024-07-05T20:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T18:15:00-04:00",
                "end": "2024-07-06T19:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T12:30:00-04:00",
                "end": "2024-07-07T13:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T17:30:00-04:00",
                "end": "2024-07-08T18:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-09T19:45:00-04:00",
                "end": "2024-07-09T20:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T22:00:00-04:00",
                "end": "2024-07-11T23:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T21:30:00-04:00",
                "end": "2024-07-13T22:30:00-04:00"
            }
        ]
    },
    {
        "title": "CANCELLED!",
        "url": "https://fringetoronto.com/fringe/show/cancelled",
        "venue": "Al Green Theatre",
        "address": "750 Spadina Ave, Toronto, Ontario, M5S 2J2",
        "id": 18,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T16:30:00-04:00",
                "end": "2024-07-04T17:20:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T12:15:00-04:00",
                "end": "2024-07-06T13:05:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T19:30:00-04:00",
                "end": "2024-07-07T20:20:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T21:45:00-04:00",
                "end": "2024-07-09T22:35:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T19:30:00-04:00",
                "end": "2024-07-11T20:20:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T16:00:00-04:00",
                "end": "2024-07-13T16:50:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T12:30:00-04:00",
                "end": "2024-07-14T13:20:00-04:00"
            }
        ]
    },
    {
        "title": "Chloe and Meraki",
        "url": "https://fringetoronto.com/fringe/show/chloe-and-meraki",
        "venue": "St. Volodymyr Institute",
        "address": "620 Spadina Ave, Toronto, Ontario, M5S 2H4",
        "id": 19,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T13:00:00-04:00",
                "end": "2024-07-03T13:40:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T16:00:00-04:00",
                "end": "2024-07-05T16:40:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T14:45:00-04:00",
                "end": "2024-07-06T15:25:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-07T16:30:00-04:00",
                "end": "2024-07-07T17:10:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T14:15:00-04:00",
                "end": "2024-07-10T14:55:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T11:00:00-04:00",
                "end": "2024-07-11T11:40:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T16:30:00-04:00",
                "end": "2024-07-13T17:10:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-14T11:30:00-04:00",
                "end": "2024-07-14T12:10:00-04:00"
            }
        ]
    },
    {
        "title": "Colonial Circus",
        "url": "https://fringetoronto.com/fringe/show/colonial-circus",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 20,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-05T14:00:00-04:00",
                "end": "2024-07-05T14:55:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T20:00:00-04:00",
                "end": "2024-07-06T20:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-08T17:00:00-04:00",
                "end": "2024-07-08T17:55:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T21:15:00-04:00",
                "end": "2024-07-09T22:10:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T17:45:00-04:00",
                "end": "2024-07-11T18:40:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T12:00:00-04:00",
                "end": "2024-07-13T12:55:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T16:30:00-04:00",
                "end": "2024-07-14T17:25:00-04:00"
            }
        ]
    },
    {
        "title": "Crime After Crime (After Crime)",
        "url": "https://fringetoronto.com/fringe/show/crime-after-crime-after-crime",
        "venue": "Tarragon Theatre Mainspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 21,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T19:30:00-04:00",
                "end": "2024-07-03T20:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T21:45:00-04:00",
                "end": "2024-07-05T22:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T14:15:00-04:00",
                "end": "2024-07-06T15:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T16:00:00-04:00",
                "end": "2024-07-08T17:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T19:45:00-04:00",
                "end": "2024-07-11T20:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T21:30:00-04:00",
                "end": "2024-07-12T22:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T16:00:00-04:00",
                "end": "2024-07-14T17:00:00-04:00"
            }
        ]
    },
    {
        "title": "CROSSTOWN",
        "url": "https://fringetoronto.com/fringe/show/crosstown",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 22,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-05T13:45:00-04:00",
                "end": "2024-07-05T15:10:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-07T17:30:00-04:00",
                "end": "2024-07-07T18:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-08T21:00:00-04:00",
                "end": "2024-07-08T22:25:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T15:45:00-04:00",
                "end": "2024-07-09T17:10:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T12:00:00-04:00",
                "end": "2024-07-10T13:25:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T19:15:00-04:00",
                "end": "2024-07-13T20:40:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T14:00:00-04:00",
                "end": "2024-07-14T15:25:00-04:00"
            }
        ]
    },
    {
        "title": "Daniel in Love (For One Night Only)!",
        "url": "https://fringetoronto.com/fringe/show/daniel-love-one-night-only",
        "venue": "Theatre Passe Muraille Backspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 23,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T20:00:00-04:00",
                "end": "2024-07-03T20:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T18:00:00-04:00",
                "end": "2024-07-05T18:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T16:15:00-04:00",
                "end": "2024-07-06T17:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T14:00:00-04:00",
                "end": "2024-07-08T14:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-09T15:45:00-04:00",
                "end": "2024-07-09T16:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-10T21:45:00-04:00",
                "end": "2024-07-10T22:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T16:30:00-04:00",
                "end": "2024-07-12T17:15:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-14T12:15:00-04:00",
                "end": "2024-07-14T13:00:00-04:00"
            }
        ]
    },
    {
        "title": "Dead Right",
        "url": "https://fringetoronto.com/fringe/show/dead-right",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 24,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T19:45:00-04:00",
                "end": "2024-07-04T21:10:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T21:45:00-04:00",
                "end": "2024-07-06T23:10:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T16:00:00-04:00",
                "end": "2024-07-07T17:25:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T19:15:00-04:00",
                "end": "2024-07-08T20:40:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-12T21:30:00-04:00",
                "end": "2024-07-12T22:55:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T17:00:00-04:00",
                "end": "2024-07-13T18:25:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T12:30:00-04:00",
                "end": "2024-07-14T13:55:00-04:00"
            }
        ]
    },
    {
        "title": "Death of a Starman",
        "url": "https://fringetoronto.com/fringe/show/death-starman",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 25,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T17:45:00-04:00",
                "end": "2024-07-04T18:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T14:00:00-04:00",
                "end": "2024-07-06T15:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T15:45:00-04:00",
                "end": "2024-07-07T16:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-10T19:45:00-04:00",
                "end": "2024-07-10T20:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T12:30:00-04:00",
                "end": "2024-07-11T13:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T21:45:00-04:00",
                "end": "2024-07-12T22:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T16:15:00-04:00",
                "end": "2024-07-14T17:15:00-04:00"
            }
        ]
    },
    {
        "title": "The Delightful Chaos of Mistila and the Motlies",
        "url": "https://fringetoronto.com/fringe/show/delightful-chaos-mistila-and-motlies",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 26,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T20:15:00-04:00",
                "end": "2024-07-04T21:10:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T12:15:00-04:00",
                "end": "2024-07-06T13:10:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T18:00:00-04:00",
                "end": "2024-07-07T18:55:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T15:15:00-04:00",
                "end": "2024-07-08T16:10:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T20:00:00-04:00",
                "end": "2024-07-10T20:55:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T14:15:00-04:00",
                "end": "2024-07-12T15:10:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T21:45:00-04:00",
                "end": "2024-07-13T22:40:00-04:00"
            }
        ]
    },
    {
        "title": "Desperate Measures",
        "url": "https://fringetoronto.com/fringe/show/desperate-measures",
        "venue": "Theatre Passe Muraille Backspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 27,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T19:30:00-04:00",
                "end": "2024-07-04T20:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T12:00:00-04:00",
                "end": "2024-07-06T13:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T15:45:00-04:00",
                "end": "2024-07-07T17:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T21:30:00-04:00",
                "end": "2024-07-08T22:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-09T19:30:00-04:00",
                "end": "2024-07-09T20:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed",
                    "closed-captioning"
                ],
                "start": "2024-07-12T14:00:00-04:00",
                "end": "2024-07-12T15:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T14:00:00-04:00",
                "end": "2024-07-13T15:15:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-14T16:00:00-04:00",
                "end": "2024-07-14T17:15:00-04:00"
            }
        ]
    },
    {
        "title": "Disarming Venus",
        "url": "https://fringetoronto.com/fringe/show/disarming-venus",
        "venue": "The Performing Arts Lodges Toronto",
        "address": "110 The Esplanade, Toronto, Ontario, M5E1X9",
        "id": 28,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T19:00:00-04:00",
                "end": "2024-07-04T20:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T19:00:00-04:00",
                "end": "2024-07-05T20:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T14:00:00-04:00",
                "end": "2024-07-07T15:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-10T19:00:00-04:00",
                "end": "2024-07-10T20:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-12T19:00:00-04:00",
                "end": "2024-07-12T20:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T19:00:00-04:00",
                "end": "2024-07-13T20:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T14:00:00-04:00",
                "end": "2024-07-14T15:15:00-04:00"
            }
        ]
    },
    {
        "title": "Doctor Dolittle",
        "url": "https://fringetoronto.com/fringe/show/doctor-dolittle",
        "venue": "St. Volodymyr Institute",
        "address": "620 Spadina Ave, Toronto, Ontario, M5S 2H4",
        "id": 29,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T14:30:00-04:00",
                "end": "2024-07-03T15:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T12:15:00-04:00",
                "end": "2024-07-05T13:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T16:15:00-04:00",
                "end": "2024-07-06T17:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-07T11:00:00-04:00",
                "end": "2024-07-07T11:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-09T13:15:00-04:00",
                "end": "2024-07-09T14:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-10T16:00:00-04:00",
                "end": "2024-07-10T16:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T12:45:00-04:00",
                "end": "2024-07-12T13:30:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-13T12:45:00-04:00",
                "end": "2024-07-13T13:30:00-04:00"
            }
        ]
    },
    {
        "title": "Elephant Song",
        "url": "https://fringetoronto.com/fringe/show/elephant-song",
        "venue": "Theatre Passe Muraille Backspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 30,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "closed-captioning",
                    "preview"
                ],
                "start": "2024-07-03T18:00:00-04:00",
                "end": "2024-07-03T19:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2024-07-05T16:00:00-04:00",
                "end": "2024-07-05T17:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2024-07-06T21:45:00-04:00",
                "end": "2024-07-06T22:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2024-07-08T15:45:00-04:00",
                "end": "2024-07-08T16:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2024-07-09T21:45:00-04:00",
                "end": "2024-07-09T22:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2024-07-10T18:00:00-04:00",
                "end": "2024-07-10T19:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2024-07-11T20:00:00-04:00",
                "end": "2024-07-11T21:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2024-07-13T12:15:00-04:00",
                "end": "2024-07-13T13:15:00-04:00"
            }
        ]
    },
    {
        "title": "Escape From Toronto",
        "url": "https://fringetoronto.com/fringe/show/escape-toronto",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 31,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T19:45:00-04:00",
                "end": "2024-07-03T20:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T21:15:00-04:00",
                "end": "2024-07-05T22:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T17:00:00-04:00",
                "end": "2024-07-06T18:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-10T21:15:00-04:00",
                "end": "2024-07-10T22:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T19:00:00-04:00",
                "end": "2024-07-11T20:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T14:30:00-04:00",
                "end": "2024-07-12T15:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T15:15:00-04:00",
                "end": "2024-07-14T16:15:00-04:00"
            }
        ]
    },
    {
        "title": "An Evening at Sea",
        "url": "https://fringetoronto.com/fringe/show/evening-sea",
        "venue": "St. Volodymyr Institute",
        "address": "620 Spadina Ave, Toronto, Ontario, M5S 2H4",
        "id": 32,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-05T17:45:00-04:00",
                "end": "2024-07-05T18:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-07T18:15:00-04:00",
                "end": "2024-07-07T19:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-09T19:45:00-04:00",
                "end": "2024-07-09T20:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-10T19:45:00-04:00",
                "end": "2024-07-10T20:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T16:15:00-04:00",
                "end": "2024-07-11T17:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T20:15:00-04:00",
                "end": "2024-07-12T21:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T18:15:00-04:00",
                "end": "2024-07-13T19:00:00-04:00"
            }
        ]
    },
    {
        "title": "far-flung peoples",
        "url": "https://fringetoronto.com/fringe/show/far-flung-peoples",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 33,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-05T21:30:00-04:00",
                "end": "2024-07-05T23:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T16:00:00-04:00",
                "end": "2024-07-06T17:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T18:15:00-04:00",
                "end": "2024-07-07T19:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T21:30:00-04:00",
                "end": "2024-07-08T23:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T18:00:00-04:00",
                "end": "2024-07-11T19:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T19:15:00-04:00",
                "end": "2024-07-13T20:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T14:45:00-04:00",
                "end": "2024-07-14T16:15:00-04:00"
            }
        ]
    },
    {
        "title": "The First Jew In Canada: A Trans Tale",
        "url": "https://fringetoronto.com/fringe/show/first-jew-canada-trans-tale",
        "venue": "Al Green Theatre",
        "address": "750 Spadina Ave, Toronto, Ontario, M5S 2J2",
        "id": 34,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-04T20:15:00-04:00",
                "end": "2024-07-04T21:10:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "asl",
                    "relaxed"
                ],
                "start": "2024-07-06T14:00:00-04:00",
                "end": "2024-07-06T14:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-07T21:30:00-04:00",
                "end": "2024-07-07T22:25:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "asl",
                    "relaxed"
                ],
                "start": "2024-07-10T19:45:00-04:00",
                "end": "2024-07-10T20:40:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-11T15:45:00-04:00",
                "end": "2024-07-11T16:40:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-13T21:30:00-04:00",
                "end": "2024-07-13T22:25:00-04:00"
            },
            {
                "id": 7,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-14T16:15:00-04:00",
                "end": "2024-07-14T17:10:00-04:00"
            }
        ]
    },
    {
        "title": "Get a Clue",
        "url": "https://fringetoronto.com/fringe/show/get-clue",
        "venue": "St. Volodymyr Institute",
        "address": "620 Spadina Ave, Toronto, Ontario, M5S 2H4",
        "id": 35,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-03T17:15:00-04:00",
                "end": "2024-07-03T18:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-04T19:15:00-04:00",
                "end": "2024-07-04T20:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T18:15:00-04:00",
                "end": "2024-07-06T19:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T17:15:00-04:00",
                "end": "2024-07-08T18:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-09T17:45:00-04:00",
                "end": "2024-07-09T18:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T14:45:00-04:00",
                "end": "2024-07-12T15:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T16:45:00-04:00",
                "end": "2024-07-14T17:45:00-04:00"
            }
        ]
    },
    {
        "title": "Girls' Night Cabin Fever",
        "url": "https://fringetoronto.com/fringe/show/girls-night-cabin-fever",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 36,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-05T16:15:00-04:00",
                "end": "2024-07-05T17:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T21:15:00-04:00",
                "end": "2024-07-06T22:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-08T15:30:00-04:00",
                "end": "2024-07-08T16:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-10T16:15:00-04:00",
                "end": "2024-07-10T17:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T19:45:00-04:00",
                "end": "2024-07-11T20:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T12:00:00-04:00",
                "end": "2024-07-13T13:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T18:00:00-04:00",
                "end": "2024-07-14T19:00:00-04:00"
            }
        ]
    },
    {
        "title": "Great Felt Greatness",
        "url": "https://fringetoronto.com/fringe/show/great-felt-greatness",
        "venue": "Al Green Theatre",
        "address": "750 Spadina Ave, Toronto, Ontario, M5S 2J2",
        "id": 37,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-05T16:15:00-04:00",
                "end": "2024-07-05T17:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T18:00:00-04:00",
                "end": "2024-07-06T19:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-08T21:45:00-04:00",
                "end": "2024-07-08T22:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-10T18:00:00-04:00",
                "end": "2024-07-10T19:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-11T14:00:00-04:00",
                "end": "2024-07-11T15:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T19:45:00-04:00",
                "end": "2024-07-13T20:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T14:15:00-04:00",
                "end": "2024-07-14T15:15:00-04:00"
            }
        ]
    },
    {
        "title": "GRINGAS",
        "url": "https://fringetoronto.com/fringe/show/gringas",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 38,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T19:00:00-04:00",
                "end": "2024-07-04T20:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T14:30:00-04:00",
                "end": "2024-07-05T15:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T14:30:00-04:00",
                "end": "2024-07-06T15:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T16:45:00-04:00",
                "end": "2024-07-09T17:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T19:00:00-04:00",
                "end": "2024-07-10T20:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-13T12:15:00-04:00",
                "end": "2024-07-13T13:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T13:00:00-04:00",
                "end": "2024-07-14T14:00:00-04:00"
            }
        ]
    },
    {
        "title": "Gulp",
        "url": "https://fringetoronto.com/fringe/show/gulp",
        "venue": "Theatre Passe Muraille Backspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 39,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T17:30:00-04:00",
                "end": "2024-07-04T18:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T14:15:00-04:00",
                "end": "2024-07-06T15:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T18:00:00-04:00",
                "end": "2024-07-07T19:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T13:45:00-04:00",
                "end": "2024-07-09T14:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T12:30:00-04:00",
                "end": "2024-07-10T13:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T18:00:00-04:00",
                "end": "2024-07-11T19:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T22:00:00-04:00",
                "end": "2024-07-12T23:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-13T20:15:00-04:00",
                "end": "2024-07-13T21:15:00-04:00"
            }
        ]
    },
    {
        "title": "gutted",
        "url": "https://fringetoronto.com/fringe/show/gutted",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 40,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T19:45:00-04:00",
                "end": "2024-07-03T20:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T16:00:00-04:00",
                "end": "2024-07-05T16:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T12:00:00-04:00",
                "end": "2024-07-07T12:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-11T21:45:00-04:00",
                "end": "2024-07-11T22:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-13T17:30:00-04:00",
                "end": "2024-07-13T18:15:00-04:00"
            }
        ]
    },
    {
        "title": "How Lucky Are We",
        "url": "https://fringetoronto.com/fringe/show/how-lucky-are-we",
        "venue": "Miles Nadal Jewish Community Centre Gym",
        "address": null,
        "id": 41,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-04T17:00:00-04:00",
                "end": "2024-07-04T17:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-05T22:00:00-04:00",
                "end": "2024-07-05T22:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-06T19:30:00-04:00",
                "end": "2024-07-06T20:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-07T12:30:00-04:00",
                "end": "2024-07-07T13:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-10T18:00:00-04:00",
                "end": "2024-07-10T18:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-11T22:00:00-04:00",
                "end": "2024-07-11T22:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-12T18:00:00-04:00",
                "end": "2024-07-12T18:30:00-04:00"
            },
            {
                "id": 8,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-13T19:30:00-04:00",
                "end": "2024-07-13T20:00:00-04:00"
            }
        ]
    },
    {
        "title": "In the Diving Bell",
        "url": "https://fringetoronto.com/fringe/show/diving-bell",
        "venue": "A Space Gallery",
        "address": "401 Richmond, Suite 110, Toronto, Ontario, M5V3A8",
        "id": 42,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-05T21:00:00-04:00",
                "end": "2024-07-05T22:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T21:00:00-04:00",
                "end": "2024-07-06T22:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-07T15:00:00-04:00",
                "end": "2024-07-07T16:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T18:00:00-04:00",
                "end": "2024-07-08T19:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T18:00:00-04:00",
                "end": "2024-07-10T19:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T18:00:00-04:00",
                "end": "2024-07-11T19:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T21:00:00-04:00",
                "end": "2024-07-12T22:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-13T21:00:00-04:00",
                "end": "2024-07-13T22:00:00-04:00"
            },
            {
                "id": 9,
                "flags": [],
                "start": "2024-07-14T15:00:00-04:00",
                "end": "2024-07-14T16:00:00-04:00"
            }
        ]
    },
    {
        "title": "James Roque: Champorado",
        "url": "https://fringetoronto.com/fringe/show/james-roque-champorado",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 43,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T17:30:00-04:00",
                "end": "2024-07-04T18:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T21:45:00-04:00",
                "end": "2024-07-05T22:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T15:45:00-04:00",
                "end": "2024-07-07T16:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T20:00:00-04:00",
                "end": "2024-07-08T21:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-09T14:15:00-04:00",
                "end": "2024-07-09T15:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-10T15:15:00-04:00",
                "end": "2024-07-10T16:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T18:00:00-04:00",
                "end": "2024-07-12T19:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-13T21:45:00-04:00",
                "end": "2024-07-13T22:45:00-04:00"
            }
        ]
    },
    {
        "title": "Koli Kari",
        "url": "https://fringetoronto.com/fringe/show/koli-kari",
        "venue": "Tarragon Theatre Mainspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 44,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T21:45:00-04:00",
                "end": "2024-07-04T22:35:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T17:45:00-04:00",
                "end": "2024-07-06T18:35:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-07T14:30:00-04:00",
                "end": "2024-07-07T15:20:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T17:15:00-04:00",
                "end": "2024-07-09T18:05:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-10T21:30:00-04:00",
                "end": "2024-07-10T22:20:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T19:30:00-04:00",
                "end": "2024-07-12T20:20:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T16:15:00-04:00",
                "end": "2024-07-13T17:05:00-04:00"
            }
        ]
    },
    {
        "title": "Madame Winifred's Circus of Wonders",
        "url": "https://fringetoronto.com/fringe/show/madame-winifreds-circus-wonders",
        "venue": "St. Volodymyr Institute",
        "address": "620 Spadina Ave, Toronto, Ontario, M5S 2H4",
        "id": 45,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T14:45:00-04:00",
                "end": "2024-07-04T15:40:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T12:45:00-04:00",
                "end": "2024-07-06T13:40:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-07T12:45:00-04:00",
                "end": "2024-07-07T13:40:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T11:30:00-04:00",
                "end": "2024-07-09T12:25:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T12:30:00-04:00",
                "end": "2024-07-10T13:25:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-11T14:30:00-04:00",
                "end": "2024-07-11T15:25:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T11:00:00-04:00",
                "end": "2024-07-13T11:55:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-14T13:00:00-04:00",
                "end": "2024-07-14T13:55:00-04:00"
            }
        ]
    },
    {
        "title": "Mind the Umbrellas!",
        "url": "https://fringetoronto.com/fringe/show/mind-umbrellas",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 46,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-04T18:15:00-04:00",
                "end": "2024-07-04T19:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-05T17:45:00-04:00",
                "end": "2024-07-05T18:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-09T13:45:00-04:00",
                "end": "2024-07-09T14:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-10T13:45:00-04:00",
                "end": "2024-07-10T14:30:00-04:00"
            }
        ]
    },
    {
        "title": "MOE: A Rap Opera",
        "url": "https://fringetoronto.com/fringe/show/moe-rap-opera",
        "venue": "St. Volodymyr Institute",
        "address": "620 Spadina Ave, Toronto, Ontario, M5S 2H4",
        "id": 47,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T17:30:00-04:00",
                "end": "2024-07-04T18:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T20:00:00-04:00",
                "end": "2024-07-06T21:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-08T19:15:00-04:00",
                "end": "2024-07-08T20:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-11T20:00:00-04:00",
                "end": "2024-07-11T21:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-12T18:30:00-04:00",
                "end": "2024-07-12T19:30:00-04:00"
            }
        ]
    },
    {
        "title": "MONKS",
        "url": "https://fringetoronto.com/fringe/show/monks",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 48,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T19:30:00-04:00",
                "end": "2024-07-04T20:25:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T18:00:00-04:00",
                "end": "2024-07-05T18:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T21:45:00-04:00",
                "end": "2024-07-06T22:40:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T14:15:00-04:00",
                "end": "2024-07-08T15:10:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-09T20:00:00-04:00",
                "end": "2024-07-09T20:55:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-10T13:30:00-04:00",
                "end": "2024-07-10T14:25:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T12:00:00-04:00",
                "end": "2024-07-12T12:55:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-14T15:45:00-04:00",
                "end": "2024-07-14T16:40:00-04:00"
            }
        ]
    },
    {
        "title": "My time will come",
        "url": "https://fringetoronto.com/fringe/show/my-time-will-come",
        "venue": "Tarragon Theatre Mainspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 49,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T18:00:00-04:00",
                "end": "2024-07-04T18:55:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T20:00:00-04:00",
                "end": "2024-07-05T20:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T16:15:00-04:00",
                "end": "2024-07-07T17:10:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T21:15:00-04:00",
                "end": "2024-07-09T22:10:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T16:00:00-04:00",
                "end": "2024-07-11T16:55:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T18:00:00-04:00",
                "end": "2024-07-13T18:55:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T12:15:00-04:00",
                "end": "2024-07-14T13:10:00-04:00"
            }
        ]
    },
    {
        "title": "On A Sunday In August",
        "url": "https://fringetoronto.com/fringe/show/sunday-august",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 50,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-05T14:15:00-04:00",
                "end": "2024-07-05T15:05:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T16:15:00-04:00",
                "end": "2024-07-06T17:05:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T20:00:00-04:00",
                "end": "2024-07-07T20:50:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T16:00:00-04:00",
                "end": "2024-07-08T16:50:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-09T21:45:00-04:00",
                "end": "2024-07-09T22:35:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T20:00:00-04:00",
                "end": "2024-07-11T20:50:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T12:00:00-04:00",
                "end": "2024-07-13T12:50:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-14T17:30:00-04:00",
                "end": "2024-07-14T18:20:00-04:00"
            }
        ]
    },
    {
        "title": "Painting By Numbers",
        "url": "https://fringetoronto.com/fringe/show/painting-numbers",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 51,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T16:00:00-04:00",
                "end": "2024-07-04T17:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T12:00:00-04:00",
                "end": "2024-07-06T13:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T19:45:00-04:00",
                "end": "2024-07-07T20:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T21:45:00-04:00",
                "end": "2024-07-09T22:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T18:00:00-04:00",
                "end": "2024-07-10T19:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-11T14:30:00-04:00",
                "end": "2024-07-11T15:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T17:30:00-04:00",
                "end": "2024-07-13T18:30:00-04:00"
            }
        ]
    },
    {
        "title": "Paternal Guidance",
        "url": "https://fringetoronto.com/fringe/show/paternal-guidance",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 52,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T22:00:00-04:00",
                "end": "2024-07-04T23:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T20:00:00-04:00",
                "end": "2024-07-06T21:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T22:15:00-04:00",
                "end": "2024-07-07T23:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T18:00:00-04:00",
                "end": "2024-07-09T19:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T19:45:00-04:00",
                "end": "2024-07-10T20:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T13:30:00-04:00",
                "end": "2024-07-13T14:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T18:45:00-04:00",
                "end": "2024-07-14T19:45:00-04:00"
            }
        ]
    },
    {
        "title": "Patty Picker",
        "url": "https://fringetoronto.com/fringe/show/patty-picker",
        "venue": "St. Volodymyr Institute",
        "address": "620 Spadina Ave, Toronto, Ontario, M5S 2H4",
        "id": 53,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T19:00:00-04:00",
                "end": "2024-07-03T19:50:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T19:30:00-04:00",
                "end": "2024-07-05T20:20:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-08T15:30:00-04:00",
                "end": "2024-07-08T16:20:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-10T18:00:00-04:00",
                "end": "2024-07-10T18:50:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T18:15:00-04:00",
                "end": "2024-07-11T19:05:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T16:30:00-04:00",
                "end": "2024-07-12T17:20:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T20:00:00-04:00",
                "end": "2024-07-13T20:50:00-04:00"
            }
        ]
    },
    {
        "title": "POZ",
        "url": "https://fringetoronto.com/fringe/show/poz",
        "venue": "Theatre Passe Muraille Backspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 54,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T16:15:00-04:00",
                "end": "2024-07-03T17:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-04T21:45:00-04:00",
                "end": "2024-07-04T22:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T18:00:00-04:00",
                "end": "2024-07-06T19:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-07T13:45:00-04:00",
                "end": "2024-07-07T14:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T16:15:00-04:00",
                "end": "2024-07-10T17:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T12:30:00-04:00",
                "end": "2024-07-11T13:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T20:15:00-04:00",
                "end": "2024-07-12T21:15:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-13T18:15:00-04:00",
                "end": "2024-07-13T19:15:00-04:00"
            }
        ]
    },
    {
        "title": "Pretty Beast",
        "url": "https://fringetoronto.com/fringe/show/pretty-beast",
        "venue": "Theatre Passe Muraille Backspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 55,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T15:45:00-04:00",
                "end": "2024-07-04T16:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T21:45:00-04:00",
                "end": "2024-07-05T22:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T20:00:00-04:00",
                "end": "2024-07-07T21:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T12:00:00-04:00",
                "end": "2024-07-09T13:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T20:00:00-04:00",
                "end": "2024-07-10T21:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T14:15:00-04:00",
                "end": "2024-07-11T15:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T18:15:00-04:00",
                "end": "2024-07-12T19:15:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-13T22:00:00-04:00",
                "end": "2024-07-13T23:00:00-04:00"
            }
        ]
    },
    {
        "title": "Rat Academy",
        "url": "https://fringetoronto.com/fringe/show/rat-academy",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 56,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T21:15:00-04:00",
                "end": "2024-07-03T22:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T19:45:00-04:00",
                "end": "2024-07-05T20:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T12:15:00-04:00",
                "end": "2024-07-07T13:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T19:30:00-04:00",
                "end": "2024-07-09T20:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T21:45:00-04:00",
                "end": "2024-07-10T22:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T14:00:00-04:00",
                "end": "2024-07-11T15:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T15:45:00-04:00",
                "end": "2024-07-13T16:45:00-04:00"
            }
        ]
    },
    {
        "title": "Rebel Bubbie, Inc.",
        "url": "https://fringetoronto.com/fringe/show/rebel-bubbie-inc",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 57,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T18:00:00-04:00",
                "end": "2024-07-04T19:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T12:30:00-04:00",
                "end": "2024-07-06T13:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T14:15:00-04:00",
                "end": "2024-07-07T15:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-10T18:00:00-04:00",
                "end": "2024-07-10T19:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T20:15:00-04:00",
                "end": "2024-07-11T21:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T18:00:00-04:00",
                "end": "2024-07-12T19:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T15:15:00-04:00",
                "end": "2024-07-13T16:15:00-04:00"
            }
        ]
    },
    {
        "title": "Remembrance",
        "url": "https://fringetoronto.com/fringe/show/remembrance",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 58,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T22:00:00-04:00",
                "end": "2024-07-04T23:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T18:00:00-04:00",
                "end": "2024-07-06T19:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T14:00:00-04:00",
                "end": "2024-07-07T15:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T17:30:00-04:00",
                "end": "2024-07-09T18:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T12:15:00-04:00",
                "end": "2024-07-11T13:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T16:15:00-04:00",
                "end": "2024-07-12T17:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T20:00:00-04:00",
                "end": "2024-07-13T21:00:00-04:00"
            }
        ]
    },
    {
        "title": "ROOTED: A Musical Poem",
        "url": "https://fringetoronto.com/fringe/show/rooted-musical-poem",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 59,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-03T21:00:00-04:00",
                "end": "2024-07-03T21:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T18:00:00-04:00",
                "end": "2024-07-05T18:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T12:00:00-04:00",
                "end": "2024-07-07T12:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T18:00:00-04:00",
                "end": "2024-07-09T18:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-10T14:30:00-04:00",
                "end": "2024-07-10T15:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T19:45:00-04:00",
                "end": "2024-07-12T20:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T21:45:00-04:00",
                "end": "2024-07-13T22:30:00-04:00"
            }
        ]
    },
    {
        "title": "ROSAMUND - A New Musical",
        "url": "https://fringetoronto.com/fringe/show/rosamund-new-musical",
        "venue": "Jeanne Lamon Hall, Trinity St-Paul's United",
        "address": "427 Bloor St W., Toronto, Ontario, M5S 1X7",
        "id": 60,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T20:00:00-04:00",
                "end": "2024-07-03T21:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-04T20:00:00-04:00",
                "end": "2024-07-04T21:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-05T20:00:00-04:00",
                "end": "2024-07-05T21:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-06T20:00:00-04:00",
                "end": "2024-07-06T21:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-07T20:00:00-04:00",
                "end": "2024-07-07T21:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-09T20:00:00-04:00",
                "end": "2024-07-09T21:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-10T20:00:00-04:00",
                "end": "2024-07-10T21:30:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-11T20:00:00-04:00",
                "end": "2024-07-11T21:30:00-04:00"
            },
            {
                "id": 9,
                "flags": [],
                "start": "2024-07-12T20:00:00-04:00",
                "end": "2024-07-12T21:30:00-04:00"
            },
            {
                "id": 10,
                "flags": [],
                "start": "2024-07-13T20:00:00-04:00",
                "end": "2024-07-13T21:30:00-04:00"
            },
            {
                "id": 11,
                "flags": [],
                "start": "2024-07-14T20:00:00-04:00",
                "end": "2024-07-14T21:30:00-04:00"
            }
        ]
    },
    {
        "title": "Sarah St-Fleur: La Qu\u00e9b\u00e9coise, from Toronto!",
        "url": "https://fringetoronto.com/fringe/show/sarah-st-fleur-la-quebecoise-toronto",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 61,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T16:45:00-04:00",
                "end": "2024-07-04T17:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T21:30:00-04:00",
                "end": "2024-07-06T22:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T16:45:00-04:00",
                "end": "2024-07-07T17:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T14:30:00-04:00",
                "end": "2024-07-09T15:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T16:45:00-04:00",
                "end": "2024-07-10T17:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T19:00:00-04:00",
                "end": "2024-07-12T20:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T14:30:00-04:00",
                "end": "2024-07-13T15:30:00-04:00"
            }
        ]
    },
    {
        "title": "Saskatchewan: An Aspirational Polyamorous Adventure",
        "url": "https://fringetoronto.com/fringe/show/saskatchewan-aspirational-polyamorous-adventure",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 62,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T21:15:00-04:00",
                "end": "2024-07-04T22:10:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T19:15:00-04:00",
                "end": "2024-07-06T20:10:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T14:30:00-04:00",
                "end": "2024-07-07T15:25:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-11T16:45:00-04:00",
                "end": "2024-07-11T17:40:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-12T16:45:00-04:00",
                "end": "2024-07-12T17:40:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T21:30:00-04:00",
                "end": "2024-07-13T22:25:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T17:30:00-04:00",
                "end": "2024-07-14T18:25:00-04:00"
            }
        ]
    },
    {
        "title": "Scenes From An Italian Restaurant",
        "url": "https://fringetoronto.com/fringe/show/scenes-italian-restaurant",
        "venue": "Al Green Theatre",
        "address": "750 Spadina Ave, Toronto, Ontario, M5S 2J2",
        "id": 63,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T18:15:00-04:00",
                "end": "2024-07-04T19:08:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T21:45:00-04:00",
                "end": "2024-07-06T22:38:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T15:45:00-04:00",
                "end": "2024-07-07T16:38:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T17:45:00-04:00",
                "end": "2024-07-09T18:38:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T21:45:00-04:00",
                "end": "2024-07-10T22:38:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T19:45:00-04:00",
                "end": "2024-07-12T20:38:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T14:00:00-04:00",
                "end": "2024-07-13T14:53:00-04:00"
            }
        ]
    },
    {
        "title": "SEE YOU TOMORROW: a true story",
        "url": "https://fringetoronto.com/fringe/show/see-you-tomorrow-true-story",
        "venue": "Tarragon Theatre Mainspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 64,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-04T16:15:00-04:00",
                "end": "2024-07-04T17:10:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T16:00:00-04:00",
                "end": "2024-07-06T16:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T19:45:00-04:00",
                "end": "2024-07-07T20:40:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T21:45:00-04:00",
                "end": "2024-07-08T22:40:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T17:45:00-04:00",
                "end": "2024-07-10T18:40:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T17:45:00-04:00",
                "end": "2024-07-12T18:40:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T12:15:00-04:00",
                "end": "2024-07-13T13:10:00-04:00"
            }
        ]
    },
    {
        "title": "Sheila The Musical",
        "url": "https://fringetoronto.com/fringe/show/sheila-musical",
        "venue": "Theatre Passe Muraille Backspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 65,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T21:45:00-04:00",
                "end": "2024-07-03T22:35:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T20:00:00-04:00",
                "end": "2024-07-05T20:50:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T12:00:00-04:00",
                "end": "2024-07-07T12:50:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T17:45:00-04:00",
                "end": "2024-07-08T18:35:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-09T17:30:00-04:00",
                "end": "2024-07-09T18:20:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T21:45:00-04:00",
                "end": "2024-07-11T22:35:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T16:30:00-04:00",
                "end": "2024-07-13T17:20:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-14T14:00:00-04:00",
                "end": "2024-07-14T14:50:00-04:00"
            }
        ]
    },
    {
        "title": "Snacey!",
        "url": "https://fringetoronto.com/fringe/show/snacey",
        "venue": "St. Volodymyr Institute",
        "address": "620 Spadina Ave, Toronto, Ontario, M5S 2H4",
        "id": 66,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T13:00:00-04:00",
                "end": "2024-07-04T13:55:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T14:00:00-04:00",
                "end": "2024-07-05T14:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-06T11:00:00-04:00",
                "end": "2024-07-06T11:55:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-07T14:45:00-04:00",
                "end": "2024-07-07T15:40:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-09T16:00:00-04:00",
                "end": "2024-07-09T16:55:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-11T12:30:00-04:00",
                "end": "2024-07-11T13:25:00-04:00"
            },
            {
                "id": 7,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-12T11:00:00-04:00",
                "end": "2024-07-12T11:55:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-13T14:45:00-04:00",
                "end": "2024-07-13T15:40:00-04:00"
            }
        ]
    },
    {
        "title": "Stiff & Sons",
        "url": "https://fringetoronto.com/fringe/show/stiff-sons",
        "venue": "Al Green Theatre",
        "address": "750 Spadina Ave, Toronto, Ontario, M5S 2J2",
        "id": 67,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T21:00:00-04:00",
                "end": "2024-07-03T22:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T20:00:00-04:00",
                "end": "2024-07-06T21:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-08T16:00:00-04:00",
                "end": "2024-07-08T17:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T14:00:00-04:00",
                "end": "2024-07-09T15:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T21:30:00-04:00",
                "end": "2024-07-11T22:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T18:00:00-04:00",
                "end": "2024-07-12T19:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T18:00:00-04:00",
                "end": "2024-07-14T19:00:00-04:00"
            }
        ]
    },
    {
        "title": "Tape",
        "url": "https://fringetoronto.com/fringe/show/tape",
        "venue": "Al Green Theatre",
        "address": "750 Spadina Ave, Toronto, Ontario, M5S 2J2",
        "id": 68,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T17:00:00-04:00",
                "end": "2024-07-03T18:05:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T21:45:00-04:00",
                "end": "2024-07-05T22:50:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T16:00:00-04:00",
                "end": "2024-07-06T17:05:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T17:45:00-04:00",
                "end": "2024-07-08T18:50:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-09T19:30:00-04:00",
                "end": "2024-07-09T20:35:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-10T14:00:00-04:00",
                "end": "2024-07-10T15:05:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T15:45:00-04:00",
                "end": "2024-07-12T16:50:00-04:00"
            }
        ]
    },
    {
        "title": "They Call You A Doctor",
        "url": "https://fringetoronto.com/fringe/show/they-call-you-doctor",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 69,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-03T21:30:00-04:00",
                "end": "2024-07-03T22:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T20:00:00-04:00",
                "end": "2024-07-05T21:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T14:15:00-04:00",
                "end": "2024-07-06T15:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T18:00:00-04:00",
                "end": "2024-07-08T19:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T21:30:00-04:00",
                "end": "2024-07-10T22:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T18:00:00-04:00",
                "end": "2024-07-11T19:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T16:15:00-04:00",
                "end": "2024-07-12T17:15:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-13T13:45:00-04:00",
                "end": "2024-07-13T14:45:00-04:00"
            }
        ]
    },
    {
        "title": "Toba Tek Singh",
        "url": "https://fringetoronto.com/fringe/show/toba-tek-singh",
        "venue": "Al Green Theatre",
        "address": "750 Spadina Ave, Toronto, Ontario, M5S 2J2",
        "id": 70,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T22:00:00-04:00",
                "end": "2024-07-04T23:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T20:00:00-04:00",
                "end": "2024-07-05T21:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T17:45:00-04:00",
                "end": "2024-07-07T18:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-09T15:45:00-04:00",
                "end": "2024-07-09T16:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-10T16:00:00-04:00",
                "end": "2024-07-10T17:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T21:45:00-04:00",
                "end": "2024-07-12T22:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T17:45:00-04:00",
                "end": "2024-07-13T18:45:00-04:00"
            }
        ]
    },
    {
        "title": "Tonight! a clown who wanted to be loved?",
        "url": "https://fringetoronto.com/fringe/show/tonight-clown-who-wanted-be-loved",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 71,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-04T21:15:00-04:00",
                "end": "2024-07-04T22:05:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T20:00:00-04:00",
                "end": "2024-07-06T20:50:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T13:45:00-04:00",
                "end": "2024-07-07T14:35:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T18:00:00-04:00",
                "end": "2024-07-09T18:50:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T16:15:00-04:00",
                "end": "2024-07-11T17:05:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T21:45:00-04:00",
                "end": "2024-07-12T22:35:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T15:45:00-04:00",
                "end": "2024-07-13T16:35:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-14T12:00:00-04:00",
                "end": "2024-07-14T12:50:00-04:00"
            }
        ]
    },
    {
        "title": "The Unexpected Mayfly",
        "url": "https://fringetoronto.com/fringe/show/unexpected-mayfly",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 72,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T17:15:00-04:00",
                "end": "2024-07-03T18:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T12:00:00-04:00",
                "end": "2024-07-06T13:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T17:30:00-04:00",
                "end": "2024-07-07T18:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T21:45:00-04:00",
                "end": "2024-07-08T23:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T19:15:00-04:00",
                "end": "2024-07-10T20:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-11T13:45:00-04:00",
                "end": "2024-07-11T15:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-12T13:45:00-04:00",
                "end": "2024-07-12T15:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-13T19:30:00-04:00",
                "end": "2024-07-13T20:45:00-04:00"
            }
        ]
    },
    {
        "title": "Unfurnished",
        "url": "https://fringetoronto.com/fringe/show/unfurnished",
        "venue": "Tarragon Theatre Mainspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 73,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T21:15:00-04:00",
                "end": "2024-07-03T22:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T17:45:00-04:00",
                "end": "2024-07-05T19:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T12:15:00-04:00",
                "end": "2024-07-07T13:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-08T19:45:00-04:00",
                "end": "2024-07-08T21:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T15:45:00-04:00",
                "end": "2024-07-10T17:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T15:45:00-04:00",
                "end": "2024-07-12T17:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-13T21:45:00-04:00",
                "end": "2024-07-13T23:00:00-04:00"
            }
        ]
    },
    {
        "title": "UnMute",
        "url": "https://fringetoronto.com/fringe/show/unmute",
        "venue": "Tarragon Theatre Mainspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 74,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-05T16:00:00-04:00",
                "end": "2024-07-05T17:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-06T12:15:00-04:00",
                "end": "2024-07-06T13:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-08T17:45:00-04:00",
                "end": "2024-07-08T18:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T15:30:00-04:00",
                "end": "2024-07-09T16:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T21:45:00-04:00",
                "end": "2024-07-11T22:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-13T19:45:00-04:00",
                "end": "2024-07-13T20:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T14:15:00-04:00",
                "end": "2024-07-14T15:15:00-04:00"
            }
        ]
    },
    {
        "title": "Yoga for Billionaires: An immersive comedy",
        "url": "https://fringetoronto.com/fringe/show/yoga-billionaires-immersive-comedy",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 75,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-03T17:15:00-04:00",
                "end": "2024-07-03T18:10:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-05T19:45:00-04:00",
                "end": "2024-07-05T20:40:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-06T17:30:00-04:00",
                "end": "2024-07-06T18:25:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T14:00:00-04:00",
                "end": "2024-07-09T14:55:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-11T21:45:00-04:00",
                "end": "2024-07-11T22:40:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T18:00:00-04:00",
                "end": "2024-07-12T18:55:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T12:00:00-04:00",
                "end": "2024-07-14T12:55:00-04:00"
            }
        ]
    },
    {
        "title": "You Lost Me: A Sketch Comedy Show",
        "url": "https://fringetoronto.com/fringe/show/you-lost-me-sketch-comedy-show",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 76,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2024-07-05T18:00:00-04:00",
                "end": "2024-07-05T18:55:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "relaxed"
                ],
                "start": "2024-07-06T14:15:00-04:00",
                "end": "2024-07-06T15:10:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-07T20:30:00-04:00",
                "end": "2024-07-07T21:25:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-09T21:30:00-04:00",
                "end": "2024-07-09T22:25:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-10T21:30:00-04:00",
                "end": "2024-07-10T22:25:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-12T19:45:00-04:00",
                "end": "2024-07-12T20:40:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-14T17:00:00-04:00",
                "end": "2024-07-14T17:55:00-04:00"
            }
        ]
    },
    {
        "title": "You, Hamlet",
        "url": "https://fringetoronto.com/fringe/show/you-hamlet",
        "venue": "East End United",
        "address": "310 Danforth Ave, Toronto, Ontario, M4K1N6",
        "id": 77,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2024-07-03T20:00:00-04:00",
                "end": "2024-07-03T21:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2024-07-04T20:00:00-04:00",
                "end": "2024-07-04T21:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2024-07-05T20:00:00-04:00",
                "end": "2024-07-05T21:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2024-07-06T20:00:00-04:00",
                "end": "2024-07-06T21:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2024-07-07T20:00:00-04:00",
                "end": "2024-07-07T21:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2024-07-08T20:00:00-04:00",
                "end": "2024-07-08T21:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2024-07-10T20:00:00-04:00",
                "end": "2024-07-10T21:30:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2024-07-11T20:00:00-04:00",
                "end": "2024-07-11T21:30:00-04:00"
            },
            {
                "id": 9,
                "flags": [],
                "start": "2024-07-12T20:00:00-04:00",
                "end": "2024-07-12T21:30:00-04:00"
            },
            {
                "id": 10,
                "flags": [],
                "start": "2024-07-13T20:00:00-04:00",
                "end": "2024-07-13T21:30:00-04:00"
            },
            {
                "id": 11,
                "flags": [],
                "start": "2024-07-14T20:00:00-04:00",
                "end": "2024-07-14T21:30:00-04:00"
            }
        ]
    }
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
