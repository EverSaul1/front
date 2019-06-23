import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor( private httpClient:HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/categoria');
    
  }
  save(categoria: Categoria){
    const headers = new HttpHeaders({'Content-type': 'applicacion/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/categoria' , categoria, {headers:headers});
  }
  put(categoria){
    const headers = new HttpHeaders({'Content-type': 'applicacion/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/categoria/' + categoria.id , categoria, {headers:headers});
  }
  delete(id){
    return this.httpClient.delete(this.API_ENDPOINT + '/categoria/' + id);
  }
}
