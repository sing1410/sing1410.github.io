const valueA = 20
function any(){
    const valueA = 30
    console.log(valueA)
}

any()
console.log(valueA)

const obj = {
    value: 42
}

console.log(obj['value'])

obj.value = 80


console.log(obj['value'])

const object = {
    value: 42,
    displayValue: function() {
        return this.value
    }
}

console.log(object.displayValue() + object.value)