class Base {

    launchApplication(){
        browser.url('https://parabank.parasoft.com/parabank/index.htm', {'timeout':30000})
        browser.maximizeWindow()
    }

}
export default new Base()