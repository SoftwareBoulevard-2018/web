import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';
import {Router} from '@angular/router';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { TrainingAttempt } from '../shared/trainingAttempt';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-trainingAttempt',
  templateUrl: './trainingAttempts.component.html',
  styleUrls: ['./trainingAttempts.component.css']
})
export class TrainingAttemptsComponent implements OnInit {

  constructor(public httpService: HttpService, public service: GeneralServiceService, public router: Router) {
  }

  trainingAttempts = [];
  trainingAttempts2: MatTableDataSource<TrainingAttempt>;

  table_titles = ['createdAt', 'number', 'state', 'question', 'answer', 'user'];



  ngOnInit() {
    // When the component is created, it defines the variables to create the material table
    console.log(this.service.user_type);
    /*
    if (this.service.user_type === undefined) {
      this.router.navigate(['']);
    } else if (this.service.user_type === 'Team Member' || this.service.user_type === 'Project Manager') {
      this.router.navigate(['restricted']);
    } else {
      this.companies2 = new MatTableDataSource(this.companies);*/
      this.getAllTrainingAttempts();
    /*}
    */
  }

  getAllTrainingAttempts() {
    return this.httpService.getAllTrainingAttempts().subscribe(data => this.listTrainingAttempts(data));
  }

  listTrainingAttempts(data) {
    console.log(data);
    /*
    this.trainingAttempts = [];
    for (const value of Object.values(data.data)) {
      this.getUserByRoleCompany('Project Manager', value);
    }
    */
  }

  /*
  applyFilter(filterValue: string) {
    // Function used to filter the values on the material table
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.trainingAttempts2.filter = filterValue;
  }

  redirect(event, element) {
    // Redirects to the company status defining the necessary variable
    this.service.company_to_be_updated = element.id;
    this.router.navigate(['home/companies/company-status']);
  }

  redirect2(event, element) {
    // Redirects to the company update defining the necessary variable
    this.service.company_to_be_updated = element.id;
    this.router.navigate(['home/companies/company-status/update']);
  }
  redirect3(event) {
    // Redirects to the company creation
    this.router.navigate(['home/companies/create']);
  }
  */
}
