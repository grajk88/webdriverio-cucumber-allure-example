import { Given, When, Then } from 'cucumber'
import base from '../page-objects/BasePage'
import accountOverview from '../page-objects/AccountOverviewPage'
import billPaymentPage from '../page-objects/BillPaymentPage'
import loginPage from '../page-objects/LoginPage'

// Login Steps

Given(/^I am in the login page$/, function(){ 

    base.launchApplication()

})

When(/^I try to login with valid credentials$/, function(){

    loginPage.loginWithValidCredentials()

})

Then(/^I should be able to login successfully$/, function(){

    accountOverview.waitForAccountServicesLabel()

    loginPage.logOutOfApplication() 

})

// Account Overview Page Steps

Given(/^I am in the Accounts overview page$/, function(){

    base.launchApplication()
    loginPage.loginWithValidCredentials()
    accountOverview.waitForAccountServicesLabel()

})

When(/^I try to do a payment for a bill$/, function(){

    accountOverview.navigateToBillPaymentPage()
    billPaymentPage.fillBillPaymentForm()

})

Then (/^I should be able to pay successfully$/, function(){


})

