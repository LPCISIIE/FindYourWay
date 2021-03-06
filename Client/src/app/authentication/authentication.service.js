
export default class AuthService {
  constructor ($rootScope, JWTService, User, $state) {
    this.$rootScope = $rootScope
    this.JWTService = JWTService
    this.User = User
    this.$state = $state
  }

  check () {
    return this.User.loggedIn((response) => {
      this.$rootScope.user = response.user
    }, () => {
      this.logout()
    }).$promise
  }

  login (credentials) {
    return this.User.login(credentials, (user) => {
      this.JWTService.setToken(user.token)
    }).$promise
  }

  register (credentials) {
    return this.User.register(credentials).$promise
  }

  logout () {
    // User.signout()
    delete (this.$rootScope.user)
    this.JWTService.removeToken()
  }
}

AuthService.$inject = ['$rootScope', 'JWTService', 'User', '$state']
