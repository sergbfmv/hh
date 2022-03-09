const optionBtnOrder = document.querySelector(".option__btn_order")
const optionBtnPeriod = document.querySelector(".option__btn_period")
const optionListOrder = document.querySelector(".option__list_order")
const optionListPeriod = document.querySelector(".option__list_period")

optionBtnOrder.addEventListener("click", () => {
  optionListOrder.classList.toggle("option__list_active")
})

optionBtnPeriod.addEventListener("click", () => {
  optionListPeriod.classList.toggle("option__list_active")
})