import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestServiceService } from './services/rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  calculo: FormGroup;
  result: string = '';

  constructor(private restService: RestServiceService) {}

  ngOnInit() {
    this.calculo = new FormGroup({
      paramN: new FormControl('', Validators.required),
      paramX: new FormControl('', Validators.required),
      paramY: new FormControl('', Validators.required),
    });
  }

  get paramN() {
    return this.calculo.get('paramN');
  }
  get paramX() {
    return this.calculo.get('paramX');
  }
  get paramY() {
    return this.calculo.get('paramY');
  }

  onSubmit() {
    this.restService.postMethod(this.calculo.value).subscribe((data) => {
      this.result = data.data;
    });
  }
}
