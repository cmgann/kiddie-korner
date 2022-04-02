import { EventEmitter, Injectable } from '@angular/core';
import { Menu } from '../shared/menu.module';

export interface Menu1 {
  mealType: string;
  category: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

// var monday1: string[] = ['1% Milk', 'Mixed Fruit', 'Orginal Cheerios', '1% Milk', 'Diced Peaches & Green Beans', 'Macaroni & Cheese', 'CN Grilled Chicken Nuggets', '', '100% Juice', '', 'Low Fat Cheese Sticks','Water']
// var tuesday1: string[] = ['1% Milk', 'Applesauce', 'WG Pancakes', '1% Milk', 'Pineapple Tidbits & Bake Beans', 'WG Hamburger Buns', 'CN Ham Patties', '', '100% Juice', 'Wheat Thins', '']
// var wednesday1: string[] = ['1% Milk', 'Mandarin Oranges', 'WG Biscuits W/ Jelly', '1% Milk', 'Diced Peaches & Mashed Potatoes', 'WG Bread', 'CN Salisbury Steak', '', '100% Juice', 'Pretzels', '','']
// var thursday1: string[] = ['1% Milk', 'Applesauce', 'WG Strawberry Waffles', '1% Milk', 'Diced Pears & Ranch Style beans', 'WG Rice', 'Lean Ground Beef W/Diced Tomatoes', '', '100% Juice', 'WG Elf Cinnamon Gram Cracker', '','']
// var friday1: string[] = ['1% Milk', 'Mixed Fruit', 'Corn Flakes', '1% Milk', 'Diced Peaches & Dill Pickels', 'WG Bread', 'Lean Lunch Meat Turkey W/ Chees Sandwiches', '', '', 'WG Ritz Crackers', 'Cheese Cubes','Water']


// const MENU_DATA: Menu1[] = [
//   {mealType: 'Breakfast', category: 'Milk', monday: monday[0], tuesday: tuesday[0], wednesday: wednesday[0], thursday: thursday[0], friday: friday[0]},
//   {mealType: 'Breakfast', category: 'Fruits or Vegetables', monday: monday[1], tuesday: tuesday[1], wednesday: wednesday[1], thursday: thursday[1], friday: friday[1]},
//   {mealType: 'Breakfast', category: 'Grains', monday: monday[2], tuesday: tuesday[2], wednesday: wednesday[2], thursday: thursday[2], friday: friday[2]},
  
//   {mealType: 'Lunch', category: 'Milk', monday: monday[3], tuesday: tuesday[3], wednesday: wednesday[3], thursday: thursday[3], friday: friday[3]},
//   {mealType: 'Lunch', category: 'Fruits or Vegetables', monday: monday[4], tuesday: tuesday[4], wednesday: wednesday[4], thursday: thursday[4], friday: friday[4]},
//   {mealType: 'Lunch', category: 'Grains', monday: monday[5], tuesday: tuesday[5], wednesday: wednesday[5], thursday: thursday[5], friday: friday[5]},
//   {mealType: 'Lunch', category: 'Meat or Meat Alternative', monday: monday[6], tuesday: tuesday[6], wednesday: wednesday[6], thursday: thursday[6], friday: friday[6]},

//   {mealType: 'P.M Snack', category: 'Milk', monday: monday[7], tuesday: tuesday[7], wednesday: wednesday[7], thursday: thursday[7], friday: friday[7]},
//   {mealType: 'P.M Snack', category: 'Fruits or Vegetables', monday: monday[8], tuesday: tuesday[8], wednesday: wednesday[8], thursday: thursday[8], friday: friday[8]},
//   {mealType: 'P.M Snack', category: 'Grains', monday: monday[9], tuesday: tuesday[9], wednesday: wednesday[9], thursday: thursday[9], friday: friday[9]},
//   {mealType: 'P.M Snack', category: 'Meat or Meat Alternative', monday: monday[10], tuesday: tuesday[10], wednesday: wednesday[10], thursday: thursday[10], friday: friday[10]},
//   {mealType: 'P.M Snack', category: 'Other', monday: monday[11], tuesday: tuesday[11], wednesday: wednesday[11], thursday: thursday[11], friday: friday[11]},

// ];


@Injectable({
  providedIn: 'root'
})

export class AdminService {

  updateService = new EventEmitter<string>();

  displayedColumns: string[] = ['mealType', 'category', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  // dataSource1 = MENU_DATA;

  mealTypeArray: string[] = [];
  categoryArray: string[] = [];
  mondayArray: string[] = [];
  tuesdayArray: string[] = [];
  wednesdayArray: string[] = [];
  thursdayArray: string[] = [];
  fridayArray: string[] = [];


  monday: string[] = ['1% Milk', 'Mixed Fruit', 'Orginal Cheerios', '1% Milk', 'Diced Peaches & Green Beans', 'Macaroni & Cheese', 'CN Grilled Chicken Nuggets', '', '100% Juice', '', 'Low Fat Cheese Sticks','Water']
  tuesday: string[] = ['1% Milk', 'Applesauce', 'WG Pancakes', '1% Milk', 'Pineapple Tidbits & Bake Beans', 'WG Hamburger Buns', 'CN Ham Patties', '', '100% Juice', 'Wheat Thins', '']
  wednesday: string[] = ['1% Milk', 'Mandarin Oranges', 'WG Biscuits W/ Jelly', '1% Milk', 'Diced Peaches & Mashed Potatoes', 'WG Bread', 'CN Salisbury Steak', '', '100% Juice', 'Pretzels', '','']
  thursday: string[] = ['1% Milk', 'Applesauce', 'WG Strawberry Waffles', '1% Milk', 'Diced Pears & Ranch Style beans', 'WG Rice', 'Lean Ground Beef W/Diced Tomatoes', '', '100% Juice', 'WG Elf Cinnamon Gram Cracker', '','']
  friday: string[] = ['1% Milk', 'Mixed Fruit', 'Corn Flakes', '1% Milk', 'Diced Peaches & Dill Pickels', 'WG Bread', 'Lean Lunch Meat Turkey W/ Chees Sandwiches', '', '', 'WG Ritz Crackers', 'Cheese Cubes','Water']


  public dataSource: Menu[] = [
 
  ]

  constructor(
  ) { }

  
  buildArrays() {
    // build meal type
    this.dataSource.forEach(element => this.mealTypeArray.push(element['mealType']))

    // build meal category
    this.dataSource.forEach(element => this.categoryArray.push(element['category']))

    // build Monday
    this.dataSource.forEach(element => this.mondayArray.push(element['monday']))

    // build Tuesdsy
    this.dataSource.forEach(element => this.tuesdayArray.push(element['tuesday']))

    // build Wednesday
    this.dataSource.forEach(element => this.wednesdayArray.push(element['wednesday']))

    // build Thrusday
    this.dataSource.forEach(element => this.thursdayArray.push(element['thursday']))

    // build Friday
    this.dataSource.forEach(element => this.fridayArray.push(element['friday']))
  };

  updateMenu(){
    this.dataSource = [];

    console.log(this.dataSource);

    this.dataSource = [
    {mealType: 'Breakfast', category: 'Milk', monday: this.monday[0], tuesday: this.tuesday[0], wednesday: this.wednesday[0], thursday: this.thursday[0], friday: this.friday[0]},
    {mealType: 'Breakfast', category: 'Fruits or Vegetables', monday: this.monday[1], tuesday: this.tuesday[1], wednesday: this.wednesday[1], thursday: this.thursday[1], friday: this.friday[1]},
    {mealType: 'Breakfast', category: 'Grains', monday: this.monday[2], tuesday: this.tuesday[2], wednesday: this.wednesday[2], thursday: this.thursday[2], friday: this.friday[2]},
    
    {mealType: 'Lunch', category: 'Milk', monday: this.monday[3], tuesday: this.tuesday[3], wednesday: this.wednesday[3], thursday: this.thursday[3], friday: this.friday[3]},
    {mealType: 'Lunch', category: 'Fruits or Vegetables', monday: this.monday[4], tuesday: this.tuesday[4], wednesday: this.wednesday[4], thursday: this.thursday[4], friday: this.friday[4]},
    {mealType: 'Lunch', category: 'Grains', monday: this.monday[5], tuesday: this.tuesday[5], wednesday: this.wednesday[5], thursday: this.thursday[5], friday: this.friday[5]},
    {mealType: 'Lunch', category: 'Meat or Meat Alternative', monday: this.monday[6], tuesday: this.tuesday[6], wednesday: this.wednesday[6], thursday: this.thursday[6], friday: this.friday[6]},

    {mealType: 'P.M Snack', category: 'Milk', monday: this.monday[7], tuesday: this.tuesday[7], wednesday: this.wednesday[7], thursday: this.thursday[7], friday: this.friday[7]},
    {mealType: 'P.M Snack', category: 'Fruits or Vegetables', monday: this.monday[8], tuesday: this.tuesday[8], wednesday: this.wednesday[8], thursday: this.thursday[8], friday: this.friday[8]},
    {mealType: 'P.M Snack', category: 'Grains', monday: this.monday[9], tuesday: this.tuesday[9], wednesday: this.wednesday[9], thursday: this.thursday[9], friday: this.friday[9]},
    {mealType: 'P.M Snack', category: 'Meat or Meat Alternative', monday: this.monday[10], tuesday: this.tuesday[10], wednesday: this.wednesday[10], thursday: this.thursday[10], friday: this.friday[10]},
    {mealType: 'P.M Snack', category: 'Other', monday: this.monday[11], tuesday: this.tuesday[11], wednesday: this.wednesday[11], thursday: this.thursday[11], friday: this.friday[11]},
    ]

    console.log(this.dataSource);

  }

}
