import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  private buildLoginUrl() {
    return `${environment.API_URL}/user/login`
  }

  private loginRequest(userName: string, password: string) {
    const loginUrl = this.buildLoginUrl()

    return this.httpClient.post(
      loginUrl,
      { userName, password },
      {observe: "response"}
    )
  }

  login(userName: string, password: string) {
    return this.loginRequest(userName, password)
  }
}
