'use strict'

const angular = require('angular')
const cowsay = require('cowsay-browser')
const cowsayApp = angular.module('cowsayApp', [])

cowsayApp.controller('CowsayController', ['$log', CowsayController])

function CowsayController($log) {
  $log.debug('#CowsayController')

  this.title = 'Welcome to Fatties Cowville'
  this.history = []

  cowsay.list((err, cows) => {
    this.cowfiles = cows
    this.current = this.cowfiles[0]
  })

  this.update = function(input) {
    $log.debug('#update')
    return cowsay.say({text: input || 'quack quack', f: this.current})
  }

  this.speak = function(input) {
    $log.debug('#speak')
    this.spoken = this.update(input)
    this.history.push(this.spoken)
  }

  this.undo = function() {
    $log.debug('#undo')
    let temp = his.history.pop()
    this.spoken = temp || ''
  }
}

cowsayApp.controller('NavigationController', ['$log', NavigationController])

function NavigationController($log) {
  $log.debug()

  this.routes = [
    {
      name 'home',
      url:'/home'
    }
    {
      name 'about',
      url:'/about'
    }
    {
      name 'contact',
      url:'/contact'
    }
  ]
}