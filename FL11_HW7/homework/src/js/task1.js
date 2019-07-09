let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let userPassword = 'UserPass';
let adminPassword = 'AdminPass';
let validEmail;
let password;
let changePassword;
let currentPassword;
let email = prompt('Please, enter email', '');

if (email) {
    let emailLen = 6;
    if (email.length > emailLen) {
        if (email === userEmail || email === adminEmail) {
            validEmail = true;
        } else {
            alert('I don’t know you');
        }
    } else {
        alert('I don`t know any emails having name length less than 6 symbols');
    }
} else {
    alert('Canseled');
}

if (validEmail) {
    password = prompt('Please, enter password', '');
    if (password) {
        if (password === userPassword && email === userEmail) {
            currentPassword = userPassword;
        } else if (password === adminPassword && email === adminEmail) {
            currentPassword = adminPassword;
        } else {
            alert('Wrong password');
        }
    }
} else {
    alert('Canseled');
}

if (currentPassword) {
    changePassword = confirm('Do you want to change your password?');
    if (changePassword) {
        password = prompt('Please, enter old password.')
        if (password === currentPassword) {
            changePassword = prompt('Please, enter new password.');
            let passwordLen = 5;
            if (changePassword.length > passwordLen) {
                password = prompt('Please, enter password', '');
                if (password === changePassword) {
                    alert('You have successfully changed your password.');
                } else {
                    alert('You wrote the wrong password.');
                }
            } else {
                alert('It’s too short password. Sorry.');
            }
        } else {
            alert('You have failed the change.')
        }
    } else {
        alert('You have failed the change.')
    }
}


