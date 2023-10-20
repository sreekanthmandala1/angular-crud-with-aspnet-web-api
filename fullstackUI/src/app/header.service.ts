import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  baseURL : any = 'http://localhost:4200'
  products : any=[]
  basic:any;
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'hdshdjs-skdhjsdn' });
 options = { headers: this.headers };


  constructor(private http : HttpClient) { }

  headerFn(){
    this.http.post(this.baseURL,this.options,this.products)
  }

  getApiData(){
    this.http.get(this.baseURL + '/api/products',this.options)
  }
}
