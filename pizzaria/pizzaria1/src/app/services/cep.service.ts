import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private API_URL = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  getEndereco(cep: string) {
    return this.http.get(`${this.API_URL}/${cep}/json/`);
  }
}
