import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Test', () => {

  it('Login - Sucess', () => {
  loginPage.acessLoginPage()
  loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
  dashboardPage.checkDashboard()
})

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkAcessInvalid()
})
})