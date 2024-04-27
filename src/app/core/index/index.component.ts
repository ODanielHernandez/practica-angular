import { Component } from '@angular/core';
import { ImageComponent } from '../../components/image/image.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
