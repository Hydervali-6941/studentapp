import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent implements OnInit {

  
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() { }

  ngOnInit(): void {
    $(function () {
      $('.checkme').click(function (event) {
        var x = $(this).is(':checked');
        if (x == true) {
          $(this).parents('.checkbox-card').find('.passport-box').hide();
        } else {
          $(this).parents('.checkbox-card').find('.passport-box').show();
        }
      });
    });
  }

}
