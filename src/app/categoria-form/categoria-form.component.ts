import { Component, OnInit } from '@angular/core';
import { Categoria } from '../interfaces/categoria';
import { CategoriasService } from '../services/categorias.service';
import { CategoriaListComponent } from '../categoria-list/categoria-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
  categoria: Categoria = {
    nombre : null,
    descripcion: null,
  };
  id:any;
  edit: boolean = false;
  categorias : Categoria[];
  constructor( private categoriaService:CategoriasService , private  activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    
    if(this.id){
      this.edit = true;
      this.categoriaService.get().subscribe((data : Categoria[]) =>{
        this.categorias = data;
        this.categoria = this.categorias.find((m) =>{return m.id == this.id});
        console.log(this.categoria);
      }, (error) =>{
        console.log(error);
      });
    }else{
      this.edit = false;

    }
  }

  ngOnInit() {
    
  }
  saveCategoria(){
    if(this.edit){
      this.categoriaService.put(this.categoria).subscribe((data) => {
        alert('Categoria Actualizada');
        
      } ,  (error) =>{
        alert('Ocurrio un error');
      }); 

    }else{
      this.categoriaService.save(this.categoria).subscribe((data) => {
        alert('Categoria Guardada');
        
      } ,  (error) =>{
        alert('Ocurrio un error');
      }); 

    }
    
  }
}
