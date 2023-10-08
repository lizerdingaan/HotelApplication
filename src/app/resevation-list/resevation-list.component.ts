import {Component, OnInit} from '@angular/core';
import { ResevationService } from "../resevation/resevation.service";
import { Resevation } from "../models/resevation";

@Component({
  selector: 'app-resevation-list',
  templateUrl: './resevation-list.component.html',
  styleUrls: ['./resevation-list.component.css']
})
export class ResevationListComponent implements OnInit{

  resevations: Resevation[] = [];

  constructor(private resevationService: ResevationService) {
  }
  ngOnInit(): void {
    this.resevations = this.resevationService.getResevations();
  }

}
