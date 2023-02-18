var iframe = document.getElementById("iframe");
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");

var links = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11718.79889446387!2d112.64565524046222!3d42.75240487289134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5dfffe274c4a7bbd%3A0x54a9787a0b61db22!2sSaihantalazhen%2C%20Sonid%20Right%20Banner%2C%20Xilingol%20League%2C%20Inner%20Mongolia%2C%20China%2C%20011299!5e0!3m2!1sen!2sil!4v1676670964685!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48163.34318544801!2d113.07313059977486!3d41.020684358340304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35fdbbe176c45a51%3A0xc5904750444bfad8!2sJining%2C%20Ulanqab%2C%20Inner%20Mongolia%2C%20China!5e0!3m2!1sen!2sil!4v1676671040592!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193247.4200607167!2d111.50778955596655!3d40.81717902870766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3606462a4a60d3e1%3A0x7f72c427fe44f504!2sHohhot%2C%20Inner%20Mongolia%2C%20China!5e0!3m2!1sen!2sil!4v1676671087826!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193694.6471991867!2d109.7163314400109!3d40.663416748143725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36045822173019db%3A0x9a11183c3fd75d7c!2sBaotou%2C%20Inner%20Mongolia%2C%20China!5e0!3m2!1sen!2sil!4v1676671117954!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391565.2558349068!2d116.11727665831329!3d39.93907312902396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f05296e7142cb9%3A0xb9625620af0fa98a!2sBeijing%2C%20China!5e0!3m2!1sen!2sil!4v1676671170779!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d436717.9661687344!2d121.19656714998398!3d31.22463250662932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27040b1f53c33%3A0x295129423c364a1!2sShanghai%2C%20China!5e0!3m2!1sen!2sil!4v1676671195001!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218118.5063956351!2d120.50421818204673!3d31.328565376677833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b3a0d19bd25e07%3A0x21e57f85bd766004!2sSuzhou%2C%20Jiangsu%2C%20China!5e0!3m2!1sen!2sil!4v1676671226016!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199960.44617497115!2d106.10526251721734!3d38.455742068567666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36402d5f37324ce5%3A0x8d19520f477bd68c!2sYinchuan%2C%20Ningxia%2C%20China!5e0!3m2!1sen!2sil!4v1676671260481!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232565.37345948984!2d54.41853574542114!3d24.387078861053666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sil!4v1676671338687!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3012006523!2d54.947300405711005!3d25.076381467403767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sil!4v1676671362409!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.55067469337!2d-7.657032427405688!3d33.57241080623402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sil!4v1676671402159!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105884.88504825068!2d-6.927302719182075!3d33.969341381851095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b871f50c5c1%3A0x7ac946ed7408076b!2sRabat%2C%20Morocco!5e0!3m2!1sen!2sil!4v1676671425695!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103599.6081809855!2d-5.904509680752851!3d35.76339324482991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTangier%2C%20Morocco!5e0!3m2!1sen!2sil!4v1676671480224!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52997.33134471319!2d-5.573039640541576!3d33.88107130439285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044d23bfc49d1%3A0xfbbf80a99e4cde18!2sMeknes%2C%20Morocco!5e0!3m2!1sen!2sil!4v1676671504903!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52908.37315767308!2d-5.036759839812095!3d34.02402902473919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b484d445777%3A0x10e6aaaeedd802ef!2sFes%2C%20Morocco!5e0!3m2!1sen!2sil!4v1676671523799!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26091.37973365419!2d-5.288490038681967!3d35.1710215710529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b265e6402d907%3A0x91548980ce97ea0c!2sChefchaouen%2C%20Morocco!5e0!3m2!1sen!2sil!4v1676671547631!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108702.95033103494!2d-8.077893066078142!3d31.634748491280344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakesh%2C%20Morocco!5e0!3m2!1sen!2sil!4v1676671590166!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27336.195472583673!2d-4.031847893709102!3d31.081247321605648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd973c279834dfe5%3A0x5639fab2b5de4a44!2sMerzouga%2C%20Morocco!5e0!3m2!1sen!2sil!4v1676671631615!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27211.838586187845!2d-9.7800517432125!3d31.510978945165217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9a4e9f588ccf%3A0x57421a176d5d7d30!2sEssaouira%2C%20Morocco!5e0!3m2!1sen!2sil!4v1676671652774!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186242.35436460486!2d131.81337490670103!3d43.16675197372834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39cba5249d485%3A0x186704d4dd967e35!2sVladivostok%2C%20Primorsky%20Krai%2C%20Russia!5e0!3m2!1sen!2sil!4v1676671690846!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101273.7553612755!2d111.06096065867052!3d37.51252049149585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x367482e8a15a99b3%3A0x7f9e4a83a534deb0!2sL%C3%BCliang%2C%20Shanxi%2C%20China!5e0!3m2!1sen!2sil!4v1676671736302!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422088.383847204!2d108.68702429490118!3d34.25962918346698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x366379e922ac17b9%3A0x85d466fda794582e!2sXi&#39;An%2C%20Shaanxi%2C%20China!5e0!3m2!1sen!2sil!4v1676672268178!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219655.68099819953!2d103.9354620292477!3d30.658748783883006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36efc52300447721%3A0xb98652ce2e240e02!2sChengdu%2C%20Sichuan%2C%20China!5e0!3m2!1sen!2sil!4v1676671795073!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54084.904955176244!2d34.76222655058773!3d32.087999403070015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1676671830301!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53711.02535515177!2d35.254798003626945!3d32.71424635056574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c4e7cf16c0fff%3A0xd2385b30c1275dd6!2sNazareth!5e0!3m2!1sen!2sil!4v1675888170403!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53659.51584271901!2d34.981756554046534!3d32.79968967469321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba4c750de845%3A0xc35d23982a81529a!2sHaifa!5e0!3m2!1sen!2sil!4v1675888086203!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.53178029817!2d35.10531903705488!3d31.79644533255237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem!5e0!3m2!1sen!2sil!4v1675888134331!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208917.30773637543!2d135.5787855016082!3d35.098396551536446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3cc3f1%3A0xc0961d366bbb1d3d!2sKyoto%2C%20Japan!5e0!3m2!1sen!2sil!4v1676671900241!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210039.31663194904!2d135.7519863123566!3d34.658129265541646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600137c578a70cc1%3A0x4afed9b0b9492622!2sNara%2C%20Japan!5e0!3m2!1sen!2sil!4v1676671925933!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126114.53274997321!2d38.71855877600196!3d8.964854480739048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84f21691961f%3A0x822a438ed5adcc15!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sil!4v1676671959044!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201591.26731526118!2d112.40248835948003!3d37.86348298008091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x360aa8ebade29601%3A0xdabd32137ae53d2b!2sTaiyuan%2C%20Shanxi%2C%20China!5e0!3m2!1sen!2sil!4v1676671985332!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385395.55896625057!2d28.731997679106325!3d41.00550052625105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1sen!2sil!4v1676672032516!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.4658537004!2d2.0701493528132957!3d41.392775497819635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sil!4v1676672067796!5m2!1sen!2sil",
];

let currentIndex = 0;
iframe.src = links[currentIndex];

previousButton.addEventListener("click", function() {
  // decrement the link index
  currentIndex--;
  // disable the previous button if we're on the first link
  if (currentIndex === 0) {
    previousButton.disabled = true;
  }
  // enable the next button if we're not on the last link
  if (currentIndex < links.length - 1) {
    nextBtn.disabled = false;
  }
  // set the new link in the iframe
  iframe.src = links[currentIndex];
});

nextButton.addEventListener("click", function() {
  // increment the link index
  currentIndex++;
  // disable the next button if we're on the last link
  if (currentIndex === links.length - 1) {
    nextButton.disabled = true;
  }
  // enable the previous button if we're not on the first link
  if (currentIndex > 0) {
    previousButton.disabled = false;
  }
  // set the new link in the iframe
  iframe.src = links[currentIndex];
});