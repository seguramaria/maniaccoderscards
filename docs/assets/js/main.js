"use strict";function showCollapsible(e){const t=document.querySelectorAll(".js-collapsibleParent > h3"),n=document.querySelectorAll(".js-collapsibleParent > .arrow"),o=document.querySelectorAll(".js-collapsibleChild");e.target===t[0]||e.target===n[0]?(o[0].classList.toggle("hidden"),o[1].classList.add("hidden"),o[2].classList.add("hidden")):e.target===t[1]||e.target===n[1]?(o[0].classList.add("hidden"),o[1].classList.toggle("hidden"),o[2].classList.add("hidden")):e.target!==t[2]&&e.target!==n[2]||(o[0].classList.add("hidden"),o[1].classList.add("hidden"),o[2].classList.toggle("hidden"))}document.addEventListener("click",showCollapsible);const form=document.querySelector(".form"),person={name:document.querySelector(".js-personName"),job:document.querySelector(".js-personJob"),email:document.querySelector(".js-email"),phone:document.querySelector(".js-mobile"),linkedin:document.querySelector(".js-linkedin"),github:document.querySelector(".js-github")},inputName=document.querySelector("#name"),inputJob=document.querySelector("#job"),inputEmail=document.querySelector("#email"),inputPhone=document.querySelector("#phone"),inputLinkedin=document.querySelector("#linkedin"),inputGithub=document.querySelector("#github");function paintCard(e){console.log("WORKING"),e.target===inputName?person.name.innerHTML=inputName.value:e.target===inputJob?person.job.innerHTML=inputJob.value:e.target===inputEmail?(person.email.href=person.email.href+inputEmail.value,person.email.classList.remove("hidden")):e.target===inputPhone&&(person.phone.href=person.phone.href+inputPhone.value,person.phone.classList.remove("hidden"))}form.addEventListener("keyup",paintCard);