<template>
  <table id="display" className="display">
    <tbody>
      <tr>
        <th>Profile Image</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Departments</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Notes</th>
        <th>Actions</th>
      </tr>
      <tr v-for="employees in employee" :key="employee.id">
          <td><img :src=' `../assets/${employees.profilePic}` ' /> ></td>
          <td>{{employees.name}}</td>
          <td>{{employees.gender}}</td>
          <td>{{employees.department}}</td>
          <td>{{employees.salary}}</td>
          <td>{{employees.startDate}}</td>
          <td>{{employees.note}}</td>
            
           <td>            
            <img
             @click="remove(employees.employeeId)"
             src="../assets/delete.d.png"
             alt="delete"/>

             <img
            @click="update(employees.employeeId)"
            src="../assets/reddit.png"
            alt="edit"/>

           </td>
      </tr>

    </tbody>
  </table>
</template>

<script>

import EmployeeService from '../Service/EmployeeService';

export default {
  name: "DisplayHome",

  data(){
    return{
    employee:[],
    }
  },

  methods:{
     getEmployees() {
      EmployeeService.getAllEmployee().then((response) => {
        console.log(response.data.data);
        this.employee = response.data.data;
      });
  },
  update(id){
    this.$router.push({name:"EditForm",params:{id: id }});
  },
  remove(employeeId){
    var answer = window.confirm(
      "Data once delete cannot be restored ! Do  you wish to continue?");
    if (answer === true) {
      EmployeeService.deleteEmployee(employeeId).then((data) =>{
        alert("Employee delete successfully!!");
        window.location.reload();
        this.getEmployees();

      })
      .catch((error) =>{
        alert("Somthing Send Wrong !!");

      });    
    }else{
      alert("Employee not delete!!");
    }

  }
  },
 created() {
   
    this.getEmployees();
  },

  
}
</script> 
