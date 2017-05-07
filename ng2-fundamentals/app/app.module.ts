import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import  {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent
} from './events/index'

import {EventsAppComponent} from './events-app.component'
import {navBarComponent} from './nav/nav.component'
import  {ToastrService} from './common/toastr.service'
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'
import {AuthService } from './user/auth.service'

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        navBarComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent
    ],
    providers: [EventService,
        ToastrService,
        EventRouteActivator,
        EventListResolver,
        AuthService,
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