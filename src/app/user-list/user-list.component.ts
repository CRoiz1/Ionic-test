import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => {
        console.log('Usuarios recibidos:', data);
        this.users = data;
        this.isLoading = false;
        if (this.users.length === 0) {
          this.errorMessage = 'No hay usuarios disponibles';
        }
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Error al cargar los usuarios';
        console.error('Error fetching users:', error);
      }
    );
  }
}
