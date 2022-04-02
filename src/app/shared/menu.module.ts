export class Menu {
  mealType: string;
  category: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;

  constructor(mealType: string, category: string, monday: string,  tuesday: string, 
              wednesday: string, thursday: string, friday: string) 
  {
      this.mealType = mealType;
      this.category = category;
      this.monday = monday;
      this.tuesday = tuesday;
      this.wednesday = wednesday;
      this.thursday = thursday;
      this.friday = friday;
  }
 }

