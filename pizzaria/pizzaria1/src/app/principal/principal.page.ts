import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { CepService } from '../services/cep.service';
import { ActivatedRoute } from '@angular/router';
import { PerfilPage } from '../perfil/perfil.page';
import { PrincipalPageRoutingModule } from './principal-routing.module';
import { DefaultValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  cep: string='';
  endereco= window.history.state;
  pesquisa!: FormGroup;
  d: string='';
  input: string='';
  constructor(
		private loadingController: LoadingController,
		private alertController: AlertController,
		private authService: AuthService,
		private router: Router,
    private cepService: CepService,
    private activatedroute: ActivatedRoute,
    private fb: FormBuilder
    
  ) { }
  
  

  public data = [
    'Calabresa',
    'Portuguêsa',
    "Pizza de M&M's",
    'Pizza de Chocolate',
    '4 Queijos',
    'Bebidas',
  ];
  public results = [...this.data]

  get barra(){

    return this.pesquisa.get('barra');

  }
  
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

  async pesq(){
    
    if (this.input == this.data[0]) {
      this.router.navigateByUrl('/pizza1', {replaceUrl: true});
    }
    else if (this.input == this.data[1]) {
      this.router.navigateByUrl('/pizza2', { replaceUrl: true });
    }
    else if (this.input == this.data[2]) {
      this.router.navigateByUrl('/pizza3', { replaceUrl: true });
    }
    else if (this.input== this.data[3]) {
      this.router.navigateByUrl('/pizza4', { replaceUrl: true });
    }
    else if (this.input== this.data[4]) {
      this.router.navigateByUrl('/pizza5', { replaceUrl: true });
    }
    else if(this.input == this.data[5]) {
      this.router.navigateByUrl('/bebidas', { replaceUrl: true });
    }
    else{

      console.log("tente novamente")

    }
  
  }
  
  ngOnInit() {
    this.pesquisa = this.fb.group({
      barra: ['', Validators.required]
    });
  }
  dirt(){
  if(this.input == ''){
    this.pesquisa.reset();
  }

  }

  consultarCep() {
    this.cepService.getEndereco(this.cep).subscribe(
      (data) => {
        this.endereco = data;
      });
    }}