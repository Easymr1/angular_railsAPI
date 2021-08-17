export class AuthService {
  isAuth = false;

  signIn(token: any) {
    if(token) {
      this.isAuth = true
    }
  }

  signOut() {
    this.isAuth = false;
    localStorage.removeItem('token')
  }
  
  
}