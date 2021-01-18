var tab111 ="<div>"+
"<div class='img_site'>"+
"    <img id='input_img' src='../images/customer.jpg'>"+
"</div>"+
"<div class='comment_site'>"+
"    <p id='comment'>CSD</p>"+
"    <p id='say'>"+
"        CSD는 Challenge Show Display의 약자로 끊임없는 도전을<br>"+
"        지원하며 작품의 결과물을 전시해주며 행사를 주최합니다.<br>"+
"        여러분들의 작품을 저희 행사에 참여하여 직접 사람들에게<br>"+
"        보여주며 이름과 명성을 알리십시오. 또한 많은 후원사와<br>"+
"        지원하는 많은 엔젤들이 여러분의 작품과 여러분의 지원을 도울<br>"+
"        기회를 마련할 수 있습니다."+
"    </p>"+
"<p id='say'>"+
"                        CSD stands for Challenge Show Display, which supports<br>" +
"                         endless challenges, displays the results of the work, and<br>" +
"                         hosts the event. Participate in our event to show your<br>" +
"                         work to people in person and make your name and reputation<br>" +
"                         known. Also, many sponsors and supporting angels will have<br>" +
"                         the opportunity to help you with your work and your support." +
"                     </p>" +
"</div>"+
"</div>"

var tab222 = "<div>"+
"<div class='img_site'>"+
"    <img id='input_img' src='../images/history.jpg'>"+
"</div>"+
"<div class='comment_site'>"+
"    <p id='comment'>History</p>"+
"    <p id='say'>"+
"        2005년에 설립된 CSD는 국내에서 손꼽히는 전시장으로 각종<br>"+
"        전시장과 이벤트홀, 회의장, 강당을 소유하고 있으며 많은<br>"+
"       인원을 수용할 수 있는 큰 건물입니다. 17년 역사의 전시장과<br>"+
"        접근성이 좋은 건물 위치로 많은 관람객들과 인근 주민들의 사랑<br>"+
"        을 받는 전시장입니다. 통역가, 가이드, 관리원, 청소원 등 직원<br>"+
"        30명이 관리하고 있으며 24시간 문의 고객센터도 운영하고 있습니다."+
"    </p>"+
"    <p id='say'>"+
"        CSD, established in 2005, is one of the leading exhibition<br>"+
"        halls in Korea and owns various exhibition halls, event halls,<br>"+
"        conference halls, and auditoriums. It is a large building<br>"+
"        that can accommodate many people. The 17-year-old exhibition<br>"+
"        hall and the location of a building with good accessibility are<br>"+
"        loved by many visitors and nearby residents. It is managed by<br>"+
"        30 employees, including interpreters, guides, administrators, and<br>"+
"        cleaners, and also operates a 24-hour customer center.    "+
"    </p>"+
"</div>"+
"</div>"

var tab333 = "<div>"+
"<div class='img_site'>"+
"    <img id='input_img' src='../images/etc.jpg'>"+
"</div>"+
"<div class='comment_site'>"+
"    <p id='comment'>Etc</p>"+
"    <p id='say'>"+
"        지하에는 많은 먹거리와 음료수, 과자 등을 살 수 있는 큰 마트<br>"+
"        와 다양한 음식을 먹을 수 있는 음식점도 있습니다. 가격도 저렴<br>"+
"        하게 식사를 하고 디저트로 카페를 드시는 것을 추천드립니다.<br>"+
"        항상 고객을 위한 마음으로 서비스를 정성껏 하겠습니다. 아이들도<br>"+
"        뛰어놀 수 있는 2층에 장난감 방이 있습니다. 아이들을 지켜주는<br>"+
"        직원도 있으며 항상 소독을 합니다."+
"    </p>"+
"    <p id='say'>"+
"        In the basement, there are large marts where you can buy<br>"+
"        a lot of food, drinks, snacks, etc. and restaurants where<br>"+
"        you can eat a variety of foods. I recommend you to eat a<br>"+
"        cheap meal and have a cafe for dessert. We will always do<br>"+
"       our best to serve our customers. There is a toy room on the<br>"+
"        second floor where children can run around. There are also<br>"+
"       employees who protect children, and they always sterilize them."+
"   </p>"+
"</div>"+
"</div>"
document.querySelector('.btn1').addEventListener('click',function(){
    document.getElementById('saying').innerHTML = '';
    document.getElementById('saying').innerHTML = tab111;
})

document.querySelector('.btn2').addEventListener('click',function(){
    document.getElementById('saying').innerHTML = '';
    document.getElementById('saying').innerHTML = tab222;
})
document.querySelector('.btn3').addEventListener('click',function(){
    document.getElementById('saying').innerHTML = '';
    document.getElementById('saying').innerHTML = tab333;
})