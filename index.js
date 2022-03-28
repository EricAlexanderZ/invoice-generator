const costs = [80.00, 100.00, 200.00]
let sum = 0
let btnClicks = 0

// VARIABLE THAT WILL DISPLAY THE AMOUNT DUE
const totalAmount = document.getElementById("total-amount")
//SEND INVOICE
const sendBtn = document.getElementById("send-btn")

// CONTAINER VARIABLE
const detailsContainer = document.getElementById("details-container")

//FABRICATION
const fabricationBtn = document.getElementById("fabrication-btn")
const fabContainer = document.getElementById("fab-container")
const removeFab = document.getElementById("remove-fab")

//TRIGGERS DISPLAYS OF FAB-INFO & REMOVE
fabricationBtn.addEventListener("click", function() {
    if (btnClicks <= 1) {
        renderDetails(fabContainer)
        sum += costs[1]
        displayTotal()
        btnClicks = 2
    }
})
removeFab.addEventListener("click", function() {
        btnClicks = 1
        removeBtns(fabContainer)
        sum -= costs[1]
        displayTotal()
})

//PAINT
const paintBtn = document.getElementById("paint-btn")
const paintContainer = document.getElementById("paint-container")
const removePaint = document.getElementById("remove-paint")

//TRIGGERS DISPLAY OF PAINT-INFO & REMOVE
paintBtn.addEventListener("click", function() {
        if (btnClicks <= 2 && btnClicks >= 2) {
        renderDetails(paintContainer)
        sum += costs[0]
        displayTotal()
        btnClicks = 3
        }
})
removePaint.addEventListener("click", function() {
        btnClicks = 2
        removeBtns(paintContainer)
        sum -= costs[0]
        displayTotal()
})

//INSTALLATION
const installationBtn = document.getElementById("installation-btn")
const installationContainer = document.getElementById("installation-container")
const removeInstall = document.getElementById("remove-install")

//TRIGGERS DISPLAY OF INSTALLATION-INFO & REMOVE
installationBtn.addEventListener("click", function() {
        if (btnClicks <= 3 && btnClicks >= 3) {
            renderDetails(installationContainer)
            sum += costs[2]
            displayTotal()
            btnClicks = 4
        }
}) 
removeInstall.addEventListener("click", function() {
        btnClicks = 3
        removeBtns(installationContainer)
        sum -= costs[2]
        displayTotal()
})

// FUNCTION THAT RESETS EVERYTHING WHEN SEND INVOICE BTN IS CLICKED.
const invoiceSent = "Thank you for your business!"
sendBtn.addEventListener("click", function() {
    displayNone()
    alert(invoiceSent)
    sum = 0   
    btnVal = true
})

// FUNCTION THAT DISPLAYS NO SERVICES UNTIL THEY ARE CLICKED
function displayNone() {
    detailsContainer.style.display = 'none'
    fabContainer.style.display = 'none'
    paintContainer.style.display = 'none'
    installationContainer.style.display = 'none'
    sendBtn.style.display = "none"
    totalAmount.textContent = ''
}
displayNone()

//TRIGGERS EACH REMOVE BUTTON
function removeBtns(innerContainer) {
        innerContainer.style.display = 'none'
}

// FUNCTION THAT DISPLAYS ALL SERVICES
function renderDetails(innerContainer) {
    detailsContainer.style.display = 'block'
    innerContainer.style.display = 'flex'
    sendBtn.style.display = 'block'
}

// FUNCTION TO DISPLAY SUM AS TOTAL AMOUNT
function displayTotal() {
    totalAmount.textContent = `$${sum.toFixed(2)}`
}

// DONT ALLOW FOR SAME SERVICE TO ADD TO VALUE MORE THAN ONCE


