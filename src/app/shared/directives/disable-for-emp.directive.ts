import { AfterViewInit, Directive, ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Directive({
  selector: '[appDisableForEmp]'
})
export class DisableForEmpDirective implements AfterViewInit {

constructor(private userSerivce:UserService,private eleRef: ElementRef,private renderer: Renderer2) {
  debugger;

 }

 ngAfterViewInit(): void {
     if(this.userSerivce.loggedRole == 'Employee') {
    this.renderer.setAttribute(this.eleRef.nativeElement,'disabled', 'true')
  }
 }
 

}
