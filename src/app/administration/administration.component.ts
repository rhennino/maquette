import { Component, OnInit } from '@angular/core';
import { VariablesCommunesService } from '../variables-communes.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  lienPG: any;
  constructor(public VC: VariablesCommunesService) { }

  ngOnInit(): void {
  }

  

}
