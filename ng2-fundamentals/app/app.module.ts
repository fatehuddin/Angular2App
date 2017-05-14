import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import { HttpModule } from '@angular/http'

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {JQ_TOKEN,
    TOASTR_TOKEN,
    Toastr,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective


} from './common/index'

import  {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    UpvoteComponent,
    VoterService,
    DurationPipe

} from './events/index'

import {EventsAppComponent} from './events-app.component'
import {navBarComponent} from './nav/nav.component'
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'
import {AuthService} from './user/auth.service'

declare let toastr:Toastr
declare let jQuery: Object

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
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
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        UpvoteComponent,
        ModalTriggerDirective
    ],
    providers: [EventService,
        {provide: TOASTR_TOKEN, useValue: toastr},
        {provide: JQ_TOKEN, useValue: jQuery},
        EventRouteActivator,
        EventListResolver,
        VoterService,
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