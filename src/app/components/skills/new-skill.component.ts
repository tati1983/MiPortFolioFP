import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombre: string;
  porcentaje: number;
  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    console.log("tati1");
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillService.save(skill).subscribe(
      data => {
        console.log("tati2");
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err => {
        console.log("tati32");
        alert("Falló al añadir la Skill");
        this.router.navigate(['']);
      }
    )
  }

}
