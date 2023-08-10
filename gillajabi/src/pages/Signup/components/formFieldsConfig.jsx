const fieldConfigs = {
  name: {
    label: '이름 : ',
    placeholder: '이름을 적어주세요',
    regex: /^[가-힣]{2,4}$/,
    alert: '* 한글 2~4자',
  },
  id: {
    label: '아이디 : ',
    placeholder: '아이디를 적어주세요',
    regex: /^[a-zA-Z0-9]{6,20}$/,
    alert: '* 영문자 또는 숫자 6~20자',
  },
  birth: {
    label: '생년월일 : ',
    placeholder: '생년월일을 적어주세요',
    regex: /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/,
    alert: '* - 없이 생년월일 예시) 19991212',
  },
  password: {
    label: '비밀번호 : ',
    placeholder: '비밀번호를 적어주세요',
    regex: /^[a-zA-Z0-9!@#$%^&*()_-]{6,20}$/,
    alert: '* 영문자, 숫자, 특수문자 포함 6~20자',
  },
  confirm: {
    placeholder: '비밀번호 확인',
    alert: '* 비밀번호가 일치하지 않습니다.',
  },
};

export default fieldConfigs;
