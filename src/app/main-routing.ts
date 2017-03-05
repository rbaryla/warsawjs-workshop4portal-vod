import {Routes} from "@angular/router"
import {HomeComponent} from "./components/home/home.component";
import {MoviesComponent} from "./components/movies/movies.component";
export const mainRouting: Routes = [
  {path: "home", component: HomeComponent},
  {path: "movies", component: MoviesComponent},
];
