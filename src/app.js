// 언어 번역 객체
const translations = {
  login: {
    ko: "로그인",
    en: "Sign in",
  },
  login2: {
    ko: "Google 계정으로 로그인합니다. 이 계정은 브라우저의 다른 앱에서 사용할 수 있습니다.",
    en: "with your Google Account. This account will be available to other Google apps in the browser.",
  },
  input: {
    ko: "이메일 또는 휴대전화",
    en: "Email or Phone",
  },
  losteamil: {
    ko: "이메일을 잊으셨나요?",
    en: "Forgot email?",
  },
  guest: {
    ko: "내 컴퓨터가 아닌가요? 게스트 모드를 사용하여 비공개로로그인하세요.",
    en: "Not your computer? Use Guest mode to sign in privately.",
  },
  guest2: {
    ko: "게스트 모드 사용 방법 자세히 알아보기",
    en: "Learn more about using Guest mode",
  },
  plus: {
    ko: "계정 만들기",
    en: "Create account",
  },
  help: {
    ko: "도움말",
    en: "help",
  },
  next: {
    ko: "다음",
    en: "Next",
  },
  privac: {
    ko: "개인정보처리방침",
    en: "privac",
  },
  terms: {
    ko: "약관",
    en: "terms",
  },
};

// 언어 선택 이벤트
document.getElementById("department").addEventListener("change", function () {
  const selectedLang = this.value; // 선택된 언어값 (ko 또는 en)

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");

    // input 또는 textarea일 경우 placeholder 변경
    if (el.tagName === "INPUT") {
      el.placeholder = translations[key][selectedLang];
    } else {
      el.textContent = translations[key][selectedLang];
    }
  });
});
