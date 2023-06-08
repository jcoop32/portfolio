/*
nav-bar interactions:
.hover() -> when user hovers over a list item -> change highlight the list item✅

about interactions:
modal for bio -> open and close modal✅

project interactions:
.on('click') -> when user clicks on view description, description appears ✅

contact interactions:
.hover() -> when user hovers over button change background color to either black or white depending on default color✅
*/

$(() => {
  //hiding description by default
  $('.project-p').hide();

  //on 'hover' for navbar items
  $('.nav-text')
    .on('mouseenter', function () {
      $(this).removeClass();
      $(this).addClass('hoverOver');
    })
    .on('mouseleave', function () {
      $(this).removeClass();
      $(this).addClass('nav-text');
    });

  //fucntion for clicking btn
  $('.project-btn').on('click', function () {
    $(this).siblings('.project-p').slideToggle('slow');
  });

  //highlight project titles
  $('.project-h3')
    .on('mouseenter', function () {
      $(this).removeClass();
      $(this).addClass('hoverH3');
    })
    .on('mouseleave', function () {
      $(this).removeClass();
      $(this).addClass('project-h3');
    });

  //function for user hover over view description btn
  $('.project-btn')
    .on('mouseenter', function () {
      $(this).removeClass();
      $(this).addClass('btn-hover');
    })
    .on('mouseleave', function () {
      $(this).removeClass();
      $(this).addClass('project-btn');
    });

  //function for hovering over contact icons
  $('.icon')
    .on('mouseenter', function () {
      $(this).removeClass();
      let name = $(this).attr('name');
      if (name === 'Github') {
        $(this).addClass('hoverOverIconGit');
      } else {
        $(this).addClass('hoverOverIconLinked');
      }
    })
    .on('mouseleave', function () {
      $(this).text('');
      $(this).removeClass();
    });

  //modal open and close functions
  function openModal() {
    $('#modal').css('display', 'block');
  }
  function closeModal() {
    $('#modal').css('display', 'none');
  }
  $('#open-modal').on('click', openModal);
  $('#close-modal').on('click', closeModal);
});
