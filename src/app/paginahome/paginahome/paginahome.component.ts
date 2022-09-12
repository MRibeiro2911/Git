import { CarrosService } from './../../carros/carros.service';
import { Carros } from './../../carros/carros';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-paginahome',
  templateUrl: './paginahome.component.html',
  styleUrls: ['./paginahome.component.css']
})
export class PaginahomeComponent implements OnInit {

  carrosInput = new FormControl();

  constructor(private carrosService:CarrosService) { }

  ngOnInit(): void {
    this.carrosService.getCarros().subscribe((retornoAPI) => {

    })
  }
}
