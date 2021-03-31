// var valueDollarText = prompt('Enter a dollar amount? ')
// var valueReaisNumber = parseFloat(valueDollarText * 5.50).toFixed(2)

// alert(`${valueReaisNumber} R$`)

const Modal = {
    open() {
      document
        .querySelector('.modal-coin')
        .classList
        .add('active')
    },
  
    close() {
      document
        .querySelector('.modal-coin')
        .classList
        .remove('active')
    }
  }