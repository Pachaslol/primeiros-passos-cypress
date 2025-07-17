import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Test', () => {

  it('User Info Update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
    dashboardPage.checkDashboard()
    menuPage.acessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(),chance.last())
    myInfoPage.fillEmployedDetails('EmployedId','OtherID','DriverLicense','2025-07-29')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })
})