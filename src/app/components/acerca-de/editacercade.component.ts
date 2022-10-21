import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css']
})
export class EditacercadeComponent implements OnInit {
  
  persona: persona = null;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, 
  private personaService: PersonaService, public imageService : ImageService) {}

  ngOnInit(): void {
        
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void { 
    const id = this.activatedRoute.snapshot.params['id'];

    this.persona.img = this.imageService.url

    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar datos");
        this.router.navigate(['']);
      })
  }
  

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
  }


}
