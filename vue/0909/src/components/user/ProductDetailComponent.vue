<template>
    <div id="wrapper">
        <!-- main_content 영역 -->
        <div id="main_content">
            <!-- detail_content -->
            <div id="detail_content">
                <div class="container text-center">
                    <div class="row">
                        <div class="col detail_content_img">
                            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="../../assets/images/goods_ex.jpg" class="d-block w-100" alt="상품 사진1">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="col detail_content_info">
                            <h2>상품명</h2>
                            <p>00,000<span>원</span></p>
                            <hr>
                            <div id="detail_content_info_mid">
                                <p>
                                    <img src="../../assets/images/goods/time.png" alt="지난 시간">
                                    <span>0일 전</span>
                                </p>
                            </div>
                            <div id="detail_content_info_state">
                                <p>
                                    <span>카테고리</span>
                                    <span>??</span>
                                </p>
                                <p>
                                    <span>남은수량/목표수량</span>
                                    <span>교환불가능</span>
                                </p>
                                <p>
                                    <span>업체명</span>
                                    <span>이름</span>
                                </p>
                            </div>
                            <div>
                                <div class="container text-center detail_content_info_btn">
                                    <div class="row g-2">
                                        <div class="col-4">
                                            <div class="p-3 info_btn1">
                                                <img src="../../assets/images/goods/w_heart.svg" alt="찜"> 찜
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-outline-secondary" type="button"
                                                        @click="changeQuantity(-1)">-</button>
                                                </div>
                                                <input class="form-control text-center" value="1" min="1" max="984"
                                                    id="quantityInput">
                                                <div class="input-group-append">
                                                    <button class="btn btn-outline-secondary" type="button"
                                                        @click="changeQuantity(1)">+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="p-3 info_btn3">바로구매</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- // detail_content -->
            <hr>

            <!-- goods_info -->
            <div id="goods_info">
                <div class="container text-center info_area">
                    <div class="info_content">
                        <div>
                            <p>
                                상품정보
                            </p>
                        </div>
                        <div>
                            상품내용 입력란입니다.<br>
                            테스트메시지<br>
                        </div>
                    </div>
                    <img src="http://image.toast.com/aaaaab/ticketlink/TKL_4/info_0718.jpg">
                </div>
            </div>
            <!-- // goods_info -->
            <!-- // main_content 영역 -->


        </div>
    </div>
</template>

<script>
export default {
    name: "ProductDetailComponent",
    data() {
        return {

        }
    },
    methods: {
        changeQuantity(amount) {
            var input = document.getElementById('quantityInput');
            var currentValue = parseInt(input.value);
            var minValue = parseInt(input.min);
            var maxValue = parseInt(input.max);

            var newValue = currentValue + amount;
            if (newValue >= minValue && newValue <= maxValue) {
                input.value = newValue;
            }
        }
    }
}

</script>

<style scoped>

/* 전체적인 레이아웃 설계 */
#main_content {
    width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
}


#detail_content {
    margin-top: 40px;
    height: 530px;
}

.detail_content_img {
    padding-left: 0;
}

.detail_content_info {
    text-align: left;
    padding-left: 35px;
    padding-right: 0;
}

.detail_content_info>h2 {
    padding-top: 5px;
    font-size: 28px;
    font-weight: bold;
}

.detail_content_info>p {
    margin: 20px 0 15px;
    font-size: 33px;
    font-weight: 600;
}

.detail_content_info>p>span {
    font-weight: normal;
    font-size: 28px;
}

#detail_content_info_mid>p {
    width: 72px;
    margin-top: 10px;
    float: left;
}

#detail_content_info_mid>p::after {
    margin-left: 10px;
    color: #ccc;
}

#detail_content_info_mid>p:nth-child(4) {
    width: 110px;
    float: right;
    text-align: right;
    cursor: pointer;
}

#detail_content_info_mid>p:nth-child(3)::after,
#detail_content_info_mid>p:nth-child(4)::after {
    content: "";
}

#detail_content_info_mid>p>img {
    width: 20px;
}

#detail_content_info_mid>p:nth-child(2)>img {
    width: 25px;
}

#detail_content_info_mid>p>span {
    color: #ccc;
    font-size: 16px;
}

#detail_content_info_state {
    margin-top: 90px;
}

#detail_content_info_state>p {
    margin-bottom: 20px;
}

#detail_content_info_state>p>span:nth-child(1) {
    color: #999;
    display: inline-block;
    width: 150px;
}

#detail_content_info_state img {
    width: 12px;
}


.detail_content_info_btn {
    margin-top: 44px;
    padding: 0;
}

.info_btn1,
.info_btn2,
.info_btn3 {
    font-size: 18px;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

.info_btn1 {
    background-color: #ccc;
}

.info_btn1>img {
    width: 19px;
}

.info_btn2 {
    background-color: #FFA425;
}

.info_btn2>img {
    width: 22px;
}

.info_btn3 {
    background-color: #F70000;
}

/* goods_info */
.info_area {
    padding: 0;
    margin-bottom: 40px;
}

.info_area_left {
    border-right: 1px solid rgb(238, 238, 238);
}

.info_content {
    text-align: left;
    margin-top: 50px;
}

.info_content>div:nth-child(1) {
    width: 650px;
    border-bottom: 1px solid rgb(238, 238, 238);
    font-weight: bold;
}

.info_content>div>p {
    font-size: 18px;
    margin-bottom: 15px;
}

.info_content>div:nth-child(2) {
    margin-top: 40px;
}
</style>