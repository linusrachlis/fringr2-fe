import moment from 'moment'
import { Performance, Show, ShowData } from '../types'

const showsData: ShowData[] = [
    {
        "title": "#1 Clown Comedy with Victor & Priscilla",
        "url": "https://fringetoronto.com/fringe/show/1-clown-comedy-victor-priscilla",
        "venue": "VideoCabaret - Deanne Taylor Theatre",
        "address": "10 Busy Street, Toronto, Ontario, M4M 1N8",
        "id": 1,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T18:15:00-04:00",
                "end": "2025-07-02T19:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T18:30:00-04:00",
                "end": "2025-07-04T19:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T12:30:00-04:00",
                "end": "2025-07-05T13:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T16:00:00-04:00",
                "end": "2025-07-08T17:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T21:30:00-04:00",
                "end": "2025-07-10T22:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T19:45:00-04:00",
                "end": "2025-07-11T20:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T14:45:00-04:00",
                "end": "2025-07-13T15:45:00-04:00"
            }
        ]
    },
    {
        "title": "$$$ (Money, Money, Money)",
        "url": "https://fringetoronto.com/fringe/show/money-money-money",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 2,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-04T14:00:00-04:00",
                "end": "2025-07-04T15:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T19:30:00-04:00",
                "end": "2025-07-05T20:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-08T16:30:00-04:00",
                "end": "2025-07-08T17:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-10T22:15:00-04:00",
                "end": "2025-07-10T23:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-11T16:15:00-04:00",
                "end": "2025-07-11T17:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T14:15:00-04:00",
                "end": "2025-07-12T15:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T18:45:00-04:00",
                "end": "2025-07-13T19:45:00-04:00"
            }
        ]
    },
    {
        "title": "100% Wizard",
        "url": "https://fringetoronto.com/fringe/show/100-wizard",
        "venue": "Tallulah's Cabaret at Buddies in Bad Times",
        "address": "12 Alexander Street, Toronto, ON, M4Y 1B4",
        "id": 3,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "relaxed",
                    "preview"
                ],
                "start": "2025-07-02T21:00:00-04:00",
                "end": "2025-07-02T22:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-03T19:00:00-04:00",
                "end": "2025-07-03T20:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-04T21:00:00-04:00",
                "end": "2025-07-04T22:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-05T13:00:00-04:00",
                "end": "2025-07-05T14:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-05T19:00:00-04:00",
                "end": "2025-07-05T20:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-06T15:00:00-04:00",
                "end": "2025-07-06T16:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-09T21:00:00-04:00",
                "end": "2025-07-09T22:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-10T19:00:00-04:00",
                "end": "2025-07-10T20:00:00-04:00"
            },
            {
                "id": 9,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-11T19:00:00-04:00",
                "end": "2025-07-11T20:00:00-04:00"
            },
            {
                "id": 10,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-12T15:00:00-04:00",
                "end": "2025-07-12T16:00:00-04:00"
            },
            {
                "id": 11,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-12T21:00:00-04:00",
                "end": "2025-07-12T22:00:00-04:00"
            },
            {
                "id": 12,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-13T13:00:00-04:00",
                "end": "2025-07-13T14:00:00-04:00"
            }
        ]
    },
    {
        "title": "Acting Lessons",
        "url": "https://fringetoronto.com/fringe/show/acting-lessons",
        "venue": "Soulpepper Theatre's TD Finance Studio",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 4,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T18:15:00-04:00",
                "end": "2025-07-02T19:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T21:45:00-04:00",
                "end": "2025-07-03T22:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T21:45:00-04:00",
                "end": "2025-07-06T22:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-07T17:45:00-04:00",
                "end": "2025-07-07T18:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T19:45:00-04:00",
                "end": "2025-07-09T20:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T18:00:00-04:00",
                "end": "2025-07-10T19:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T12:30:00-04:00",
                "end": "2025-07-11T13:30:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T16:15:00-04:00",
                "end": "2025-07-12T17:15:00-04:00"
            }
        ]
    },
    {
        "title": "Adam Bailey: My Three Deaths",
        "url": "https://fringetoronto.com/fringe/show/adam-bailey-my-three-deaths",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 5,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T18:15:00-04:00",
                "end": "2025-07-03T19:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T21:30:00-04:00",
                "end": "2025-07-04T22:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T18:15:00-04:00",
                "end": "2025-07-06T19:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T20:45:00-04:00",
                "end": "2025-07-07T21:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T18:15:00-04:00",
                "end": "2025-07-09T19:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T12:15:00-04:00",
                "end": "2025-07-11T13:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T17:00:00-04:00",
                "end": "2025-07-12T18:00:00-04:00"
            }
        ]
    },
    {
        "title": "The Adding Machine",
        "url": "https://fringetoronto.com/fringe/show/adding-machine",
        "venue": "Puppy Sphere, The Burroughes Building",
        "address": "The Burroughs Building, 3rd Floor, 639 Queen St W, Toronto, Ontario, M5V 2B7",
        "id": 6,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T21:00:00-04:00",
                "end": "2025-07-02T22:25:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T21:00:00-04:00",
                "end": "2025-07-03T22:25:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-04T21:00:00-04:00",
                "end": "2025-07-04T22:25:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T21:00:00-04:00",
                "end": "2025-07-06T22:25:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-07T21:00:00-04:00",
                "end": "2025-07-07T22:25:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-08T21:00:00-04:00",
                "end": "2025-07-08T22:25:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-09T21:00:00-04:00",
                "end": "2025-07-09T22:25:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-10T21:00:00-04:00",
                "end": "2025-07-10T22:25:00-04:00"
            },
            {
                "id": 9,
                "flags": [],
                "start": "2025-07-11T21:00:00-04:00",
                "end": "2025-07-11T22:25:00-04:00"
            },
            {
                "id": 10,
                "flags": [],
                "start": "2025-07-13T21:00:00-04:00",
                "end": "2025-07-13T22:25:00-04:00"
            }
        ]
    },
    {
        "title": "All That She Wrote",
        "url": "https://fringetoronto.com/fringe/show/all-she-wrote",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 7,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T21:45:00-04:00",
                "end": "2025-07-02T23:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T19:00:00-04:00",
                "end": "2025-07-04T20:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T12:30:00-04:00",
                "end": "2025-07-06T14:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T21:30:00-04:00",
                "end": "2025-07-08T23:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T17:45:00-04:00",
                "end": "2025-07-09T19:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T16:45:00-04:00",
                "end": "2025-07-11T18:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T14:00:00-04:00",
                "end": "2025-07-12T15:30:00-04:00"
            }
        ]
    },
    {
        "title": "Almost Ever After - A New Musical",
        "url": "https://fringetoronto.com/fringe/show/almost-ever-after-new-musical",
        "venue": "Artists' Play",
        "address": "388 Carlaw Ave., Unit 207, Toronto, Ontario, M4M 2T4",
        "id": 8,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T19:00:00-04:00",
                "end": "2025-07-02T20:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T19:00:00-04:00",
                "end": "2025-07-03T20:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-04T19:00:00-04:00",
                "end": "2025-07-04T20:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-05T19:00:00-04:00",
                "end": "2025-07-05T20:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-06T19:00:00-04:00",
                "end": "2025-07-06T20:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-07T19:00:00-04:00",
                "end": "2025-07-07T20:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-09T19:00:00-04:00",
                "end": "2025-07-09T20:30:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-10T19:00:00-04:00",
                "end": "2025-07-10T20:30:00-04:00"
            },
            {
                "id": 9,
                "flags": [],
                "start": "2025-07-11T19:00:00-04:00",
                "end": "2025-07-11T20:30:00-04:00"
            },
            {
                "id": 10,
                "flags": [],
                "start": "2025-07-12T19:00:00-04:00",
                "end": "2025-07-12T20:30:00-04:00"
            },
            {
                "id": 11,
                "flags": [],
                "start": "2025-07-13T19:00:00-04:00",
                "end": "2025-07-13T20:30:00-04:00"
            }
        ]
    },
    {
        "title": "ALPHA",
        "url": "https://fringetoronto.com/fringe/show/alpha",
        "venue": "Soulpepper Theatre's Michael Young Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 9,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2025-07-03T15:45:00-04:00",
                "end": "2025-07-03T16:43:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2025-07-06T12:30:00-04:00",
                "end": "2025-07-06T13:28:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2025-07-07T17:45:00-04:00",
                "end": "2025-07-07T18:43:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2025-07-09T19:30:00-04:00",
                "end": "2025-07-09T20:28:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2025-07-10T18:00:00-04:00",
                "end": "2025-07-10T18:58:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2025-07-11T12:00:00-04:00",
                "end": "2025-07-11T12:58:00-04:00"
            },
            {
                "id": 7,
                "flags": [
                    "closed-captioning"
                ],
                "start": "2025-07-13T15:00:00-04:00",
                "end": "2025-07-13T15:58:00-04:00"
            }
        ]
    },
    {
        "title": "Apothecary",
        "url": "https://fringetoronto.com/fringe/show/apothecary",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 10,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T21:45:00-04:00",
                "end": "2025-07-03T23:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T18:00:00-04:00",
                "end": "2025-07-05T19:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T15:00:00-04:00",
                "end": "2025-07-06T16:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T17:15:00-04:00",
                "end": "2025-07-07T18:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T15:30:00-04:00",
                "end": "2025-07-09T17:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T19:00:00-04:00",
                "end": "2025-07-11T20:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T13:15:00-04:00",
                "end": "2025-07-13T14:45:00-04:00"
            }
        ]
    },
    {
        "title": "At the End of Kaliyuga.",
        "url": "https://fringetoronto.com/fringe/show/end-kaliyuga",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 11,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T18:45:00-04:00",
                "end": "2025-07-02T19:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T17:00:00-04:00",
                "end": "2025-07-04T17:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T12:15:00-04:00",
                "end": "2025-07-05T13:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T20:45:00-04:00",
                "end": "2025-07-08T21:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T13:45:00-04:00",
                "end": "2025-07-10T14:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T12:15:00-04:00",
                "end": "2025-07-12T13:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T19:15:00-04:00",
                "end": "2025-07-13T20:00:00-04:00"
            }
        ]
    },
    {
        "title": "Bitty-Bat and Friends",
        "url": "https://fringetoronto.com/fringe/show/bitty-bat-and-friends",
        "venue": "Soulpepper Theatre's Tank House Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, ON, M5A 3C4",
        "id": 12,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T21:30:00-04:00",
                "end": "2025-07-02T22:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T16:00:00-04:00",
                "end": "2025-07-04T17:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T19:45:00-04:00",
                "end": "2025-07-06T20:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-08T15:00:00-04:00",
                "end": "2025-07-08T16:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T15:30:00-04:00",
                "end": "2025-07-10T16:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T22:15:00-04:00",
                "end": "2025-07-11T23:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T18:15:00-04:00",
                "end": "2025-07-12T19:15:00-04:00"
            }
        ]
    },
    {
        "title": "Bob Marley: How Reggae Changed the World",
        "url": "https://fringetoronto.com/fringe/show/bob-marley-how-reggae-changed-world",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 13,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T16:00:00-04:00",
                "end": "2025-07-02T17:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T22:30:00-04:00",
                "end": "2025-07-04T23:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T18:15:00-04:00",
                "end": "2025-07-06T19:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T18:15:00-04:00",
                "end": "2025-07-08T19:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T14:00:00-04:00",
                "end": "2025-07-09T15:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T20:15:00-04:00",
                "end": "2025-07-10T21:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T12:15:00-04:00",
                "end": "2025-07-12T13:15:00-04:00"
            }
        ]
    },
    {
        "title": "Body as Nature",
        "url": "https://fringetoronto.com/fringe/show/body-nature",
        "venue": "Soulpepper Theatre's Tank House Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, ON, M5A 3C4",
        "id": 14,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T15:00:00-04:00",
                "end": "2025-07-02T15:50:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T19:45:00-04:00",
                "end": "2025-07-04T20:35:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T14:00:00-04:00",
                "end": "2025-07-05T14:50:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T21:45:00-04:00",
                "end": "2025-07-06T22:35:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-10T17:15:00-04:00",
                "end": "2025-07-10T18:05:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T16:30:00-04:00",
                "end": "2025-07-12T17:20:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T15:15:00-04:00",
                "end": "2025-07-13T16:05:00-04:00"
            }
        ]
    },
    {
        "title": "Broken Tel\u00e9fono",
        "url": "https://fringetoronto.com/fringe/show/broken-telefono",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 15,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T22:15:00-04:00",
                "end": "2025-07-03T23:10:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T20:15:00-04:00",
                "end": "2025-07-04T21:10:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T22:00:00-04:00",
                "end": "2025-07-05T22:55:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T20:00:00-04:00",
                "end": "2025-07-07T20:55:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T16:45:00-04:00",
                "end": "2025-07-08T17:40:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T17:45:00-04:00",
                "end": "2025-07-10T18:40:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T14:45:00-04:00",
                "end": "2025-07-11T15:40:00-04:00"
            }
        ]
    },
    {
        "title": "A Canadian Explains Eurovision To Other Canadians",
        "url": "https://fringetoronto.com/fringe/show/canadian-explains-eurovision-other-canadians",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 16,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-04T12:15:00-04:00",
                "end": "2025-07-04T13:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T19:15:00-04:00",
                "end": "2025-07-05T20:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T16:00:00-04:00",
                "end": "2025-07-06T17:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-10T18:15:00-04:00",
                "end": "2025-07-10T19:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-11T17:00:00-04:00",
                "end": "2025-07-11T18:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T21:30:00-04:00",
                "end": "2025-07-12T22:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T14:30:00-04:00",
                "end": "2025-07-13T15:30:00-04:00"
            }
        ]
    },
    {
        "title": "Catch and the Dancing Liver",
        "url": "https://fringetoronto.com/fringe/show/catch-and-dancing-liver",
        "venue": "Soulpepper Theatre's Kevin & Roger Garland Cabaret",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 17,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T15:00:00-04:00",
                "end": "2025-07-03T15:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T13:00:00-04:00",
                "end": "2025-07-05T13:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T11:15:00-04:00",
                "end": "2025-07-06T12:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T14:45:00-04:00",
                "end": "2025-07-08T15:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T17:15:00-04:00",
                "end": "2025-07-09T18:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T12:45:00-04:00",
                "end": "2025-07-10T13:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T11:15:00-04:00",
                "end": "2025-07-11T12:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T13:15:00-04:00",
                "end": "2025-07-12T14:00:00-04:00"
            }
        ]
    },
    {
        "title": "Childhood by CHEAP WINE",
        "url": "https://fringetoronto.com/fringe/show/childhood-cheap-wine",
        "venue": "VideoCabaret - Deanne Taylor Theatre",
        "address": "10 Busy Street, Toronto, Ontario, M4M 1N8",
        "id": 18,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-04T15:00:00-04:00",
                "end": "2025-07-04T15:55:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-06T17:45:00-04:00",
                "end": "2025-07-06T18:40:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-07T20:00:00-04:00",
                "end": "2025-07-07T20:55:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-09T17:45:00-04:00",
                "end": "2025-07-09T18:40:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-11T18:00:00-04:00",
                "end": "2025-07-11T18:55:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T22:00:00-04:00",
                "end": "2025-07-12T22:55:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T20:30:00-04:00",
                "end": "2025-07-13T21:25:00-04:00"
            }
        ]
    },
    {
        "title": "A Cigarette That's Good For You",
        "url": "https://fringetoronto.com/fringe/show/cigarette-thats-good-you",
        "venue": "Soulpepper Theatre's RBC Finance Studio",
        "address": "50 Tank House Lane, Toronto, ON, M5A 3C4",
        "id": 19,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T18:00:00-04:00",
                "end": "2025-07-02T19:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T21:00:00-04:00",
                "end": "2025-07-03T22:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T16:45:00-04:00",
                "end": "2025-07-05T17:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T18:15:00-04:00",
                "end": "2025-07-07T19:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T14:30:00-04:00",
                "end": "2025-07-08T15:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T16:45:00-04:00",
                "end": "2025-07-10T17:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T22:15:00-04:00",
                "end": "2025-07-11T23:15:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T20:45:00-04:00",
                "end": "2025-07-13T21:45:00-04:00"
            }
        ]
    },
    {
        "title": "Confessions of a Redheaded Coffeeshop Girl",
        "url": "https://fringetoronto.com/fringe/show/confessions-redheaded-coffeeshop-girl",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 20,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T16:45:00-04:00",
                "end": "2025-07-03T17:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T22:15:00-04:00",
                "end": "2025-07-04T23:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T15:00:00-04:00",
                "end": "2025-07-06T16:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-09T16:00:00-04:00",
                "end": "2025-07-09T17:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-11T20:00:00-04:00",
                "end": "2025-07-11T21:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T14:45:00-04:00",
                "end": "2025-07-12T15:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T17:45:00-04:00",
                "end": "2025-07-13T18:45:00-04:00"
            }
        ]
    },
    {
        "title": "Ctrl Alt Delete: An Alphabetical Musical",
        "url": "https://fringetoronto.com/fringe/show/ctrl-alt-delete-alphabetical-musical",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 21,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T19:45:00-04:00",
                "end": "2025-07-02T20:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T13:30:00-04:00",
                "end": "2025-07-04T14:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T16:15:00-04:00",
                "end": "2025-07-05T17:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-09T20:00:00-04:00",
                "end": "2025-07-09T21:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T17:45:00-04:00",
                "end": "2025-07-10T18:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-11T15:00:00-04:00",
                "end": "2025-07-11T16:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T22:15:00-04:00",
                "end": "2025-07-12T23:15:00-04:00"
            }
        ]
    },
    {
        "title": "David Lynch's Seinfeld",
        "url": "https://fringetoronto.com/fringe/show/david-lynchs-seinfeld",
        "venue": "Helen Gardiner Phelan Playhouse",
        "address": "79 Saint George St, Toronto, Ontario, M5S 3L8",
        "id": 22,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-04T12:30:00-04:00",
                "end": "2025-07-04T13:25:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T18:30:00-04:00",
                "end": "2025-07-05T19:25:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-07T15:00:00-04:00",
                "end": "2025-07-07T15:55:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T18:00:00-04:00",
                "end": "2025-07-08T18:55:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T12:30:00-04:00",
                "end": "2025-07-09T13:25:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T20:15:00-04:00",
                "end": "2025-07-11T21:10:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T16:30:00-04:00",
                "end": "2025-07-13T17:25:00-04:00"
            }
        ]
    },
    {
        "title": "Divine Monster",
        "url": "https://fringetoronto.com/fringe/show/divine-monster",
        "venue": "Soulpepper Theatre's RBC Finance Studio",
        "address": "50 Tank House Lane, Toronto, ON, M5A 3C4",
        "id": 23,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T19:45:00-04:00",
                "end": "2025-07-02T20:35:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T18:15:00-04:00",
                "end": "2025-07-04T19:05:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T15:00:00-04:00",
                "end": "2025-07-05T15:50:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T15:00:00-04:00",
                "end": "2025-07-06T15:50:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T16:30:00-04:00",
                "end": "2025-07-08T17:20:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T13:00:00-04:00",
                "end": "2025-07-10T13:50:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T16:45:00-04:00",
                "end": "2025-07-11T17:35:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T13:00:00-04:00",
                "end": "2025-07-12T13:50:00-04:00"
            }
        ]
    },
    {
        "title": "Don't Fall In: A New Musical",
        "url": "https://fringetoronto.com/fringe/show/dont-fall-new-musical",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 24,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T20:15:00-04:00",
                "end": "2025-07-03T21:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T13:00:00-04:00",
                "end": "2025-07-05T14:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T18:30:00-04:00",
                "end": "2025-07-06T19:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T22:00:00-04:00",
                "end": "2025-07-07T23:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-11T16:30:00-04:00",
                "end": "2025-07-11T17:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T18:15:00-04:00",
                "end": "2025-07-12T19:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T21:30:00-04:00",
                "end": "2025-07-13T22:30:00-04:00"
            }
        ]
    },
    {
        "title": "Echoes of My Silence",
        "url": "https://fringetoronto.com/fringe/show/echoes-my-silence",
        "venue": "Soulpepper Theatre's Tank House Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, ON, M5A 3C4",
        "id": 25,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T19:45:00-04:00",
                "end": "2025-07-03T21:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T17:30:00-04:00",
                "end": "2025-07-05T18:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T14:15:00-04:00",
                "end": "2025-07-06T15:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T21:30:00-04:00",
                "end": "2025-07-08T22:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T15:45:00-04:00",
                "end": "2025-07-09T17:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T18:00:00-04:00",
                "end": "2025-07-11T19:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T13:00:00-04:00",
                "end": "2025-07-13T14:15:00-04:00"
            }
        ]
    },
    {
        "title": "Edgar in the Red Room",
        "url": "https://fringetoronto.com/fringe/show/edgar-red-room",
        "venue": "Helen Gardiner Phelan Playhouse",
        "address": "79 Saint George St, Toronto, Ontario, M5S 3L8",
        "id": 26,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T18:45:00-04:00",
                "end": "2025-07-02T19:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T22:00:00-04:00",
                "end": "2025-07-03T23:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T20:15:00-04:00",
                "end": "2025-07-05T21:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-09T22:15:00-04:00",
                "end": "2025-07-09T23:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T18:00:00-04:00",
                "end": "2025-07-10T19:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T16:45:00-04:00",
                "end": "2025-07-11T17:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T14:45:00-04:00",
                "end": "2025-07-13T15:45:00-04:00"
            }
        ]
    },
    {
        "title": "EMILIO'S A MILLION CHAMELEONS",
        "url": "https://fringetoronto.com/fringe/show/emilios-million-chameleons",
        "venue": "Soulpepper Theatre's Michael Young Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 27,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-04T14:15:00-04:00",
                "end": "2025-07-04T15:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T22:15:00-04:00",
                "end": "2025-07-05T23:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-10T19:45:00-04:00",
                "end": "2025-07-10T20:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-12T16:00:00-04:00",
                "end": "2025-07-12T17:00:00-04:00"
            }
        ]
    },
    {
        "title": "The Ensemble",
        "url": "https://fringetoronto.com/fringe/show/ensemble",
        "venue": "Soulpepper Theatre's Michael Young Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 28,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T22:15:00-04:00",
                "end": "2025-07-03T23:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T19:45:00-04:00",
                "end": "2025-07-04T20:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T16:45:00-04:00",
                "end": "2025-07-05T17:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T16:00:00-04:00",
                "end": "2025-07-07T17:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T21:45:00-04:00",
                "end": "2025-07-10T22:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T17:30:00-04:00",
                "end": "2025-07-11T18:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T13:00:00-04:00",
                "end": "2025-07-13T14:00:00-04:00"
            }
        ]
    },
    {
        "title": "Everything You Do is a Balloon",
        "url": "https://fringetoronto.com/fringe/show/everything-you-do-balloon",
        "venue": "Soulpepper Theatre's TD Finance Studio",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 29,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T22:00:00-04:00",
                "end": "2025-07-02T23:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T18:00:00-04:00",
                "end": "2025-07-04T19:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T19:45:00-04:00",
                "end": "2025-07-06T20:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T18:00:00-04:00",
                "end": "2025-07-08T19:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-09T12:30:00-04:00",
                "end": "2025-07-09T13:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T14:30:00-04:00",
                "end": "2025-07-10T15:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T16:15:00-04:00",
                "end": "2025-07-11T17:15:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T14:30:00-04:00",
                "end": "2025-07-12T15:30:00-04:00"
            }
        ]
    },
    {
        "title": "Fish Tales - Reel Stories, Reel Magic. You'll be hooked!",
        "url": "https://fringetoronto.com/fringe/show/fish-tales-reel-stories-reel-magic-youll-be-hooked",
        "venue": "Soulpepper Theatre's Michael Young Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 30,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T15:15:00-04:00",
                "end": "2025-07-02T16:05:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T18:00:00-04:00",
                "end": "2025-07-04T18:50:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T20:15:00-04:00",
                "end": "2025-07-05T21:05:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T21:30:00-04:00",
                "end": "2025-07-07T22:20:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T16:00:00-04:00",
                "end": "2025-07-09T16:50:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T16:15:00-04:00",
                "end": "2025-07-10T17:05:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T22:00:00-04:00",
                "end": "2025-07-12T22:50:00-04:00"
            }
        ]
    },
    {
        "title": "Frat Haus: EVICTED!",
        "url": "https://fringetoronto.com/fringe/show/frat-haus-evicted",
        "venue": "Tallulah's Cabaret at Buddies in Bad Times",
        "address": "12 Alexander Street, Toronto, ON, M4Y 1B4",
        "id": 31,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T19:00:00-04:00",
                "end": "2025-07-02T20:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T21:00:00-04:00",
                "end": "2025-07-03T22:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-04T19:00:00-04:00",
                "end": "2025-07-04T20:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-05T15:00:00-04:00",
                "end": "2025-07-05T16:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-05T21:00:00-04:00",
                "end": "2025-07-05T22:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-06T13:00:00-04:00",
                "end": "2025-07-06T14:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-09T19:00:00-04:00",
                "end": "2025-07-09T20:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-10T21:00:00-04:00",
                "end": "2025-07-10T22:00:00-04:00"
            },
            {
                "id": 9,
                "flags": [],
                "start": "2025-07-11T21:00:00-04:00",
                "end": "2025-07-11T22:00:00-04:00"
            },
            {
                "id": 10,
                "flags": [],
                "start": "2025-07-12T13:00:00-04:00",
                "end": "2025-07-12T14:00:00-04:00"
            },
            {
                "id": 11,
                "flags": [],
                "start": "2025-07-12T19:00:00-04:00",
                "end": "2025-07-12T20:00:00-04:00"
            },
            {
                "id": 12,
                "flags": [],
                "start": "2025-07-13T15:00:00-04:00",
                "end": "2025-07-13T16:00:00-04:00"
            }
        ]
    },
    {
        "title": "Galen's Grocer",
        "url": "https://fringetoronto.com/fringe/show/galens-grocer",
        "venue": "Soulpepper Theatre's RBC Finance Studio",
        "address": "50 Tank House Lane, Toronto, ON, M5A 3C4",
        "id": 32,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T17:15:00-04:00",
                "end": "2025-07-03T18:10:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T22:00:00-04:00",
                "end": "2025-07-04T22:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T20:15:00-04:00",
                "end": "2025-07-06T21:10:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T14:30:00-04:00",
                "end": "2025-07-07T15:25:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T18:15:00-04:00",
                "end": "2025-07-08T19:10:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T20:15:00-04:00",
                "end": "2025-07-10T21:10:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T15:00:00-04:00",
                "end": "2025-07-11T15:55:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T16:45:00-04:00",
                "end": "2025-07-12T17:40:00-04:00"
            }
        ]
    },
    {
        "title": "Gaumukhi (Cow)",
        "url": "https://fringetoronto.com/fringe/show/gaumukhi-cow",
        "venue": "VideoCabaret - Deanne Taylor Theatre",
        "address": "10 Busy Street, Toronto, Ontario, M4M 1N8",
        "id": 33,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T19:45:00-04:00",
                "end": "2025-07-03T20:40:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T16:15:00-04:00",
                "end": "2025-07-05T17:10:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T14:15:00-04:00",
                "end": "2025-07-06T15:10:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-09T19:30:00-04:00",
                "end": "2025-07-09T20:25:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-10T17:45:00-04:00",
                "end": "2025-07-10T18:40:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T21:45:00-04:00",
                "end": "2025-07-11T22:40:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T14:15:00-04:00",
                "end": "2025-07-12T15:10:00-04:00"
            }
        ]
    },
    {
        "title": "Goosefeather Kamishibai",
        "url": "https://fringetoronto.com/fringe/show/goosefeather-kamishibai",
        "venue": "Soulpepper Theatre's Kevin & Roger Garland Cabaret",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 34,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T18:15:00-04:00",
                "end": "2025-07-03T18:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-04T15:45:00-04:00",
                "end": "2025-07-04T16:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T11:30:00-04:00",
                "end": "2025-07-05T12:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T17:30:00-04:00",
                "end": "2025-07-06T18:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-09T14:00:00-04:00",
                "end": "2025-07-09T14:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T11:15:00-04:00",
                "end": "2025-07-10T11:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-11T14:30:00-04:00",
                "end": "2025-07-11T15:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T17:30:00-04:00",
                "end": "2025-07-12T18:00:00-04:00"
            }
        ]
    },
    {
        "title": "Grown-Ass*d Broads Talkin' Dirty",
        "url": "https://fringetoronto.com/fringe/show/grown-assd-broads-talkin-dirty",
        "venue": "The Performing Arts Lodge Crest Theatre Green Room",
        "address": "110 The Esplanade, Toronto, Ontario, M5E 1X9",
        "id": 35,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T19:00:00-04:00",
                "end": "2025-07-02T20:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T19:00:00-04:00",
                "end": "2025-07-03T20:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-04T19:00:00-04:00",
                "end": "2025-07-04T20:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-05T19:00:00-04:00",
                "end": "2025-07-05T20:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-06T14:00:00-04:00",
                "end": "2025-07-06T15:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-09T19:00:00-04:00",
                "end": "2025-07-09T20:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-10T19:00:00-04:00",
                "end": "2025-07-10T20:15:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-11T19:00:00-04:00",
                "end": "2025-07-11T20:15:00-04:00"
            },
            {
                "id": 9,
                "flags": [],
                "start": "2025-07-12T19:00:00-04:00",
                "end": "2025-07-12T20:15:00-04:00"
            },
            {
                "id": 10,
                "flags": [],
                "start": "2025-07-13T14:00:00-04:00",
                "end": "2025-07-13T15:15:00-04:00"
            }
        ]
    },
    {
        "title": "Have Fun Kids",
        "url": "https://fringetoronto.com/fringe/show/have-fun-kids",
        "venue": "Soulpepper Theatre's Tank House Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, ON, M5A 3C4",
        "id": 36,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T14:15:00-04:00",
                "end": "2025-07-03T15:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T18:00:00-04:00",
                "end": "2025-07-04T19:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T12:15:00-04:00",
                "end": "2025-07-06T13:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T19:30:00-04:00",
                "end": "2025-07-08T20:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T21:45:00-04:00",
                "end": "2025-07-09T22:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T20:15:00-04:00",
                "end": "2025-07-11T21:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T14:45:00-04:00",
                "end": "2025-07-12T15:45:00-04:00"
            }
        ]
    },
    {
        "title": "Honey Never Spoils",
        "url": "https://fringetoronto.com/fringe/show/honey-never-spoils",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 37,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T14:00:00-04:00",
                "end": "2025-07-03T15:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T16:00:00-04:00",
                "end": "2025-07-04T17:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T22:00:00-04:00",
                "end": "2025-07-06T23:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T19:45:00-04:00",
                "end": "2025-07-07T21:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T14:00:00-04:00",
                "end": "2025-07-10T15:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T18:00:00-04:00",
                "end": "2025-07-11T19:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T19:30:00-04:00",
                "end": "2025-07-12T20:45:00-04:00"
            }
        ]
    },
    {
        "title": "Hoody",
        "url": "https://fringetoronto.com/fringe/show/hoody",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 38,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T13:15:00-04:00",
                "end": "2025-07-03T14:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T16:45:00-04:00",
                "end": "2025-07-04T17:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T14:45:00-04:00",
                "end": "2025-07-06T15:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T20:00:00-04:00",
                "end": "2025-07-07T21:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T22:00:00-04:00",
                "end": "2025-07-08T23:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T20:00:00-04:00",
                "end": "2025-07-10T21:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T11:30:00-04:00",
                "end": "2025-07-11T12:30:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T16:00:00-04:00",
                "end": "2025-07-13T17:00:00-04:00"
            }
        ]
    },
    {
        "title": "In his Time",
        "url": "https://fringetoronto.com/fringe/show/his-time",
        "venue": "Soulpepper Theatre's RBC Finance Studio",
        "address": "50 Tank House Lane, Toronto, ON, M5A 3C4",
        "id": 39,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T21:45:00-04:00",
                "end": "2025-07-02T22:40:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T19:00:00-04:00",
                "end": "2025-07-03T19:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T13:00:00-04:00",
                "end": "2025-07-05T13:55:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T16:45:00-04:00",
                "end": "2025-07-06T17:40:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T14:30:00-04:00",
                "end": "2025-07-09T15:25:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T18:30:00-04:00",
                "end": "2025-07-10T19:25:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T20:15:00-04:00",
                "end": "2025-07-11T21:10:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T15:15:00-04:00",
                "end": "2025-07-13T16:10:00-04:00"
            }
        ]
    },
    {
        "title": "In the Diving Bell",
        "url": "https://fringetoronto.com/fringe/show/diving-bell",
        "venue": "A Space Gallery",
        "address": "401 Richmond, Suite 110, Toronto, Ontario, M5V 3A8",
        "id": 40,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-04T21:00:00-04:00",
                "end": "2025-07-04T22:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T21:00:00-04:00",
                "end": "2025-07-05T22:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T15:00:00-04:00",
                "end": "2025-07-06T16:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T18:00:00-04:00",
                "end": "2025-07-07T19:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T18:00:00-04:00",
                "end": "2025-07-09T19:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T18:00:00-04:00",
                "end": "2025-07-10T19:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T21:00:00-04:00",
                "end": "2025-07-11T22:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T21:00:00-04:00",
                "end": "2025-07-12T22:00:00-04:00"
            },
            {
                "id": 9,
                "flags": [],
                "start": "2025-07-13T15:00:00-04:00",
                "end": "2025-07-13T16:00:00-04:00"
            }
        ]
    },
    {
        "title": "Iris (says goodbye)",
        "url": "https://fringetoronto.com/fringe/show/iris-says-goodbye",
        "venue": "Soulpepper Theatre's Michael Young Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 41,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T19:30:00-04:00",
                "end": "2025-07-02T21:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T14:30:00-04:00",
                "end": "2025-07-05T16:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T14:30:00-04:00",
                "end": "2025-07-06T16:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T19:45:00-04:00",
                "end": "2025-07-08T21:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T13:30:00-04:00",
                "end": "2025-07-09T15:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T22:00:00-04:00",
                "end": "2025-07-11T23:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T17:45:00-04:00",
                "end": "2025-07-12T19:15:00-04:00"
            }
        ]
    },
    {
        "title": "The Iron Mask",
        "url": "https://fringetoronto.com/fringe/show/iron-mask",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 42,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T15:45:00-04:00",
                "end": "2025-07-03T16:40:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T17:15:00-04:00",
                "end": "2025-07-04T18:10:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T14:30:00-04:00",
                "end": "2025-07-05T15:25:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T17:15:00-04:00",
                "end": "2025-07-08T18:10:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T22:00:00-04:00",
                "end": "2025-07-09T22:55:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T20:15:00-04:00",
                "end": "2025-07-12T21:10:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T15:30:00-04:00",
                "end": "2025-07-13T16:25:00-04:00"
            }
        ]
    },
    {
        "title": "It's Not So Bad",
        "url": "https://fringetoronto.com/fringe/show/its-not-so-bad",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 43,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-04T13:15:00-04:00",
                "end": "2025-07-04T14:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T18:30:00-04:00",
                "end": "2025-07-05T19:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T22:00:00-04:00",
                "end": "2025-07-06T23:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T20:00:00-04:00",
                "end": "2025-07-08T21:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T22:00:00-04:00",
                "end": "2025-07-09T23:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T14:45:00-04:00",
                "end": "2025-07-10T15:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T16:45:00-04:00",
                "end": "2025-07-12T17:45:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T19:30:00-04:00",
                "end": "2025-07-13T20:30:00-04:00"
            }
        ]
    },
    {
        "title": "Jack Goes to Therapy: A (Somewhat) Romantic Comedy",
        "url": "https://fringetoronto.com/fringe/show/jack-goes-therapy-somewhat-romantic-comedy",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 44,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-04T18:30:00-04:00",
                "end": "2025-07-04T19:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T14:45:00-04:00",
                "end": "2025-07-05T15:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-07T16:30:00-04:00",
                "end": "2025-07-07T17:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T20:15:00-04:00",
                "end": "2025-07-08T21:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T14:15:00-04:00",
                "end": "2025-07-09T15:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T16:00:00-04:00",
                "end": "2025-07-10T17:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T22:00:00-04:00",
                "end": "2025-07-11T23:00:00-04:00"
            }
        ]
    },
    {
        "title": "JACK'd...a Thief, a Murder, some Sex and a BEANSTALK!",
        "url": "https://fringetoronto.com/fringe/show/jackda-thief-murder-some-sex-and-beanstalk",
        "venue": "Rafos Hall, East End United",
        "address": "310 Danforth Avenue, Toronto, Ontario, M4K 1N6",
        "id": 45,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T19:00:00-04:00",
                "end": "2025-07-03T20:06:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "relaxed",
                    "closed-captioning",
                    "touch-tour"
                ],
                "start": "2025-07-04T16:00:00-04:00",
                "end": "2025-07-04T17:06:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T16:00:00-04:00",
                "end": "2025-07-06T17:06:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed",
                    "closed-captioning",
                    "touch-tour"
                ],
                "start": "2025-07-09T20:00:00-04:00",
                "end": "2025-07-09T21:06:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T20:00:00-04:00",
                "end": "2025-07-10T21:06:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T18:00:00-04:00",
                "end": "2025-07-11T19:06:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T20:00:00-04:00",
                "end": "2025-07-12T21:06:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T19:00:00-04:00",
                "end": "2025-07-13T20:06:00-04:00"
            }
        ]
    },
    {
        "title": "James & Eddie",
        "url": "https://fringetoronto.com/fringe/show/james-eddie",
        "venue": "Helen Gardiner Phelan Playhouse",
        "address": "79 Saint George St, Toronto, Ontario, M5S 3L8",
        "id": 46,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T17:45:00-04:00",
                "end": "2025-07-03T18:55:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T18:00:00-04:00",
                "end": "2025-07-04T19:10:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T12:30:00-04:00",
                "end": "2025-07-06T13:40:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T21:45:00-04:00",
                "end": "2025-07-08T22:55:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T18:00:00-04:00",
                "end": "2025-07-09T19:10:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T19:45:00-04:00",
                "end": "2025-07-10T20:55:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T14:30:00-04:00",
                "end": "2025-07-12T15:40:00-04:00"
            }
        ]
    },
    {
        "title": "Jimmy Hogg: The Potato King",
        "url": "https://fringetoronto.com/fringe/show/jimmy-hogg-potato-king",
        "venue": "VideoCabaret - Deanne Taylor Theatre",
        "address": "10 Busy Street, Toronto, Ontario, M4M 1N8",
        "id": 47,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T16:30:00-04:00",
                "end": "2025-07-02T17:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T22:15:00-04:00",
                "end": "2025-07-04T23:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T18:00:00-04:00",
                "end": "2025-07-05T19:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T19:45:00-04:00",
                "end": "2025-07-08T20:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T16:00:00-04:00",
                "end": "2025-07-10T17:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T14:15:00-04:00",
                "end": "2025-07-11T15:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T18:30:00-04:00",
                "end": "2025-07-13T19:30:00-04:00"
            }
        ]
    },
    {
        "title": "Judge Mintz",
        "url": "https://fringetoronto.com/fringe/show/judge-mintz",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 48,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T22:00:00-04:00",
                "end": "2025-07-02T23:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T20:00:00-04:00",
                "end": "2025-07-04T21:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T16:00:00-04:00",
                "end": "2025-07-06T17:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T14:00:00-04:00",
                "end": "2025-07-08T15:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T18:00:00-04:00",
                "end": "2025-07-10T19:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T21:45:00-04:00",
                "end": "2025-07-12T23:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T20:45:00-04:00",
                "end": "2025-07-13T22:00:00-04:00"
            }
        ]
    },
    {
        "title": "Justice For Maurice Henry Carter",
        "url": "https://fringetoronto.com/fringe/show/justice-maurice-henry-carter",
        "venue": "Soulpepper Theatre's Michael Young Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 49,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T18:00:00-04:00",
                "end": "2025-07-03T19:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T12:00:00-04:00",
                "end": "2025-07-05T13:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-06T19:15:00-04:00",
                "end": "2025-07-06T20:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T13:15:00-04:00",
                "end": "2025-07-08T14:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T21:45:00-04:00",
                "end": "2025-07-09T23:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T19:30:00-04:00",
                "end": "2025-07-11T21:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T21:45:00-04:00",
                "end": "2025-07-13T23:15:00-04:00"
            }
        ]
    },
    {
        "title": "Killy Willy",
        "url": "https://fringetoronto.com/fringe/show/killy-willy",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 50,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T18:00:00-04:00",
                "end": "2025-07-02T19:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T15:30:00-04:00",
                "end": "2025-07-04T16:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T20:15:00-04:00",
                "end": "2025-07-05T21:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T22:00:00-04:00",
                "end": "2025-07-07T23:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-10T13:30:00-04:00",
                "end": "2025-07-10T14:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T12:00:00-04:00",
                "end": "2025-07-12T13:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T19:30:00-04:00",
                "end": "2025-07-13T20:30:00-04:00"
            }
        ]
    },
    {
        "title": "Lucian, Plato, and the Secrets of the Pussy",
        "url": "https://fringetoronto.com/fringe/show/lucian-plato-and-secrets-pussy",
        "venue": "Soulpepper Theatre's Michael Young Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 51,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T22:00:00-04:00",
                "end": "2025-07-02T23:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T16:15:00-04:00",
                "end": "2025-07-04T17:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-07T19:30:00-04:00",
                "end": "2025-07-07T20:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T22:15:00-04:00",
                "end": "2025-07-08T23:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-10T14:15:00-04:00",
                "end": "2025-07-10T15:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T14:00:00-04:00",
                "end": "2025-07-11T15:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T20:00:00-04:00",
                "end": "2025-07-12T21:00:00-04:00"
            }
        ]
    },
    {
        "title": "Lulu",
        "url": "https://fringetoronto.com/fringe/show/lulu",
        "venue": "Soulpepper Theatre's Tank House Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, ON, M5A 3C4",
        "id": 52,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T18:00:00-04:00",
                "end": "2025-07-03T19:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T21:45:00-04:00",
                "end": "2025-07-04T22:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T19:30:00-04:00",
                "end": "2025-07-05T20:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-09T13:45:00-04:00",
                "end": "2025-07-09T14:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T21:45:00-04:00",
                "end": "2025-07-10T22:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T12:30:00-04:00",
                "end": "2025-07-12T13:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T19:30:00-04:00",
                "end": "2025-07-13T20:30:00-04:00"
            }
        ]
    },
    {
        "title": "Mathew's Big Broadway Bash",
        "url": "https://fringetoronto.com/fringe/show/mathews-big-broadway-bash",
        "venue": "Heliconian Club",
        "address": "35 Hazelton Ave, Toronto, Ontario, M5R 2E3",
        "id": 53,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T19:00:00-04:00",
                "end": "2025-07-03T20:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T19:00:00-04:00",
                "end": "2025-07-04T20:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T19:00:00-04:00",
                "end": "2025-07-05T20:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-06T15:00:00-04:00",
                "end": "2025-07-06T16:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T19:00:00-04:00",
                "end": "2025-07-08T20:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-09T19:00:00-04:00",
                "end": "2025-07-09T20:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-10T19:00:00-04:00",
                "end": "2025-07-10T20:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-11T19:00:00-04:00",
                "end": "2025-07-11T20:00:00-04:00"
            },
            {
                "id": 9,
                "flags": [],
                "start": "2025-07-12T15:00:00-04:00",
                "end": "2025-07-12T16:00:00-04:00"
            },
            {
                "id": 10,
                "flags": [],
                "start": "2025-07-12T19:00:00-04:00",
                "end": "2025-07-12T20:00:00-04:00"
            }
        ]
    },
    {
        "title": "Me and You and the Highland Coo",
        "url": "https://fringetoronto.com/fringe/show/me-and-you-and-highland-coo",
        "venue": "Soulpepper Theatre's TD Finance Studio",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 54,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T20:00:00-04:00",
                "end": "2025-07-02T21:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T16:15:00-04:00",
                "end": "2025-07-04T17:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T21:45:00-04:00",
                "end": "2025-07-05T22:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T16:00:00-04:00",
                "end": "2025-07-07T17:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-08T12:30:00-04:00",
                "end": "2025-07-08T13:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T19:45:00-04:00",
                "end": "2025-07-10T20:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T14:30:00-04:00",
                "end": "2025-07-11T15:30:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T16:45:00-04:00",
                "end": "2025-07-13T17:45:00-04:00"
            }
        ]
    },
    {
        "title": "Milk Milk Lemonade",
        "url": "https://fringetoronto.com/fringe/show/milk-milk-lemonade",
        "venue": "Soulpepper Theatre's RBC Finance Studio",
        "address": "50 Tank House Lane, Toronto, ON, M5A 3C4",
        "id": 55,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T15:15:00-04:00",
                "end": "2025-07-03T16:10:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T18:30:00-04:00",
                "end": "2025-07-05T19:25:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T13:00:00-04:00",
                "end": "2025-07-06T13:55:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T20:00:00-04:00",
                "end": "2025-07-07T20:55:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T22:00:00-04:00",
                "end": "2025-07-08T22:55:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-09T20:00:00-04:00",
                "end": "2025-07-09T20:55:00-04:00"
            },
            {
                "id": 7,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-11T13:00:00-04:00",
                "end": "2025-07-11T13:55:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T18:30:00-04:00",
                "end": "2025-07-12T19:25:00-04:00"
            }
        ]
    },
    {
        "title": "MUTUAL AIM",
        "url": "https://fringetoronto.com/fringe/show/mutual-aim",
        "venue": "Helen Gardiner Phelan Playhouse",
        "address": "79 Saint George St, Toronto, Ontario, M5S 3L8",
        "id": 56,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T16:00:00-04:00",
                "end": "2025-07-03T16:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T22:15:00-04:00",
                "end": "2025-07-05T23:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-07T18:30:00-04:00",
                "end": "2025-07-07T19:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-09T16:15:00-04:00",
                "end": "2025-07-09T17:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T12:30:00-04:00",
                "end": "2025-07-10T13:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T15:00:00-04:00",
                "end": "2025-07-11T15:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T20:00:00-04:00",
                "end": "2025-07-13T20:45:00-04:00"
            }
        ]
    },
    {
        "title": "My Loneliness Is Killing You",
        "url": "https://fringetoronto.com/fringe/show/my-loneliness-killing-you",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 57,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T18:30:00-04:00",
                "end": "2025-07-03T19:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T15:00:00-04:00",
                "end": "2025-07-05T16:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T16:30:00-04:00",
                "end": "2025-07-06T17:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T22:00:00-04:00",
                "end": "2025-07-07T23:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T14:45:00-04:00",
                "end": "2025-07-08T15:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T20:15:00-04:00",
                "end": "2025-07-11T21:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T18:30:00-04:00",
                "end": "2025-07-12T19:30:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T21:30:00-04:00",
                "end": "2025-07-13T22:30:00-04:00"
            }
        ]
    },
    {
        "title": "My Pet Lizard, Liz: The Shakespearean Existential Crisis that Led to His Ultimate Demise",
        "url": "https://fringetoronto.com/fringe/show/my-pet-lizard-liz-shakespearean-existential-crisis-led-his-ultimate-demise",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 58,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "relaxed",
                    "closed-captioning",
                    "preview"
                ],
                "start": "2025-07-02T21:30:00-04:00",
                "end": "2025-07-02T22:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "relaxed",
                    "closed-captioning"
                ],
                "start": "2025-07-03T20:15:00-04:00",
                "end": "2025-07-03T21:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed",
                    "closed-captioning"
                ],
                "start": "2025-07-05T13:15:00-04:00",
                "end": "2025-07-05T14:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed",
                    "closed-captioning"
                ],
                "start": "2025-07-06T18:15:00-04:00",
                "end": "2025-07-06T19:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed",
                    "closed-captioning"
                ],
                "start": "2025-07-09T14:45:00-04:00",
                "end": "2025-07-09T15:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed",
                    "closed-captioning"
                ],
                "start": "2025-07-10T16:30:00-04:00",
                "end": "2025-07-10T17:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [
                    "relaxed",
                    "closed-captioning"
                ],
                "start": "2025-07-11T16:45:00-04:00",
                "end": "2025-07-11T17:45:00-04:00"
            },
            {
                "id": 8,
                "flags": [
                    "relaxed",
                    "closed-captioning"
                ],
                "start": "2025-07-12T13:15:00-04:00",
                "end": "2025-07-12T14:15:00-04:00"
            }
        ]
    },
    {
        "title": "Nearly Departed",
        "url": "https://fringetoronto.com/fringe/show/nearly-departed",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 59,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T15:00:00-04:00",
                "end": "2025-07-03T15:50:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T20:15:00-04:00",
                "end": "2025-07-04T21:05:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T13:00:00-04:00",
                "end": "2025-07-06T13:50:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T16:30:00-04:00",
                "end": "2025-07-07T17:20:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T18:15:00-04:00",
                "end": "2025-07-09T19:05:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T13:00:00-04:00",
                "end": "2025-07-10T13:50:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T18:30:00-04:00",
                "end": "2025-07-11T19:20:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T22:15:00-04:00",
                "end": "2025-07-12T23:05:00-04:00"
            }
        ]
    },
    {
        "title": "Oh! I Miss the War",
        "url": "https://fringetoronto.com/fringe/show/oh-i-miss-war",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 60,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T21:00:00-04:00",
                "end": "2025-07-02T22:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T19:15:00-04:00",
                "end": "2025-07-04T20:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "asl"
                ],
                "start": "2025-07-06T13:45:00-04:00",
                "end": "2025-07-06T14:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T16:00:00-04:00",
                "end": "2025-07-07T17:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T20:30:00-04:00",
                "end": "2025-07-10T21:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T14:30:00-04:00",
                "end": "2025-07-12T15:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T17:00:00-04:00",
                "end": "2025-07-13T18:00:00-04:00"
            }
        ]
    },
    {
        "title": "Paper Chase",
        "url": "https://fringetoronto.com/fringe/show/paper-chase",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 61,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T20:00:00-04:00",
                "end": "2025-07-02T20:50:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T21:45:00-04:00",
                "end": "2025-07-03T22:35:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T17:45:00-04:00",
                "end": "2025-07-05T18:35:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T22:00:00-04:00",
                "end": "2025-07-08T22:50:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T19:30:00-04:00",
                "end": "2025-07-09T20:20:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T22:00:00-04:00",
                "end": "2025-07-11T22:50:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T16:00:00-04:00",
                "end": "2025-07-12T16:50:00-04:00"
            }
        ]
    },
    {
        "title": "A Part of the Story",
        "url": "https://fringetoronto.com/fringe/show/part-story",
        "venue": "Soulpepper Theatre's RBC Finance Studio",
        "address": "50 Tank House Lane, Toronto, ON, M5A 3C4",
        "id": 62,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T16:00:00-04:00",
                "end": "2025-07-02T16:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T20:00:00-04:00",
                "end": "2025-07-04T20:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T22:15:00-04:00",
                "end": "2025-07-05T23:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-09T16:30:00-04:00",
                "end": "2025-07-09T17:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-11T18:30:00-04:00",
                "end": "2025-07-11T19:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T15:00:00-04:00",
                "end": "2025-07-12T15:45:00-04:00"
            }
        ]
    },
    {
        "title": "People Suck: a musical airing of grievances",
        "url": "https://fringetoronto.com/fringe/show/people-suck-musical-airing-grievances",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 63,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T15:45:00-04:00",
                "end": "2025-07-02T17:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T21:30:00-04:00",
                "end": "2025-07-04T23:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T19:00:00-04:00",
                "end": "2025-07-06T20:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T15:00:00-04:00",
                "end": "2025-07-07T16:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T19:00:00-04:00",
                "end": "2025-07-08T20:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T15:30:00-04:00",
                "end": "2025-07-10T17:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T18:00:00-04:00",
                "end": "2025-07-12T19:30:00-04:00"
            }
        ]
    },
    {
        "title": "The perils of being born in the Fall",
        "url": "https://fringetoronto.com/fringe/show/perils-being-born-fall",
        "venue": "Helen Gardiner Phelan Playhouse",
        "address": "79 Saint George St, Toronto, Ontario, M5S 3L8",
        "id": 64,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "relaxed",
                    "preview"
                ],
                "start": "2025-07-02T17:00:00-04:00",
                "end": "2025-07-02T17:55:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-04T20:15:00-04:00",
                "end": "2025-07-04T21:10:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-05T13:00:00-04:00",
                "end": "2025-07-05T13:55:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-07T16:45:00-04:00",
                "end": "2025-07-07T17:40:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-08T14:30:00-04:00",
                "end": "2025-07-08T15:25:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-10T16:15:00-04:00",
                "end": "2025-07-10T17:10:00-04:00"
            },
            {
                "id": 7,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-12T22:15:00-04:00",
                "end": "2025-07-12T23:10:00-04:00"
            }
        ]
    },
    {
        "title": "Plan V: The Rise of Reverence",
        "url": "https://fringetoronto.com/fringe/show/plan-v-rise-reverence",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 65,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T18:30:00-04:00",
                "end": "2025-07-03T19:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T18:15:00-04:00",
                "end": "2025-07-05T19:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T22:15:00-04:00",
                "end": "2025-07-06T23:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-09T19:30:00-04:00",
                "end": "2025-07-09T20:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T14:15:00-04:00",
                "end": "2025-07-10T15:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T22:00:00-04:00",
                "end": "2025-07-12T23:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T16:00:00-04:00",
                "end": "2025-07-13T17:00:00-04:00"
            }
        ]
    },
    {
        "title": "A Play We Just Wrote Just Now",
        "url": "https://fringetoronto.com/fringe/show/play-we-just-wrote-just-now",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 66,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T16:00:00-04:00",
                "end": "2025-07-02T17:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T18:30:00-04:00",
                "end": "2025-07-04T19:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T11:30:00-04:00",
                "end": "2025-07-05T12:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T18:15:00-04:00",
                "end": "2025-07-07T19:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T13:00:00-04:00",
                "end": "2025-07-08T14:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T22:00:00-04:00",
                "end": "2025-07-10T23:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T15:00:00-04:00",
                "end": "2025-07-11T16:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T20:15:00-04:00",
                "end": "2025-07-12T21:15:00-04:00"
            }
        ]
    },
    {
        "title": "Playground",
        "url": "https://fringetoronto.com/fringe/show/playground",
        "venue": "Soulpepper Theatre's Kevin & Roger Garland Cabaret",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 67,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T17:30:00-04:00",
                "end": "2025-07-02T18:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T14:00:00-04:00",
                "end": "2025-07-04T15:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T17:30:00-04:00",
                "end": "2025-07-05T18:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T18:15:00-04:00",
                "end": "2025-07-08T19:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T12:00:00-04:00",
                "end": "2025-07-09T13:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-10T16:00:00-04:00",
                "end": "2025-07-10T17:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T11:15:00-04:00",
                "end": "2025-07-12T12:15:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T12:45:00-04:00",
                "end": "2025-07-13T13:45:00-04:00"
            }
        ]
    },
    {
        "title": "PORNSTAR(i)",
        "url": "https://fringetoronto.com/fringe/show/pornstari",
        "venue": "Soulpepper Theatre's RBC Finance Studio",
        "address": "50 Tank House Lane, Toronto, ON, M5A 3C4",
        "id": 68,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-04T14:30:00-04:00",
                "end": "2025-07-04T15:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T20:15:00-04:00",
                "end": "2025-07-05T21:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T22:15:00-04:00",
                "end": "2025-07-06T23:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T16:30:00-04:00",
                "end": "2025-07-07T17:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T18:15:00-04:00",
                "end": "2025-07-09T19:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T15:00:00-04:00",
                "end": "2025-07-10T16:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T22:15:00-04:00",
                "end": "2025-07-12T23:15:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T17:00:00-04:00",
                "end": "2025-07-13T18:00:00-04:00"
            }
        ]
    },
    {
        "title": "Potato Potato",
        "url": "https://fringetoronto.com/fringe/show/potato-potato",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 69,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T19:15:00-04:00",
                "end": "2025-07-03T20:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T12:00:00-04:00",
                "end": "2025-07-05T13:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T21:30:00-04:00",
                "end": "2025-07-06T23:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T19:30:00-04:00",
                "end": "2025-07-07T21:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T21:30:00-04:00",
                "end": "2025-07-10T23:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T21:30:00-04:00",
                "end": "2025-07-11T23:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T17:15:00-04:00",
                "end": "2025-07-13T18:45:00-04:00"
            }
        ]
    },
    {
        "title": "Puzzles",
        "url": "https://fringetoronto.com/fringe/show/puzzles",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 70,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T15:00:00-04:00",
                "end": "2025-07-03T16:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T16:30:00-04:00",
                "end": "2025-07-05T17:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T20:15:00-04:00",
                "end": "2025-07-06T21:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T22:15:00-04:00",
                "end": "2025-07-08T23:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T21:30:00-04:00",
                "end": "2025-07-09T22:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T19:30:00-04:00",
                "end": "2025-07-10T20:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T16:30:00-04:00",
                "end": "2025-07-12T17:30:00-04:00"
            }
        ]
    },
    {
        "title": "Quiltro",
        "url": "https://fringetoronto.com/fringe/show/quiltro",
        "venue": "Soulpepper Theatre's TD Finance Studio",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 71,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T16:15:00-04:00",
                "end": "2025-07-02T17:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T19:45:00-04:00",
                "end": "2025-07-04T20:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T14:30:00-04:00",
                "end": "2025-07-05T15:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T12:30:00-04:00",
                "end": "2025-07-06T13:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T16:15:00-04:00",
                "end": "2025-07-08T17:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-09T18:00:00-04:00",
                "end": "2025-07-09T19:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-10T21:45:00-04:00",
                "end": "2025-07-10T22:45:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T18:00:00-04:00",
                "end": "2025-07-12T19:00:00-04:00"
            }
        ]
    },
    {
        "title": "Quiz Icarus",
        "url": "https://fringetoronto.com/fringe/show/quiz-icarus",
        "venue": "Helen Gardiner Phelan Playhouse",
        "address": "79 Saint George St, Toronto, Ontario, M5S 3L8",
        "id": 72,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T22:30:00-04:00",
                "end": "2025-07-02T23:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T20:00:00-04:00",
                "end": "2025-07-03T21:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T15:00:00-04:00",
                "end": "2025-07-05T16:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T16:45:00-04:00",
                "end": "2025-07-06T17:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T12:30:00-04:00",
                "end": "2025-07-08T13:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T18:30:00-04:00",
                "end": "2025-07-11T19:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T22:00:00-04:00",
                "end": "2025-07-13T23:00:00-04:00"
            }
        ]
    },
    {
        "title": "Reborn",
        "url": "https://fringetoronto.com/fringe/show/reborn",
        "venue": "Theatre Passe Muraille Mainspace",
        "address": "16 Ryerson Ave, Toronto, Ontario, M5T 2P3",
        "id": 73,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T17:30:00-04:00",
                "end": "2025-07-03T18:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T22:15:00-04:00",
                "end": "2025-07-05T23:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T17:15:00-04:00",
                "end": "2025-07-06T18:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-08T15:30:00-04:00",
                "end": "2025-07-08T16:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T19:30:00-04:00",
                "end": "2025-07-10T20:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T13:00:00-04:00",
                "end": "2025-07-11T14:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T16:15:00-04:00",
                "end": "2025-07-12T17:15:00-04:00"
            }
        ]
    },
    {
        "title": "Regarding Antigone",
        "url": "https://fringetoronto.com/fringe/show/regarding-antigone",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 74,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T19:30:00-04:00",
                "end": "2025-07-02T20:25:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T15:00:00-04:00",
                "end": "2025-07-04T15:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T22:15:00-04:00",
                "end": "2025-07-05T23:10:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T20:00:00-04:00",
                "end": "2025-07-06T20:55:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-07T14:45:00-04:00",
                "end": "2025-07-07T15:40:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-09T16:30:00-04:00",
                "end": "2025-07-09T17:25:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T11:30:00-04:00",
                "end": "2025-07-12T12:25:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T17:45:00-04:00",
                "end": "2025-07-13T18:40:00-04:00"
            }
        ]
    },
    {
        "title": "The Rhinoceros Collective",
        "url": "https://fringetoronto.com/fringe/show/rhinoceros-collective",
        "venue": "Helen Gardiner Phelan Playhouse",
        "address": "79 Saint George St, Toronto, Ontario, M5S 3L8",
        "id": 75,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T14:00:00-04:00",
                "end": "2025-07-03T14:59:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T16:45:00-04:00",
                "end": "2025-07-05T17:44:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T18:30:00-04:00",
                "end": "2025-07-06T19:29:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-07T13:00:00-04:00",
                "end": "2025-07-07T13:59:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T16:15:00-04:00",
                "end": "2025-07-08T17:14:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T22:15:00-04:00",
                "end": "2025-07-11T23:14:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T20:15:00-04:00",
                "end": "2025-07-12T21:14:00-04:00"
            }
        ]
    },
    {
        "title": "Screamin' In The Rain",
        "url": "https://fringetoronto.com/fringe/show/screamin-rain",
        "venue": "The Canadian Music Centre",
        "address": "20 St Joseph Street, Toronto, Ontario, M4Y 1J9",
        "id": 76,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T20:00:00-04:00",
                "end": "2025-07-02T20:50:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T20:00:00-04:00",
                "end": "2025-07-03T20:50:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-04T20:00:00-04:00",
                "end": "2025-07-04T20:50:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-05T20:00:00-04:00",
                "end": "2025-07-05T20:50:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-06T14:00:00-04:00",
                "end": "2025-07-06T14:50:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-08T20:00:00-04:00",
                "end": "2025-07-08T20:50:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-09T20:00:00-04:00",
                "end": "2025-07-09T20:50:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-10T20:00:00-04:00",
                "end": "2025-07-10T20:50:00-04:00"
            },
            {
                "id": 9,
                "flags": [],
                "start": "2025-07-11T20:00:00-04:00",
                "end": "2025-07-11T20:50:00-04:00"
            },
            {
                "id": 10,
                "flags": [],
                "start": "2025-07-12T20:00:00-04:00",
                "end": "2025-07-12T20:50:00-04:00"
            },
            {
                "id": 11,
                "flags": [],
                "start": "2025-07-13T14:00:00-04:00",
                "end": "2025-07-13T14:50:00-04:00"
            }
        ]
    },
    {
        "title": "Self Helpless: The Sketch Show",
        "url": "https://fringetoronto.com/fringe/show/self-helpless-sketch-show",
        "venue": "Soulpepper Theatre's RBC Finance Studio",
        "address": "50 Tank House Lane, Toronto, ON, M5A 3C4",
        "id": 77,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-04T16:30:00-04:00",
                "end": "2025-07-04T17:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-06T18:30:00-04:00",
                "end": "2025-07-06T19:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-07T22:00:00-04:00",
                "end": "2025-07-07T23:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T20:00:00-04:00",
                "end": "2025-07-08T21:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T22:00:00-04:00",
                "end": "2025-07-09T23:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T22:15:00-04:00",
                "end": "2025-07-10T23:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T20:15:00-04:00",
                "end": "2025-07-12T21:15:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T13:15:00-04:00",
                "end": "2025-07-13T14:15:00-04:00"
            }
        ]
    },
    {
        "title": "SEX GODDESS",
        "url": "https://fringetoronto.com/fringe/show/sex-goddess",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 78,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T16:45:00-04:00",
                "end": "2025-07-03T17:40:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T22:15:00-04:00",
                "end": "2025-07-04T23:10:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T16:45:00-04:00",
                "end": "2025-07-05T17:40:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T13:00:00-04:00",
                "end": "2025-07-07T13:55:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T18:15:00-04:00",
                "end": "2025-07-08T19:10:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-09T20:00:00-04:00",
                "end": "2025-07-09T20:55:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T13:15:00-04:00",
                "end": "2025-07-11T14:10:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T15:00:00-04:00",
                "end": "2025-07-12T15:55:00-04:00"
            }
        ]
    },
    {
        "title": "A Sexy Pigeon Show",
        "url": "https://fringetoronto.com/fringe/show/sexy-pigeon-show",
        "venue": "Soulpepper Theatre's TD Finance Studio",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 79,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T18:00:00-04:00",
                "end": "2025-07-03T18:55:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T19:45:00-04:00",
                "end": "2025-07-05T20:40:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T14:30:00-04:00",
                "end": "2025-07-06T15:25:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T19:30:00-04:00",
                "end": "2025-07-07T20:25:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T21:45:00-04:00",
                "end": "2025-07-09T22:40:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-10T16:15:00-04:00",
                "end": "2025-07-10T17:10:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T21:45:00-04:00",
                "end": "2025-07-11T22:40:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T13:00:00-04:00",
                "end": "2025-07-13T13:55:00-04:00"
            }
        ]
    },
    {
        "title": "Silence",
        "url": "https://fringetoronto.com/fringe/show/silence",
        "venue": "Helen Gardiner Phelan Playhouse",
        "address": "79 Saint George St, Toronto, Ontario, M5S 3L8",
        "id": 80,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T15:15:00-04:00",
                "end": "2025-07-02T16:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T16:15:00-04:00",
                "end": "2025-07-04T17:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T22:15:00-04:00",
                "end": "2025-07-06T23:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T19:45:00-04:00",
                "end": "2025-07-08T20:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T14:30:00-04:00",
                "end": "2025-07-09T15:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T13:00:00-04:00",
                "end": "2025-07-11T14:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T18:30:00-04:00",
                "end": "2025-07-12T19:30:00-04:00"
            }
        ]
    },
    {
        "title": "The Singing Psychic Game Show",
        "url": "https://fringetoronto.com/fringe/show/singing-psychic-game-show",
        "venue": "Soulpepper Theatre's Tank House Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, ON, M5A 3C4",
        "id": 81,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-02T17:00:00-04:00",
                "end": "2025-07-02T18:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T22:00:00-04:00",
                "end": "2025-07-03T23:00:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T15:45:00-04:00",
                "end": "2025-07-05T16:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T16:15:00-04:00",
                "end": "2025-07-06T17:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T17:45:00-04:00",
                "end": "2025-07-09T18:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T14:30:00-04:00",
                "end": "2025-07-11T15:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T20:00:00-04:00",
                "end": "2025-07-12T21:00:00-04:00"
            }
        ]
    },
    {
        "title": "Siranoush",
        "url": "https://fringetoronto.com/fringe/show/siranoush",
        "venue": "Soulpepper Theatre's Tank House Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, ON, M5A 3C4",
        "id": 82,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T19:00:00-04:00",
                "end": "2025-07-02T20:20:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T13:30:00-04:00",
                "end": "2025-07-04T14:50:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T21:45:00-04:00",
                "end": "2025-07-05T23:05:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T17:00:00-04:00",
                "end": "2025-07-08T18:20:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T19:15:00-04:00",
                "end": "2025-07-10T20:35:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T12:00:00-04:00",
                "end": "2025-07-11T13:20:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T17:15:00-04:00",
                "end": "2025-07-13T18:35:00-04:00"
            }
        ]
    },
    {
        "title": "Siya: The Debut",
        "url": "https://fringetoronto.com/fringe/show/siya-debut",
        "venue": "VideoCabaret - Deanne Taylor Theatre",
        "address": "10 Busy Street, Toronto, Ontario, M4M 1N8",
        "id": 83,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T17:45:00-04:00",
                "end": "2025-07-03T18:55:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T14:15:00-04:00",
                "end": "2025-07-05T15:25:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-06T19:30:00-04:00",
                "end": "2025-07-06T20:40:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-09T21:30:00-04:00",
                "end": "2025-07-09T22:40:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-12T19:45:00-04:00",
                "end": "2025-07-12T20:55:00-04:00"
            }
        ]
    },
    {
        "title": "Something to Look Forward To",
        "url": "https://fringetoronto.com/fringe/show/something-look-forward",
        "venue": "VideoCabaret - Deanne Taylor Theatre",
        "address": "10 Busy Street, Toronto, Ontario, M4M 1N8",
        "id": 84,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T20:15:00-04:00",
                "end": "2025-07-02T21:10:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T16:45:00-04:00",
                "end": "2025-07-04T17:40:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T21:45:00-04:00",
                "end": "2025-07-06T22:40:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T17:45:00-04:00",
                "end": "2025-07-08T18:40:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T16:00:00-04:00",
                "end": "2025-07-09T16:55:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T19:30:00-04:00",
                "end": "2025-07-10T20:25:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T12:30:00-04:00",
                "end": "2025-07-12T13:25:00-04:00"
            }
        ]
    },
    {
        "title": "Songs by a WANNABE",
        "url": "https://fringetoronto.com/fringe/show/songs-wannabe",
        "venue": "Soulpepper Theatre's Michael Young Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 85,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T17:30:00-04:00",
                "end": "2025-07-02T18:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T22:00:00-04:00",
                "end": "2025-07-04T23:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T17:00:00-04:00",
                "end": "2025-07-06T18:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T13:45:00-04:00",
                "end": "2025-07-07T15:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T17:45:00-04:00",
                "end": "2025-07-08T19:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T12:00:00-04:00",
                "end": "2025-07-12T13:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T19:15:00-04:00",
                "end": "2025-07-13T20:30:00-04:00"
            }
        ]
    },
    {
        "title": "Stealing Home",
        "url": "https://fringetoronto.com/fringe/show/stealing-home",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 86,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-04T16:45:00-04:00",
                "end": "2025-07-04T17:40:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T20:00:00-04:00",
                "end": "2025-07-05T20:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-08T18:30:00-04:00",
                "end": "2025-07-08T19:25:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-10T21:30:00-04:00",
                "end": "2025-07-10T22:25:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-11T18:15:00-04:00",
                "end": "2025-07-11T19:10:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T13:00:00-04:00",
                "end": "2025-07-12T13:55:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T14:15:00-04:00",
                "end": "2025-07-13T15:10:00-04:00"
            }
        ]
    },
    {
        "title": "String of Pearls",
        "url": "https://fringetoronto.com/fringe/show/string-pearls",
        "venue": "Helen Gardiner Phelan Playhouse",
        "address": "79 Saint George St, Toronto, Ontario, M5S 3L8",
        "id": 87,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T13:15:00-04:00",
                "end": "2025-07-02T14:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-04T14:30:00-04:00",
                "end": "2025-07-04T15:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T20:15:00-04:00",
                "end": "2025-07-06T21:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T22:15:00-04:00",
                "end": "2025-07-07T23:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T20:15:00-04:00",
                "end": "2025-07-09T21:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T14:30:00-04:00",
                "end": "2025-07-10T15:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T16:45:00-04:00",
                "end": "2025-07-12T17:30:00-04:00"
            }
        ]
    },
    {
        "title": "Stroke of Genius: Pantomime Masturbation Throughout Performing Arts History",
        "url": "https://fringetoronto.com/fringe/show/stroke-genius-pantomime-masturbation-throughout-performing-arts-history",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 88,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T16:15:00-04:00",
                "end": "2025-07-03T17:11:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T12:15:00-04:00",
                "end": "2025-07-05T13:11:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T20:00:00-04:00",
                "end": "2025-07-06T20:56:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T22:00:00-04:00",
                "end": "2025-07-07T22:56:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T17:45:00-04:00",
                "end": "2025-07-09T18:41:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T14:30:00-04:00",
                "end": "2025-07-11T15:26:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T17:00:00-04:00",
                "end": "2025-07-13T17:56:00-04:00"
            }
        ]
    },
    {
        "title": "Sweet & Sultry Burlesque",
        "url": "https://fringetoronto.com/fringe/show/sweet-sultry-burlesque",
        "venue": "Helen Gardiner Phelan Playhouse",
        "address": "79 Saint George St, Toronto, Ontario, M5S 3L8",
        "id": 89,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T20:30:00-04:00",
                "end": "2025-07-02T21:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T22:15:00-04:00",
                "end": "2025-07-04T23:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T15:00:00-04:00",
                "end": "2025-07-06T16:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T20:15:00-04:00",
                "end": "2025-07-07T21:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T22:15:00-04:00",
                "end": "2025-07-10T23:15:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T12:30:00-04:00",
                "end": "2025-07-12T13:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T18:15:00-04:00",
                "end": "2025-07-13T19:15:00-04:00"
            }
        ]
    },
    {
        "title": "SWEET ACTION THEATRE Presents UFC 3: No Laughing Matter",
        "url": "https://fringetoronto.com/fringe/show/sweet-action-theatre-presents-ufc-3-no-laughing-matter",
        "venue": "Sweet Action Theatre",
        "address": "180 Shaw St, Unit #106, Toronto, ON, M6J 2W5",
        "id": 90,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T19:30:00-04:00",
                "end": "2025-07-03T20:30:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T19:30:00-04:00",
                "end": "2025-07-04T20:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T19:30:00-04:00",
                "end": "2025-07-05T20:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T19:30:00-04:00",
                "end": "2025-07-06T20:30:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T19:30:00-04:00",
                "end": "2025-07-08T20:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T19:30:00-04:00",
                "end": "2025-07-10T20:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T19:30:00-04:00",
                "end": "2025-07-11T20:30:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T19:30:00-04:00",
                "end": "2025-07-12T20:30:00-04:00"
            }
        ]
    },
    {
        "title": "Tamar Broadbent: Plus One",
        "url": "https://fringetoronto.com/fringe/show/tamar-broadbent-plus-one",
        "venue": "Alumnae Theatre Mainspace",
        "address": "70 Berkeley Street, Toronto, Ontario, M5A 2W6",
        "id": 91,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-04T15:00:00-04:00",
                "end": "2025-07-04T16:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-06T16:45:00-04:00",
                "end": "2025-07-06T17:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-07T18:15:00-04:00",
                "end": "2025-07-07T19:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T15:00:00-04:00",
                "end": "2025-07-08T16:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T17:45:00-04:00",
                "end": "2025-07-09T18:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T13:00:00-04:00",
                "end": "2025-07-11T14:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T20:00:00-04:00",
                "end": "2025-07-12T21:00:00-04:00"
            }
        ]
    },
    {
        "title": "Temple of Desire",
        "url": "https://fringetoronto.com/fringe/show/temple-desire",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 92,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-04T14:30:00-04:00",
                "end": "2025-07-04T15:25:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T17:00:00-04:00",
                "end": "2025-07-05T17:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-09T13:45:00-04:00",
                "end": "2025-07-09T14:40:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-10T16:00:00-04:00",
                "end": "2025-07-10T16:55:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-11T19:15:00-04:00",
                "end": "2025-07-11T20:10:00-04:00"
            }
        ]
    },
    {
        "title": "Terrible Fish",
        "url": "https://fringetoronto.com/fringe/show/terrible-fish",
        "venue": "Soulpepper Theatre's TD Finance Studio",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 93,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T19:45:00-04:00",
                "end": "2025-07-03T20:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T21:45:00-04:00",
                "end": "2025-07-04T22:45:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T16:15:00-04:00",
                "end": "2025-07-05T17:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T18:00:00-04:00",
                "end": "2025-07-06T19:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-07T14:00:00-04:00",
                "end": "2025-07-07T15:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-08T14:30:00-04:00",
                "end": "2025-07-08T15:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T18:00:00-04:00",
                "end": "2025-07-11T19:00:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-12T12:30:00-04:00",
                "end": "2025-07-12T13:30:00-04:00"
            }
        ]
    },
    {
        "title": "Things My Dad Kept",
        "url": "https://fringetoronto.com/fringe/show/things-my-dad-kept",
        "venue": "Soulpepper Theatre's TD Finance Studio",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 94,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-03T16:00:00-04:00",
                "end": "2025-07-03T17:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-05T12:30:00-04:00",
                "end": "2025-07-05T13:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-06T16:15:00-04:00",
                "end": "2025-07-06T17:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-08T21:45:00-04:00",
                "end": "2025-07-08T22:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-09T14:30:00-04:00",
                "end": "2025-07-09T15:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-11T19:45:00-04:00",
                "end": "2025-07-11T20:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-12T21:45:00-04:00",
                "end": "2025-07-12T22:45:00-04:00"
            },
            {
                "id": 8,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-13T18:30:00-04:00",
                "end": "2025-07-13T19:30:00-04:00"
            }
        ]
    },
    {
        "title": "This Is Not Me",
        "url": "https://fringetoronto.com/fringe/show/not-me",
        "venue": "Soulpepper Theatre's Tank House Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, ON, M5A 3C4",
        "id": 95,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T16:15:00-04:00",
                "end": "2025-07-03T17:05:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T12:00:00-04:00",
                "end": "2025-07-05T12:50:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T18:00:00-04:00",
                "end": "2025-07-06T18:50:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-09T19:30:00-04:00",
                "end": "2025-07-09T20:20:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T13:30:00-04:00",
                "end": "2025-07-10T14:20:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T16:15:00-04:00",
                "end": "2025-07-11T17:05:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T22:00:00-04:00",
                "end": "2025-07-12T22:50:00-04:00"
            }
        ]
    },
    {
        "title": "THIS SHOW WILL CHANGE YOUR LIFE",
        "url": "https://fringetoronto.com/fringe/show/show-will-change-your-life",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 96,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T20:45:00-04:00",
                "end": "2025-07-03T21:45:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T21:30:00-04:00",
                "end": "2025-07-05T22:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-08T18:15:00-04:00",
                "end": "2025-07-08T19:15:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-09T16:00:00-04:00",
                "end": "2025-07-09T17:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-11T14:30:00-04:00",
                "end": "2025-07-11T15:30:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T19:15:00-04:00",
                "end": "2025-07-12T20:15:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T12:15:00-04:00",
                "end": "2025-07-13T13:15:00-04:00"
            }
        ]
    },
    {
        "title": "Thunderor",
        "url": "https://fringetoronto.com/fringe/show/thunderor",
        "venue": "VideoCabaret - Deanne Taylor Theatre",
        "address": "10 Busy Street, Toronto, Ontario, M4M 1N8",
        "id": 97,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T21:45:00-04:00",
                "end": "2025-07-03T22:55:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T19:45:00-04:00",
                "end": "2025-07-05T20:55:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-07T16:00:00-04:00",
                "end": "2025-07-07T17:10:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-11T16:00:00-04:00",
                "end": "2025-07-11T17:10:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-12T17:45:00-04:00",
                "end": "2025-07-12T18:55:00-04:00"
            }
        ]
    },
    {
        "title": "Two Left Feet",
        "url": "https://fringetoronto.com/fringe/show/two-left-feet",
        "venue": "Soulpepper Theatre's Michael Young Theatre",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 98,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T20:15:00-04:00",
                "end": "2025-07-03T21:15:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T18:30:00-04:00",
                "end": "2025-07-05T19:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T21:45:00-04:00",
                "end": "2025-07-06T22:45:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-08T15:45:00-04:00",
                "end": "2025-07-08T16:45:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T17:45:00-04:00",
                "end": "2025-07-09T18:45:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T15:45:00-04:00",
                "end": "2025-07-11T16:45:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T14:15:00-04:00",
                "end": "2025-07-12T15:15:00-04:00"
            }
        ]
    },
    {
        "title": "The Velveteen Rabbit",
        "url": "https://fringetoronto.com/fringe/show/velveteen-rabbit",
        "venue": "Soulpepper Theatre's Kevin & Roger Garland Cabaret",
        "address": "50 Tank House Lane, Distillery Historic District, Toronto, Ontario, M5A 3C4",
        "id": 99,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T15:30:00-04:00",
                "end": "2025-07-02T16:20:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T12:00:00-04:00",
                "end": "2025-07-04T12:50:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T15:30:00-04:00",
                "end": "2025-07-05T16:20:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T13:00:00-04:00",
                "end": "2025-07-06T13:50:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T16:15:00-04:00",
                "end": "2025-07-08T17:05:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-09T15:15:00-04:00",
                "end": "2025-07-09T16:05:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T16:00:00-04:00",
                "end": "2025-07-11T16:50:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T15:30:00-04:00",
                "end": "2025-07-13T16:20:00-04:00"
            }
        ]
    },
    {
        "title": "Very Shady Arab Ladies",
        "url": "https://fringetoronto.com/fringe/show/very-shady-arab-ladies",
        "venue": "VideoCabaret - Deanne Taylor Theatre",
        "address": "10 Busy Street, Toronto, Ontario, M4M 1N8",
        "id": 100,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-03T16:00:00-04:00",
                "end": "2025-07-03T17:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-04T20:15:00-04:00",
                "end": "2025-07-04T21:15:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T22:00:00-04:00",
                "end": "2025-07-05T23:00:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-06T16:00:00-04:00",
                "end": "2025-07-06T17:00:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-07T18:00:00-04:00",
                "end": "2025-07-07T19:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-12T16:00:00-04:00",
                "end": "2025-07-12T17:00:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T13:00:00-04:00",
                "end": "2025-07-13T14:00:00-04:00"
            }
        ]
    },
    {
        "title": "Waiting for Coffee",
        "url": "https://fringetoronto.com/fringe/show/waiting-coffee",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 101,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-02T18:15:00-04:00",
                "end": "2025-07-02T19:05:00-04:00"
            },
            {
                "id": 2,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-04T18:15:00-04:00",
                "end": "2025-07-04T19:05:00-04:00"
            },
            {
                "id": 3,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-05T14:15:00-04:00",
                "end": "2025-07-05T15:05:00-04:00"
            },
            {
                "id": 4,
                "flags": [
                    "relaxed"
                ],
                "start": "2025-07-06T14:00:00-04:00",
                "end": "2025-07-06T14:50:00-04:00"
            }
        ]
    },
    {
        "title": "Wake Up",
        "url": "https://fringetoronto.com/fringe/show/wake",
        "venue": "Tarragon Theatre Solo Room",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 102,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-02T17:45:00-04:00",
                "end": "2025-07-02T18:35:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T22:15:00-04:00",
                "end": "2025-07-03T23:05:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-05T20:15:00-04:00",
                "end": "2025-07-05T21:05:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T16:30:00-04:00",
                "end": "2025-07-08T17:20:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T13:00:00-04:00",
                "end": "2025-07-09T13:50:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-10T18:15:00-04:00",
                "end": "2025-07-10T19:05:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T22:15:00-04:00",
                "end": "2025-07-11T23:05:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-13T14:15:00-04:00",
                "end": "2025-07-13T15:05:00-04:00"
            }
        ]
    },
    {
        "title": "WHISTLING PINE (A Dark Comedy)",
        "url": "https://fringetoronto.com/fringe/show/whistling-pine-dark-comedy",
        "venue": "Native Earth's Aki Studio",
        "address": "585 Dundas Street E, Toronto, Ontario, M5A 2B7",
        "id": 103,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T16:00:00-04:00",
                "end": "2025-07-03T17:00:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T14:30:00-04:00",
                "end": "2025-07-05T15:30:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-06T20:30:00-04:00",
                "end": "2025-07-06T21:30:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-07T18:15:00-04:00",
                "end": "2025-07-07T19:15:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-08T16:00:00-04:00",
                "end": "2025-07-08T17:00:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-09T20:30:00-04:00",
                "end": "2025-07-09T21:30:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-11T21:30:00-04:00",
                "end": "2025-07-11T22:30:00-04:00"
            }
        ]
    },
    {
        "title": "Who Drinks Mocktails on the Beach?!",
        "url": "https://fringetoronto.com/fringe/show/who-drinks-mocktails-beach",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 104,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T19:45:00-04:00",
                "end": "2025-07-03T20:40:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T21:30:00-04:00",
                "end": "2025-07-05T22:25:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-07T18:00:00-04:00",
                "end": "2025-07-07T18:55:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-08T20:00:00-04:00",
                "end": "2025-07-08T20:55:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-09T16:00:00-04:00",
                "end": "2025-07-09T16:55:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T12:30:00-04:00",
                "end": "2025-07-11T13:25:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-12T17:45:00-04:00",
                "end": "2025-07-12T18:40:00-04:00"
            }
        ]
    },
    {
        "title": "Zeitgeist",
        "url": "https://fringetoronto.com/fringe/show/zeitgeist",
        "venue": "CineCycle",
        "address": "129 Spadina Ave, Toronto, ON, M5A 1J7",
        "id": 105,
        "perfsData": [
            {
                "id": 1,
                "flags": [
                    "preview"
                ],
                "start": "2025-07-02T19:00:00-04:00",
                "end": "2025-07-02T20:25:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-03T19:00:00-04:00",
                "end": "2025-07-03T20:25:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-04T19:00:00-04:00",
                "end": "2025-07-04T20:25:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-05T19:00:00-04:00",
                "end": "2025-07-05T20:25:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-06T19:00:00-04:00",
                "end": "2025-07-06T20:25:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-08T19:00:00-04:00",
                "end": "2025-07-08T20:25:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-09T19:00:00-04:00",
                "end": "2025-07-09T20:25:00-04:00"
            },
            {
                "id": 8,
                "flags": [],
                "start": "2025-07-10T19:00:00-04:00",
                "end": "2025-07-10T20:25:00-04:00"
            },
            {
                "id": 9,
                "flags": [],
                "start": "2025-07-11T19:00:00-04:00",
                "end": "2025-07-11T20:25:00-04:00"
            },
            {
                "id": 10,
                "flags": [],
                "start": "2025-07-12T19:00:00-04:00",
                "end": "2025-07-12T20:25:00-04:00"
            },
            {
                "id": 11,
                "flags": [],
                "start": "2025-07-13T16:00:00-04:00",
                "end": "2025-07-13T17:25:00-04:00"
            }
        ]
    },
    {
        "title": "The Zucchini Club",
        "url": "https://fringetoronto.com/fringe/show/zucchini-club",
        "venue": "Tarragon Theatre Extraspace",
        "address": "30 Bridgman Ave, Toronto, Ontario, M5R 1X3",
        "id": 106,
        "perfsData": [
            {
                "id": 1,
                "flags": [],
                "start": "2025-07-03T18:00:00-04:00",
                "end": "2025-07-03T18:54:00-04:00"
            },
            {
                "id": 2,
                "flags": [],
                "start": "2025-07-05T16:00:00-04:00",
                "end": "2025-07-05T16:54:00-04:00"
            },
            {
                "id": 3,
                "flags": [],
                "start": "2025-07-07T16:00:00-04:00",
                "end": "2025-07-07T16:54:00-04:00"
            },
            {
                "id": 4,
                "flags": [],
                "start": "2025-07-09T21:30:00-04:00",
                "end": "2025-07-09T22:24:00-04:00"
            },
            {
                "id": 5,
                "flags": [],
                "start": "2025-07-10T16:15:00-04:00",
                "end": "2025-07-10T17:09:00-04:00"
            },
            {
                "id": 6,
                "flags": [],
                "start": "2025-07-11T20:00:00-04:00",
                "end": "2025-07-11T20:54:00-04:00"
            },
            {
                "id": 7,
                "flags": [],
                "start": "2025-07-13T12:45:00-04:00",
                "end": "2025-07-13T13:39:00-04:00"
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
