import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {EventsAppComponent} from './events-app.component'
import {EventsListComponent} from './events/events-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {navBarComponent} from './nav/nav.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        navBarComponent
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}