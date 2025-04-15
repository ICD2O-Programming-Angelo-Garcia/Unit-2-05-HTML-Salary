// Copyright (c) 2025 Angelo Garcia All rights reserved
//
// Created by: Angelo Garcia
// Created on: march 2025
// This file contains the JS functions for index.html

function enterClicked() { 
    // this function gets the number of hours worked and the hourly rate
    // and displays the gross pay to the user

    // get the number of hours worked from the text field
    let hoursWorked = parseFloat(document.getElementById("num-hours").value);

    // get the hourly rate from the text field and cast it to a floating-point number
    let hourlyRate = parseFloat(document.getElementById("hourly-rate").value);

    // check if the inputs are valid numbers
    if (isNaN(hoursWorked) || isNaN(hourlyRate)) {
        document.getElementById('invalid').innerHTML = "Please enter valid numbers for hours worked and hourly rate.";
    } else {
        // calculate the gross pay
        let grossPay = hoursWorked * hourlyRate;

        // display the gross pay back to the user
        document.getElementById('gross-pay').innerHTML = "Your gross pay is: $" + grossPay.toFixed(2);
    }
}