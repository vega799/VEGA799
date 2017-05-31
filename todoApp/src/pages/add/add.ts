import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
	
	public todoItem: String;
	public todoList: Array<String>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.todoList= JSON.parse(localStorage.getItem("todos"));
  	if(!this.todoList){
  		this.todoList= [];
  	}
  	this.todoItem="";
  }

  save(){
  	if(this.todoItem!=""){
  		this.todoList.push(this.todoItem);
  		localStorage.setItem("todos",JSON.stringify(this.todoList));
  		this.navCtrl.pop();
  	}
  }


}
