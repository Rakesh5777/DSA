// Problem Statement: Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book. There are a ‘m’ number of students, and the task is to allocate all the books to the students. Allocate books in such a way that
// 1. Each student gets at least one book.
// 2. Each book should be allocated to only one student.
// 3. Book allocation should be in a contiguous manner.
// You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum.

// intution is we fill calculate no of students requried for mid
// if derivedStudents is more than given students, pages are very less so more students are allocated, so increase pages
// if derivedStudents is less than or equal to given students, pages are more so less students are allocation, so decrease pages

function findPages(arr, m) {
    let n = arr.length;
    if (n < m) return -1; // if no of books is less than no of students we dont need to check

    let low = Math.max(...arr); // need to take max of give pages, so that we can give book to every one
    let high = arr.reduce((acc, curr) => acc + curr, 0); // maximum sun will be sum of all pages

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let derivedStudent = studentsCount(arr, mid);

        if (derivedStudent <= m) { // pages are more so less students are allocation, so decrease pages
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
}

function studentsCount(arr, pages) {
    let studentCount = 1; // we have taken 1 student 
    let currentPages = arr[0]; // given 1st book to 1st student

    // checking for all further books
    for (let i = 1; i <= arr.length - 1; i++) {
        if (arr[i] + currentPages <= pages) { // checking for next book, pages are less so we can take next book
            currentPages += arr[i];
        } else { // else we will move to next student, and give him current book
            studentCount++; // 
            currentPages = arr[i];
        }
    }

    return studentCount;
}


console.log(findPages([12, 34, 67, 90], 2));
