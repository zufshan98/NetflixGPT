export const LOGO = 'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg";

export const USER_AVATAR = "https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABQuNDH5FZ72EMJV-0VwFVP3_JnEG0VNu2A0XWrrfcCxe1jhxpXij5skoNeAOGG3izZMo_qVMAPc7l-Or17JKPNQfn_Wv9fw.png?r=7bc";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "hi", name: "Hindi"},
  {identifier: "ko", name: "Korean"},
  {identifier: "ja", name: "Japanese"},
];

//export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;