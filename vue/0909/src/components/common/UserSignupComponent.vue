<template>
    <div class="contentWrapper registContent">
        <div class="uBlock">
        <div class="uInputArea emailType">
            <div class="col">
            <div class="uInput"><label for="inputEmail">이메일</label>
                <div class="inputBox"><input type="text" id="inputEmail" class="inputText" tabindex="5" value="">
                </div>
            </div>
            </div>
            <div class="col selectCol">
            <div class="uSelectBox"><label><select tabindex="6">
                    <option value="direct">직접입력</option>
                    <option value="naver.com">@naver.com</option>
                    <option value="hanmail.net">@hanmail.net</option>
                    <option value="gmail.com">@gmail.com</option>
                    <option value="nate.com">@nate.com</option>
                    <option value="hotmail.com">@hotmail.com</option>
                </select></label></div>
            </div>
        </div>
        <div class="uErrorText" style="display: block;"></div>
        <div class="accountValiBlock" style="display: none;">
            <div class="accountGuide"></div>
            <p class="blockText">동일 정보로 가입된 계정으로 로그인 하시겠습니까?</p><a href="#" class="btn btnArrow">로그인하기</a>
        </div>
        </div>
        <div class="uBlock">
        <div class="uInputArea">
            <div class="col">
                <div class="uInput"><label for="inputPw">비밀번호</label>
                    <div class="inputBox"><input type="password" id="inputPw" class="inputText"
                            placeholder="8~12자 영문, 숫자, 특수문자" tabindex="2" value=""><button type="button"
                            class="btnDel" aria-label="삭제"></button></div>
                </div>
            </div>
            <div class="col">
                <div class="uBtnArea"><button type="button" class="uBtn" id="togglePwBtn">보기</button></div>
            </div>
        </div>
        <div class="uErrorText" style="display: block;"></div>
    </div>
    <div class="uBlock">
        <div class="uInputArea">
            <div class="col">
                <div class="uInput"><label for="inputPwConfirm">비밀번호 확인</label>
                    <div class="inputBox"><input type="password" id="inputPwConfirm" class="inputText"
                            placeholder="8~12자 영문, 숫자, 특수문자" tabindex="3" value=""></div>
                </div>
            </div>
            <div class="col">
                <div class="uBtnArea"><button type="button" class="uBtn" id="togglePwConfirmBtn">보기</button></div>
            </div>
        </div>
        <div class="uErrorText" style="display: block;"></div>
    </div>
    <div class="uBlock">
    <div class="uInputArea">
        <div class="col">
        <div class="uInput"><label for="inputName">이름</label>
            <div class="inputBox"><input type="text" id="inputName" class="inputText" tabindex="4"
                value=""><button type="button" class="btnDel" aria-label="삭제"></button></div>
        </div>
        </div>
    </div>
    <div class="uErrorText" style="display: block;"></div>
    </div>

    <div class="uBlock">
    <div class="uInputArea">
        <div class="col">
        <div class="uInput"><label for="inputBirth">생년월일</label>
            <div class="inputBox"><input type="date" id="inputBirth" class="inputText" tabindex="4"
                value=""><button type="button" class="btnDel" aria-label="삭제"></button></div>
        </div>
        </div>
    </div>
    <div class="uErrorText" style="display: block;"></div>
    </div>


    <div class="uBlock">
        <div class="uInputArea">
            <div class="col">
            <div class="uInput">
                <label for="genderMale">성별</label>
                <div class="inputBox radioBox">
                <input type="radio" id="genderMale" name="gender" value="male" tabindex="4">
                <label for="genderMale">남성</label>
                <input type="radio" id="genderFemale" name="gender" value="female" tabindex="5">
                <label for="genderFemale">여성</label>
                </div>
            </div>
            </div>
        </div>
        <div class="uErrorText" style="display: block;"></div>
    </div>


    <div class="uBlock">
    <div class="uInputArea">
        <div class="col">
        <div class="uInput"><label for="inputPostCode">우편번호</label>
            <div class="inputBox"><input type="text" id="inputPostCode" class="inputText" tabindex="2" value="">
            </div>
        </div>
        </div>
        <div class="col">
        <div class="uBtnArea"><button type="button" class="uBtn" onclick="execDaumPostcode()">우편번호 찾기</button>
        </div>
        </div>
    </div>
    <div class="uErrorText" style="display: block;"></div>
    </div>

    <div class="uBlock">
    <div class="uInputArea">
        <div class="col">
        <div class="uInput"><label for="inputAddress">주소</label>
            <div class="inputBox"><input type="text" id="inputAddress" class="inputText" tabindex="4"
                value=""><button type="button" class="btnDel" aria-label="삭제"></button></div>
        </div>
        </div>
    </div>
    <div class="uErrorText" style="display: block;"></div>
    </div>

    <div class="uBlock">
    <div class="uInputArea">
        <div class="col">
        <div class="uInput"><label for="inputDetailAddr">상세주소</label>
            <div class="inputBox"><input type="text" id="inputDetailAddr" class="inputText" tabindex="4"
                value=""><button type="button" class="btnDel" aria-label="삭제"></button></div>
        </div>
        </div>
    </div>
    <div class="uErrorText" style="display: block;"></div>
    </div>
    <div class="uBlock">
    <div class="uInputArea">
        <div class="col">
        <div class="uInput"><label for="inputCellphone">휴대폰</label>
            <div class="inputBox"><input type="text" id="inputCellphone" class="inputText"
                placeholder="010 1234 5678" tabindex="7" value=""><button type="button" class="btnDel"
                aria-label="삭제"></button></div>
        </div>
        </div>
    </div>

    </div>
    <div class="uBlock checkBlock">
        <div class="uBlock">
        <p class="blockText">※ 가입 후 이메일 인증해야 로그인 가능함 ㅎ_ㅎ
        </p>
        </div>
        <a href="/메인페이지.html">
        <div class="ubtnArea">
            <div class="col"><button type="button" class="uBtn point" disabled="">가입완료</button></div>
        </div>
        </a>
    </div>
    </div>
    
</template>

<script>
    export default {
        name: "BasicSignupComponent",

    }
</script>

<style scoped>

</style>