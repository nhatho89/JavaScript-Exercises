var Student = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.courses = [];

};

Student.prototype.name = function () {
  return this.firstName + " " + this.lastName;

};

Student.prototype.enroll = function (course) {
  this.courses.push(course);
  course.addStudent(this);
};

Student.prototype.courseLoad = function () {
  var cLoad = {};
  this.courses.forEach(function(course){
    if (cLoad[course.department]) {
      cLoad[course.department] += course.credits;
    }
    else {
      cLoad[course.department] = course.credits;
    }
  });
  return cLoad;
};

var Course = function(name, department, credits) {
  this.name = name;
  this.students = [];
  this.department = department;
  this.credits = credits;

};

Course.prototype.addStudent = function (student) {
    this.students.push(student);
};
