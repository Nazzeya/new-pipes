import { Component, OnInit } from '@angular/core';
import { IFigure } from './models/figure';
import { leftSide } from './data/left-side';
import { rightSide } from './data/right-side';
import { center } from './data/center';


@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {

  constructor() { }

  leftFigures: IFigure[] = leftSide;
  rightFigures: IFigure[] = rightSide;
  centerFigures: IFigure[] = center;

  widthRectV(width: any){
    width+=10;
    return width;
  }

  heightRectV(height: any){
    return 10;
  }

  xRectV(coordX: any){
    coordX-=5;
    return coordX;
  }

  yRectV(coordY: any, length: any){
    coordY+=length-10;
    return coordY
  }

  widthRectG(width: any){
    return 10;
  }

  heightRectG(height: any){
    height+=10;
    return height;
  }

  xRectG(coordX: any, length: any){
    coordX+=length-10;
    return coordX;
  }

  yRectG(coordY: any){
    coordY-=5;
    return coordY
  }

  toString(id: any){
    id = String(id);
    return id;
  }

}
