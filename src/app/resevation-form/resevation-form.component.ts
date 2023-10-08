import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ResevationService} from "../resevation/resevation.service";
import {Resevation} from "../models/resevation";

@Component({
  selector: 'app-resevation-form',
  templateUrl: './resevation-form.component.html',
  styleUrls: ['./resevation-form.component.css']
})
export class ResevationFormComponent implements OnInit {

  resevationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private resevationService: ResevationService) {
  }

  ngOnInit(): void {
    this.resevationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })
  }


  onSubmit(){
    if(this.resevationForm.valid){
      let resevation: Resevation = this.resevationForm.value;
      this.resevationService.addResevation(resevation);
    }

  }


  protected readonly onsubmit = onsubmit;


}
