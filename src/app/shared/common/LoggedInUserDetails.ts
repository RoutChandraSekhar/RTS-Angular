
export class LoggedInUserDetails{
    userid: string;
    user_name: string;
    user_person_name:string;
    User_Designation: string;
    User_Dept: string;
    User_Operation_Dept: string;
    email: string;
    Mobile: string;
    constructor( 
        userid: string,
        user_name: string,
        user_person_name:string,
        User_Designation: string,
        User_Dept: string,
        User_Operation_Dept: string,
        email: string,
        Mobile: string
    ){
      this.userid=userid;
      this.user_name=user_name;
      this.user_person_name=user_person_name;
      this.User_Designation=User_Designation;
      this.User_Dept=User_Dept;
      this.User_Operation_Dept=User_Operation_Dept;
      this.email=email;
      this.Mobile=Mobile;
    }
}




  