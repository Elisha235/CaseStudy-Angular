export class Student {

    id!: number;
    name!: string;
    class!: string;
    section!: string;
    sub1!: string;
    sub2!: string;
    sub3!: string;
  
    constructor(_id: number, _studentsname: string, _class: string, _section: string, _sub1: string, _sub2:string, _sub3:string ) {
        this.id = _id;
        this.name = _studentsname;
        this.class = _class;
        this.section = _section;
        this.sub1 = _sub1;
        this.sub2 = _sub2;
        this.sub3 = _sub3;
    }
  }