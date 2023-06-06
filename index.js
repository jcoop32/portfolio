/*
nav-bar interactions:
.hover() -> when user hovers over a list item -> change highlight the list item✅

project interactions:
.hover() -> when user hovers over a project container, highlight conatiner
.on('click') -> when user clicks on view description, description appears ✅

contact interactions:
.hover() -> when user hovers over button change background color to either black or white depending on default color


check in on thurs
*/

//project container

$(() => {
  //project descriptions
  const $project1Description = $('#project1-description');
  const $project2Description = $('#project2-description');
  const $project3Description = $('#project3-description');

  //hiding description by default
  $project1Description.hide();
  $project2Description.hide();
  $project3Description.hide();

  //project view description buttons
  const $btn1 = $('#btn1');
  const $btn2 = $('#btn2');
  const $btn3 = $('#btn3');

  //on 'hover' for navbar items
  $('a').on('mouseenter', function () {
    $(this).removeClass();
    $(this).addClass('hoverOver');
  });
  $('a').on('mouseleave', function () {
    $(this).removeClass();
  });

  //fucntion for clicking btn
  $btn1.on('click', () => {
    $project1Description.toggle('slow');
  });
  $btn2.on('click', () => {
    $project2Description.toggle('slow');
  });
  $btn3.on('click', () => {
    $project3Description.toggle('slow');
  });

  //function for hovering over contact icons
  $('.icon').on('mouseenter', function () {
    $(this).removeClass();
    $(this).addClass('hoverOverIcon');
  });
  $('.icon').on('mouseleave', function () {
    $(this).removeClass();
  });
});
