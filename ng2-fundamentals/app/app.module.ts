import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import {EventsAppComponent} from './events-app.component'
import {EventsListComponent} from './events/events-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {navBarComponent} from './nav/nav.component'
import  {EventService} from './events/shared/events.service'
import  {ToastrService} from './common/toastr.service'
import  { EventDetailsComponent } from './events/event-details/event-details.component'
import { appRoutes } from './routes'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'

@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        navBarComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [EventService,
        ToastrService,
        EventRouteActivator],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}