window.addEventListener('load', solution);

function solution() {

  // “Full Name”  “Email”  not empty.  

  let fullNameEl = document.getElementById('fname');
  let emailEl = document.getElementById('email');
  let phoneEl = document.getElementById('phone');
  let addressEl = document.getElementById('address');
  let postCodeEl = document.getElementById('code');

  let infoPreviewEl = document.getElementById('infoPreview');

  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');

  editBtn.addEventListener('click', editing);
  continueBtn.addEventListener('click', ending)


  let btnSubmit = document.getElementById('submitBTN');
  btnSubmit.addEventListener('click', preview);


  function preview(e) {

    if (fullNameEl.value && emailEl.value) {
     
      let liName = document.createElement('li');
      let liEmail = document.createElement('li');
      let liPhone = document.createElement('li');
      let liAddress = document.createElement('li');
      let liPostCode = document.createElement('li');


      liName.textContent = `Full Name: ${fullNameEl.value}`;
      liEmail.textContent = `Email: ${emailEl.value}`;
      liPhone.textContent = `Phone Number: ${phoneEl.value}`;
      liAddress.textContent = `Address: ${addressEl.value}`;
      liPostCode.textContent = `Postal Code: ${postCodeEl.value}`;

      infoPreviewEl.appendChild(liName);
      infoPreviewEl.appendChild(liEmail);
      infoPreviewEl.appendChild(liPhone);
      infoPreviewEl.appendChild(liAddress);
      infoPreviewEl.appendChild(liPostCode);

      emptingElements();
      editBtn.disabled = false;
      continueBtn.disabled = false;

      btnSubmit.disabled = true;
    }




  }

  function editing(e) {

    let liName = document.querySelectorAll('ul li')[0];
    let liEmail = document.querySelectorAll('ul li')[1];
    let liPhone = document.querySelectorAll('ul li')[2];
    let liAddress = document.querySelectorAll('ul li')[3];
    let liPostCode = document.querySelectorAll('ul li')[4];


    fullNameEl.value = liName.textContent.split(':')[1].trim();
    emailEl.value = liEmail.textContent.split(':')[1].trim();
    phoneEl.value = liPhone.textContent.split(':')[1].trim();
    addressEl.value = liAddress.textContent.split(':')[1].trim();
    postCodeEl.value = liPostCode.textContent.split(':')[1].trim();


    infoPreviewEl.innerHTML = '';

    editBtn.disabled = true;
    continueBtn.disabled = true;

    btnSubmit.disabled = false;

  }



  function ending(e) {

    let h3 = document.createElement('h3');
    h3.textContent = "Thank you for your reservation!";

    let divBlock = document.getElementById('block');
    divBlock.innerHTML = '';
    divBlock.appendChild(h3);

  }


  function emptingElements() {

    fullNameEl.value = '';
    emailEl.value = '';
    phoneEl.value = '';
    addressEl.value = '';
    postCodeEl.value = '';

  }


}
