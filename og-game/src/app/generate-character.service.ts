import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type Character = {
  Name: string;
  Power: string;
  Feeling: string;
  Snack: string;
}
@Injectable({
  providedIn: 'root'
})
export class GenerateCharacterService {
  private names = ["OG", "Mr. Kitty", "Tina", "Clayton", "Cousin Curly", "CJ", "Adventure Boy!"] as const;
  private powers = ["Super Jump", "Stink Bomb", "Sonic Bark", "Spin-Twirl Combo", "Double Shake", "Pillow Burrow"] as const;
  //choose three powers and add ability modifiers based on... something
  private emotions = ["Happy", "Frustrated", "Silly", "Hungry", "Sleepy", "Dopey", "Anxious"] as const;
  private snacks = ["Bully stick", "String cheese", "Carrot", "Freeze dried chicken nuggets", "Cucumber", "Cheese rind"] as const;
  private character = new BehaviorSubject<Character | null>(null);
  public character$ = this.character.asObservable();


  constructor() { }

  public generateCharacter(): void{
    const randomName = this.generateName();
    const randomPower = this.powers[Math.floor(Math.random() * this.powers.length)];
    const randomFeeling = this.emotions[Math.floor(Math.random() * this.emotions.length)];

    let character = {
      Name: randomName,
      Power: randomPower,
      Feeling: randomFeeling,
      Snack: this.generateSnack()
    }
    console.log("character", character);
    this.character.next(character);
  };

  private generateName():string{
    // try pickone typescript 
    return this.names[Math.floor(Math.random() * this.names.length)];
  }
  private generateSnack():string{
    return this.snacks[Math.floor(Math.random() * this.snacks.length)];
  }
  //Save or export character, display success/error messages

  /*Create x number of saved characters saved as JSON 
    Display a list of saved characters with their basic details
    Clicking on a character opens the details in a modal or separate page
    Option to delete characters from the list
    Save character changes to local storage, have a reset button*/

  // Theme Switcher:Light/Dark mode for the app  

  //Background animations

  //Angular UI components
}
