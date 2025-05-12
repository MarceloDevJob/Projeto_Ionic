import { Component, OnInit } from '@angular/core';
import { CepService } from '../services/cep.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Firestore, doc, docData, setDoc } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit{
  cep: string='';
  endereco: any='';
  
  constructor(private cepService: CepService,
              private router: Router,
              private fb: FormBuilder,
              private firestore: Firestore,
              private authservice: AuthService
              ) { }
 
  consultarCep() {
      this.cepService.getEndereco(this.cep).subscribe(
        (data) => {
          this.endereco = data;
        },
        (error) => {
          console.error('Erro ao consultar o CEP', error);
        },
      );
  }
  async logout(){
    await this.authservice.logout();
    this.router.navigateByUrl('/', {replaceUrl: true});
   }
async irprincipal(){
    
    this.router.navigateByUrl('/principal', {state: { endereco: this.endereco } });
  }
    
ngOnInit(){
  
}
  }


