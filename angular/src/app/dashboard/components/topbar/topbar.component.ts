import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfile } from '../../model/user-profile';
import { ClienteDataService } from '../../services/cliente-data.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  searchForm: FormGroup;

  loading= false;
  submitted= false;

  userProfile: UserProfile;

  constructor(
    private clienteService: ClienteService,
    private clienteDataService: ClienteDataService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute
  ) { 
    this.searchForm = this.buildSearchForm();
  }

  ngOnInit(): void {
    this.userProfile = this.router.snapshot.data.userProfile;
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
