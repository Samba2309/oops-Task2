//1Q.......

class Book{
    title;
    author;
    ISBN;
    constructor(title,author,ISBN){
        this.title=title;
        this.author=author;
        this.ISBN=ISBN;
    }

checkOut(){
    console.log(this.title,"has been taken");
}
returnBook(){
    console.log(this.title,"has been return");
}
updateTitle(newTitle){
    this.title=newTitle;
}

}
var b1=new Book("Harry","jk.rawlin","100" );
b1.checkOut();
b1.returnBook();
b1.updateTitle("Harry Porter");
 console.log(b1);

//2Q......

class product {
    name;
    price;
    category;

constructor(name,price,category){
    this.name=name;
    this.price=price;
    this.category=category;
}

applyDiscount(amount)
{

console.log(amount,this.price,"discount applied")
}
getpriceAfterDiscount()
{

console.log(this.price-2000,"get price")
}
}
var mobile=new product("vivo","20000","mobile");
mobile.applyDiscount(2000);
mobile.getpriceAfterDiscount(18000);
console.log(mobile)

//3Q.....

class bankaccount {
    accountHolderName;
    accountNumber;
    balance;
     
    constructor(accountHolderName,accountNumber,balance){
        this.accountHolderName=accountHolderName;
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(amount){
       console.log(amount,this.balance,"money deposit")
    }
    withdraw(amount){
       console.log(amount,this.balance,"money withdraw")
    }
    getBalance(){
        console.log(this.balance,"get balance 2000")
    }
}
var sbh=new bankaccount("samba","332172","7000");
sbh.deposit(5000);
sbh.withdraw(10000);
sbh.getBalance(2000);
console.log(sbh)

//4Q.....

class vehicle{
    model;
    licensePlate;
    mileage;

     constructor(model,licensePlate,mileage){
        this.model=model;
        this.licensePlate=licensePlate;
        this.mileage=mileage;
     }
     drive(miles){
      console.log(miles,this.mileage,"increase the mileage")
     }
     getMileage(){
       console.log(this.mileage,"current mileage")
     }
}
var pulsar=new vehicle("2021","AP16323N","60");
pulsar.drive(80);
pulsar.getMileage(50);
console.log(pulsar)

//5Q......

class student{
    name;
    grade;
      
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    setGrade(newGrade){
     console.log(newGrade,this.grade,"update grade for students")
    }
    getGrade(){
    console.log(this.grade,"the students current grade")
    }
}
var j2=new student("samba","50");
j2.setGrade(70);
j2.getGrade();
console.log(j2)