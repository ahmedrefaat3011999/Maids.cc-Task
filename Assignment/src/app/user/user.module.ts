import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserRoutingModule } from './user-routing.module';
import { GetAllUsersComponent } from './Components/get-all-users/get-all-users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";
import { RotateCardDirective } from '../shared/directives/Rotate.directive';

@NgModule({
    declarations: [
        GetAllUsersComponent,
        UserDetailsComponent,
        RotateCardDirective
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        SharedModule
    ]
})
export class UserModule {}
