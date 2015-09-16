'use strict'
angular.module('myTest.services',[])
.factory('newsService',[function () {
  return {
    get: function () {
      return [
              {title:'Heading One',
              paragraphs:['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velut ego nunc moveor. Et non ex maxima parte de tota iudicabis? Heri, inquam, ludis commissis ex urbe profectus veni ad vesperum. Teneo, inquit, finem illi videri nihil dolere. Quae cum essent dicta, discessimus. Quis contra in illa aetate pudorem, constantiam, etiamsi sua nihil intersit, non tamen diligat? Luxuriam non reprehendit, modo sit vacua infinita cupiditate et timore.','Duo Reges: constructio interrete. Consequentia exquirere, quoad sit id, quod volumus, effectum. Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum abducas licebit. Si de re disceptari oportet, nulla mihi tecum, Cato, potest esse dissensio. Egone non intellego, quid sit don Graece, Latine voluptas? Ut in geometria, prima si dederis, danda sunt omnia.'],
              rate:0, tags: ['#tag1','#tag2','#tag3']},
              {title:'Heading Two',
              paragraphs:['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velut ego nunc moveor. Et non ex maxima parte de tota iudicabis? Heri, inquam, ludis commissis ex urbe profectus veni ad vesperum. Teneo, inquit, finem illi videri nihil dolere. Quae cum essent dicta, discessimus. Quis contra in illa aetate pudorem, constantiam, etiamsi sua nihil intersit, non tamen diligat? Luxuriam non reprehendit, modo sit vacua infinita cupiditate et timore.','Duo Reges: constructio interrete. Consequentia exquirere, quoad sit id, quod volumus, effectum. Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum abducas licebit. Si de re disceptari oportet, nulla mihi tecum, Cato, potest esse dissensio. Egone non intellego, quid sit don Graece, Latine voluptas? Ut in geometria, prima si dederis, danda sunt omnia.'],
              rate:1, tags: ['#tag1','#tag2','#tag3']},
              {title:'Heading Three',
              paragraphs:['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velut ego nunc moveor. Et non ex maxima parte de tota iudicabis? Heri, inquam, ludis commissis ex urbe profectus veni ad vesperum. Teneo, inquit, finem illi videri nihil dolere. Quae cum essent dicta, discessimus. Quis contra in illa aetate pudorem, constantiam, etiamsi sua nihil intersit, non tamen diligat? Luxuriam non reprehendit, modo sit vacua infinita cupiditate et timore.','Duo Reges: constructio interrete. Consequentia exquirere, quoad sit id, quod volumus, effectum. Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum abducas licebit. Si de re disceptari oportet, nulla mihi tecum, Cato, potest esse dissensio. Egone non intellego, quid sit don Graece, Latine voluptas? Ut in geometria, prima si dederis, danda sunt omnia.'],
              rate:2, tags: ['#tag1','#tag2','#tag3']},
              {title:'Heading Four',
              paragraphs:['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velut ego nunc moveor. Et non ex maxima parte de tota iudicabis? Heri, inquam, ludis commissis ex urbe profectus veni ad vesperum. Teneo, inquit, finem illi videri nihil dolere. Quae cum essent dicta, discessimus. Quis contra in illa aetate pudorem, constantiam, etiamsi sua nihil intersit, non tamen diligat? Luxuriam non reprehendit, modo sit vacua infinita cupiditate et timore.','Duo Reges: constructio interrete. Consequentia exquirere, quoad sit id, quod volumus, effectum. Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum abducas licebit. Si de re disceptari oportet, nulla mihi tecum, Cato, potest esse dissensio. Egone non intellego, quid sit don Graece, Latine voluptas? Ut in geometria, prima si dederis, danda sunt omnia.'],
              rate:3, tags: ['#tag1','#tag2','#tag3']}
            ];
    }
  };
}]);
