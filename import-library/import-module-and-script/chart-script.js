import { Vector3D } from '../../vector3d.js';

let a = new Vector3D(1, 2, 1);
alert(a.toString())

var ctx= document.getElementById("myChart").getContext("2d");
var myChart= new Chart(ctx,{
    type:"line",
    data:{
        labels:['col1','col2','col3', 'col4'],
        datasets:[{
                label:'Num datos',
                data:[10,9,15, 7],
                backgroundColor:[
                    'rgb(66, 134, 244,0.5)',
                    'rgb(74, 135, 72,0.5)',
                    'rgb(229, 89, 50,0.5)',
                    'black'
                ]
        }]
    },
    options:{
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 100
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales:{
            yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
            }]
        }
    }
});