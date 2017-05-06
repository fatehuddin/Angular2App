import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import  {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index'

import {EventsAppComponent} from './events-app.component'
import {navBarComponent} from './nav/nav.component'
import  {ToastrService} from './common/toastr.service'
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'

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
        EventRouteActivator,
        EventListResolver,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}

function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('you have not saved this event,do you really want to cancel?')
    } else {
        return true;
    }

}