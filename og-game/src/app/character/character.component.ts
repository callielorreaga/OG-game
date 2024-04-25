import { Component, inject } from '@angular/core';
import { GenerateCharacterService } from '../generate-character.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  private characterGeneratorService = inject(GenerateCharacterService);
  public character$ = this.characterGeneratorService.character$;
  //use signals
}
