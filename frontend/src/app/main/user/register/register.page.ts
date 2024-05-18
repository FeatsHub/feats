import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { RecipeCategory, User } from 'src/api/models';
import { UserService } from 'src/api/services';

@Component({
  selector: 'app-login',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss']
})
export class RegisterPage implements OnInit {

  CHECK_EMAIL_STEP = 'checkEmail'
  CHECK_USERNAME_STEP = 'checkUsername'
  PASSWORD_STEP = 'password'
  CATEGORIES_STEP = 'categories'

  current_step = 'checkEmail'

  userForm: FormGroup
  createdUser: User
  selectedCategories: RecipeCategory[] = []

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _toastController: ToastController,
    private _loadingCtrl: LoadingController,
    private _router: Router,
  ) {
    this.userForm = this._formBuilder.group({
      first_name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  changeStep(step: string){
    this.current_step = step
  }

  selectEmail(email: string){
    this.userForm.patchValue({
      email: email
    });
  }

  selectUsername(username: string){
    this.userForm.patchValue({
      username: username
    });
  }

  async createUser(user: User){
    const loading = await this._loadingCtrl.create({
      message: 'Saving...',
      duration: 4000,
    });
    loading.present();
    this._userService.userCreate$Json$Response({body: user})
      .subscribe(
      {
        next: (user) => {
          this.createdUser = user.body
        },
        error: (e) => {
          this._toastController.create({
            message: e.error,
            duration: 1500,
            position: 'bottom',
          }).then(
            (toast) => {
              toast.present()
            }
          );
          console.error(e)
        },
        complete: () => {
          loading.dismiss();
          this.login(false);
        }
      }
    );
  }

  saveCategories(){
    this._userService.userPreferencesPartialUpdate$Json(
      {
        id: this.createdUser.id,
        body: {
          'favorite_categories': this.selectedCategories.map(item => {
            return item.id
          })
        }
      }
    ).subscribe(
      {
        complete: () => {
          this.login(true);
        }
      }
    )
  }

  login(redirect: boolean = false){
    this._userService.userLoginCreate$Json$Response({body:
      {
        email: this.userForm.get('email')!.value,
        password: this.userForm.get('password')!.value,
        token: -1,
        id: -1
      }}).subscribe({
      next: (response) => {
      },
      error: (e) => {
        this._toastController.create({
          message: e.error,
          duration: 1500,
          position: 'bottom',
        }).then(
          (toast) => {
            toast.present()
          }
        );
        console.error(e)
      },
      complete: () => {
        // NAVIGATE TO THE APP
        if(redirect){
          this._router.navigate(['/tabs/recipes']);
        }else{
          this.current_step = this.CATEGORIES_STEP;
        }
      }
    });
  }

}
