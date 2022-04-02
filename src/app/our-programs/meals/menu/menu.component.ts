import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

export interface Menu {
  mealType: string;
  category: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}
const MENU_DATA: Menu[] = [
  {mealType: 'Breakfast', category: 'Milk', monday: '1% Milk', tuesday: '1% Milk', wednesday: '1% Milk', thursday: '1% Milk', friday: '1% Milk'},
  {mealType: 'Breakfast', category: 'Fruits or Vegetables', monday: 'Mixed Fruit', tuesday: 'Applesauce', wednesday: 'Mandarin Oranges', thursday: 'Applesauce', friday: 'Mixed Fruit'},
  {mealType: 'Breakfast', category: 'Grains', monday: 'Orginal Cheerios', tuesday: 'WG Pancakes', wednesday: 'WG Biscuits W/ Jelly', thursday: 'WG Strawberry Waffles', friday: 'Corn Flakes'},
];


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  displayedColumns: string[] = ['mealType', 'category', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  dataSource: any;

  constructor(
    private admin: AdminService,
  ) { }

  ngOnInit(): void {
    this.admin.updateMenu()
    this.dataSource = this.admin.dataSource;
    console.log(this.dataSource)
  }

}
