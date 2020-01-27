function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
  
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

AddressBook.prototype.updateContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i].phoneNumber = "310-353- 2322";
      }
    }
  };
  return false;
}

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

var AddressBook = new AddressBook();
var contact = new Contact("Ada", "Lovelace", "503-555-0100");
var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
var contact3 = new Contact("Johnny", "Appleseed", "503-333-3332")
AddressBook.addContact(contact);
AddressBook.addContact(contact2);
AddressBook.addContact(contact3);

var look = AddressBook.findContact(2);
AddressBook.deleteContact(3);
var check = AddressBook.updateContact(1);

$(document).ready(function () {
  $("#contact1").click(function () {
    $(".location1Details").fadeToggle(": " + contact.lastName + contact.phoneNumber);
  })
  $("#contact2").click(function () {
    $(".location2Details").fadeToggle(": " + contact.lastName + contact.phoneNumber);
  })
  $("#contact3").click(function () {
    $(".location3Details").fadeToggle(": " + contact.lastName + contact.phoneNumber);
  })
  
  $(".location1Details").text(": " + contact.lastName + contact.phoneNumber);
  $(".location2Details").text(": " + contact.lastName + contact.phoneNumber);
  $(".location3Details").text(": " + contact.lastName + contact.phoneNumber);
  $("#contact1").text(contact.firstName)
  $("#contact2").text(contact2.firstName)
  $("#contact3").text(contact3.firstName)
});
