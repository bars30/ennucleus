import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  choosenButt: string = 'herbs'; // Ensure choosenButt is properly initialized
  herbsCont = [
    "/assets/img/product/basil.png",
    "/assets/img/product/chives.png",
    "/assets/img/product/cilantro.png",
    "/assets/img/product/dill.png",
    "/assets/img/product/lavendar.png",
    "/assets/img/product/mint.png",
    "/assets/img/product/oregano.png",
    "/assets/img/product/parsley.png",
    "/assets/img/product/rosemary.png",
    "/assets/img/product/sage.png",
    "/assets/img/product/thyme.png"
  ];
  fruitsArr = [
    "/assets/img/product/fruits/watermelon.png",
    "/assets/img/product/fruits/cantaloupe.png",
    "/assets/img/product/fruits/strawberry.png"
  ]
  flowersArr = [
    "/assets/img/product/flowers/sunflower.png",
    "/assets/img/product/flowers/marigold.png",
    "/assets/img/product/flowers/zinnia.png",
    "/assets/img/product/flowers/cosmos.png",
    "/assets/img/product/flowers/nasturtium.png",
    "/assets/img/product/flowers/cornflower.png",
    "/assets/img/product/flowers/pansy.png",
    "/assets/img/product/flowers/petunia.png",
    "/assets/img/product/flowers/daisy.png",
    "/assets/img/product/flowers/snapdragon.png",
    "/assets/img/product/flowers/hollyhock.png",
    "/assets/img/product/flowers/columbine.png",
    "/assets/img/product/flowers/foxglove.png",
    "/assets/img/product/flowers/lupine.png",
  ]
  vegetablesCont = [
    {
      img: "/assets/img/product/vegetables/tomato.png",
      value1: "Seeds: 50 | Price: $1.50 per packet",
      value2: "Seeds: 100 | Price: $2.50 per packet"
    },
    {
      img: "/assets/img/product/vegetables/cucumber.png",
      value1: "Seeds: 25 | Price: $1.50 per packet",
      value2: "Seeds: 500 | Price: $2.50 per packet"
    },
    {
      img: "/assets/img/product/vegetables/carrot.png",
      value1: "Seeds: 200 | Price: $1.50 per packet",
      value2: "Seeds: 300 | Price: $2.15 per packet"
    },
    {
      img: "/assets/img/product/vegetables/pepper.png",
      value1: "Seeds: 25 | Price: $2 per packet",
      value2: "Seeds: 50 | Price: $3 per packet"
    },
    {
      img: "/assets/img/product/vegetables/lettuce.png",
      value1: "Seeds: 500 | Price: $2 per packet",
      value2: "Seeds: 1000 | Price: $3 per packet"
    },
    {
      img: "/assets/img/product/vegetables/zucchini.png",
      value1: "Seeds: 10 | Price: $1.50 per packet",
      value2: "Seeds: 20 | Price: $2 per packet"
    },
    {
      img: "/assets/img/product/vegetables/spinach.png",
      value1: "Seeds: 200 | Price: $1.50 per packet",
      value2: "Seeds: 300 | Price: $2.10 per packet"
    },
    {
      img: "/assets/img/product/vegetables/onion.png",
      value1: "Seeds: 200 | Price: $2 per packet",
      value2: "Seeds: 300 | Price: $2.35 per packet"
    },
    {
      img: "/assets/img/product/vegetables/beetroot.png",
      value1: "Seeds: 50 | Price: $1.45 per packet",
      value2: "Seeds: 100 | Price: $2 per packet"
    },
    {
      img: "/assets/img/product/vegetables/broccoli.png",
      value1: "Seeds: 100 | Price: $1.50 per packet",
      value2: "Seeds: 200 | Price: $2.50 per packet"
    },
    {
      img: "/assets/img/product/vegetables/cauliflower.png",
      value1: "Seeds: 100 | Price: $1.50 per packet",
      value2: "Seeds: 200 | Price: $2.50 per packet"
    },
    {
      img: "/assets/img/product/vegetables/peas.png",
      value1: "Seeds: 50 | Price: $1.50 per packet",
      value2: "Seeds: 100 | Price: $2.25 per packet"
    },
    {
      img: "/assets/img/product/vegetables/radish.png",
      value1: "Seeds: 100 | Price: $1.50 per packet",
      value2: "Seeds: 200 | Price: $2.10 per packet"
    },
    {
      img: "/assets/img/product/vegetables/celery.png",
      value1: "Seeds: 200 | Price: $1.50 per packet",
      value2: "Seeds: 300 | Price: $2.20 per packet"
    },
    {
      img: "/assets/img/product/vegetables/eggplant.png",
      value1: "Seeds: 25 | Price: $2 per packet",
      value2: "Seeds: 50 | Price: $3 per packet"
    },
    {
      img: "/assets/img/product/vegetables/corn.png",
      value1: "Seeds: 20 | Price: $2 per packet",
      value2: "Seeds: 50 | Price: $3 per packet"
    },
    {
      img: "/assets/img/product/vegetables/pumpkin.png",
      value1: "Seeds: 10 | Price: $2 per packet",
      value2: "Seeds: 20 | Price: $3 per packet"
    },
    {
      img: "/assets/img/product/vegetables/squash.png",
      value1: "Seeds: 10 | Price: $2 per packet",
      value2: "Seeds: 20 | Price: $3 per packet"
    },
    {
      img: "/assets/img/product/vegetables/cabbage.png",
      value1: "Seeds: 100 | Price: $1.50 per packet",
      value2: "Seeds: 200 | Price: $2.50 per packet"
    },
    {
      img: "/assets/img/product/vegetables/brusselssprouts.png",
      value1: "Seeds: 50 | Price: $1.30 per packet",
      value2: "Seeds: 100 | Price: $2.10 per packet"
    }


  ]
  changeValue(value: string){
    this.choosenButt = value
    console.log(this.choosenButt);
    
  }
}
