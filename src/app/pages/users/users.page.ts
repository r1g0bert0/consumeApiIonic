import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user.model';
import { UsersService } from '../../services/user-service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
        .subscribe(respuesta => this.usuarios = respuesta)
  }
  buscarUsuario(event) {
    console.log(event);
  }
}
