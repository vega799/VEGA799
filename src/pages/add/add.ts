import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
public todoItem: String;
public todolist: Array<String>
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.todolist =JSON.parse(localStorage.getItem("todos"));
		if(!this.todolist){
			this.todolist= [];
		}
	  	this.todoItem="";
	}

	save(){
		if(this.todoItem!=""){
			this.todolist.push(this.todoItem);
			localStorage.setItem("todos",JSON.stringify(this.todolist));
			this.navCtrl.pop();
		}
	}
}
