<template>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Employee payroll form </title>
</head>
<body>
    <header class="header-content headre ">
        <div class="logo-content">
            <img src="../assets/Image1.png" alt="image" style="height: 70px">
            <div>
                <span class="emp-text">EMPLOYEE</span><br>
                <span class="emp-text emp-payroll">payroll </span>
            </div>
        </div>
    </header>
     <div class="form-content">
        <form class="form" action="#"  @submit=" submitForm">
            
        <div class="form-head"> Employee payroll form  </div>
        
        <div class="row-content">
           
            <label class="lable text" for="name">Name</label>
            <input  class="input" type="text" name="name" id="name" placeholder=" Enter your Name" v-model="formValues.name" required>
        </div>
       
    <div class="row-content">
        <label  class="lable text" for="profile">Profile Image</label>
        <div class="profile-radio-content">
            <label >
                <input type="radio" name="profile" id="profile1" value="../assets/Ellipse -01.png" v-model="formValues.profilePic" required>
                <img class="profile" id="image" src="../assets/Ellipse -01.png" alt="image" style="height: 50px" />
            </label>

            <label >
                <input type="radio" name="profile" id="profile2" value="../assets/Ellipse -02.png" v-model="formValues.profilePic" required/>
                <img class="profile" id="image" src="../assets/Ellipse -02.png" alt="image" style="height: 50px"/>
            </label>

            <label >
                <input type="radio" name="profile" id="profile3" value="../assets/Ellipse -03.png" v-model="formValues.profilePic" required>
                <img class="profile" id="image" src="../assets/Ellipse -03.png" alt="image" style="height: 50px">
            </label>

            <label >
                <input type="radio" name="profile" id="profile4" value="../assets/Ellipse -04.png"  v-model="formValues.profilePic" required/>
                <img class="profile" id="image" src="../assets/Ellipse -04.png" alt="image" style="height: 50px"/>
            </label>

        </div>
    </div>
 
    <div class=" row-content">
        <label  class="label text" for="gender">Gender</label>
        <div>
            <input type="radio" id="male" name="gender" value="male"  v-model="formValues.gender">
            <label class="text" for="male">Male</label>

            <input type="radio" name="gender" id="female" value="female"  v-model="formValues.gender">
            <label class="text" for="female">Female</label>

            <input type="radio" name="gender" id="other" value="other" >
            <label  class="text" for="other">Other</label>
        </div>
    </div>

    <div class="row-content">
        <label class="label text" for="department" >Department</label>
        <div>
            
            <input type="checkbox" value="hr" id="hr"  v-model="formValues.department">HR
            <input type="checkbox" value="sales" id="sales"  v-model="formValues.department">Sales
            <input type="checkbox" value="Finance" id="Finance"  v-model="formValues.department">Finance
            <input type="checkbox" value="engineer" id="engineer"  v-model="formValues.department">Engineer
            <input type="checkbox" value="other" id="other"  v-model="formValues.department">Other
              <!-- <p style="color:rgb(188, 122, 122);">***Department can be select Multipule </p> -->
           

        </div>
    </div>

    <div className="row-content">
          <label className="label text" htmlFor="salary">Salary</label>
          <input className="input" type="text" id="salary" placeholder="Enter your salary"  name="salary"  v-model="formValues.salary"  />
        </div>
   

    <div class="row-content">
        <label  class="label text" for="startDate">Start Date</label>
        <div>
            <select name="Day" id="day" placeholder="Day" v-model="formValues.day" required>
                <option value="day"> Day </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            

            <select name="Month" id="month" placeholder="Months" v-model="formValues.month">
                <option value="month">Month</option>
                <option value="jan">January</option>
                <option value="feb">Febuary</option>
                <option value="March">March</option>
                <option value="April">Aptile</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="Aug">August</option>
                <option value="Sept">September</option>
                <option value="Oct">October</option>
                <option value="Nov">November</option>
                <option value="Dec">December</option>
            </select>

            <select name="Year" id="year" placeholder="Years " v-model="formValues.year" required>
                <option value="2022"> Years </option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
        </select>
        </div>
    </div>
    <div class="row-content">
        <label class="label text" for="notes">Notes</label>
        <textarea name="Notes" id="notes"  class="input" placeholder="text here.." style="height: 100px;" cols="30" rows="10" v-model="formValues.note"></textarea>
    </div>
    <div class="buttonParent">
       <router-link to="/"> <button  class="resetButton button cancelButton">Cancel</button></router-link>

        <div class="Submit-reset">
            <button type="submit" class="button submitButton " id="submitButton"> Submit</button>
            <button type="reset" class=" resetButton button">Reset</button>
        </div>
    </div>
 </form>

    </div>
</body>
</template>

<script>

import EmployeeService from '../Service/EmployeeService';

export default {
  name: 'Form',
  
  data() {
    return{
     formValues: {
        id: "",
        name: "",
        profilePic: "",
        gender: "",
        department: [],
        salary: "",
        day: "",
        month: "",
        year: "",
        note: "",
        startDate: "",
      },
    }
  },
  methods :{
    submitForm(event){
        event.preventDefault();
        this.formValues.startDate=this.formValues.day + this.formValues.month + this.formValues.year;
        console.log(this.formValues)
        const data=this.formValues;

        EmployeeService.addEmployees(data).then ((response) => {
            console.log(response);
            console.log(response.data.data);
            this.employees=response.data.data;
            alert(" Employee Added Successfully!!",response)
        })
        .catch(error =>{
            console.log(error);
            alert("WARNING !! Error while adding the Employee!")
        })
    },
    //  setData(obj) {
    //   console.log(obj);
    //   let array = obj.startDate;
    //   console.log(array);
    //   this.formValues.id = obj.id;
    //   this.formValues.name = obj.name;
    //   this.formValues.departments = obj.departments;
    //   this.formValues.day = array[0] + array[1];
    //   this.formValues.month = array[2] + array[3] + array[4];
    //   this.formValues.year = array[5] + array[6] + array[7] + array[8];
    //   this.formValues.note = obj.note;
    //   this.formValues.gender = obj.gender;
    //   this.formValues.salary = obj.salary;
    //   this.formValues.profilePic = obj.profilePic;
    //   console.log(this.formValues);
    // },
  },
  }

</script>

<style>

body {
    margin: 0;
    height: 100%;
}

.header {
     padding: 15px 0px;
    background-color: #ffffff;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.logo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px solid green;
    width: 80%;
}

.logo-content-img {
    border: 0px solid #42515f;
}

.emp-text {
    font: normal normal bold 20px/25px Montserrat;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0px;
    color: #82A70C;
    padding-left: 10px;
    text-transform: capitalize;
}

.emp-payroll {
    color: #42515f;
}

*{
    box-sizing: border-box;
}

/*UC2*/
.form-content {
    min-height: calc(100% - 80px);
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.form {
    width: 65%;
    padding: 44px 60px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    opacity: 1;
}

.form-head {
    text-align: left;
    font: normal normal bold 28px/37px Roboto;
    letter-spacing: 0px;
    color: #42515F;
    text-transform: capitalize;
    opacity: 1;
    padding-bottom: 20px;
}

.row-content {
     text-align: left;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    border: 0px solid green;
}

.label {
    min-width: 140px;
}

label {
    padding: 12px 12px 12px 0px;
    display: inline-block;
}

.text {
    font-size: 16px;
    color: #43515f;
    opacity: 1;
    font-family: Roboto;
}

.input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}
error-output{
    margin-left: 10px;
    font-size: 12px;
    font-style: italic;
    color:red;
}


/*Uc3*/
.profile-radio-content{
    display: flex;
    flex-direction: row;
}


.profile-radio-content > label {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.profile{
    width: 40px;
    border-radius: 50%;
    margin-left: 12px;
}

/* UC 5  */
select {
    padding: 12px;
    border: 1px solid rgb(52, 190, 217);
    border-radius: 4px;
    margin-left: 60px;
    resize: vertical;
    font: normal normal normal 16px Roboto;
    letter-spacing: 0px;
    color: #090909;
    background-color: transparent;
}

/* UC 6  */
.buttonParent{
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    margin-top: 20px;
}

.button{
    font-size: 20px;
    font-family: Roboto;
    letter-spacing: 0px;
    color: #0d0d0e;
    opacity: 1;
    background: transparent;
    border: none;
    font-weight: 400;
    min-width: 140px;
    padding: 7px 7px;
    border: 1px solid#539bee;
    background-color: rgb(163, 208, 237);
    cursor: pointer;
    border-radius: 5px;
}

.submitButton {
    border: 1px solid rgb(52, 190, 217);
    margin-right: 30px;
}

.cancelButton {
    margin-left: 140px;
    text-decoration: none;
    text-align: center;
    border: 1px solid rgb(52, 190, 217);
}



/* UC 6 - Extn : Adding Media Queries*/

@media only screen and (max-width: 960px) {
    .cancelButton {
        margin-left: 0px;
    }
    .form {
        width: 85%;
        padding: 44px 20px;
}
}

@media only screen and (max-width: 600px) {
    .form{
        margin-top: 10px;
 }

.row {
        flex-direction: column;
 }
.uploadButton {
        justify-content: flex-start;
}

.profile-radio-content{
        flex-flow: wrap;
}

.submit-reset{
        width: 100%;
        display: flex;
        flex-grow: 1;
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-bottom: 20px;
}
  .submitButton {
      margin: 0;

  }
  .buttonParent {
      flex-direction: column-reverse;
      align-items: flex-start;
  }
}
</style>