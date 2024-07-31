<template>
    <footer>
        <div id="top_footer_border_area">
            <div id="top_footer_area">
                <ul>
                    <li>회사소개</li>
                    <li>이용약관</li>
                    <li>운영정책</li>
                    <li>개인정보처리방침</li>
                    <li>청소년보호정책</li>
                </ul>
            </div>
        </div>
        <div id="mid_footer_area" class="container text-center">
            <div class="row">
                <div class="col mid_footer_areas">
                    <div class="mid_footer_left">
                        <p>번개장터(주) 사업자정보</p>
                        <p>
                            대표이사 : 최재화, 강승현 | 개인정보보호책임자 : 문제근<br>
                            사업자등록번호 : 113-86-45836 | 통신판매업신고 : 2019-서울서초-1126<br>
                            호스팅서비스 제공자 : Amazon Web Services (AWS)<br>
                            EMAIL : help@bunjang.co.kr | FAX : 02-598-8241<br>
                            주소 : 서울특별시 서초구 서초대로 38길 12, 7, 10층<br>
                            (서초동, 마제스타시티, 힐스테이트 서리풀)<br>
                            <span>사업자정보 확인</span>
                        </p>
                    </div>
                    <div class="mid_footer_left2">
                        <div>
                            <p>
                                <b>번개장터(주)더현대서울점</b> | 최재화, 강승현 | 365-85-01581<br>
                                서울특별시 영등포구 여의대로 108, 지하2층(여의도동, 파크원)<br>
                            </p>
                            <p>
                                <b>번개장터(주)코엑스점</b> | 최재화, 강승현 | 142-85-27412<br>
                                서울특별시 강남구 영동대로 513, 쇼핑몰동 B1층 C102호(삼성동, 코엑스)<br>
                            </p>
                            <p>
                                <b>번개장터(주)센터필드점</b> | 최재화, 강승현 | 808-85-01905<br>
                                서울특별시 강남구 테헤란로 231, 쇼핑몰동 1층 W124호(역삼동)(역삼동, 센터필드)<br>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col mid_footer_right_area">
                    <div class="mid_footer_right">
                        <p>고객센터 ></p>
                        <p>1670-2910</p>
                        <p>운영시간 9시 - 18시 (주말/공휴일 휴무, 점심시간 12시 - 13시)</p>
                        <span>공지사항</span> <span>문의하기</span><span>자주 묻는 질문</span>
                    </div>
                    <div id="mid_footer_right2">
                        <p>우리은행 채무지급보증 안내</p>
                        <p>
                            번개장터㈜는 “BGZT Digital”, “BGZT Lab”, “BGZT Lab 1”, “BGZT Lab 2”, “BGZT
                            컬렉션” 상점이 판매한
                            상품에 한해, 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.
                        </p>
                        <p>서비스 가입사실 확인</p>
                        <p>Ⓒ Bungaejangter. Inc All rights reserved.</p>
                    </div>
                </div>
                <div id="bot_footer_area">
                    <div class="bot_footer_left">
                        <div>
                            <img src="../assets/footer/footer_img.png" alt="footer이미지">
                        </div>
                        <p>
                            [인증범위] 번개장터 중고거래 플랫폼 서비스 운영(심사받지 않은 물리적 인프라 제외)<br>
                            [유효기간] 2021.05.18 ~ 2024.05.17
                        </p>
                    </div>
                    <div class="bot_footer_right">
                        <p>“BGZT Digital”, “BGZT Lab”, “BGZT Lab 1”, “BGZT Lab 2”, “BGZT 컬렉션” 상점의
                            판매상품을 제외한 모든 상품들
                            에 대하여, 번개장터㈜는 통신판매중개자로서 중고거래마켓 번개장터의 거래당사자가 아니며, 입점판매자가 등록한
                            상품정보 및 거래에 대해 책임을 지지 않습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "MainPage",
    data() {
        return {

        }
    }
}
</script>

<style scoped>
/* footer 영역 */
/* 상단 footer */
footer {
    font-size: 14px;
    border-top: 1px solid rgb(229, 229, 229);
    letter-spacing: -1px;
}

#top_footer_border_area {
    border-bottom: 1px solid rgb(229, 229, 229);
}

#top_footer_area:hover {
    cursor: pointer;
}

#top_footer_area>ul {
    width: 1024px;
    height: 64px;
}

#top_footer_area>ul>li {
    display: inline-block;
    padding: 15px;
    height: 64px;
    line-height: 32px;
}

#top_footer_area>ul>li::after {
    content: "|";
    float: right;
    color: rgb(204, 204, 204);
    margin-right: -17px;
}

#top_footer_area>ul>li:nth-child(4) {
    font-weight: bold;
}

/* // 상단 footer */
/* 중단 footer */
#mid_footer_area {
    margin-top: 40px;
    margin-bottom: 40px;
}

.mid_footer_areas {
    text-align: left;
}

.mid_footer_left {
    color: #666;
}

.mid_footer_left>p:first-child {
    color: #666;
    font-weight: bold;
}

.mid_footer_left>p:last-child {
    margin-top: 8px;
    font-size: 12px;
    line-height: 23px;
}

.mid_footer_left span {
    text-decoration: underline;
}

.mid_footer_left2 {
    margin-top: 24px;
    font-size: 12px;
    line-height: 23px;
    color: #666;
}

.mid_footer_left2>div>p {
    margin-top: 6px;
}

.mid_footer_right_area {
    text-align: left;
    color: #666;
}

.mid_footer_right p {
    margin-bottom: 3px;
}

.mid_footer_right>p:first-child,
#mid_footer_right2>p:nth-child(1) {
    font-weight: bold;
}

.mid_footer_right>p:nth-child(2) {
    font-size: 24px;
    font-weight: bold;
}

.mid_footer_right>p:nth-child(3),
#mid_footer_right2>p:nth-child(2),
#mid_footer_right2>p:nth-child(4) {
    font-size: 12px;
}

.mid_footer_right span {
    font-size: 12px;
    text-decoration: underline;
    margin-right: 13px;
}

#mid_footer_right2 p {
    margin-bottom: 10px;
}

#mid_footer_right2 {
    margin-top: 40px;
}

#mid_footer_right2>p:nth-child(3) {
    font-size: 12px;
    text-decoration: underline;
}

/* // 중단 footer */

/* 하단 footer */
#bot_footer_area {
    margin-top: 40px;
    border-top: 1px solid rgb(229, 229, 229);
    font-size: 11px;
    color: #999;
}

.bot_footer_left,
.bot_footer_right {
    width: 512px;
}

.bot_footer_left {
    float: left;
}

.bot_footer_left>div {

    width: 31px;
}

.bot_footer_left>div>img {
    width: 31px;
    position: relative;
    top: 20px;
}

.bot_footer_left>p {
    width: 480px;
    text-align: left;
    margin-left: 40px;
    position: relative;
    top: -10px;
}

.bot_footer_right {
    float: right;
    position: relative;
    top: -43px;
}
</style>