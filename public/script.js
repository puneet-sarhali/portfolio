var detailBtn = document.querySelector('.detail-btn');

var detail = document.querySelector(".details");
var displaySetting = detail.style.display;
detail.style.display = 'none';

detailBtn.addEventListener('click',()=> {
    var detail = document.querySelector(".details");
    var displaySetting = detail.style.display;
    if (displaySetting == 'block') {
      detail.style.display = 'none';
    }
    else {
      detail.style.display = 'block';
    }
})