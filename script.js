const buttonNextAddress = document.getElementById("next_address");
const buttonPrevInformation = document.getElementById("prev_infomation");
const buttonPrevAddress = document.getElementById("prev_address");
const buttonNextCheck = document.getElementById("next_check");
const addressInformation = document.getElementById("address_information");
const checkInformation = document.getElementById("check_information");
const customerInformation = document.getElementById("customer_information");

const company = document.getElementById("company");
const email = document.getElementById("email");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const birthDate = document.getElementById("00N5g00000CwiIy");
const urlSite = document.getElementById("url");

const country = document.getElementById("country");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const city = document.getElementById("city");
const street = document.getElementById("street");
const check = document.getElementById("check");
const shipping = document.getElementById("shipping");

const information = document.getElementById("subject_glass");
const submit = document.getElementById("submit");

buttonNextAddress.addEventListener("click", () => {
  if (
    !(
      company.reportValidity() &&
      urlSite.reportValidity() &&
      firstName.reportValidity() &&
      lastName.reportValidity() &&
      birthDate.reportValidity() &&
      email.reportValidity()
    )
  )
    return;

  addressInformation.classList.remove("black_fon");
  customerInformation.classList.add("black_fon");
});
buttonPrevAddress.addEventListener("click", () => {
  checkInformation.classList.add("black_fon");
  addressInformation.classList.remove("black_fon");
});

buttonPrevInformation.addEventListener("click", () => {
  addressInformation.classList.add("black_fon");
  customerInformation.classList.remove("black_fon");
});

check.addEventListener("click", (event) => {
  if (check.checked === false) {
    document.getElementById("shippingAddress").remove();
  } else {
    shipping.innerHTML = `<div id="shippingAddress"><label for="00N5g00000Cwtuw"> Shipping Country *</label><input class="field_form" id="00N5g00000Cwtuw" maxlength="255" name="00N5g00000Cwtuw" size="20" type="text" required/><br>
                      
  <label for="00N5g00000Cwtv1">Shipping State / Province *</label><input class="field_form" id="00N5g00000Cwtv1" maxlength="255" name="00N5g00000Cwtv1" size="20" type="text" required/><br>

    <label for="00N5g00000CwtvB">Shipping Zip / Postal Code *</label><input class="field_form" id="00N5g00000CwtvB" maxlength="255" name="00N5g00000CwtvB" size="20" type="text" required/><br>

    <label for="00N5g00000CwtvL">Shipping City*</label><input class="field_form" id="00N5g00000CwtvL" maxlength="255" name="00N5g00000CwtvL" size="20" type="text" required/><br>
     
    <label for="00N5g00000CwtvG">Shipping  Street *</label><input class="field_form" id="00N5g00000CwtvG" maxlength="255" name="00N5g00000CwtvG" size="20" type="text" required/><br>
</div> `;
  }
});

buttonNextCheck.addEventListener("click", () => {
  if (
    !(
      country.reportValidity() &&
      state.reportValidity() &&
      zip.reportValidity() &&
      city.reportValidity() &&
      street.reportValidity()
    )
  )return;

  let allInformation = `
  <h3>Company name *   :              ${company.value} </h3></br>
  <h3>Company site     :              ${urlSite.value} </h3></br>
  <h3>First Name *     :              ${firstName.value} </h3></br>
  <h3> Last Name *      :              ${lastName.value} </h3></br>
  <h3>Birthdate *      :              ${birthDate.value} </h3></br>
  <h3>Email *          :              ${email.value} </h3></br>
  <h3>Billing Country *:              ${country.value} </h3></br>
  <h3> Billing State / Province *:     ${state.value} </h3></br>
  <h3>Billing Zip / Postal Code *:    ${zip.value} </h3></br>
  <h3> Billing City *:                 ${city.value} </h3></br>
  <h3>Billing Street *:               ${street.value} </h3></br>

  `;
  if (check.checked === true) {
    const shippingСountry = document.getElementById("00N5g00000Cwtuw");
    const shippingState = document.getElementById("00N5g00000Cwtv1");
    const shippingZip = document.getElementById("00N5g00000CwtvB");
    const shippingCity = document.getElementById("00N5g00000CwtvL");
    const shippingStreet = document.getElementById("00N5g00000CwtvG");

    if (
      !(
        shippingСountry.reportValidity() &&
        shippingState.reportValidity() &&
        shippingZip.reportValidity() &&
        shippingCity.reportValidity() &&
        shippingStreet.reportValidity()
      )
    )return;

    allInformation += `
  <h3>Shipping Country *:              ${shippingСountry.value} </h3></br>
  <h3> Shipping State / Province *:     ${shippingState.value} </h3></br>
  <h3>Shipping Zip / Postal Code *:    ${shippingZip.value} </h3></br>
  <h3> Shipping City *:                 ${shippingCity.value} </h3></br>
  <h3>Shipping Street *:               ${shippingStreet.value} </h3></br>
  `;
  }

  information.innerHTML = allInformation;

  addressInformation.classList.add("black_fon");
  checkInformation.classList.remove("black_fon");
});

submit.addEventListener("click", () => {
  alert("Go");
});
