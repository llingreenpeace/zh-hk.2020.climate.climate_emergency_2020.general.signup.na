export { mainShare, whatsAppShare };

const mainShare = event => {
  event.preventDefault();
  //
  const fbShare = () => {
    var baseURL = "https://www.facebook.com/sharer/sharer.php";
    var u =
      "https://cloud.greenhk.greenpeace.org/petition-climate-emergency?utm_campaign=2020-climate&utm_source=facebook&utm_medium=social&utm_content=thankyou_page";
    var t = (window.innerHeight - 436) / 2;
    var l = (window.innerWidth - 626) / 2;
    window.open(
      baseURL + "?u=" + encodeURIComponent(u),
      "_blank",
      "width=626,height=436,top=" + t + ",left=" + l
    );
  };
  // WEB SHARE API
  if (navigator.share) {
    navigator
      .share({
        title: "",
        text:
          "Hi👋你覺唔覺香港愈嚟愈熱？又愈嚟愈多破壞力強嘅颱風？綠色和平最新評估顯示，假如全球溫室氣體排放趨勢不變，可能平均每10年就會受到類似山竹帶來嘅風暴潮侵襲😨應對氣候危機己經刻不容緩，急需你一同發聲，為拯救脆弱嘅氣候出一分力，立即聯署👉 ",
        url: "https://cloud.greenhk.greenpeace.org/petition-climate-emergency?utm_campaign=2020-climate&utm_source=navigator&utm_medium=web&utm_content=thankyou_page"
      })
      .then()
      .catch();
  } else {
    fbShare();
  }
};

const whatsAppShare = event => {
  event.preventDefault();
  var w =
    "https://api.whatsapp.com/send?text=Hi👋你覺唔覺香港愈嚟愈熱？又愈嚟愈多破壞力強嘅颱風？綠色和平最新評估顯示，假如全球溫室氣體排放趨勢不變，可能平均每10年就會受到類似山竹帶來嘅風暴潮侵襲😨應對氣候危機己經刻不容緩，急需你一同發聲，為拯救脆弱嘅氣候出一分力，立即聯署👉 https://act.gp/2N7uVta";
  window.open(w);
};
