<template>
    <main class="css-mkkf9p">
        <div class="css-k3npxh">
            <div class="css-vdsrs0">
                <div class="css-1geb722">
                    <h1 class="css-1je12r6">업체 정보<span class="css-vg8pgq"></span>등록</h1>
                    <ul class="css-1fw72n4">
                        <li class="css-162qnrj">프로상점은 사업자등록 및 통신판매신고가 필수는 아니나, 지속적으로 상품을 판매하는 판매자는 사업자등록 및
                            통신판매신고를 하셔야 합니다. 사업자 미신고 시 세금관련 불이익을 받을 수 있습니다.</li>
                        <li class="css-162qnrj">사업자 정보 심사 승인 후 결제시작 건부터 세금계산서가 발급됩니다. 발급된 세금계산서는 <button type="button"
                                class="css-165uhau">프로상점 기능 &gt; 세금계산서</button> 에서 확인 가능합니다.</li>
                        <li class="css-162qnrj">0909㈜는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 관련 법령 및 번개장터㈜의 약관에 따라 상품,
                            상품정보, 거래에
                            관한 책임은 개별 판매자에게 귀속하고, 0909㈜는 회원간 거래에 대하여 책임을 지지 않습니다.</li>
                    </ul>
                    <form>
                        <section class="css-1dy31wn">
                            <article>
                                <h1 class="css-7m4a1a">업체 정보</h1>
                                <div class="css-k9oiqw"><label class="css-yhuigj">0909 업체명</label>
                                    <!--사이트 등록 희망 업체명 -->
                                    <div class="css-ay1s"><input type="text" autocomplete="off" name="shopName"
                                            class="css-11nkng1"></div>
                                </div>
                                <div class="css-k9oiqw"><label class="css-yhuigj">업종</label>
                                    <div class="css-ay1s"><input type="text" autocomplete="off" required=""
                                            placeholder="종목명 (30자 내 입력)" name="businessItem" maxlength="30"
                                            class="css-11nkng1" value=""></div>
                                </div>
                                <div class="css-k9oiqw"><label class="css-yhuigj">업체 소개</label>
                                    <div class="css-ay1s"><input type="text" autocomplete="off" required=""
                                            placeholder="업체 소개글 (500자 내 입력)" name="businessItem" maxlength="30"
                                            class="css-11nkng1" value=""></div>
                                </div>
                                <div class="css-k9oiqw"><label class="css-yhuigj">사업자등록 업체명</label>
                                    <!-- 사업자등록증 업체명-->
                                    <div class="css-ay1s"><input type="text" autocomplete="off" required=""
                                            placeholder="사업자 등록증에 있는 상호명 입력 (30자 내 입력)" name="companyName" maxlength="30"
                                            class="css-11nkng1" value=""></div>
                                </div>
                                <div class="css-k9oiqw"><label class="css-yhuigj">사업장 소재지</label>
                                    <div class="css-ay1s">
                                        <div><button type="button" class="css-1v0rcng">주소 찾기</button></div>
                                        <input type="text" autocomplete="off" required="" spellcheck="false"
                                            placeholder="주소" name="address" disabled="" readonly="" class="css-1k3phzy"
                                            value=""><input type="text" autocomplete="off" placeholder="상세 주소 입력 (40자 내 입력)"
                                            name="subAddress" disabled="" maxlength="40" class="css-11nkng1" value="">
                                    </div>
                                </div>

                            </article>
                            <div class="css-vopr99"></div>

                        </section>
                        <div class="css-zl1inp"><button type="submit" disabled="" class="css-110qy8c">업체 등록
                                신청</button> 
                    
                        </div>
                    </form>
                </div>
            </div>
            <div class="css-icndca">
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "MainComponent",
    data() {
        return { message: "test" }
    }, components: {
    },
}

</script>

<style scoped>
.main-contents {
    display: flex;
    min-width: 900px;
    padding: 40px 50px 90px;
}

.css-mkkf9p {
    flex: 1 1 auto;
}

* {
    font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    scroll-behavior: smooth;
}

.css-k3npxh {
    padding: 0px 20px 100px;
}

.css-vdsrs0 {
    box-sizing: border-box;
    margin: 0px auto;
    padding: 0px;
    min-width: 1024px;
    width: 1024px;
    max-width: 100%;
    scrollbar-width: none;
}

.css-1geb722 {
    max-width: 1045px;
    padding-top: 55px;
    margin: 0px auto;
}

.css-1je12r6 {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 8px;
    font-size: 25px;
    line-height: 0.88;
    font-weight: bold;
    color: rgb(25, 25, 25);
}

.css-vg8pgq {
    width: 2px;
    height: 22px;
    font-weight: 300;
    background-color: rgb(178, 178, 178);
}

.css-1fw72n4 {
    margin-top: 14px;
}

.css-162qnrj {
    display: flex;
    -webkit-box-align: start;
    align-items: start;
    column-gap: 6px;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.67;
    color: rgb(102, 102, 102);
}

.css-162qnrj::before {
    content: "•";
    color: rgb(178, 178, 178);
}

.css-165uhau {
    padding: 0px;
    line-height: inherit;
    font-size: inherit;
    font-weight: inherit;
    background-color: transparent;
    color: inherit;
    text-decoration: underline;
}

button {
    border: none;
    background: rgb(255, 255, 255);
    cursor: pointer;
}

.css-1fw72n4 {
    margin-top: 14px;
}

.css-1dy31wn {
    border: 1px solid rgb(229, 229, 229);
    border-radius: 10px;
    margin: 24px 0px 30px;
}

.css-1dy31wn article {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    padding: 40px 30px 60px;
}

.css-7m4a1a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 8px;
    font-size: 20px;
    line-height: 1;
    font-weight: bold;
    color: rgb(25, 25, 25);
}

.css-k9oiqw {
    display: flex;
    column-gap: 20px;
}

.css-yhuigj {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    min-width: 140px;
    white-space: pre-wrap;
    font-weight: bold;
    color: rgb(76, 76, 76);
    height: 48px;
    font-size: 16px;
    line-height: 1;
    box-sizing: border-box;
}

.css-ay1s {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.css-49gxn1 {
    padding: 14px;
    border-radius: 6px;
    border: 1px solid rgb(229, 229, 229);
    background-color: rgb(255, 255, 255);
    color: rgb(25, 25, 25);
    caret-color: rgb(2, 122, 255);
    font-size: 16px;
    line-height: 1;
    font-weight: 700;
    opacity: 1;
}

.css-1v0rcng {
    border-radius: 6px;
    line-height: 1;
    font-weight: 700;
    cursor: pointer;
    background: rgb(255, 255, 255);
    color: rgb(2, 122, 255);
    border: 1px solid rgba(2, 122, 255, 0.6);
    padding: 10px 14px;
    font-size: 14px;
}

.css-11nkng1:read-only,
.css-11nkng1.read-only {
    color: rgb(140, 140, 140);
    cursor: default;
    pointer-events: none;
}

.css-11nkng1:disabled {
    background-color: rgb(246, 246, 246);
    color: rgb(178, 178, 178);
    cursor: not-allowed;
}

.css-11nkng1 {
    padding: 14px;
    border-radius: 6px;
    border: 1px solid rgb(229, 229, 229);
    background-color: rgb(255, 255, 255);
    color: rgb(25, 25, 25);
    caret-color: rgb(2, 122, 255);
    font-size: 16px;
    line-height: 1;
    font-weight: 700;
}

.css-l7tt0k {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    min-width: 140px;
    white-space: pre-wrap;
    font-weight: bold;
    color: rgb(76, 76, 76);
    height: 20px;
    font-size: 16px;
    line-height: 1;
    box-sizing: border-box;
}

.css-c6z799 {
    display: flex;
    column-gap: 40px;
}

.css-he4ojk {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 9px;
}

.css-qxl4sw:disabled:checked {
    border: 2px solid rgb(229, 229, 229);
}

.css-qxl4sw:disabled {
    cursor: not-allowed;
}

.css-qxl4sw:checked {
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(2, 122, 255);
}

.css-qxl4sw {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    appearance: none;
    min-width: 20px;
    height: 20px;
    border: 1px solid rgb(229, 229, 229);
    border-radius: 15px;
    margin: 0px;
    outline: none;
    background-clip: padding-box;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
}

.css-qxl4sw:disabled:checked::after {
    background-color: rgb(229, 229, 229);
}

.css-qxl4sw:checked::after {
    background-color: rgb(2, 122, 255);
}

.css-qxl4sw::after {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 15px;
    background-color: rgb(255, 255, 255);
}

.css-qxl4sw:disabled {
    cursor: not-allowed;
}

.css-qxl4sw:disabled:checked {
    border: 2px solid rgb(229, 229, 229);
}

.css-qxl4sw:disabled {
    cursor: not-allowed;
}

.css-qxl4sw:checked {
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(2, 122, 255);
}

.css-1acmhqo {
    font-weight: 700;
    color: rgb(127, 127, 127);
}

.css-he4ojk {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 9px;
}

.css-qxl4sw:disabled {
    cursor: not-allowed;
}

.css-1acmhqo {
    font-weight: 700;
    color: rgb(127, 127, 127);
}

.css-he4ojk {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 9px;
}

.css-c6z799 {
    display: flex;
    column-gap: 40px;
}

.css-czlwq2 {
    font-size: 12px;
    font-weight: bold;
    color: rgb(127, 127, 127);
}

.css-1v0rcng:disabled {
    cursor: not-allowed;
}

.css-ay1s {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
.css-1k3phzy.read-only {
    color: rgb(140, 140, 140);
    cursor: default;
    pointer-events: none;
}

.css-1k3phzy:disabled {
    background-color: rgb(246, 246, 246);
    color: rgb(178, 178, 178);
    cursor: not-allowed;
}

.css-1k3phzy {
    padding: 14px;
    border-radius: 6px;
    border: 1px solid rgb(229, 229, 229);
    background-color: rgb(255, 255, 255);
    color: rgb(25, 25, 25);
    font-size: 16px;
    line-height: 1;
    font-weight: 700;
    caret-color: transparent;
}
.css-110qy8c {
    border-radius: 6px;
    line-height: 1;
    font-weight: 700;
    cursor: pointer;
    background: rgb(2, 122, 255);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(2, 122, 255);
    padding: 15px;
    font-size: 15px;
    width: 265px;
}

.css-110qy8c:disabled {
    background: rgb(217, 235, 255);
    border-color: rgb(217, 235, 255);
    cursor: not-allowed;

}
element.style {
    padding-top: 51px;
}
</style>