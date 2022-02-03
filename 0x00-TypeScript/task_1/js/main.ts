interface Teacher {
    readonly firstName : string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports : number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (
    firstName: string,
    lastName: string
): string {
    return `${firstName.charAt(0)}. ${lastName}`;
};

interface classInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface classConstructor {
    new (firstName: string, lastName: string): classInterface;
}

class StudentClass implements classInterface {
    firstName: string;
    lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'currently working';
    }

    displayName(): string {
        return this.firstName
    }
}