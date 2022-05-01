const linksModule = {
    namespaced: true,
    state() {
        return {
            links: [
                {
                    category: 'Useful pages',
                    content: [
                        {
                            title: 'Awesome reddit comunity',
                            url: 'https://www.reddit.com/r/KipoAndTheAgeOfWB/'
                        },
                        {
                            title: 'Wikipedia',
                            url: 'https://en.wikipedia.org/wiki/Kipo_and_the_Age_of_Wonderbeasts'
                        },
                        {
                            title: 'Fandom page',
                            url: 'https://kipo.fandom.com/wiki/Kipo_and_the_Age_of_Wonderbeasts_Wiki'
                        },
                        {
                            title: 'Official website',
                            url: 'https://www.dreamworks.com/shows/kipo-and-the-age-of-wonderbeasts',
                        }
                    ]
                },
                {
                    category: 'Where to watch',
                    content: [
                        {
                            title: 'Netflix',
                            url: 'https://www.netflix.com/gb/title/80221553'
                        }
                    ]
                },
                {
                    category: 'Soundtracks',
                    content: [
                        {
                            title: 'Season 1',
                            url: 'https://open.spotify.com/album/6oQ3rNYTyUSh9xsPmPt0jE?si=0WIzMx5eQLStQwaNOpr0Zw&nd=1'
                        },
                        {
                            title: 'Season 2',
                            url: 'https://open.spotify.com/album/6h7vVwlfREc9XNrHgVaIbj?si=ARx_ffVbRmiR8floLx_UdQ&nd=1'
                        },
                        {
                            title: 'Season 3',
                            url: 'https://open.spotify.com/album/4WzApX5hkWskwrk2qiQgon?si=-TRzD7OCSV6zZcru3WGi1g&nd=1'
                        }
                    ]
                }
            ]
        }
    },
    getters: {
        getAllLinks(state) {
            return state.links;
        }
    }
}

export default linksModule;