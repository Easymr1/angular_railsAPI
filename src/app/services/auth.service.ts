export class AuthService {
  isAuth = false;
  signIn(token: any) {
    if(token) {
      this.isAuth = true
      console.log(this.isAuth)
    }
  }

  signOut() {
    this.isAuth = false;
  }
  
  
}