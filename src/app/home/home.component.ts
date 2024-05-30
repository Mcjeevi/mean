import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  sampleForm!: FormGroup;
  dataSource: Array<Object> = [
    // {firstName: 'John', lastName: 'Mae', email: 'john@gmail.com', phone: 123},
    // {firstName: 'Vick', lastName: 'eak', email: 'john@gmail.com', phone: 123},
    // {firstName: 'Bon', lastName: 'rat', email: 'john@gmail.com', phone: 123},
    // {firstName: 'Mat', lastName: 'reek', email: 'john@gmail.com', phone: 123},
  ]
  displayedCoulumns: String[] = ['firstName', 'lastName', 'email', 'phone','action'];

  constructor(private fb: FormBuilder,
    private service: SampleService
  ) { }

  ngOnInit(): void {
    this.sampleForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    })

    this.service.getAll().subscribe(data => {
      this.dataSource = data;
    })
  }
  onSubmit(form: FormGroup) {
    // console.log(form.value);
    // this.dataSource.push(form.value);
    // this.dataSource = [...this.dataSource];
    this.service.create(form.value).subscribe(data => {
      debugger
    })
    // this.sampleForm.reset();
  }
}
