import { Vector3D } from '../../vector3d.js';
import { Chart, registerables } from '../../node_modules/chart.js/dist/chart.esm.js';
Chart.register(...registerables);

let a = new Vector3D(1, 2, 1);
alert(a.toString());

var ctx= document.getElementById("myChart").getContext("2d");
var myChart= new Chart(ctx,{
    type:"bar",
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