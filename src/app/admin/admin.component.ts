import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  dataSource = this.admin.dataSource;

  displayedColumns = this.admin.displayedColumns;
  mondayArray: string[] = this.admin.mondayArray;
  tuesdayArray: string[] = this.admin.tuesdayArray;
  wednesdayArray: string[] = this.admin.wednesdayArray;
  thursdayArray: string[] = this.admin.thursdayArray;
  fridayArray: string[] = this.admin.fridayArray;

  menuForm!: FormGroup;



  constructor(
    private admin: AdminService,
  ) {
    this.admin.updateService.subscribe()
   }

  ngOnInit(): void {
    this.admin.updateMenu()

    this.admin.buildArrays()
  
    
    this.menuForm = new FormGroup ({
      'monday0': new FormControl(this.mondayArray[0]),
      'monday1': new FormControl(this.mondayArray[1]),
      'monday2': new FormControl(this.mondayArray[2]),
      'monday3': new FormControl(this.mondayArray[3]),
      'monday4': new FormControl(this.mondayArray[4]),
      'monday5': new FormControl(this.mondayArray[5]),
      'monday6': new FormControl(this.mondayArray[6]),
      'monday7': new FormControl(this.mondayArray[7]),
      'monday8': new FormControl(this.mondayArray[8]),
      'monday9': new FormControl(this.mondayArray[9]),
      'monday10': new FormControl(this.mondayArray[10]),
      'monday11': new FormControl(this.mondayArray[11]),

      'tuesday0': new FormControl(this.tuesdayArray[0]),
      'tuesday1': new FormControl(this.tuesdayArray[1]),
      'tuesday2': new FormControl(this.tuesdayArray[2]),
      'tuesday3': new FormControl(this.tuesdayArray[3]),
      'tuesday4': new FormControl(this.tuesdayArray[4]),
      'tuesday5': new FormControl(this.tuesdayArray[5]),
      'tuesday6': new FormControl(this.tuesdayArray[6]),
      'tuesday7': new FormControl(this.tuesdayArray[7]),
      'tuesday8': new FormControl(this.tuesdayArray[8]),
      'tuesday9': new FormControl(this.tuesdayArray[9]),
      'tuesday10': new FormControl(this.tuesdayArray[10]),
      'tuesday11': new FormControl(this.tuesdayArray[11]),

      'wednesday0': new FormControl(this.wednesdayArray[0]),
      'wednesday1': new FormControl(this.wednesdayArray[1]),
      'wednesday2': new FormControl(this.wednesdayArray[2]),
      'wednesday3': new FormControl(this.wednesdayArray[3]),
      'wednesday4': new FormControl(this.wednesdayArray[4]),
      'wednesday5': new FormControl(this.wednesdayArray[5]),
      'wednesday6': new FormControl(this.wednesdayArray[6]),
      'wednesday7': new FormControl(this.wednesdayArray[7]),
      'wednesday8': new FormControl(this.wednesdayArray[8]),
      'wednesday9': new FormControl(this.wednesdayArray[9]),
      'wednesday10': new FormControl(this.wednesdayArray[10]),
      'wednesday11': new FormControl(this.wednesdayArray[11]),

      'thursday0': new FormControl(this.thursdayArray[0]),
      'thursday1': new FormControl(this.thursdayArray[1]),
      'thursday2': new FormControl(this.thursdayArray[2]),
      'thursday3': new FormControl(this.thursdayArray[3]),
      'thursday4': new FormControl(this.thursdayArray[4]),
      'thursday5': new FormControl(this.thursdayArray[5]),
      'thursday6': new FormControl(this.thursdayArray[6]),
      'thursday7': new FormControl(this.thursdayArray[7]),
      'thursday8': new FormControl(this.thursdayArray[8]),
      'thursday9': new FormControl(this.thursdayArray[9]),
      'thursday10': new FormControl(this.thursdayArray[10]),
      'thursday11': new FormControl(this.thursdayArray[11]),

      'friday0': new FormControl(this.fridayArray[0]),
      'friday1': new FormControl(this.fridayArray[1]),
      'friday2': new FormControl(this.fridayArray[2]),
      'friday3': new FormControl(this.fridayArray[3]),
      'friday4': new FormControl(this.fridayArray[4]),
      'friday5': new FormControl(this.fridayArray[5]),
      'friday6': new FormControl(this.fridayArray[6]),
      'friday7': new FormControl(this.fridayArray[7]),
      'friday8': new FormControl(this.fridayArray[8]),
      'friday9': new FormControl(this.fridayArray[9]),
      'friday10': new FormControl(this.fridayArray[10]),
      'friday11': new FormControl(this.fridayArray[11]),
    });

  };

  clearForm(){
    this.mondayArray[0] = '';
    this.mondayArray[1] = '';
    this.mondayArray[2] = '';
    this.mondayArray[3] = '';
    this.mondayArray[4] = '';
    this.mondayArray[5] = '';
    this.mondayArray[6] = '';
    this.mondayArray[7] = '';
    this.mondayArray[8] = '';
    this.mondayArray[9] = '';
    this.mondayArray[10] = '';
    this.mondayArray[11] = '';

    this.tuesdayArray[0] = '';
    this.tuesdayArray[1] = '';
    this.tuesdayArray[2] = '';
    this.tuesdayArray[3] = '';
    this.tuesdayArray[4] = '';
    this.tuesdayArray[5] = '';
    this.tuesdayArray[6] = '';
    this.tuesdayArray[7] = '';
    this.tuesdayArray[8] = '';
    this.tuesdayArray[9] = '';
    this.tuesdayArray[10] = '';
    this.tuesdayArray[11] = '';

    this.wednesdayArray[0] = '';
    this.wednesdayArray[1] = '';
    this.wednesdayArray[2] = '';
    this.wednesdayArray[3] = '';
    this.wednesdayArray[4] = '';
    this.wednesdayArray[5] = '';
    this.wednesdayArray[6] = '';
    this.wednesdayArray[7] = '';
    this.wednesdayArray[8] = '';
    this.wednesdayArray[9] = '';
    this.wednesdayArray[10] = '';
    this.wednesdayArray[11] = '';

    this.thursdayArray[0] = '';
    this.thursdayArray[1] = '';
    this.thursdayArray[2] = '';
    this.thursdayArray[3] = '';
    this.thursdayArray[4] = '';
    this.thursdayArray[5] = '';
    this.thursdayArray[6] = '';
    this.thursdayArray[7] = '';
    this.thursdayArray[8] = '';
    this.thursdayArray[9] = '';
    this.thursdayArray[10] = '';
    this.thursdayArray[11] = '';

    this.fridayArray[0] = '';
    this.fridayArray[1] = '';
    this.fridayArray[2] = '';
    this.fridayArray[3] = '';
    this.fridayArray[4] = '';
    this.fridayArray[5] = '';
    this.fridayArray[6] = '';
    this.fridayArray[7] = '';
    this.fridayArray[8] = '';
    this.fridayArray[9] = '';
    this.fridayArray[10] = '';
    this.fridayArray[11] = '';

    this.menuForm.patchValue({
      'monday0': this.mondayArray[0],
      'monday1': this.mondayArray[1],
      'monday2': this.mondayArray[2],
      'monday3': this.mondayArray[3],
      'monday4': this.mondayArray[4],
      'monday5': this.mondayArray[5],
      'monday6': this.mondayArray[6],
      'monday7': this.mondayArray[7],
      'monday8': this.mondayArray[8],
      'monday9': this.mondayArray[9],
      'monday10': this.mondayArray[10],
      'monday11': this.mondayArray[11],

      'tuesday0': this.tuesdayArray[0],
      'tuesday1': this.tuesdayArray[1],
      'tuesday2': this.tuesdayArray[2],
      'tuesday3': this.tuesdayArray[3],
      'tuesday4': this.tuesdayArray[4],
      'tuesday5': this.tuesdayArray[5],
      'tuesday6': this.tuesdayArray[6],
      'tuesday7': this.tuesdayArray[7],
      'tuesday8': this.tuesdayArray[8],
      'tuesday9': this.tuesdayArray[9],
      'tuesday10': this.tuesdayArray[10],
      'tuesday11': this.tuesdayArray[11],

      'wednesday0': this.wednesdayArray[0],
      'wednesday1': this.wednesdayArray[1],
      'wednesday2': this.wednesdayArray[2],
      'wednesday3': this.wednesdayArray[3],
      'wednesday4': this.wednesdayArray[4],
      'wednesday5': this.wednesdayArray[5],
      'wednesday6': this.wednesdayArray[6],
      'wednesday7': this.wednesdayArray[7],
      'wednesday8': this.wednesdayArray[8],
      'wednesday9': this.wednesdayArray[9],
      'wednesday10': this.wednesdayArray[10],
      'wednesday11': this.wednesdayArray[11],

      'thursday0': this.thursdayArray[0],
      'thursday1': this.thursdayArray[1],
      'thursday2': this.thursdayArray[2],
      'thursday3': this.thursdayArray[3],
      'thursday4': this.thursdayArray[4],
      'thursday5': this.thursdayArray[5],
      'thursday6': this.thursdayArray[6],
      'thursday7': this.thursdayArray[7],
      'thursday8': this.thursdayArray[8],
      'thursday9': this.thursdayArray[9],
      'thursday10': this.thursdayArray[10],
      'thursday11': this.thursdayArray[11],

      'friday0': this.fridayArray[0],
      'friday1': this.fridayArray[1],
      'friday2': this.fridayArray[2],
      'friday3': this.fridayArray[3],
      'friday4': this.fridayArray[4],
      'friday5': this.fridayArray[5],
      'friday6': this.fridayArray[6],
      'friday7': this.fridayArray[7],
      'friday8': this.fridayArray[8],
      'friday9': this.fridayArray[9],
      'friday10': this.fridayArray[10],
      'friday11': this.fridayArray[11],
    });

  }

  saveForm(){
    this.admin.mondayArray = this.mondayArray;
    this.admin.tuesdayArray = this.tuesdayArray;
    this.admin.wednesdayArray = this.wednesdayArray;
    this.admin.thursdayArray = this.thursdayArray;
    this.admin.fridayArray = this.fridayArray;

    this.admin.monday = this.mondayArray;
    this.admin.tuesday = this.tuesdayArray;
    this.admin.wednesday = this.wednesdayArray;
    this.admin.thursday = this.thursdayArray;
    this.admin.friday = this.fridayArray;

    this.admin.updateMenu()

    this.admin.updateService.emit();
  }

  saveForm1(){
    this.mondayArray[0] = this.menuForm.value['monday0'];
    this.mondayArray[1] = this.menuForm.value['monday1'];
    this.mondayArray[2] = this.menuForm.value['monday2'];
    this.mondayArray[3] = this.menuForm.value['monday3'];
    this.mondayArray[4] = this.menuForm.value['monday4'];
    this.mondayArray[5] = this.menuForm.value['monday5'];
    this.mondayArray[6] = this.menuForm.value['monday6'];
    this.mondayArray[7] = this.menuForm.value['monday7'];
    this.mondayArray[8] = this.menuForm.value['monday8'];
    this.mondayArray[9] = this.menuForm.value['monday9'];
    this.mondayArray[10] = this.menuForm.value['monday10'];
    this.mondayArray[11] = this.menuForm.value['monday11'];

    this.tuesdayArray[0] = this.menuForm.value['tuesday0'];
    this.tuesdayArray[1] = this.menuForm.value['tuesday1'];
    this.tuesdayArray[2] = this.menuForm.value['tuesday2'];
    this.tuesdayArray[3] = this.menuForm.value['tuesday3'];
    this.tuesdayArray[4] = this.menuForm.value['tuesday4'];
    this.tuesdayArray[5] = this.menuForm.value['tuesday5'];
    this.tuesdayArray[6] = this.menuForm.value['tuesday6'];
    this.tuesdayArray[7] = this.menuForm.value['tuesday7'];
    this.tuesdayArray[8] = this.menuForm.value['tuesday8'];
    this.tuesdayArray[9] = this.menuForm.value['tuesday9'];
    this.tuesdayArray[10] = this.menuForm.value['tuesday10'];
    this.tuesdayArray[11] = this.menuForm.value['tuesday11'];

    this.wednesdayArray[0] = this.menuForm.value['wednesday0'];
    this.wednesdayArray[1] = this.menuForm.value['wednesday1'];
    this.wednesdayArray[2] = this.menuForm.value['wednesday2'];
    this.wednesdayArray[3] = this.menuForm.value['wednesday3'];
    this.wednesdayArray[4] = this.menuForm.value['wednesday4'];
    this.wednesdayArray[5] = this.menuForm.value['wednesday5'];
    this.wednesdayArray[6] = this.menuForm.value['wednesday6'];
    this.wednesdayArray[7] = this.menuForm.value['wednesday7'];
    this.wednesdayArray[8] = this.menuForm.value['wednesday8'];
    this.wednesdayArray[9] = this.menuForm.value['wednesday9'];
    this.wednesdayArray[10] = this.menuForm.value['wednesday10'];
    this.wednesdayArray[11] = this.menuForm.value['wednesday11'];

    this.thursdayArray[0] = this.menuForm.value['thursday0'];
    this.thursdayArray[1] = this.menuForm.value['thursday1'];
    this.thursdayArray[2] = this.menuForm.value['thursday2'];
    this.thursdayArray[3] = this.menuForm.value['thursday3'];
    this.thursdayArray[4] = this.menuForm.value['thursday4'];
    this.thursdayArray[5] = this.menuForm.value['thursday5'];
    this.thursdayArray[6] = this.menuForm.value['thursday6'];
    this.thursdayArray[7] = this.menuForm.value['thursday7'];
    this.thursdayArray[8] = this.menuForm.value['thursday8'];
    this.thursdayArray[9] = this.menuForm.value['thursday9'];
    this.thursdayArray[10] = this.menuForm.value['thursday10'];
    this.thursdayArray[11] = this.menuForm.value['thursday11'];

    this.fridayArray[0] = this.menuForm.value['friday0'];
    this.fridayArray[1] = this.menuForm.value['friday1'];
    this.fridayArray[2] = this.menuForm.value['friday2'];
    this.fridayArray[3] = this.menuForm.value['friday3'];
    this.fridayArray[4] = this.menuForm.value['friday4'];
    this.fridayArray[5] = this.menuForm.value['friday5'];
    this.fridayArray[6] = this.menuForm.value['friday6'];
    this.fridayArray[7] = this.menuForm.value['friday7'];
    this.fridayArray[8] = this.menuForm.value['friday8'];
    this.fridayArray[9] = this.menuForm.value['friday9'];
    this.fridayArray[10] = this.menuForm.value['friday10'];
    this.fridayArray[11] = this.menuForm.value['friday11'];

    this.admin.mondayArray = this.mondayArray;
    this.admin.tuesdayArray = this.tuesdayArray;
    this.admin.wednesdayArray = this.wednesdayArray;
    this.admin.thursdayArray = this.thursdayArray;
    this.admin.fridayArray = this.fridayArray;

    this.admin.monday = this.mondayArray;
    this.admin.tuesday = this.tuesdayArray;
    this.admin.wednesday = this.wednesdayArray;
    this.admin.thursday = this.thursdayArray;
    this.admin.friday = this.fridayArray;

    this.admin.updateMenu()

    this.admin.updateService.emit();
  }

};
