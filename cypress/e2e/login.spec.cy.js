import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()


describe('Orange HRM Test', () => {

  const selectorsList = {
    
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: '.--close',
    submitButton:"[type='submit']",
    genericComboBox: ".oxd-select-text--arrow"
    
  }

  it.only('User Info Update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
    dashboardPage.checkDashboard()
    menuPage.acessMyInfo()
    //cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    //cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    //cy.get(selectorsList.genericField).eq(3).clear().type('EmployedId')
    //cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    //cy.get(selectorsList.genericField).eq(5).clear().type('DriversTest')
    //cy.get(selectorsList.genericField).eq(6).clear().type('2025-05-12')
    //cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.genericComboBox).eq(0).click({ force: true })
    //cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    //cy.get(selectorsList.genericComboBox).eq(1).click({ force: true })
    //cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    //cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    //cy.get('body').should('contain', 'Successfully Updated')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})