import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {

    // add corresponding validators
    this.searchForm = this.fb.group({
      'searchCountry': [null, [Validators.required,
      Validators.minLength(1)]]
    });

    // write a function that calls changeCountryName upon value change in the form
    this.searchForm.get('searchCountry').valueChanges
      .subscribe(data => {
        if (data !== null && data.length >= 1) {
          this.service.changeCountryName(data);
        }
      });
  }

}
