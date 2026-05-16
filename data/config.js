const CRITERIA    = ['vocal', 'image', 'perf', 'score'];
const CRIT_LABELS = { vocal:'Вокал', image:'Образ', perf:'Номер', score:'Оцінка' };

const EMOJI_OPTIONS = [
  { e:'💀', v:0  },
  { e:'🤯', v:10 },
  { e:'🕊️', v:7  },
  { e:'🌭', v:4  },
  { e:'🤡', v:1  },
];

const PICK_DEFS = [
  { id:'cringe',    label:'НАЙБІЛЬШ КРІНЖОВИЙ ВИСТУП', multi:false             },
  { id:'best_perf', label:'НАЙКРАЩИЙ ВИСТУП',          multi:false             },
  { id:'best_song', label:'НАЙКРАЩА ПІСНЯ',            multi:false             },
  { id:'top5',      label:'ХТО ПРОЙДЕ В ТОП 5',       multi:true,  max:5      },
  { id:'winner',    label:'ПЕРЕМОЖЕЦЬ',                multi:false, winner:true },
];
