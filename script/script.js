var doviz=[
    {
        name: 'Dolar',
        sembol: '$',
        deger: '7.4471'
    },
    {
        name: 'Euro',
        sembol: '€',
        deger: '9.0715'
    },
    {
        name: 'Sterlin',
        sembol: '£',
        deger:'10.080'
    },
    {
        name:'Altın',
        sembol: 'Altın',
        deger:'443.1730'
    }
]
var index=0;


const text=document.querySelector('.text');
const button=document.querySelector('.buton').addEventListener('click' ,convertt);
const selectList=document.querySelector('.form-select');
const dovizSelect=document.querySelector('.dovizSelect');
const dovizValue=document.querySelector('.dovizValue');
const verilenTutar=document.querySelector('.verilenTutar');
const verilenDoviz=document.querySelector('.verilenDoviz');
const alınanTutar=document.querySelector('.alınanTutar');


selectList.addEventListener('change' , function(event){
    valuee=event.target.value;
    valueee=doviz[valuee-1].sembol;
    verilenDoviz.textContent=valueee;

    //------------

    dovizSelect.textContent=doviz[valuee-1].name;
    dovizValue.textContent=doviz[valuee-1].deger;
});

function convertt(event){
    yazi = text.value;
    yazii=parseFloat(yazi);
    verilenTutar.textContent=yazi;
    yenideger=doviz[valuee-1].deger;
    yenidegerr=parseFloat(yenideger);
    sondeger= parseFloat(yenidegerr*yazii);
    console.log(sondeger);
    alınanTutar.textContent=sondeger;

    text.value='';
    event.preventDefault();
}