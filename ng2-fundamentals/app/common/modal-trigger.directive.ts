import {Directive, OnInit, Inject, ElementRef} from '@angular/core'
import {JQ_TOKEN} from './JQuery.service'


@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    private el:HTMLElement;

    constructor(ref:ElementRef, @Inject(JQ_TOKEN) private $:any) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
            console.log('here:   ');
        this.el.addEventListener('click', e => {
            this.$('#simple-modal').modal({})
        })

    }
}