import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleEnum, User } from 'src/api/models';
import { UserService } from 'src/api/services';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile-form.page.html',
  styleUrls: ['profile-form.page.scss']
})
export class ProfileFormPage implements OnInit {

  userForm: FormGroup
  profileImage: ''

  constructor (
    private _userService: UserService,
    private _router: Router,
    private _formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      id: new FormControl(''),
      username: new FormControl('', Validators.required),
      email: new FormControl(''),
      first_name: new FormControl('', Validators.min(1)),
      last_name: new FormControl('', Validators.min(1)),
      phone: new FormControl(''),
      image: new FormControl(''),
    });
    this._userService.userCurrentRetrieve$Response().subscribe({
      next: (response) => {
        this.userForm.patchValue(response.body);
      },
      error: (e) => {
      },
      complete: () => {
      }
    });
    
  }

  async submit(){
    const user = this.userForm.value as User
    this._userService.userPartialUpdate$Json$Response({body: user, id: user.id}).subscribe({
      next: (response) => {
      },
      error: (e) => 
      console.error(e),
      complete: () => {
        this._router.navigate(['/profile']);
      }
    });
  }

  imageSelected(image: any){
    /*this.recipeImageForm.patchValue({
      image: image
    });
    this._recipeImageService.recipeImageCreate$FormData$Response({
        body: this.recipeImageForm.value as RecipeImage
      }).subscribe({
        next: (response) => {
          this.recipeForm.patchValue({
            image: response.body.id
          });
          this.selectedImage = response.body.image!
        },
        error: (e) =>
        console.error(e),
        complete: () => {
        }
      });*/
  }

}
