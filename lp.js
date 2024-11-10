const region = document.querySelector('.region');
const Globalgenre = document.querySelectorAll('#Global');
const Indiagenre = document.querySelectorAll('#India');
const genre = document.querySelector('.genre');
const cardimg = document.querySelectorAll('.card-img');
const moviecard = document.querySelectorAll('.india-movies-trending');
const globalwatch = ["https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABft7cG56_SaeA1ddLnGBeJVXooR0ntxbFNFBm1t_iVcWt2rMzJWBy_USVFJWcIJCDhc4Am6XBzP6E2A-cG5FBqQklXDwabsPeRUgNpmnFuVs0LdbXl8YfN3xBNQtDEPfAJB-qg.jpg?r=3f5",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYqRvb2ggbShUZGi-isKo-BGAJBcWYkD_YO1XKo96UQYIsIeKhdzKtB5kt6gb-6R3N8gawnLaD20OIvwaZHjxQNXxpM07Xpl3hmbnCTxHXivY4pPEDEulxsViwNjCd-snjlirg.jpg?r=e79",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcw8LGdRKWrDfG7CxEzAdDwhZywMvxszPpLslgpya4QqRpi284YvcfTq3oLjuIXoFVqwHA_J1t_sYDh7W8-X_Y5D-t5UbenaE6mTGIJuG2PvLQyhhEqIEOFbi8uBrPk_3Bl7Sg.jpg?r=112",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTmkj7xzm8_Yo7ug64UGJQ-_OmqJ4bRQt-M1OAiQt_ylgxR5K2GlS4Ktu_Cyl3Qt7AkJg7fcNdB0PkO_bWoLZfI9Y3NIVqTmwrXVr2h06N6QmD8Ti-GFVadCZO2V4a5JC8A1Xw.jpg?r=c37",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQwrwezcSM5geqNYZrFw3PyiFW13EHMSL4Mmz3ZtqiJlWjLBszWUpogTTUkbn1MF5QkKLDaBlb9wo3CFH1oUJlEUaCJRGcCgPK6juLN5oacB8m5a5auGrFvF5Z9UcVHieGPzcg.jpg?r=c7b",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABb1Z8ByJ4FTkH0x81nNrX_ELRtGQV7JTXG6S5gdjcPefqsuLL8kIZYTLl_W1m_DVuAC7mnHUVAr1zGpsth0pC6-trJOmoFLxZ-g3_Ld7EkfNcjHt12S1txqXhTUp_XXYK0K6sw.jpg?r=c56",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABX1lxH6ot42tEtDkIAiixhHaueJTMVBMkLyFJMq9rZxV3J9KSLsp7zRG1EvS4kU_dReJcmHjS3P4SmJykU0_dYOsuYywxd45iNBRAI_ZddxrqzICWI5UG_XGeo3pZw7o0KTirw.jpg?r=e07",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWUlzvP5vfIS7rl85ihTtKQ7lRDLmy2YR7h8hvahuTDtH_krwg9kFb_XNnT8vT_Rh1eYF-oVFPRrsiI0heihs5HYuk58yxUFoSUp2kiUa4zeAae9uf2WICrQBEcQPdWLW-0EBw.jpg?r=747",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABR6UnWBGBOAz5JZd7IONzPOmsKB28qsW4hHaqm_50w9Xz3a6uLnj4Kf_Ei4gN2waOf0UQbG8HIGM6Q_3mOnOtnpDUwj32uoOhQYw4jfnVGxutCSrobiNHCpVwV1n7bFAcw6LkQ.jpg?r=e3c",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVjtUs-ihATenBZL6Pg6livKNB3vK54H91tQ7JZuegKDTrZbFCPESNl5SObiA4bEuxSmTPlOUujLHWkWOpKeDfBWnYdsoIRSH4Zsl21rj3GdJ0dISapx5apyJ2Q5J5buygh8kA.jpg?r=71f"]

const indianwatch =["https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQbS4CFZ-ufswkyGOpUrO3xzpd-AHfvF5RYWvv-uTYkQ9RPc_GUUpMic_R21X7ydL5k2EfTjabfTcUjHAEnF2_T9Pj9Vz3eqmaTLgr5ObZ6Vc18diYS_nwoJDRplzvko7cHDJg.jpg?r=cf5",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT0zkn5cDQBdKryll-W8tDB2aGmk2gMrKrrLek1uz6P2y53EqQ7R1suc1jiB4piCsWPwzJwEJtPchx_uf_V2KFpaotwlHbhUf7lk.jpg?r=4e6",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABR-OeORIMDtzIeXeHBbNYp1fefHOuIc7lazPT0HiuXyqW4BU_uK6KqMAYGZObOaZFNC2mWwvBbUPX103oRPI2Q_WNdhWkoo7JM1M.jpg?r=17c",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABae1lpCgqD9_2FtHvrDUAFsIxfYqdQp9sfoZaN9IONcn9o4iXtMfTYD23GVxqkwxRx1IfRABJSmcwaoh_ePckKku_uCxZGgWAOcvDVh1Q75k1FCKy5lBTDB5BEdG4B9K8r8f0w.jpg?r=44a",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYSpcqVpa0AxqQsfPESRCYPESqgTLuvWJmjIJyTExECl4-vuSKQ2BhzmL6KcjvUoJ7btd3bGYwP6yfmMgqAgiGmWKao2D46VYxEM.jpg?r=a57",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWt6X3thhI1BwSdoVBQuIEtV2-cLFY42JH6ESIxKcuxlMWoC406Y0Zv5HZLEsilfoVeLujqOunr6W11AKPS0S-FQr87bwFtICdRr.jpg?r=7a3",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUGpx3KxK2GUQHQ68HtOJwC_br8NN8L-bPkpuY5VHuQWULJQqrPWZHEY3BkVkdShzUFqfO3UsANsuCctXTMkkxu2yBa83fV66Vse.jpg?r=f45",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQx7rE3cE0976krtOlaBqLiRm0ir_RZOaaOIydsnoBcG6ukWGlB8ZdKb8J25OVKuMwYoobKPKAimbvxIlvr-S_wtc-sC7_Wkgy6G.jpg?r=2a7",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT_gcv9nDughhQCBgIVKm23nzUy-kDkYZ1SSfjLTtgAAuQseWlggJ7zrRgnNeEuh0V2hGTmMCn5pmFQEgbvwjiyNQnED2Z3HkyhbzvwtdWqMlTHEgDq9vR0zL7k3z1mSS8zCbw.jpg?r=1b9",
    "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZvdE7xbUeSaHOsLWwK8scFGhMjGIvWSxiymsz0uRw_6sEXJEtIOwcM9J6x2a_fQ7z4APRpkxm5rsxoZtzzjqplrWIWsC0EDQGRn.jpg?r=0f6"]

region.addEventListener('click', (e) => {
    if (e.target.value === "Global") {
        for (let k = 0; k < cardimg.length; k++) {
            cardimg[k].src = globalwatch[k % globalwatch.length];
        }

        for (let i = 0; i < Globalgenre.length; i++) {
            for (let j = i; j < Indiagenre.length; j++) {
                Indiagenre[i].style.display = "none";
            }
            console.log(Globalgenre[i].value);
            if (Globalgenre[i].value === "movies-English") {
                Globalgenre[i].selected = true;
            }
            Globalgenre[i].style.display = "block";
        }
    } else {
        for (let L = 0; L < cardimg.length; L++) {
            cardimg[L].src = indianwatch[L % indianwatch.length];
        }
        for (let i = 0; i < Indiagenre.length; i++) {
            for (let j = i; j < Globalgenre.length; j++) {
                Globalgenre[j].style.display = "none";
            }
            console.log(Indiagenre[i].value);
            if (Indiagenre[i].value === "Indian Movies") {
                Indiagenre[i].selected = true;
            }
            Indiagenre[i].style.display = "block";
        }
    }
})

const cardno = document.querySelectorAll('.card-number');
for (let i = 0; i < moviecard.length; i++) {
    moviecard[i].addEventListener('mouseover', (e) => {
        if (e.target.tagName === "IMG") {
            for (j = i; j < cardno.length; j++) {
                cardno[i].style.transform = "scale(1.1)";
            }
        }
    })
}

for (let i = 0; i < moviecard.length; i++) {
    moviecard[i].addEventListener('mouseout', (e) => {
        if (e.target.tagName === "IMG") {
            for (j = i; j < cardno.length; j++) {
                cardno[i].style.transform = "scale(1)";
            }
        }
    })
}

const leftbtn = document.querySelector('.left-button');
const rightbtn = document.querySelector('.right-button');
const track = document.querySelector('.trending-movies');

function trackwidthchange() {
    const width = window.innerWidth;
    let currentPosition = 0;
    const visibleCards = 5;
    const totalCards = 10;
    if(width<1550 && width>1261){
        let currentPosition = 0;
        const cardWidth = 210 + 10;
        leftbtn.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition--;
                track.style.transform = `translateX(-${currentPosition * (5 * cardWidth)}px)`;
            }
            rightbtn.style.display = "flex";
            rightbtn.style.alignitems = "center";
            rightbtn.style.alignitems = "center";
            leftbtn.style.display = "none";
        })
        rightbtn.addEventListener('click', () => {
            if (currentPosition < 1) {
                currentPosition++;
                track.style.transform = `translateX(-${currentPosition * (5 * cardWidth)}px)`;
            }
            leftbtn.style.display = "flex";
            leftbtn.style.alignitems = "center";
            leftbtn.style.alignitems = "center";
            rightbtn.style.display = "none";
        })
        
    }
    else if (width < 1260 && width >961) {
        
        const cardWidth = 120 + 10;
        leftbtn.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition--;
                track.style.transform = `translateX(-${currentPosition * (5 * cardWidth)}px)`;
            }
            rightbtn.style.display = "flex";
            rightbtn.style.alignitems = "center";
            rightbtn.style.alignitems = "center";
            leftbtn.style.display = "none";
        })
        rightbtn.addEventListener('click', () => {
            if (currentPosition < 3) {
                currentPosition++;
                track.style.transform = `translateX(-${currentPosition * (5 * cardWidth)}px)`;
            }
            leftbtn.style.display = "flex";
            leftbtn.style.alignitems = "center";
            leftbtn.style.alignitems = "center";
            rightbtn.style.display = "none";
        })
    }   
    else if(width < 960 && width>600){
        const cardWidth = 100 + 10;

        leftbtn.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition--;
                track.style.transform = `translateX(-${currentPosition * (3 * cardWidth)}px)`;
                rightbtn.style.display = "flex";
                rightbtn.style.alignitems = "center";
                rightbtn.style.justifycontent = "center";
            }
            
        })
        rightbtn.addEventListener('click', () => {
            if (currentPosition < 3) {
                currentPosition++;
                track.style.transform = `translateX(-${currentPosition * (3 * cardWidth)}px)`;
                leftbtn.style.display = "flex";
                leftbtn.style.alignitems = "center";
                leftbtn.style.justifycontent = "center";
            }
        })
    } else if(width<600){
        
        const cardWidth = 220 + 10;
        leftbtn.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition--;
                track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
                rightbtn.style.display = "flex";
                rightbtn.style.alignitems = "center";
                rightbtn.style.justifycontent = "center";
            }
            
        })
        rightbtn.addEventListener('click', () => {
            if (currentPosition < totalCards-visibleCards) {
                currentPosition++;
                track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
                leftbtn.style.display = "flex";
                leftbtn.style.alignitems = "center";
                leftbtn.style.justifycontent = "center";            
            }
        })
    }
}
trackwidthchange();
window.onresize = trackwidthchange;
function genrewidthchange(){
    const width = window.innerWidth;
    if (width < 1560 && width >961){
        genre.style.width = "7.1rem";
        region.addEventListener('click', (e) => {
            if (e.target.value === "Global") {
                genre.style.width = "15rem";
            } else {
                genre.style.width = "7.1rem";
            }
        })
    }
    else if (width < 960){
        genre.style.width = "100%";
            region.addEventListener('click', (e) => {
                if (e.target.value === "Global") {
                    genre.style.width = "100%";
                } else {
                    genre.style.width = "100%";
                }
            })   
    }else{
        region.addEventListener('click', (e) => {
            if (e.target.value === "Global") {
                genre.style.width = "15rem";
            } else {
                genre.style.width = "7.1rem";
            }
        })
    }
}
genrewidthchange();
window.onresize = genrewidthchange;

const quescardtoggle =document.querySelectorAll('.faq-ques-card');
quescardtoggle.forEach(quescard=>{
    quescard.addEventListener('click',()=>{
        quescard.classList.toggle('active');
        const toggleIcon = quescard.querySelector('#toggle-icon');
       if(quescard.classList.contains('active')){
            toggleIcon.setAttribute('class','fa-solid fa-xmark');
       }else{
        toggleIcon.setAttribute('class','fa-solid fa-plus');
       }

    })
})
