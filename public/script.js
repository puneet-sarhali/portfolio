var detailBtn = document.querySelector('.detail-btn');
detailBtn.addEventListener('click',()=> {
    console.log('working')
    var detail = document.querySelector(".details");
    var displaySetting = detail.style.display;
    if (displaySetting == 'block') {
      detail.style.display = 'none';
    }
    else {
      detail.style.display = 'block';
    }
})