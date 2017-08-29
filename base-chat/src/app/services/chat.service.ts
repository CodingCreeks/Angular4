import { Injectable } from '@angular/core';

import{ AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/Auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as firbase from 'firebase/app';

import{ ChatMessage} from '../models/chat-message.model';

@Injectable()
export class ChatService {

  constructor() { }

  sendMessage(){

  }
}
