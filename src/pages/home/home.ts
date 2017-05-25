import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddPage} from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public todolist:Array<string>
  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter(){
  this.todolist=JSON.parse(localStorage.getItem("todos"));
  if(!this.todolist){
  this.todolist =[];
  }
  }

  delete(index: number){
  this.todolist.splice(index,1);
  localStorage.setItem("todos",JSON.stringify(this.todolist));
  }

  add(){
this.navCtrl.push(AddPage);

  }

}
