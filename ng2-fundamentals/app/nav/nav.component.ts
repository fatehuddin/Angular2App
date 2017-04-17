import { Component } from '@angular/core'

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav/nav.html',
    styles:[`.nav.navbar-nav { font-size: 15px}
             #searchForm {margin-right: 100px}
             @media (max-width: 1200px) {
                #searchForm {display: none}
             }
            `]
})

export class navBarComponent {

}