import { ContentTargets } from "../components/home/contentTargets/contentTargets"
import { Nav } from "../components/home/nav/nav"
import movies from "../../public/assets/movies/allMovies.json"
import { Tabs } from "../components/home/tabs/tabs"
import "./home.scss"
export const HomePage = () => {
    const moviesAll = [...movies.movies];

    return <>
        <Nav />
        <div className="tab_main">
            <Tabs children={[{
                element: <ContentTargets movies={movies.movies} />, title: "All"
            }, {
                element: <ContentTargets movies={moviesAll.reverse()} />, title: "New Releases"
            },
            {
                element: <ContentTargets movies={moviesAll.sort((a, b) => {
                    if (a.title > b.title) {
                        return 1;
                    }
                    if (a.title < b.title) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                })} />, title: "Most Popular"
            },
            {
                element: <ContentTargets movies={moviesAll.sort((a, b) => b.title.localeCompare(a.title))} />, title: "Trends"
            },
            {
                element: <ContentTargets movies={[...moviesAll, ...moviesAll].sort((a, b) => a.title.localeCompare(b.title))} />, title: "My Favorities"
            },
            ]} />
        </div>
    </>
}