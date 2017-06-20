import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SearchComponent } from "app/components/search/search.component";
import { AboutComponent } from "app/components/about/about.component";
import { ArtistComponent } from "app/components/artist/artist.component";
import { AlbumComponent } from "app/components/album/album.component";


const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'album/:id', component: AlbumComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}