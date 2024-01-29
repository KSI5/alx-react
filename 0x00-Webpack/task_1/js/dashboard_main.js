import $ from 'jquery';
import _ from 'lodash';

const updateCounter = _.debounce(function () {
    let count = parseInt($('#count').text()) || 0;
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}, 1000);  // Adjust the debounce delay as needed

$(document).ready(function () {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="clickButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    $('#clickButton').on('click', updateCounter);
});
