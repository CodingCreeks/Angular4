import { Component, OnInit } from '@angular/core';

@Component({
  /* Component selector*/
  selector: 'app-servers',

  /* Attribute selector */
  // selector: '[app-servers]',

  /*select by class  */
  // selector: '.app-servers',

  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
ServerCreationStatus='No server was created!';
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
      
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
this.ServerCreationStatus="Server was Created";
  }

}
