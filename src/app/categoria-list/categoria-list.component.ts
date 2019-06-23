import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interfaces/categoria';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  
  categorias:Categoria[];
  constructor(private categoriaServices: CategoriasService) { 
    this.getCategorias();
  

    
     
  }
  getCategorias(){
    this.categoriaServices.get().subscribe((data: Categoria[])=>{
      this.categorias = data;
    },(error)=>{
 
    });
  }
  ngOnInit() {
   
  }
  delete(id){
    if(confirm('seguro que quieres eliminar esta categoria')){
      this.categoriaServices.delete(id).subscribe((data)=>{
        
        this.getCategorias();
      },(error)=> {
        alert("error");
      });

    }
    
  }

}
