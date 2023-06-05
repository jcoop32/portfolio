/*
nav-bar interactions:
.hover() -> when user hovers over a list item -> change highlight the list item
.on('click) -> when user clicks on an item -> scroll down to selected section 

project interactions:
.hover() -> when user hovers over a project container, highlight conatiner
.on('click') -> when user clicks on a project, open page in new tab

contact interactions:
.hover() -> when user hovers over button change background color to either black or white depending on default color
.on('click') -> when user clicks on a button, open page in new tab

*/

//project container
const $projectContainer = $('<div>').attr('id', 'project-container'); //project section container
//project 1 container
const $landscaperBrowserProject = $('<div>').attr('id', 'landscaper-container'); //main conatiner
const $project1Img = $('<img>').appendTo($landscaperBrowserProject); //img container
const $project1Description = $('<p>').appendTo($landscaperBrowserProject); //text container
//project 2 container
const $landscaperTerminalProject = $('<div>').attr(
  'id',
  'landscaperTerminal-container'
);
const $project2Img = $('<img>').appendTo($landscaperTerminalProject);
const $project2Description = $('<p>').appendTo($landscaperTerminalProject);

//project 2 container
const $toDoListProject = $('<div>').attr('id', 'todo-list-container');
const $project3Img = $('<img>').appendTo($toDoListProject);
const $project3Description = $('<p>').appendTo($toDoListProject);

//displays project section
function displayProjects() {
  $('body').append($projectContainer);
  $projectContainer.append(
    $landscaperBrowserProject,
    $landscaperTerminalProject,
    $toDoListProject
  );
}

$(() => {
  displayProjects();
});
