import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-resevation-form',
  templateUrl: './resevation-form.component.html',
  styleUrls: ['./resevation-form.component.css']
})
export class ResevationFormComponent implements OnInit {

  resevationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
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

  }


  protected readonly onsubmit = onsubmit;


}
