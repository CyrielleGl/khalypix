import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
    Prenom: new FormControl(''),
    Nom: new FormControl(''),
    Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
    Message: new FormControl('', [Validators.compose([Validators.required])]),
    Check: new FormControl('')
    });
  }

  onsubmit(FormData) {
    console.log(FormData);
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      },
      error => {
        console.warn(error.responseText);
        console.log({ error });
      });
  }
  }
