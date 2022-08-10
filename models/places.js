const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'https://images.unsplash.com/photo-1541086095944-f4b5412d3666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' },
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  }
})



placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)


// module.exports = [{
//     name: 'Nitty Gritty',
//     city: 'Sun Prairie',
//     state: 'WI',
//     cuisines: 'American, Traditional',
//     pic: '/images/Nitty-gritty.jpg',
//     // Photo by <a href="https://unsplash.com/@mab_studio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michele Blackwell</a> on <a href="https://unsplash.com/s/photos/restaurant-food-square?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
//   }, {
//     name: 'Buck N` Honeys',
//     city: 'Madison',
//     state: 'WI',
//     cuisines: 'American, Traditional',
//     pic: '/images/buckandhoneys.jpg'
//     // Photo by <a href="https://unsplash.com/@ferhadd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Farhad Ibrahimzade</a> on <a href="https://unsplash.com/s/photos/american-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//   }]