import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ResevationService} from "../resevation/resevation.service";
import {Resevation} from "../models/resevation";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resevation-form',
  templateUrl: './resevation-form.component.html',
  styleUrls: ['./resevation-form.component.css']
})
export class ResevationFormComponent implements OnInit {

  resevationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private resevationService: ResevationService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.resevationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      let resevation = this.resevationService.getResevation(id);

      if(resevation){
        this.resevationForm.patchValue(resevation);
      }
    }
  }


  onSubmit(){
    if(this.resevationForm.valid){
      let resevation: Resevation = this.resevationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');

     if(id){
       //update
       this.resevationService.updateResevation(id, resevation);
     } else {
       //new
       this.resevationService.addResevation(resevation);
     }

      this.route.navigate(['/list'])
    }

  }


  protected readonly onsubmit = onsubmit;


}
