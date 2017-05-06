import {Router, ActivatedRouteSnapshot, CanActivate} from "@angular/router"
import {Injectable} from "@angular/core"
import {EventService} from "../shared/events.service"


@Injectable()

export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        console.log('herere: ');
        const eventExists = !!this.eventService.getEvent(+route.params['id'])

        if (!eventExists) {
            console.log('here--------------: ');
            this.router.navigate(['/404']);
            return eventExists;

        }
        return eventExists;
    }
}