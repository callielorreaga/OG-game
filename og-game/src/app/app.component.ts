import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenerateCharacterService } from './generate-character.service';
import { CharacterComponent } from './character/character.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CharacterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "OG's World";
  characterGeneratorService = inject(GenerateCharacterService);

  public generate(){
    this.characterGeneratorService.generateCharacter();
  }
}
