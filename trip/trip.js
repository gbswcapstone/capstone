const jang1 = document.querySelector(".jang")
const empty = document.querySelector(".empty")
const bing1 = document.querySelector("#bing_div:nth-child(1)")

const bing2 = document.querySelector("#bing_div:nth-child(2)")
const bing3 = document.querySelector("#bing_div:nth-child(3)")
const bing4 = document.querySelector("#bing_div:nth-child(4)")
const bing5 = document.querySelector("#bing_div:nth-child(5)")
const bing6 = document.querySelector("#bing_div:nth-child(6)")
const bing7 = document.querySelector("#bing_div:nth-child(7)")
const btn = document.querySelector(".btn")
const form = document.querySelector("form")
let parent1 = bing1.parentNode
let parent2 = bing2.parentNode
let parent3 = bing3.parentNode
let parent4 = bing4.parentNode
let parent5 = bing5.parentNode
let parent6 = bing6.parentNode
let parent7 = bing7.parentNode
let list = [] 
let i = 0
let go = 0
let bing_b = 0
let gong_g = 0
let jomun_j = 0
let sa_s = 0
let sajuck_s = 0
let sachoun_s = 0

//리스트 삭제
function delete_bing() {
    bing_b = 0
    bing1.style.display = "none"
    for(let j = 0;j< list.length;j++) {
        if(list[j] === 'bing') {
            list.splice(j,1)
            parent1.insertBefore(bing1,parent1.childNodes[j+1])
            i--
            break
        }
    }
    bing1.innerHTML = '<img src="bing.png" alt="빙계계곡" disabled><div><p class="bing-text" name="bing" disabled><b>빙계 계곡</b></p><a href="#" class="bing-btn" onclick="bing(); chnone1()" disabled>추가하기</a></div>'
}
function delete_go() {
    go = 0
    bing2.style.display = "none"
    for(let j = 0;j< list.length;j++) {
        if(list[j] === 'gosun') {
            list.splice(j,1)
            parent2.insertBefore(bing2,parent2.childNodes[j+1])
            i--
            break
        }
    }
    bing2.innerHTML = '<img src="gounsa.png" alt="고운사" disabled><div><p class="bing-text" name="gosun" disabled><b>고운사</b></p><a href="#" class="bing-btn" onclick="gosun(); chnone2()" disabled>추가하기</a></div>'
}
function delete_gong() {
    gong_g = 0
    bing3.style.display = "none"
    for(let j = 0;j< list.length;j++) {
        if(list[j] === 'gong') {
            list.splice(j,1) 
            parent3.insertBefore(bing3,parent3.childNodes[j+1])
            i--
            break
        }
    }
    bing3.innerHTML = '<img src="gong.png" alt="공룡발자국 화석" disabled><div><p class="bing-text" name="gong" disabled><b>공룡발자국 화석</b></p><a href="#" class="bing-btn" onclick="gong(); chnone3()" disabled>추가하기</a></div>'
}
function delete_jomun() {
    jomun_j = 0
    bing4.style.display = "none"
    for(let j = 0;j< list.length;j++) {
        if(list[j] === 'jomun') {
            list.splice(j,1)
            parent4.insertBefore(bing4,parent4.childNodes[j+1])
            i--
            break
        }
    }
    bing4.innerHTML = '<img src="jomun.png" alt="조문국 박물관" disabled><div><p class="bing-text" name="jomun" disabled><b>조문국 박물관</b></p><a href="#" class="bing-btn" onclick="jomun(); chnone4()" disabled>추가하기</a></div>'
}
function delete_sa() {
    sa_s = 0
    bing5.style.display = "none"
    for(let j = 0;j< list.length;j++) {
        if(list[j] === 'sa') {
            list.splice(j,1)
            parent5.insertBefore(bing5,parent5.childNodes[j+1])
            i--
            break
        }
    }
    bing5.innerHTML = '<img src="sachoun.jpg" alt="사촌 가로숲에 반댓말은 사촌 세로 숲 엌 ㅋㅋㅋ" disabled><div><p class="bing-text" name="sachoun" disabled><b>사촌 가로숲</b></p><a href="#" class="bing-btn" onclick="sa() ; chnone5()" disabled>추가하기</a></div>'
}
function delete_sajuck() {
    sajuck_s = 0
    bing6.style.display = "none"
    for(let j = 0;j< list.length;j++) {
        if(list[j] === 'sajuck') {
            list.splice(j,1)
            parent6.insertBefore(bing6,parent6.childNodes[j+1])
            i--
            break
        }
    }
    bing6.innerHTML = '<img src="sajuck.png" alt="조문국 사적지" disabled><div><p class="bing-text" name="sajuck" disabled><b>조문국 사적지</b></p><a href="#" class="bing-btn" onclick="sajuck() ; chnone6()" disabled>추가하기</a></div>'
}
function delete_sachoun() {
    sachoun_s = 0
    bing7.style.display = "none"
    for(let j = 0;j< list.length;j++) {
        if(list[j] === 'sachoun') {
            list.splice(j,1)
            parent7.insertBefore(bing7,parent7.childNodes[j+1])
            i--
            break
        }
    }
    bing7.innerHTML = '<img src="sanun.png" alt="의성 사촌 마을" disabled><div><p class="bing-text" name="sa" disabled><b>의성 사촌 마을</b></p><a href="#" class="bing-btn" onclick="sachoun() ; chnone7()" disabled>추가하기</a></div>'
}
//리스트 삭제

//스타일 처리
function jang() {
    bing1.style.display = ""
    bing2.style.display = ""
    bing3.style.display = ""
    bing4.style.display = ""
    bing5.style.display = ""
    bing6.style.display = ""
    bing7.style.display = ""
    empty.style.display = "none"
    btn.style.display = "none"
    if(go > 0) {
        bing2.style.display = "none"
    }
    if(bing_b > 0 ) {
        bing1.style.display = "none"
    }
    if(gong_g > 0 ) {
        bing3.style.display = "none"
    }
    if(jomun_j > 0 ) {
        bing4.style.display = "none"
    }
    if(sa_s > 0 ) {
        bing5.style.display = "none"
    }
    if(sajuck_s > 0 ) {
        bing6.style.display = "none"
    }
    if(sachoun_s > 0 ) {
        bing7.style.display = "none"
    }
}

function chnone1() {
    bing1.style.display = "none"
}
function chnone2() {
    bing2.style.display = "none"
}
function chnone3() {
    bing3.style.display = "none"
}
function chnone4() {
    bing4.style.display = "none"
}
function chnone5() {
    bing5.style.display = "none"
}
function chnone6() {
    bing6.style.display = "none"
}
function chnone7() {
    bing7.style.display = "none"
}//스타일 처리

function co() {//코스정보 불러오기
    bing2.style.display = "none"
    bing3.style.display = "none"
    bing1.style.display = "none"
    bing4.style.display = "none"
    bing5.style.display = "none"
    bing6.style.display = "none"
    bing7.style.display = "none"
    if(i==0) {
        empty.innerHTML ="아직 추가된 코스가 없습니다"
        btn.style.display = "none"
        empty.style.display = ""
    }else {
        btn.style.display = ""
        for(let j = 0;j < i;j++) {
            switch(list[j]) {
                case "bing":
                    bing1.style.display = ""
                    parent1.insertBefore(bing1,parent1.childNodes[j+1])
                    bing_b++
                    bing1.innerHTML = '<img src="bing.png" alt="빙계계곡" disabled><div><p class="bing-text" name="bing"><b>빙계 계곡</b></p><a href="#" class="bing-btn" onclick="delete_bing()" disabled>삭제하기</a></div>'
                    break;
                case "gosun":
                    bing2.style.display = ""
                    parent2.insertBefore(bing2,parent2.childNodes[j+1])
                    go++
                    bing2.innerHTML = '<img src="gounsa.png" alt="고운사" disabled><div><p class="bing-text" name="gosun"><b>고순사</b></p><a href="#" class="bing-btn" onclick="delete_go()" disabled>삭제하기</a></div>'
                    break;
                case "gong":
                    bing3.style.display = ""
                    parent3.insertBefore(bing3,parent3.childNodes[j+1])
                    gong_g++
                    bing3.innerHTML = '<img src="gong.png" alt="공룡발자국 화석" disabled><div><p class="bing-text" name="gong"><b>공룡발자국 화석</b></p><a href="#" class="bing-btn" onclick="delete_gong()" disabled>삭제하기</a></div>'
                    break;
                case "jomun":
                    bing4.style.display = ""
                    parent4.insertBefore(bing4,parent4.childNodes[j+1])
                    jomun_j++
                    bing4.innerHTML = '<img src="jomun.png" alt="조문국 박물관" disabled><div><p class="bing-text" name="jomun"><b>조문국 박물관</b></p><a href="#" class="bing-btn" onclick="delete_jomun()" disabled>삭제하기</a></div>'
                    break;
                case "sa":
                    bing5.style.display = ""
                    parent5.insertBefore(bing5,parent5.childNodes[j+1])
                    bing5.innerHTML = '<img src="sachoun.jpg" alt="사촌 가로숲에 반댓말은 사촌 세로 숲 엌 ㅋㅋㅋ" disabled><div><p class="bing-text" name="sachoun"><b>사촌 가로숲</b></p><a href="#" class="bing-btn" onclick="delete_sa()" disabled>삭제하기</a></div>'
                    sa_s++
                    break;
                case "sajuck":
                    bing6.style.display = ""
                    parent6.insertBefore(bing6,parent6.childNodes[j+1])
                    bing6.innerHTML = '<img src="sajuck.png" alt="조문국 사적지" disabled><div><p class="bing-text" name="sajuck"><b>조문국 사적지</b></p><a href="#" class="bing-btn" onclick="delete_sajuck()" disabled>삭제하기</a></div>'
                    sajuck_s++
                    break;
                case "sachoun":
                    bing7.style.display = ""
                    parent7.insertBefore(bing7,parent7.childNodes[j+1])
                    sachoun_s++
                    bing7.innerHTML = '<img src="sanun.png" alt="의성 사촌 마을" disabled><div><p class="bing-text" name="sa"><b>의성 사촌 마을</b></p><a href="#" class="bing-btn" onclick="delete_sachoun()" disabled>삭제하기</a></div>'
                    break;
            }
        }
    }
}//코스정보 불러오기

//핑이동 및 리스트 추가

var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(36.30212189181263, 128.58692763791905),
    level: 3
};

var map = new kakao.maps.Map(container, options);

function bing() {
    var moveLatLon = new kakao.maps.LatLng(36.22940065745899, 128.75949062864808);
    map.panTo(moveLatLon);
    var marker = new kakao.maps.Marker({ 
        position: map.getCenter() 
    });
    list[i] = "bing"
    i++
    marker.setMap(map);
}
function gosun() {
    var moveLatLon = new kakao.maps.LatLng(36.45832274903205, 128.75059241196288);
    map.panTo(moveLatLon);
    var marker = new kakao.maps.Marker({ 
        position: map.getCenter() 
    });
    list[i] = "gosun"
    i++
    marker.setMap(map);
}
function gong() {
    var moveLatLon = new kakao.maps.LatLng(36.28508405483508, 128.69670593142556 );
    map.panTo(moveLatLon);
    var marker = new kakao.maps.Marker({ 
        position: map.getCenter() 
    });
    list[i] = "gong"
    i++
    marker.setMap(map);
}
function jomun() {
    var moveLatLon = new kakao.maps.LatLng(36.27638287365097, 128.66830693902284);
    map.panTo(moveLatLon);
    var marker = new kakao.maps.Marker({ 
        position: map.getCenter() 
    });
    list[i] = "jomun"
    i++
    marker.setMap(map);
}
function sa() {
    var moveLatLon = new kakao.maps.LatLng(36.42503078323381, 128.7590679658007);
    map.panTo(moveLatLon);
    var marker = new kakao.maps.Marker({ 
        position: map.getCenter() 
    });
    list[i] = "sa"
    i++
    marker.setMap(map);
}
function sajuck() {
    var moveLatLon = new kakao.maps.LatLng(36.274001481271014, 128.67525585390078);
    map.panTo(moveLatLon);
    var marker = new kakao.maps.Marker({ 
        position: map.getCenter() 
    }); 
    list[i] = "sajuck"
    i++
    marker.setMap(map);
}
function sachoun() {
    var moveLatLon = new kakao.maps.LatLng(36.424602667765186, 128.7633508455122 );
    map.panTo(moveLatLon);
    var marker = new kakao.maps.Marker({ 
        position: map.getCenter() 
    }); 
    list[i] = "sachoun"
    i++
    marker.setMap(map);
}
//핑이동 및 리스트 추가
function submit() {
    form.submit()
}//* 전송함수  */


