import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  
  credentials!: FormGroup;

  constructor(private fb: FormBuilder,
		private loadingController: LoadingController,
		private alertController: AlertController,
		private authService: AuthService,
		private router: Router) {}
  
    get email() {
      return this.credentials.get('email');
    }
  
    get password() {
      return this.credentials.get('password');
    }
  
    ngOnInit() {
      this.credentials = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
  async register() {
		const loading = await this.loadingController.create();
		await loading.present();

		const user = await this.authService.register(this.credentials.value);
		await loading.dismiss();

		if (user) {
			this.router.navigateByUrl('/principal', { replaceUrl: true });
		} else {
			this.showAlert();
		}
	}
  async showAlert() {
    const alert = await this.alertController.create({
      header:'Registro falhou',
      message:'Tente novamente!',
      buttons: ['OK']
    });
    await alert.present();
  }
}
 