import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteDataService } from '../cliente-data.service';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  searchForm: FormGroup;

  loading= false;
  submitted= false;

  constructor(
    private clienteService: ClienteService,
    private clienteDataService: ClienteDataService,
    private formBuilder: FormBuilder
  ) { 
    this.searchForm = this.buildSearchForm();
  }

  ngOnInit(): void {
  }

  buildSearchForm() {
    return this.searchForm = this.formBuilder.group(
      {
        numeroTelefono: ['',Validators.required]
      }
    );
  }

  executeSearch() : void {
    this.submitted = true;
    this.loading = true;
    if(this.searchForm.valid) {
      this.clienteService.search(this.searchForm.get('numeroTelefono').value).
      subscribe(
        data => {
          //update de clienteDataService
          this.clienteDataService.updateCliente(data);
          this.loading = false;
        }, error => {
          this.loading = false;
          //luego usar alertService para indicar error
        }
      );
    }
  }

  resetSearch(): void {
    this.searchForm.reset();
    this.clienteDataService.clear();
  }
  get f() {
    return this.searchForm.controls;
  }
}
