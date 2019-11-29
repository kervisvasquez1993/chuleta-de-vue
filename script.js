var app = new  Vue ({
    el: '#app',
    data () {
        return {
            title : 'hola desde vue'
        }
    }
})

/* rendering declarativo*/

/*atributos Dinamicos*/
 var app2 = new Vue({
     el: '#app2',
     data() {
         return {
            name : 'Bitcoin',
             symbol: 'BTC',
             img : 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
             changePercent: 10,
             price : 8400,
             valor: 0 ,
             color : 'f4f4f4',
             prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
             dias : ['lunes',
                     'martes',
                     'miercoles',
                     'jueves',
                      'viernes',
                      'sabado',
                       'domingo'],
             pricesWithDays: [
                 { day: 'Lunes', value: 8400 },
                 { day: 'Martes', value: 7900 },
                 { day: 'Miercoles', value: 8200 },
                 { day: 'Jueves', value: 9000 },
                 { day: 'Viernes', value: 9400 },
                 { day: 'Sabado', value: 10000 },
                 { day: 'Domingo', value: 10200 },
             ],
             showPrices : false
         }
     },
     computed: {
        title(){
            return `${this.name} - ${this.symbol}`
        },
         convertidorValor() {
             if (!this.valor)
             {
                 return 0
             }
             return  this.valor / this.price

         }
     },
     watch: {
         showPrices(newVal1, oldVal){
             console.log(newVal1, oldVal)
         }
     },
     methods: {
         toggleShowPrices() {
             this.showPrices = !this.showPrices
             this.color = this.color.split('').reverse().join('')
         }
     }
 })