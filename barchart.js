$(document).ready(function() {
  var keys=[];
  var sample =[300, 825, 900, 1090, 666];//変更した箇所


  $(function showElement() {
    $.ajax('api/dummy.json',
      {
        type: 'get',

        // xhrFields: { withCredentials: true },
        dataType: 'json',
        success: function succes(data) {
          function StyleDeclarationSetTransform(style,value){
            var list = [
              "transform",
              "webkitTransform",
              "MozTransform",
              "msTransform",
              "OTransform"
            ];
            var i;
            var num = list.length;
            for(i=0;i < num;i++){
              if(style[list[i]] !== undefined){
                style[list[i]] = value;
                return true;
              }
            }
            return false;
          }

          x.series.push({data:sample});//変更した箇所
          // x.xAxis.push({categories: keys});
          console.log("userの発言量"+sample);

          $('#container3').highcharts(x);
          return(keys);
        },
        error:function() {
          //取得失敗時に実行する処理
          console.log("何らかの理由で失敗しました");

        }


      }
    )

  });

//console.log(function(data));
  console.log(keys);

  var x = {
    chart: {
      type: 'bar',

    },
    title: {
      text: '議論の可視化'

    },
    subtitle: {
      text: 'Source: Wikipedia.org'

    },
    xAxis: {

      categories: ["user1","user2","user3","user4","user5","user6"],


      tickmarkPlacement: 'on',
      title: {
        enabled: false
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '回',
        align: 'high'
      },

    },
    tooltip: {
      shared: true,

    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      enabled: false
    },

    credits: {
      enabled: false
    },
    series: [
      {
        name: '総発言量',
        colorByPoint: true,
        colors: ['#23a1e4', '#444444', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        data: []
      }
    ]

  };


});
