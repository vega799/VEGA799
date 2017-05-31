import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from  '../add/add'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todoList: Array<String>;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter(){
    this.todoList = JSON.parse(localStorage.getItem("todos"));
    if(!this.todoList){
        this.todoList = [];
    }
  }

  delete(index: number){
    this.todoList.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todoList));

  }

  add(){
    this.navCtrl.push(AddPage);
  }

}
