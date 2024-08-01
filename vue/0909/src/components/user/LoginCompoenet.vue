<template>
    <div id="container" class="container login">
    <header>
    </header>
    <div class="loginWrap">
      <div class="loginLogo">
        <a href="/구매자/메인페이지.html">
          <h1 class="logo">
            <span>0909</span>
          </h1>
        </a>
      </div>
      <form id="loginFrm" name="loginFrm" method="post" action="/login/submit" data-onsubmit="return false;"
        onsubmit="return false;" autocomplete="off" data-method="ajax">
        <input type="hidden" id="postProc" name="postProc" value="FULLSCREEN">
        <input type="hidden" id="LOGIN_TP" name="LOGIN_TP" value="6000">
        <input type="hidden" id="fromSVC" name="fromSVC" value="tour">
        <input type="hidden" id="bizId" name="bizId" value="60">


        <div class="loginInner">
          <div class="loginForm">
            <div class="buttonGroup">
              <button type="button" class="active" onclick="setActive(this, 'basic')">일반</button>
              <button type="button" onclick="setActive(this, 'seller')">업체</button>
            </div>
            <div class="inputBox">
              <div class="inputStyle inputId">
                <label>
                  <input value="" autofocus="" type="text" class="inputText id" name="userId" id="userId"
                    placeholder="아이디">
                  <span class="focusLine"></span>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                      <path stroke="#999" stroke-linecap="round"
                        d="M7.789 9.867A4.444 4.444 0 0 1 12 4a4.444 4.444 0 1 1 0 8.885c-.947 0-1.945-.167-2.667-.672">
                      </path>
                      <path fill="#999"
                        d="M9.489 12.685a.5.5 0 1 0-.311-.95l.31.95Zm10.378 5.822.492-.088-.492.088ZM5.5 20.5h13v-1h-13v1Zm-.885-1.912c.463-2.81 2.293-5.058 4.874-5.903l-.311-.95c-2.965.97-5.031 3.545-5.55 6.69l.987.163Zm9.671-5.903c2.597.85 4.584 3.113 5.089 5.911l.984-.177c-.57-3.156-2.811-5.718-5.762-6.684l-.31.95ZM5.5 19.5c-.58 0-.96-.456-.885-.912l-.987-.163C3.434 19.603 4.423 20.5 5.5 20.5v-1Zm13 1c1.075 0 2.073-.898 1.86-2.081l-.985.177c.08.448-.293.904-.875.904v1Z">
                      </path>
                    </svg>
                  </i>
                  <button type="button" class="inputBtn btnDel">
                    <span class="blind">삭제</span>
                  </button>
                </label>
              </div>
              <div class="inputStyle inputPw">
                <label>
                  <input type="password" class="inputText pw" name="userPwd" id="userPwd" placeholder="비밀번호">
                  <span class="focusLine"></span>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                      <path stroke="#999" stroke-linecap="round"
                        d="M19.5 15.6V11A1.5 1.5 0 0 0 18 9.5H6A1.5 1.5 0 0 0 4.5 11v8A1.5 1.5 0 0 0 6 20.5h12a1.5 1.5 0 0 0 1.5-1.5v-.75">
                      </path>
                      <circle cx="12" cy="14" r="1" fill="#999"></circle>
                      <path fill="#999" d="M11.5 14h1l.5 3h-2l.5-3Z" class="pathFill"></path>
                      <path stroke="#999" d="M16.5 9.5V8a4.5 4.5 0 0 0-9 0v1.5"></path>
                    </svg>
                  </i>
                  <button type="button" class="inputBtn btnShowToggle">
                    <span class="blind">비밀번호 노출상태 변경버튼</span>
                  </button>
                </label>
              </div>
            </div>
            <div class="errorMessage">
              <div class="message">
              </div>
            </div>

          </div>

          <div class="loginButtonBox">
            <button type="button" class="loginBtn" id="btn_login">
              <span>로그인</span>
            </button>
          </div>
          <div class="findList">
            <ul>
              <!-- <li>
                <a id="findId" class="findId" href="#">아이디 찾기</a>
              </li>
              <li>
                <a id="findPwd" href="#">비밀번호 찾기</a>
              </li> -->
              <li>
                <a id="join" href="/공통/회원가입버튼.html">회원가입</a>
              </li>
            </ul>
          </div>
          <div id="snsLogin" class="snsLogin">
            <ul>
              <li id="kakao_li">
                <a href="#" class="kakao" id="openid_kakao">
                  <span>카카오톡</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </form>
    </div>
    <div class="layerContainer" id="findIdLayer">
      <div class="layer">
        <p class="layerTitle"><b>아이디 또는 비밀번호가 틀려<br>로그인 할 수 없어요.</b></p>
        <p class="layerText">먼저 계정을 찾아주세요.</p>
        <div class="btn">
          <button type="button" class="btnClose">취소</button>
          <a href="#" class="btnFind findId">계정 찾기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "LoginComponent",
    data() {
        return { }
    },
}

</script>

<style scoped>
</style>